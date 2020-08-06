export const theme = {
  useBodyStyles: true,
  breakpoints: [
    '40em', '56em', '64em',
  ],
  space: [0, 4, 8, 16, 32],
    colors: {
      text: "white",
      background: "red",
      primary: "#639",
      secondary: "#ff6347",
    },
    fonts: {
      body: "system-ui, sans-serif",
      heading: "system-ui, sans-serif",
      monospace: "Menlo, monospace",
      testing: "sans-serif, sans-serif",
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],

    text: {
      heading: {
        backgroundColor: "primary",
        color: "background",
        fontWeight: "bold",
        margin: "0 auto",
        maxWidth: "max",
        padding: 3,
        width: "default",
        a: {
          color: "inherit",
        },
      },
      testing : {
        backgroundColor: "purple",
        color: "text",
        fontFamily: "testing",
        p: 4,
        width: ['100%', '50%', '25%'],
      }
    },
  
  styles : {
          root : {
              fontWeight: 'body'
          },
          h1 : {
              color: "yellow"
          }
      }
  }

  export default theme