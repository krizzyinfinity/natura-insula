import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  
 makeStyles
} from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "#8f4311",
        fontSize: "20px",
        
          
        
    },
    icon:{
        color: "white",
       
       
    }, paper: {
      background: "#5f83c7"
    }
}));


function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
   <>
    <Drawer  classes={{ paper: classes.paper }}  open={openDrawer}  onClose={() => setOpenDrawer(false)}  >
        <List >
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/"
              className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/boatTours"
              className={classes.link}>Boat tours</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/activities"
              className={classes.link}>Activities</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/transfers"
              className={classes.link}>Transfers</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact"
              className={classes.link}>Contact</Link>
            </ListItemText>
          </ListItem>
          
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={classes.icon} />
      </IconButton>
      </>
  );
}
export default DrawerComponent;
