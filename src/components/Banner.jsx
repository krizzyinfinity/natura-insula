import React from 'react'
import { Typography, Stack, Button } from '@mui/material';


import { Box } from '@material-ui/core';


import { useTheme,
  useMediaQuery,
  makeStyles, } from '@material-ui/core';
import Buttons from './Buttons';
  const useStyles = makeStyles((theme) => ({
   
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(15),
      "&:hover": {
        background: "transparent",
  color: "whitesmoke",
  border: "2px solid orange"
      },
    },
    root: {
    backgroundColor:"transparent",
    color:"white",
    border: "3px solid #f0c126",
    padding:10,
    position:"absolute",
    
     
  marginLeft: "auto", 
  marginRight: "auto", 
   
    wordWrap:"break-word"

    }
  })); 
const Banner = ({title, name}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    
      
      <Box className={classes.root}
       zIndex="modal"
        align="center"
        
  sx={{width:{lg:60, xs:220, sm:350, md:500}, 
  height:{lg:400, xs:190, sm:300, md:400},
  
}}
  
      >
       <Typography
        sx={{marginBottom:"15%", fontSize: {  xs: '1.2rem', md:"2.6rem" , sm:"1.8rem", lg:39},
        }} >{title}</Typography> 
        
       <Buttons className={classes.link}  name={name}  />
      </Box>
    


//     
  )
}

export default Banner