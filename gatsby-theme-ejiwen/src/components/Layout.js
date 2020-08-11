/** @jsx jsx */
//import React from "react"
import { Container , jsx, Box, Grid } from "theme-ui"
import { useColorMode, useThemeUI} from 'theme-ui'
import "../styles/style.css"
import LeftSide from "../pages/src/LeftSide"

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
    <Grid gap={0} columns={['20% 80%']}>
      
      <Box className="sideBar" p={2} bg='background.0' >
        <LeftSide/>
      </Box>

      <Box p={2} bg='background.1' sx={{ flex: '1 1 auto', height: "100%", minHeight:"100vh"}}>
        <button onClick={ (e) => setColorMode(newColorMode) }>
        Change theme {newColorMode}
        </button>
        <Container>{children}</Container>
      </Box>
    
    </Grid>
  )
}

export default Layout