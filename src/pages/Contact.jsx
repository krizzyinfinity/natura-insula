import React, { useEffect } from "react";
import Form from "../components/Form";

import { Box, Paper } from "@mui/material";
import Image from "../img/kayak4.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  demowrap: {
    position: "relative",
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100vh",
      opacity: 0.3,
      backgroundImage: `url(${Image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 0",
      backgroundSize: "cover",
    },
  },
  demoContent: {
    position: "relative",
    maxHeight: "99.7vh",
  },
});
const Contact = () => {
  
  const lang = navigator.language;
  const classes = useStyles();

  return (
    <Box className={classes.demowrap}>
      <Box className={classes.demoContent}>
        <Form />
      </Box>
    </Box>
  );
};

export default Contact;
