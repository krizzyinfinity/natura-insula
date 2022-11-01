
import React from 'react';


import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
    makeStyles,
   
  } from "@material-ui/core";
 
  import {Link} from "react-router-dom"

import DrawerComponent from './Drawer';
 
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    paddingRight:"100px"
   
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(15),
    "&:hover": {
      color: "#f0c126",
      borderBottom: "1px solid white",
    },
  },
})); 

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    
        <AppBar position="static"
        style={{ background: '#2E3B55' }}>
      <CssBaseline />
      <Toolbar>
      <Typography variant="h4" className={classes.logo}>
          Natura Insula
        </Typography>
       
            {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/boatTours" className={classes.link}>
              Boat tours
            </Link>
            <Link to="/activities" className={classes.link}>
              Activities
            </Link>
            <Link to="/transfers" className={classes.link}>
              Transfers
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
           
          </div>
        )}
            </Toolbar>
    </AppBar>
);
}

export default Navbar