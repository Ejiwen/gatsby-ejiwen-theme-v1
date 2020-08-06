/** @jsx jsx */
import React from "react"
import { Heading, Container, Text, Styled, jsx } from "theme-ui"

const Layout = ({ children }) => {
  return (
    <div>
     <Text variant='testing'>Hello</Text>
     <div sx={{
       color: 'primary'
     }}>
       test sx Prop
     </div>
      <Styled.h1>Test</Styled.h1>
      <Heading>Gatsby Events Theme</Heading>
      <Container>{children}</Container>
    </div>
  )
}

export default Layout