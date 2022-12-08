const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResults = await graphql(`
    {
      allPrismicTaxClaims {
        nodes {
          uid
          id
          prismicId
          data {
            box_heading
            box_content
            claim_list {
              item
            }
          }
        }
      }
      allPrismicArticle {
        nodes {
          data {
            claim_type {
              id
            }
          }
          id
          uid
        }
      }
      allPrismicBlog {
        nodes {
          id
          uid
        }
      }
      allPrismicBlogCategory {
        nodes {
          id
          uid
        }
      }
    }
  `)
  const taxClaims = queryResults.data.allPrismicTaxClaims?.nodes
  taxClaims.forEach(node => {
    createPage({
      path: `/${node.uid}`,
      component: path.resolve(`src/templates/tax-claims.js`),
      context: {
        id: node.id,
      },
    })
  })

  queryResults.data.allPrismicArticle?.nodes.forEach(node => {
    const articleType = taxClaims.filter(item => item.prismicId === node.data.claim_type.id)[0]
    createPage({
      // path: `/${articleType.uid}/${node.uid}`,
      path: `/article/${node.uid}`,
      component: path.resolve(`src/templates/article.js`),
      context: {
        id: node.id,
        articleType: articleType
      },
    })
  })

  queryResults.data.allPrismicBlog?.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.uid}`,
      component: path.resolve(`src/templates/blog-detail.js`),
      context: {
        id: node.id,
      },
    })
  })

  queryResults.data.allPrismicBlogCategory?.nodes.forEach(node => {
    createPage({
      path: `/blog/category/${node.uid}`,
      component: path.resolve(`src/templates/category.js`),
      context: {
        id: node.id,
      },
    })
  })
}
