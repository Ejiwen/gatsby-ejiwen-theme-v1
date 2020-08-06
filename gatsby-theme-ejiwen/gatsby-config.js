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
        accessToken: `NTl2ySG7s74M4rHEUAD5WhI8CDyDUubYp_NgyftBBqw`,
      },
    },

  ],
})