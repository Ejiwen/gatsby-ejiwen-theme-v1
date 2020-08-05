module.exports = {
    plugins: [
        `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `6237eox9dm6z`,
          // Learn about environment variables: https://gatsby.dev/env-vars
          accessToken: `NTl2ySG7s74M4rHEUAD5WhI8CDyDUubYp_NgyftBBqw`,
        },
      },
    ],
  }