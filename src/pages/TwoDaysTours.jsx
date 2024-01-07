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
const TwoDaysTours = () => {
   
  return (
    <Box >
        <Typography variant='h2' sx={{marginTop:"100px", fontWeight:"bold", color:"darkgoldenrod", marginBottom:"20px",
     fontSize:{lg:45,md:40, sm:30, xs:32}}}>Veli Rat (lighthouse) to Golubinka cave</Typography>
       <Box style={{ marginRight:"30px", marginLeft:"30px"}}  >
        <Grid style={{justifyContent:"center", alignItems:"center"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:1 }} >
  <Grid  item xs={12} sm={6} >
  <Box component="img" src={Safari}  sx={{ height: {lg:400, sm:300, xs:300 }, width: {lg:400, sm:300, xs:300 }}} />
  </Grid>
  <Grid item xs={12} sm={6}>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>For the more adventurous, why not combine the two most sought after attractions</Typography>
  <Typography sx={{fontSize:{lg:20,md:20, sm:20, xs:18}}}>of Dugi Otok, plus its most stunning beaches and a huge chunk of its coastline.</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>You will be given the option to sleep au naturel in a designated spot, </Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>with a provided tent and all necessary equipment, or in our accomodation </Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>in Dragove village (based on availability).</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>Day 1</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>Depart from Veli Rat and travel to St Michelle shipwreck. Then head south to Saharun beach passing by stunning high cliff scenery, </Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}> as well as the very popular snorkeling spot of Lopata. You will then be required to do a further 6 km to reach your end point of the day, near Veli Zal beach. Your resting place for the night to be agreed upon prior to departure. </Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>Day 2</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>Head south to Golubinka cave at your chosen time. Pass by two of the most amazing beaches only accessibe by sea, and enter the cave for around 1pm. You are then only a short distance from your pick up point and end of journey. </Typography>
</Grid>
  
 
</Grid>
<Grid style={{ marginTop:"50px"}}   container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:1 }} >
<Grid style={{backgroundColor:"grey", padding:"10px"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DURATION</Typography>
    <Typography  style={{color:"white"}} variant='h6'>2 Days</Typography>
    </Grid>
    <Grid style={{backgroundColor:"darkgoldenrod"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DISTANCE</Typography>
    <Typography  style={{color:"white"}} variant='h6'>21 kilometers</Typography>
    </Grid>
    <Grid style={{backgroundColor:"grey"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DIFFICULTY</Typography>
    <Typography  style={{color:"white"}} variant='h6'>Moderate/Hard</Typography>
    </Grid>
    <Grid style={{backgroundColor:"darkgoldenrod"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>DEPARTURE</Typography>
    <Typography style={{color:"white"}} variant='h6'>From 8:30AM to 10:30AM the latest</Typography>
    </Grid>
    </Grid>
    <Box sx={{display:"flex", justifyContent:{lg:"flex-start", xs:"center"}, flexDirection:"column",
    marginTop:"20px", alignItems:{lg:"flex-start", xs:"center"}, marginLeft:{lg:20, xs:5}}}>
        <Typography style={{color:"darkgoldenrod"}} variant='h4'>USEFUL INFO</Typography>
        <Typography variant='h6' style={{marginBottom:"15px"}}>What is included?</Typography>
        <Typography>- All equipment - Kayak, paddle, snorkling gear, parasol, dry bag and safety vest if needed.</Typography>
       
       <Typography>- Pick up and drop-off from Brbinj/Bozava harbour</Typography>
       <Typography>- Pack lunch with 750ml water per person for 2 days</Typography>
       <Typography>- Breakfast and coffee on day 2</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>What to bring?</Typography>
       <Typography>Swimwear, towel, dry clothes to change into, sunscreen and hat</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>Safety</Typography>
       <Typography>Previous Kayak experience and good fitness level is a must. Julien will provide a detailed itinerary and all of the dos and don'ts for a safe and enjoyable experience.</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>Weather</Typography>
       <Typography>We closely monitor local weather forecasts and will inform you of what kind of weather you can expect.</Typography>

 <Typography> In the case of bad weather, we will try to reschedule your adventure or give you alternative locations. 

​</Typography>
<Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>Meeting point</Typography>
<Typography>Brbinj/Bozava port</Typography>
<Typography style={{color:"darkgoldenrod", marginTop:20}} variant='h4'>PRICING</Typography>

<Typography variant='h6' style={{marginBottom:"15px"}}><span style={{fontWeight:"bold"}}>100Є per person</span>  with tent option</Typography>

<Typography variant='h6' style={{marginBottom:"15px"}}><span style={{fontWeight:"bold"}}>Between 130Є and 150Є per person </span>for studio apartment with swimming pool based on the time of the year</Typography>


<Typography style={{color:"darkgoldenrod", marginTop:20}} variant='h4'>BOOKING</Typography>
<Typography variant='h6' style={{marginBottom:"15px"}}> For all querries/bookings please send an  
<ButtonMailto  label=" email" mailto="mailto:signoretjules@gmail.com" /></Typography>
       </Box>
</Box>

   
</Box>
   
  )
}

export default TwoDaysTours