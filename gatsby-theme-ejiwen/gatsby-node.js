const fs = require("fs")

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "data"

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

// Create pages from contentful 
// It is gonna be a great work if i do that correctly ....
exports.createPages = async ({ actions, graphql, reporter }) => {
    const basePath = "/"
    actions.createPage({
      path: basePath,
      component: require.resolve("./src/templates/posts.js"),
    })
  
    const result = await graphql(`
    query {
        allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
          nodes {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    `)
  
    if (result.errors) {
      reporter.panic("error loading events", result.errors)
      return
    }
  
    // highlight-start
    const posts = result.data.allContentfulBlogPost.nodes
  
    posts.forEach(post => {
      const slug = post.slug
  
      actions.createPage({
        path: slug,
        component: require.resolve("./src/templates/post.js"),
        context: {
          slugID: post.slug,
        },
      })
    })
    // highlight-end
  }