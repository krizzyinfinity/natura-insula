import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Safari from "../img/safari.jpg"
import Beach from "../img/beach.png"
import Kayak from "../img/kayak4.jpg";
import { Link } from 'react-router-dom'
import { useTranslation} from 'react-i18next';

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
    const {t, i18n} = useTranslation()
  useEffect(()=> {
const lang = navigator.language;
i18n.changeLanguage(lang);
  },[])
  const lang = navigator.language;
   
  return (
    <Box >
        <Typography variant='h2' sx={{marginTop:"100px", fontWeight:"bold", color:"darkgoldenrod", marginBottom:"20px",
     fontSize:{lg:45,md:40, sm:30, xs:32}}}>{t("trail1")}</Typography>
       <Box style={{ marginRight:"30px", marginLeft:"30px"}}  >
        <Grid style={{justifyContent:"center", alignItems:"center"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:1 }} >
  <Grid  item xs={12} sm={6} >
  <Box component="img" src={Safari}  sx={{ height: {lg:400, sm:300, xs:300 }, width: {lg:400, sm:300, xs:300 }}} />
  </Grid>
  <Grid item xs={12} sm={6}>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}, lineHeight:2}}>
  {t("trail1Text")}
 </Typography>
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
     fontSize:{lg:45,md:40, sm:30, xs:32}}}>{t("trail2")}</Typography>
       <Box style={{ marginRight:"30px", marginLeft:"30px"}}  >
        <Grid style={{justifyContent:"center", alignItems:"center"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:1 }} >
  <Grid  item xs={12} sm={6} >
  <Box component="img" src={Kayak}  sx={{ height: {lg:400, sm:300, xs:300 }, width: {lg:400, sm:300, xs:300 }}} />
  </Grid>
  <Grid item xs={12} sm={6}>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}, lineHeight:2}}>{t("trail2Text")}</Typography>
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
     fontSize:{lg:45,md:40, sm:30, xs:32}}}>{t("trail3")}</Typography>
       <Box style={{ marginRight:"30px", marginLeft:"30px"}}  >
        <Grid style={{justifyContent:"center", alignItems:"center"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:1 }} >
  <Grid  item xs={12} sm={6} >
  <Box component="img" src={Beach}  sx={{ height: {lg:400, sm:300, xs:300 }, width: {lg:400, sm:300, xs:300 }}} />
  </Grid>
  <Grid item xs={12} sm={6}>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}, lineHeight:2}}>{t("trail3Text")}</Typography>
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