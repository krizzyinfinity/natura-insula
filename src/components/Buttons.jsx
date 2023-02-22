import React from 'react'
import { Button} from '@mui/material';
import { Link } from 'react-router-dom';

import { useTheme,
  useMediaQuery,
  makeStyles, } from '@material-ui/core';
  const useStyles = makeStyles((theme) => ({
   
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "18px",
      marginLeft: theme.spacing(15),
      "&:hover": {
        background: "transparent",
  color: "whitesmoke",
  border: "2px solid orange"
      },
    }
  }));
const Buttons = ({name}) => {
  
  const classes = useStyles();
  const theme = useTheme();
  return (


       
<Button component={Link} to="/contact"  className={classes.link}
 sx={{ width: {lg:"160px", xs: "140px", md:220, sm:"180px"},textAlign:"center", 
height: {lg:"70px", xs:"45px", md:110, sm:75},p:3,lineHeight:1.2,
        fontSize: { lg: '15px', xs: '12px', md:22, sm:"16px" },
        backgroundColor:"#f0c126", color:'#2E3B55', fontWeight:"bold"
       }}>
          {name}
         </Button>
        
        
  );
}
export default Buttons