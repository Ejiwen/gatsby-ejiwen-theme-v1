require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = ({ contentPath = "data", basePath = "/" }) => ({
  plugins: [
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,"gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath,
      },
    },
    
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6237eox9dm6z`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },

  ],
})