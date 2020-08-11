module.exports = {
    plugins: [
      {
        resolve: "gatsby-theme-ejiwen",
        options: {
            contentPath: "infos",
            basePath: "/",
          },
        },

        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `pages`,
            path: `${__dirname}/src/pages/`,
          },
        },
        `gatsby-plugin-mdx`,
    ],
  }