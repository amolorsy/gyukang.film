const path = require(`path`)
const shell = require('shelljs')
const fastExif = require('fast-exif')

// Workaround for media download concurrency in old versions of gatsby-source-filesystem
shell.sed(
  '-i',
  /concurrent: \d+/,
  `concurrent: ${process.env.GATSBY_CONCURRENT_DOWNLOAD}`,
  path.resolve(__dirname, 'node_modules', 'gatsby-source-filesystem/create-remote-file-node.js')
)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'ImageSharp') {
    const absolutePath = node.parent.split(' ')[0];
    
    fastExif.read(absolutePath)
      .then((exifData) => {
        const cameraModel = exifData.image.Model
        const lensModel = exifData.exif.LensModel.replace(/(EF|EF-M)(\d+)/, '$1 $2')
        const focalLength = exifData.exif.FocalLength
        const fNumber = exifData.exif.FNumber
        const exposureTime = exifData.exif.ExposureTime < 1.0 ? `1/${parseInt(0.5 + 1 / exifData.exif.ExposureTime)}` : `${parseInt(exifData.exif.ExposureTime)}`
        const iso = exifData.exif.ISO

        createNodeField({
          node,
          name: 'exif',
          value: {cameraModel, lensModel, focalLength, fNumber, exposureTime, iso}
        });
      })
      .catch((err) => console.error(err));
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query {
      allStrapiAlbum {
        edges {
          node {
            strapiId
            photos {
              id
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allStrapiAlbum.edges.forEach(edge => {
      createPage({
        path: `/albums/${edge.node.strapiId}`,
        component: path.resolve(`src/templates/album.js`),
        context: {
          id: edge.node.strapiId,
        },
      })

      edge.node.photos.forEach(photo => {
        createPage({
          path: `/photos/${photo.id}`,
          component: path.resolve(`src/templates/photo.js`),
          context: {
            id: photo.id,
          },
        })
      })
    })
  })
}
