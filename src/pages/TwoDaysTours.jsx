import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Safari from "../img/trail.PNG"
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
const TwoDaysTours = () => {
    const {t, i18n} = useTranslation()
  useEffect(()=> {
const lang = navigator.language;
i18n.changeLanguage(lang);
  },[])
  const lang = navigator.language;
   
  return (
    <Box >
        <Typography variant='h2' sx={{marginTop:"100px", fontWeight:"bold", color:"darkgoldenrod", marginBottom:"20px",
     fontSize:{lg:45,md:40, sm:30, xs:32}}}>{t("trail4")}</Typography>
       <Box style={{ marginRight:"30px", marginLeft:"30px"}}  >
        <Grid style={{justifyContent:"center", alignItems:"center"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:1 }} >
  <Grid  item xs={12} sm={6} >
  <Box component="img" src={Safari}  sx={{ height: {lg:400, sm:300, xs:300 }, width: {lg:400, sm:300, xs:300 }}} />
  </Grid>
  <Grid item xs={12} sm={6}>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>{t("trail4Text")}</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}, fontWeight:"bold"}}>{t("day1")}</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>{t("day1Text")}</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}, fontWeight:"bold"}}>{t("day2")}</Typography>
  <Typography sx={{ fontSize:{lg:20,md:20, sm:20, xs:18}}}>{t("day2Text")}</Typography>
</Grid>
  
 
</Grid>
<Grid style={{ marginTop:"50px"}}   container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:1 }} >
<Grid style={{backgroundColor:"grey", padding:"10px"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>{t("duration")}</Typography>
    <Typography  style={{color:"white"}} variant='h6'>{t("duration4")}</Typography>
    </Grid>
    <Grid style={{backgroundColor:"darkgoldenrod"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>{t("distance")}</Typography>
    <Typography  style={{color:"white"}} variant='h6'>{t("distance4")}</Typography>
    </Grid>
    <Grid style={{backgroundColor:"grey"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>{t("difficulty")}</Typography>
    <Typography  style={{color:"white"}} variant='h6'>{t("hard")}</Typography>
    </Grid>
    <Grid style={{backgroundColor:"darkgoldenrod"}}  item xs={12}sm={3}>
    <Typography  style={{color:"white"}} variant='h5'>{t("departure")}</Typography>
    <Typography style={{color:"white"}} variant='h6'>{t("departure1")}</Typography>
    </Grid>
    </Grid>
    <Box sx={{display:"flex", justifyContent:{lg:"flex-start", xs:"center"}, flexDirection:"column",
    marginTop:"20px", alignItems:{lg:"flex-start", xs:"center"}, marginLeft:{lg:20, xs:5}}}>
        <Typography style={{color:"darkgoldenrod"}} variant='h4'>{t("usefulInfo")}</Typography>
        <Typography variant='h6' style={{marginBottom:"15px"}}>{t("including")}</Typography>
        <Typography>{t("allEquipment")}</Typography>
       
       <Typography>{t("pickUp")}</Typography>
       <Typography>{t("lunch2")}</Typography>
       <Typography>{t("breakfast")}</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>{t("what")}</Typography>
       <Typography>{t("swimsuit")}</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>{t("safety")}</Typography>
       <Typography>{t("safety3")}</Typography>
       <Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>{t("weather")}</Typography>
       <Typography>{t("weather2")}</Typography>
       <Typography>{t("weather3")}</Typography>
 
<Typography style={{marginBottom:"15px", marginTop:"15px"}} variant='h6'>{t("meeting")}</Typography>
<Typography>Brbinj/Bozava port</Typography>
<Typography style={{color:"darkgoldenrod", marginTop:20}} variant='h4'>{t("pricing")}</Typography>

<Typography variant='h6' style={{marginBottom:"15px"}}><span style={{fontWeight:"bold"}}>100Є {t("person")}</span>  {t("tent")}</Typography>

<Typography variant='h6' style={{marginBottom:"15px"}}><span style={{fontWeight:"bold"}}>{t("between")} 130Є and 150Є {t("person")} </span>{t("studio")}</Typography>


<Typography style={{color:"darkgoldenrod", marginTop:20}} variant='h4'>{t("booking")}</Typography>
<Typography variant='h6' style={{marginBottom:"15px"}}>  {t("queries")}
<ButtonMailto  label={t("email")} mailto="mailto:signoretjules@gmail.com" /></Typography>
       </Box>
</Box>

   
</Box>
   
  )
}

export default TwoDaysTours