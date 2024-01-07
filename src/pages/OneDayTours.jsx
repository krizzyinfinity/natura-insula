import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Safari from "../img/safari.jpg"
import { Link } from 'react-router-dom'
const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link style={{textDecoration:"none", color:"goldenrod"}}
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};
const OneDayTours = () => {
   
  return (
    <Box >
        <Typography variant='h2' sx={{marginTop:"100px", fontWeight:"bold", color:"darkgoldenrod", marginBottom:"20px",
     fontSize:{lg:45,md:40, sm:30, xs:32}}}>Veli Zal beach to Golubinka cave</Typography>
       <Box style={{ marginRight:"30px", marginLeft:"30px"}}  >
        <Grid style={{justifyContent:"center", alignItems:"center"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:1 }} >
  <Grid  item xs={12} sm={6} >
  <Box component="img" src={Safari}  sx={{ height: {lg:400, sm:300, xs:300 }, width: {lg:400, sm:300, xs:300 }}} />
  </Grid>
  <Grid item xs={12} sm={6}>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>Depart from Veli Zal and head south to Golubinka cave. With 4 private beaches on the way down,</Typography>
  <Typography sx={{fontSize:{lg:20,md:20, sm:20, xs:18}}}> you will have sufficient places to stop, sunbathe and relax.If you're lucky you might even get to </Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>see a dolphin pack on your way.</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>Golubinka Cave is a very popular sea cave visited by many each year.</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>One option is for you to do a round trip or we can come and pick you up.</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>It is a day rental and all equipment is due back by 6PM</Typography>
</Grid>
  
 
</Grid>
<Grid style={{ marginTop:"50px"}}   container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:1 }} >
<Grid style={{backgroundColor:"grey", padding:"10px"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DURATION</Typography>
    <Typography  style={{color:"white"}} variant='h6'>Approximately from 2 hours to 10 hrs</Typography>
    </Grid>
    <Grid style={{backgroundColor:"darkgoldenrod"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DISTANCE</Typography>
    <Typography  style={{color:"white"}} variant='h6'>14 km round trip or 7 km one direction</Typography>
    </Grid>
    <Grid style={{backgroundColor:"grey"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DIFFICULTY</Typography>
    <Typography  style={{color:"white"}} variant='h6'>Easy/Moderate</Typography>
    </Grid>
    <Grid style={{backgroundColor:"darkgoldenrod"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DEPARTURE</Typography>
    <Typography style={{color:"white"}} variant='h6'>From 8:30AM to 11 AM the latest</Typography>
    </Grid>
    </Grid>
    <Box sx={{display:"flex", justifyContent:{lg:"flex-start", xs:"center"}, flexDirection:"column",
    marginTop:"20px", alignItems:{lg:"flex-start", xs:"center"}, marginLeft:{lg:20, xs:5}}}>
        <Typography style={{color:"darkgoldenrod"}} variant='h4'>USEFUL INFO</Typography>
        <Typography variant='h6' style={{marginBottom:"15px"}}>What is included?</Typography>
        <Typography>- All equipment - Kayak/SUP, paddle, snorkling gear, parasol, dry bag and safety vest if needed.</Typography>
       
       <Typography>- Pick up and drop-off from Brbinj/Bozava harbour</Typography>
       <Typography>- Pack lunch with 750ml water per person</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>What to bring?</Typography>
       <Typography>Swimwear, towel, dry clothes to change into, sunscreen and hat</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>Safety</Typography>
       <Typography>Previous SUP/Kayak experience is desirable but not essential. Julien will provide a detailed itinerary and all of the dos and don'ts for a safe and enjoyable experience.</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>Weather</Typography>
       <Typography>We closely monitor local weather forecasts and will inform you of what kind of weather you can expect.</Typography>

 <Typography> In the case of bad weather, we will try to reschedule your adventure or give you alternative locations. 

​</Typography>
<Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>Meeting point</Typography>
<Typography>We are on Veli zal beach, but pick-up is also a possibility as well as other locations</Typography>
<Typography style={{color:"darkgoldenrod", marginTop:20}} variant='h4'>PRICING</Typography>

<Typography variant='h6' style={{marginBottom:"15px"}}><span style={{fontWeight:"bold"}}>40Є per person</span>  without pick-up and drop-off </Typography>

<Typography variant='h6' style={{marginBottom:"15px"}}><span style={{fontWeight:"bold"}}>50Є per person</span> with pick-up and drop-off </Typography>


<Typography style={{color:"darkgoldenrod", marginTop:20}} variant='h4'>BOOKING</Typography>
<Typography variant='h6' style={{marginBottom:"15px"}}> For all querries/bookings please send an  
<ButtonMailto  label=" email" mailto="mailto:signoretjules@gmail.com" /></Typography>
       </Box>
</Box>
<Typography variant='h2' sx={{marginTop:"100px", fontWeight:"bold", color:"darkgoldenrod", marginBottom:"20px",
     fontSize:{lg:45,md:40, sm:30, xs:32}}}>Crystal experience</Typography>
       <Box style={{ marginRight:"30px", marginLeft:"30px"}}  >
        <Grid style={{justifyContent:"center", alignItems:"center"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:1 }} >
  <Grid  item xs={12} sm={6} >
  <Box component="img" src={Safari}  sx={{ height: {lg:400, sm:300, xs:300 }, width: {lg:400, sm:300, xs:300 }}} />
  </Grid>
  <Grid item xs={12} sm={6}>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>Start your journey from Dragove village's own bay on the east coast of Dugi Otok,</Typography>
  <Typography sx={{fontSize:{lg:20,md:20, sm:20, xs:18}}}> and head North to visit, not just the coastline, but also the two bunkers built during   </Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>the Tito era of the ex Yugoslavia. Purpose built for hiding interception ships, you will also find a few beaches,</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>secluded olive groves, small islands and you could even stop in Bozava for lunch</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>in one of the local restaurants</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>It is a day rental and all equipment is due back by 6PM</Typography>
</Grid>
  
 
</Grid>
<Grid style={{ marginTop:"50px"}}   container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:1 }} >
<Grid style={{backgroundColor:"grey", padding:"10px"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DURATION</Typography>
    <Typography  style={{color:"white"}} variant='h6'>From 2 hours to 8 hours</Typography>
    </Grid>
    <Grid style={{backgroundColor:"darkgoldenrod"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DISTANCE</Typography>
    <Typography  style={{color:"white"}} variant='h6'>Around 10 kilometers</Typography>
    </Grid>
    <Grid style={{backgroundColor:"grey"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DIFFICULTY</Typography>
    <Typography  style={{color:"white"}} variant='h6'>Easy</Typography>
    </Grid>
    <Grid style={{backgroundColor:"darkgoldenrod"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DEPARTURE</Typography>
    <Typography style={{color:"white"}} variant='h6'>From 8:30AM to 11AM</Typography>
    </Grid>
    </Grid>
    <Box sx={{display:"flex", justifyContent:{lg:"flex-start", xs:"center"}, flexDirection:"column",
    marginTop:"20px", alignItems:{lg:"flex-start", xs:"center"}, marginLeft:{lg:20, xs:5}}}>
        <Typography style={{color:"darkgoldenrod"}} variant='h4'>USEFUL INFO</Typography>
        <Typography variant='h6' style={{marginBottom:"15px"}}>What is included?</Typography>
        <Typography>- All equipment - Kayak, paddle, dry bag and safety vest if needed.</Typography>
       
       <Typography>- Pick up and drop-off can be arranged</Typography>
      
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>What to bring?</Typography>
       <Typography>Swimwear, towel, dry clothes to change into, sunscreen and hat</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>Safety</Typography>
       <Typography>Previous Kayak experience is desirable but not essential. Julien will provide a detailed itinerary and all of the dos and don'ts for a safe and enjoyable experience.</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>Weather</Typography>
       <Typography>We closely monitor local weather forecasts and will inform you of what kind of weather you can expect.</Typography>

 <Typography> In the case of bad weather, we will try to reschedule your adventure or give you alternative locations. 

​</Typography>
<Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>Meeting point</Typography>
<Typography>Dragove bay but pick-up and drop-off can be arranged</Typography>
<Typography style={{color:"darkgoldenrod", marginTop:20}} variant='h4'>PRICING</Typography>

<Typography variant='h6' style={{marginBottom:"15px"}}><span style={{fontWeight:"bold"}}>30Є per person</span>  without pick-up or drop-off </Typography>

<Typography variant='h6' style={{marginBottom:"15px"}}><span style={{fontWeight:"bold"}}>40Є per person</span> with pick-up and drop-off </Typography>

<Typography variant='h6' style={{marginBottom:"15px"}}><span style={{fontWeight:"bold"}}>8Є per person</span>  more for pack lunch</Typography>


<Typography style={{color:"darkgoldenrod", marginTop:20}} variant='h4'>BOOKING</Typography>
<Typography variant='h6' style={{marginBottom:"15px"}}> For all querries/bookings please send an  
<ButtonMailto  label=" email" mailto="mailto:signoretjules@gmail.com" /></Typography>
       </Box>
       
</Box>

<Typography variant='h2' sx={{marginTop:"100px", fontWeight:"bold", color:"darkgoldenrod", marginBottom:"20px",
     fontSize:{lg:45,md:40, sm:30, xs:32}}}>The Lagoon's Trail</Typography>
       <Box style={{ marginRight:"30px", marginLeft:"30px"}}  >
        <Grid style={{justifyContent:"center", alignItems:"center"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:1 }} >
  <Grid  item xs={12} sm={6} >
  <Box component="img" src={Safari}  sx={{ height: {lg:400, sm:300, xs:300 }, width: {lg:400, sm:300, xs:300 }}} />
  </Grid>
  <Grid item xs={12} sm={6}>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>Travel from Veli Zal beach to Saharun, one of Croatia's most famous beaches.</Typography>
  <Typography sx={{fontSize:{lg:20,md:20, sm:20, xs:18}}}> On the way you'll find many spots along the rocky coastline to stop, and snorkel, </Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}> including one of Dugi Otok's most famous dive spots in Lopata.</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>This trail will be appealing to visitors who come from the city for a one-day trip</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>Take the opportunity to visit two of the most beautiful beaches on the island</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>It is a day rental and all equipment is due back by 6PM</Typography>
</Grid>
  
 
</Grid>
<Grid style={{ marginTop:"50px"}}   container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:1 }} >
<Grid style={{backgroundColor:"grey", padding:"10px"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DURATION</Typography>
    <Typography  style={{color:"white"}} variant='h6'>From 3 hours to 6 hrs</Typography>
    </Grid>
    <Grid style={{backgroundColor:"darkgoldenrod"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DISTANCE</Typography>
    <Typography  style={{color:"white"}} variant='h6'>12 km round trip or 6 km one direction</Typography>
    </Grid>
    <Grid style={{backgroundColor:"grey"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DIFFICULTY</Typography>
    <Typography  style={{color:"white"}} variant='h6'>Easy/Moderate</Typography>
    </Grid>
    <Grid style={{backgroundColor:"darkgoldenrod"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DEPARTURE</Typography>
    <Typography style={{color:"white"}} variant='h6'>From 8:30AM to 11AM</Typography>
    </Grid>
    </Grid>
    <Box sx={{display:"flex", justifyContent:{lg:"flex-start", xs:"center"}, flexDirection:"column",
    marginTop:"20px", alignItems:{lg:"flex-start", xs:"center"}, marginLeft:{lg:20, xs:5}}}>
        <Typography style={{color:"darkgoldenrod"}} variant='h4'>USEFUL INFO</Typography>
        <Typography variant='h6' style={{marginBottom:"15px"}}>What is included?</Typography>
        <Typography>- All equipment - Kayak/SUP, paddle, parasol, snorkling gear, dry bag and safety vest if needed.</Typography>
       
       <Typography>- Pick up and drop-off can be arranged</Typography>
       <Typography>- Pack lunch with 750ml water per person</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>What to bring?</Typography>
       <Typography>Swimwear, towel, dry clothes to change into, sunscreen and hat</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>Safety</Typography>
       <Typography>Previous SUP/Kayak experience is desirable but not essential. Julien will provide a detailed itinerary and all of the dos and don'ts for a safe and enjoyable experience.</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>Weather</Typography>
       <Typography>We closely monitor local weather forecasts and will inform you of what kind of weather you can expect.</Typography>

 <Typography> In the case of bad weather, we will try to reschedule your adventure or give you alternative locations. 

​</Typography>
<Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>Meeting point</Typography>
<Typography>Veli zal beach, but pick-up is also a possibility as well as other locations</Typography>
<Typography style={{color:"darkgoldenrod", marginTop:20}} variant='h4'>PRICING</Typography>

<Typography variant='h6' style={{marginBottom:"15px"}}><span style={{fontWeight:"bold"}}>40Є per person</span>  without pick-up or drop-off </Typography>

<Typography variant='h6' style={{marginBottom:"15px"}}><span style={{fontWeight:"bold"}}>50Є per person</span> with pick-up and drop-off </Typography>


<Typography style={{color:"darkgoldenrod", marginTop:20}} variant='h4'>BOOKING</Typography>
<Typography variant='h6' style={{marginBottom:"15px"}}> For all querries/bookings please send an  
<ButtonMailto  label=" email" mailto="mailto:signoretjules@gmail.com" /></Typography>
       </Box>
</Box>
   
</Box>
   
  )
}

export default OneDayTours