/** @jsx jsx */
//import React from "react"
import { Heading, Container , jsx, Box } from "theme-ui"
import { useColorMode, useThemeUI, Flex } from 'theme-ui'

const Layout = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode()
  const { theme } = useThemeUI()
  const { initialColorModeName } = theme
  const modes = Object.keys(theme.colors.modes)
  
  const allModes = [initialColorModeName, ...modes]
  const index = allModes.indexOf(colorMode);
  console.log(allModes)
  const nextIndex = (index +1) % allModes.length
  const newColorMode = allModes[nextIndex]

  return (
    <Flex>
      <Box  p={2} bg='background.0' sx={{ height: "100vh", borderRight:"1px green solid" }}>
        <Heading>Gatsby Events Theme</Heading>
      </Box>
      
      <Box p={2} bg='background.1' sx={{ flex: '1 1 auto', height: "100vh"}}>
        <button onClick={ (e) => setColorMode(newColorMode) }>
        Change theme {newColorMode}
        </button>
        <Container>{children}</Container>
      </Box>
      
      
    </Flex>
  )
}

export default Layout