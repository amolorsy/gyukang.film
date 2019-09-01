const path = require(`path`)
const shell = require('shelljs')

// Workaround for media download concurrency in old versions of gatsby-source-filesystem
shell.sed(
  '-i',
  /concurrent: \d+/,
  `concurrent: ${process.env.GATSBY_CONCURRENT_DOWNLOAD}`,
  path.resolve(__dirname, 'node_modules', 'gatsby-source-filesystem/create-remote-file-node.js')
)

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
