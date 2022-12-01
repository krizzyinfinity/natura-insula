import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  CardHeader,
  styled,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Snackbar,
} from "@mui/material";
import Kayak from "../img/kayak1.jpg";
import Sup from "../img/sup.jfif";
import Diver from "../img/diver.jfif";
import Aquaglide from "../img/aquaglide.jfif";

import Bikes from "../img/bikes.jfif";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Sunset from "../img/sunset.jfif";
import IconButton from "@mui/material/IconButton";

import ShareIcon from "@mui/icons-material/Share";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const Watersports = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.toString());
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        "& > :not(style)": {
          mt: { lg: 12, md: 10, xs: 10, sm: 9 },
          ml:{md:6, sm:3},
          mb:{xl:10, md:8, sm:8, xs:2}
         
        },
      }}
    >
      <Card elevation={9} sx={{ width:{xl:400, xs:300, sm:300, md:400}, minHeight:600}}>
        <CardHeader
          title="Kayak rentals"
          subheader="Daily rentals and daily safaris"
        />
        <CardMedia component="img" height="185" image={Kayak} alt="Kayak" />
        <CardContent>
          <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary">
            We rent both oceans and crystal kayaks on Veli Zal everyday. We have
            several rates for hourly and day long rentals. Call us on 0957116161
            or 0977145168. All of our prices are per kayak (two seaters only).
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon onClick={handleClick} />
            <Snackbar
              open={open}
              onClose={() => setOpen(false)}
              autoHideDuration={2000}
              message="Copied to clipboard"
            />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h5 " sx={{ fontWeight: "bold" }} paragraph>
              {" "}
              Safaris
            </Typography>
            <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary" paragraph> Option 1</Typography>
            <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary" paragraph>
              Beach to Cave : Depart from Veli Zal and head south to Golubinka
              cave. With 4 private beaches on the way down, you will have ample
              places to stop, sunbath and relax.If you're lucky you might even
              get to see a dolphin pack on your way. 50 euros per kayak (2
              seaters only)
            </Typography>
            <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary" paragraph>Option 2:</Typography>
            <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary" paragraph>
              The bunker trial : Start your journey from Dragove village's own
              bay on the east coast of Dugi otok, and head north to visit, not
              just the coastline, but also the three bunkers built during the
              Tito era of the ex Yougoslavia. Purpose built for hiding
              interceptions ships. You will find many beaches, secluded olive
              groves and you could even stop in Bozava for lunch, in one of the
              various local restaurants.50 euros
            </Typography>
            <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary" paragraph>Option 3:</Typography>
            <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary" paragraph>
              The lagoon's trail : Travel from Veli Zal beach to Saharun, one of
              Croatia's most famous beach. On the way you'll find many spots
              along the rocky coastline to stop, and snorkel, including one of
              Dugi otok's most famous dive spot in Lopata. 50 euros
            </Typography>
            <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary" paragraph>Option 4:</Typography>
            <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary" paragraph>
              The sunset trail : Depart from Veli Zal beach and head all the way
              up the north tip of the island to Veli Rat and its famous
              lighthouse.There, you can enjoy the most beautiful sunset in the
              Adriatic, to conclude a fantastic day on the sea. Pick up is
              included for this trail due to its length and the timming of it.
              80 euros
            </Typography>
            <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary" paragraph>
              <span style={{fontWeight:"bold"}}>PLEASE NOTE:</span> It is possible to do only one way for trails 1,2 and
              3 and to get a pickup at an agreed time for an extra cost.
              <br></br>
              <span style={{fontWeight:"bold", fontStyle:"italic"}}>
               * All activities are weather dependant and best started in the
              morning</span>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card elevation={9} sx={{   width:{xl:400, xs:300, sm:300, md:400}, minHeight:600}}>
        <CardHeader title="Bike rentals" subheader="Daily rentals" />
        <CardMedia component="img" height="185" image={Bikes} alt="bicycle" />
        <CardContent>
          <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary">
            We have traditionals bikes available for rent. Those can be picked
            up at our home location in Dragove village, or depending on where
            you are, we can bring them to you. Our standard rate is 10 euros per day, but for any rentals of  
          </Typography>
        
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon onClick={handleClick} />
            <Snackbar
              open={open}
              onClose={() => setOpen(false)}
              autoHideDuration={2000}
              message="Copied to clipboard"
            />
          </IconButton>
          
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick1}
            aria-expanded={expanded1}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          
        </CardActions>
        <Collapse in={expanded1} timeout="auto" unmountOnExit>
          <Typography paragraph sx={{fontSize:"140%"}} variant="body2" color="text.secondary"> 
          four days or more, the rate falls to 8
            euros a day. Call us on 0957116161 or 09777145168.</Typography>
          </Collapse>
          </CardContent>
      </Card>
      <Card elevation={9} sx={{ width:{xl:400, xs:300, md:400}, minHeight:600}}>
        <CardHeader
          title="Sunset on Mezanj island"
          subheader="Enjoy a beautiful sunset on Veli Zal"
        />
        <CardMedia
          component="img"
          height="185"
          image={Sunset}
          alt="Sunset Veli Zal Dragove"
        />
        <CardContent>
          <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary">
            Mezanj island is directly opposite Veli Zal beach our base of
            operations. Why not rent a kayak or a SUP board and find a spot
            either on Mezanj or on the surrounding waters. All departures should
            be done at least 45 minutes before sunset. As per most water
            activities, this is weather dependant.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon onClick={handleClick} />
            <Snackbar
              open={open}
              onClose={() => setOpen(false)}
              autoHideDuration={2000}
              message="Copied to clipboard"
            />
          </IconButton>
         
        </CardActions>
       
      </Card>
      <Card elevation={9} sx={{  width:{xl:400, xs:300}, minHeight:600 }}>
        <CardHeader
          title="Rent Aquaglide 4.1 "
          subheader="Windsurfing for beginners"
        />
        <CardMedia
          component="img"
          height="185"
          image={Aquaglide}
          alt="Aquaglide rent"
        />
        <CardContent>
          <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary">
            As Dugi otok can become very windy at times, the aqua glide can
            provide an alternative fun on the water. It can be used as an
            initiation to wind surfing for young and old alike. Minimum age is
            14 years old. One and a half hour rental includes a 30 minutes
            tuition and an hour of fun. 20 euros per session.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon onClick={handleClick} />
            <Snackbar
              open={open}
              onClose={() => setOpen(false)}
              autoHideDuration={2000}
              message="Copied to clipboard"
            />
          </IconButton>
          
        </CardActions>
        
      </Card>
      <Card elevation={9} sx={{ width:{xl:400, xs:300}, minHeight:600 }}>
        <CardHeader
          title="Lost in the sea"
          subheader="Rent a diver for your lost belongings"
        />
        <CardMedia
          component="img"
          height="185"
          image={Diver}
          alt="Diver for rent"
        />
        <CardContent>
          <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary">
            Have you lost something of value ? Do you have a location and it is
            near the shore ? Julien is an experienced diver with a high ratio of
            recovery.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon onClick={handleClick} />
            <Snackbar
              open={open}
              onClose={() => setOpen(false)}
              autoHideDuration={2000}
              message="Copied to clipboard"
            />
          </IconButton>
          
        </CardActions>
        
      </Card>
      <Card elevation={9} sx={{  width:{xl:400, xs:300}, minHeight:600}}>
        <CardHeader title="Sup rentals" subheader="Daily rentals" />
        <CardMedia
          component="img"
          height="185"
          image={Sup}
          alt="Paddle board"
        />
        <CardContent>
          <Typography sx={{fontSize:"140%"}} variant="body2" color="text.secondary">
            As well as kayaks we also rent SUP boards. Prices are also for
            hourly and daily rates, for more information, call us on 0957116161
            or 09577145168. Rate are per SUP boards.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon onClick={handleClick} />
            <Snackbar
              open={open}
              onClose={() => setOpen(false)}
              autoHideDuration={2000}
              message="Copied to clipboard"
            />
          </IconButton>
          
          
        </CardActions>
        
      </Card>
    </Box>
  );
};

export default Watersports;
