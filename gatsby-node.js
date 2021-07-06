/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// Implements "onCreatePage", which is called after every page is created.

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions; // destructured from redux actions

  // page.matchPath is a special key that is used for matching pages
  // only on the client

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";

    // update the page
    createPage(page);
  }
}
