const path = require(`path`)

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
