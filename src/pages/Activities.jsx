import React, { useState } from 'react'
import {Card, Box, Typography, CardHeader, styled,
CardMedia, CardContent, CardActions, Collapse, Snackbar}from '@mui/material';
import Kayak from "../img/kayak1.jpg";
import Sup from "../img/sup.jfif";
import Diver from "../img/diver.jfif";
import Aquaglide from "../img/aquaglide.jfif";

import Bikes from "../img/bikes.jfif";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Sunset from "../img/sunset.jfif"
import IconButton from '@mui/material/IconButton';

import ShareIcon from '@mui/icons-material/Share';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
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
  
    const [open, setOpen] = useState(false)
    const handleClick = () => {
      setOpen(true)
      navigator.clipboard.writeText(window.location.toString())
    }
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
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:"center",
        alignItems:"center",
        '& > :not(style)': {
          m: {lg:8, md:8, xs:3, sm:3},
          
        },
      }}
    >
      <Card elevation={9}
      
      sx={{ maxWidth:350}} >
        <CardHeader 
        title="Kayak rentals" 
        subheader="Daily rentals and daily safaris"
        />
         <CardMedia
        component="img"
        height="185"
        image={Kayak}
        alt="Kayak"
      />
         <CardContent>
        <Typography variant="body2" color="text.secondary">
          There is a crystal blue sea that you can explore with our crystal kayakas.
          We also rent ocean kayaks and you can visit an island of Mezanj.
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <IconButton aria-label="share">
          <ShareIcon onClick={handleClick}/>
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
          <Typography paragraph>Option 1:</Typography>
          <Typography paragraph>
            Take a kayak on your roof bars if you have one and if you don't, we 
            can rent you inflatable ones so you can visit all places you want to see
          </Typography>
          <Typography paragraph>
            Option 2:
          </Typography>
          <Typography paragraph>
           Come on the Veli Zal beach and venture out on a safari to Golubinka cave,
           explore hidden beaches on the way and if you don't want to paddle back, we can pick you up 
           and bring you back
          </Typography>
          <Typography paragraph>
            Option 3:
          </Typography>
          <Typography paragraph>
           Come to Veli Rat lighthouse and explore a shipwreck of St Michelle not too far from the shore
          </Typography>
          <Typography paragraph>
            Option 4:
          </Typography>
          <Typography paragraph>
          If you are on the island without a car and want to see multiple sights with kayak,
          we can offer you that. Send a query for details
          </Typography>
          <Typography paragraph>
           Prices:
          </Typography>
          <Typography paragraph>
           50 euros for a day<br></br>
           28 euros for a half day<br></br>
           15 euros for an hour<br></br>
           8 euros for half an hour
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
      <Card elevation={9}
      sx={{ maxWidth:350}} >
      <CardHeader 
      title="Bike rentals" 
      subheader="Daily rentals"
      />
       <CardMedia
      component="img"
      height="185"
      image={Bikes}
      alt="bicycle"
    />
       <CardContent>
      <Typography variant="body2" color="text.secondary">
       Dugi Otok is 44 kilometers long and there are many 
       paths and roads to explore. We offer MTB and those bikes are suitable 
       for this kind of roads
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      
      <IconButton aria-label="share">
      <ShareIcon onClick={handleClick}/>
          <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
      </IconButton>
      <ExpandMore
        expand={expanded1}
        onClick={handleExpandClick1}
        aria-expanded={expanded1}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded1} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Option 1:</Typography>
        <Typography paragraph>
          Rent a bike at the location in Dragove. We will supply you with 
          helmets, a pump and good advices
        </Typography>
        <Typography paragraph>
          Option 2:
        </Typography>
        <Typography paragraph>
         We can bring bikes at your location. If something happens
         while renting our bikes you can always call us and ask for help
        </Typography>
        <Typography paragraph>Prices:</Typography>
         <Typography paragraph>
           10 euros per day and if it is more than 3 days the price is 8 euros per day
         </Typography>
      </CardContent>
    </Collapse>
        </Card>
      < Card elevation={9} 
       sx={{ maxWidth:350}} >
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
       <Typography variant="body2" color="text.secondary">
        If you are in romantic mood or just want to try something different, 
        we offer kayak rental for a beautiful sunset on Mezanj island.

       </Typography>
     </CardContent>
     <CardActions disableSpacing>
       
       <IconButton aria-label="share">
       <ShareIcon onClick={handleClick}/>
          <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
       </IconButton>
       <ExpandMore
         expand={expanded2}
         onClick={handleExpandClick2}
         aria-expanded={expanded2}
         aria-label="show more"
       >
         <ExpandMoreIcon />
       </ExpandMore>
     </CardActions>
     <Collapse in={expanded2} timeout="auto" unmountOnExit>
       <CardContent>
         <Typography paragraph>Option 1:</Typography>
         <Typography paragraph>
           Rent a kayak for more than one hour and combine with watching the sunset
         </Typography>
         <Typography paragraph>
           Option 2:
         </Typography>
         <Typography paragraph>
          Rent a kayak for approx one hour with a glass or a bottle of great italian prosseco
         </Typography>
        
       </CardContent>
     </Collapse>
        </Card>
        <Card elevation={9}
            sx={{ maxWidth:350}} >
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
            <Typography variant="body2" color="text.secondary">
             We offer a bit of excitement on Veli Zal beach with our Aquaglide 4.1
             very versatile piece of equipment
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            
            <IconButton aria-label="share">
            <ShareIcon onClick={handleClick}/>
          <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
            </IconButton>
            <ExpandMore
              expand={expanded3}
              onClick={handleExpandClick3}
              aria-expanded={expanded3}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded3} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Option 1:</Typography>
              <Typography paragraph>
                On a windy day you can venture out alone or with your family
                on an adventure. You can use a sail or you can use it as a 
                paddle board
              </Typography>
              <Typography paragraph>
                Prices: <br></br>
                50 euros for a whole day <br></br>
                28 euros for a half day<br></br>
                15 euros per hour
              </Typography>
              <Typography paragraph>
               
              </Typography>
              
            </CardContent>
          </Collapse>
        </Card>
        <Card elevation={9}
      
      sx={{ maxWidth:350}} >
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
        <Typography variant="body2" color="text.secondary">
          If you are near the shore and dropped something valuable in the sea
             you can call our diver to try and dive it out for you
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <IconButton aria-label="share">
        <ShareIcon onClick={handleClick}/>
          <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
        </IconButton>
        <ExpandMore
          expand={expanded4}
          onClick={handleExpandClick4}
          aria-expanded={expanded4}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded4} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Option 1:</Typography>
          <Typography paragraph>
            You know exact place where you dropped your stuff and you go by kayak
            or a boat to show our diver. Prices start from 50 euros per hour
          </Typography>
          
        </CardContent>
      </Collapse>
      </Card>
      <Card elevation={9}
      
      sx={{ maxWidth:350}} >
        <CardHeader 
        title="Sup rentals" 
        subheader="Daily rentals"
        />
         <CardMedia
        component="img"
        height="185"
        image={Sup}
        alt="Paddle board"
      />
         <CardContent>
        <Typography variant="body2" color="text.secondary">
          In addition to kayaks we also offer sup board rentals. 
          Rentals can be for a whole day or for as little as one hour
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <IconButton aria-label="share">
        <ShareIcon onClick={handleClick}/>
          <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
        </IconButton>
        <ExpandMore
          expand={expanded5}
          onClick={handleExpandClick5}
          aria-expanded={expanded5}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded5} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Option 1:</Typography>
          <Typography paragraph>
           Rent a sup for the whole day
           The price for the day is 40 euros
          </Typography>
          <Typography paragraph>
            Option 2:
          </Typography>
          <Typography paragraph>
           Rent a sup for as little as one hour 
           The price for one hour is 10 euros
          </Typography>
          
        </CardContent>
      </Collapse>
      </Card>
    </Box>
   
  )
}

export default Watersports