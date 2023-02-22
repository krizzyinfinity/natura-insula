import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
  makeStyles,
  Grid,
} from "@material-ui/core";

import { Link } from "react-router-dom";

import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(60),
    display: "flex",
    
  },

  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    marginLeft: theme.spacing(5),
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
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const lang = navigator.language;
    i18n.changeLanguage(lang);
  }, []);
  return (
    <AppBar position="fixed" style={{ background: "#2E3B55", 
    }}>
      <CssBaseline />
      <Toolbar >
        <Grid style={{alignItems:"center", justifyContent:"space-between"}}  container spacing={24}>
          <Typography variant="h4">Natura Insula</Typography>

          {isMobile ? (
            <DrawerComponent/>
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                {t("home")}
              </Link>
              <Link to="/boatTours" className={classes.link}>
                {t("boat")}
              </Link>
              <Link to="/activities" className={classes.link}>
                {t("activities")}
              </Link>
              <Link to="/transfers" className={classes.link}>
                {t("transfers")}
              </Link>
              <Link to="/accommodation" className={classes.link}>
                {t("accommodation")}
              </Link>
              <Link to="/contact" className={classes.link}>
                {t("contact")}
              </Link>
            </div>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
