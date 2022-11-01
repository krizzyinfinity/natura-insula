import { ThemeProvider } from '@material-ui/core/styles';
import { Box } from '@mui/material'
import React from 'react'
import Image from "../img/transparent.jpg"

  
  
  

const theme = {
  maxWidth: "100%",
    height: "100vh",
    padding: 0,
    margin: 0,
};

const Hero = () => {

  return (
    <>
    <div>
    <ThemeProvider theme={theme}>
    <Box 
    
    height="100vh" width="100vw" display="flex" 
      component="img"
     position="relative"
    
        alt="Transparent kayak"
        src={Image}
      />
   </ThemeProvider>
   
      </div>
      
       </>
  )
}

export default Hero