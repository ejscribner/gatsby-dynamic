/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// Implements "onCreatePage", which is called after every page is created.
// Commented out when updated to use fs-route-api

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions; // destructured from redux actions
//
//   // page.matchPath is a special key that is used for matching pages
//   // only on the client
//
//   if (page.path.match(/^\/app/)) {
//     page.matchPath = "/app/*";
//
//     // update the page
//     createPage(page);
//   }
// }

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
