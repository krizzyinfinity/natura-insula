import React, { useEffect, useRef } from 'react'

import VeliRat from "../img/veliRat.jpg"
import VeliZal from "../img/veliZal.jpg"
import Saharun from "../img/saharun.jpg"
import { Box, Paper, Typography, Button } from '@mui/material'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useTranslation } from 'react-i18next'


const Transfers = () => {
  const {t, i18n} = useTranslation()
  useEffect(()=> {
const lang = navigator.language;
i18n.changeLanguage(lang);
  },[])
    const scrollDown = (ref) => {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth',
        });
      };
      const scrollTop = (ref) => {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth',
        });
      };
   const customSection = useRef();
   const veliZalSection = useRef();
  const saharunSection = useRef();
  const topSection = useRef();
  return (
    <>
    <Box ref={topSection}
     height="100vh" width="100vw"  
     display="flex" alignItems="center" justifyContent="center"
    
    >
      
    <AliceCarousel autoPlay={true} disableDotsControls
    disableButtonsControls={true}
    infinite={true} autoPlayInterval="3000"
     
    >
     
      <Paper  style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <img 
      src={VeliZal} alt="Veli zal beach dugi otok" className="sliderimg" />
     <Typography  variant="h5"
     sx={{
             fontSize: { lg: 40, xs: 20, md:45, sm:30 },
              color:"white",
            marginTop:-40, position:"absolute"}} >{t("transfers1")}</Typography>
    
       <Button sx={{width: {lg:"160px", xs: "100px", md:220, sm:"180px"},textAlign:"center", 
height: {lg:"60px", xs:"45px", md:90},
        fontSize: { lg: '15px', xs: "13px", md:25, sm:"16px" },
        backgroundColor:'#2E3B55', color:"white",
       marginTop:20, position:"absolute"}}  onClick={() => scrollDown(customSection)}
   >{t("more")}
    </Button>
        
      
       
    
      
   </Paper>
     
      <Paper style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"center"}} >
      <img src={Saharun} alt="Saharun beach Dugi otok" className="sliderimg"
      />
      <Typography  variant="h5"
     sx={{
      fontSize: { lg: 40, xs: 20, md:45, sm:30 },
              color:"white",
            marginTop:-40, position:"absolute"}} >{t("transfers2")}</Typography>
     
    
    
   <Button sx={{width: {lg:"160px", xs: "100px", md:220, sm:"180px"},textAlign:"center", 
height: {lg:"60px", xs:"45px", md:90},
        fontSize: { lg: '15px', xs: '13px', md:25, sm:"16px" },
        backgroundColor:'#2E3B55', color:"white",
       marginTop:20, position:"absolute"}}  onClick={() => scrollDown(veliZalSection)}
   >{t("more")}
    </Button>
    
     </Paper>
      <Paper style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <img src={VeliRat} alt="Lighthouse Dugi otok" className="sliderimg"/>
      
      <Typography  variant="h5"
     sx={{
      fontSize: { lg: 40, xs: 20, md:45, sm:30 },
              color:"white",
            marginTop:-40, position:"absolute"}} >{t("transfers3")}</Typography>
     
      <Button sx={{width: {lg:"160px", xs: "100px", md:220, sm:"180px"},textAlign:"center", 
height: {lg:"60px", xs:"45px", md:90},
        fontSize: { lg: '15px', xs: '13px', md:25, sm:"16px" },
        backgroundColor:'#2E3B55', color:"white",
       marginTop:20, position:"absolute"}}  onClick={() => scrollDown(saharunSection)}
   >{t("more")}
    </Button>
      </Paper>
      
</AliceCarousel>
{/* <Banner
      name="Ask for more info" title="Custom routes tailored to your needs"
     sx={{mt:7}}
     /> 
        */}

</Box>
<Box >
    <Typography 
    variant="h2" sx={{pt:10, fontSize:{lg:60, md:60, xs:35, sm:45}}} gutterBottom ref={customSection}>{t("transfers6")}</Typography>
    <Typography  sx={{pl:5,pr:5, fontSize:{lg:20,md:20, sm:25, xs:18}, lineHeight:{lg:1.9, md:1.9, xs:1.5}, pb:10,}}>
        {t("text13")}
    </Typography>
    <Box sx={{mb:5, alignItems:"center", justifyContent:"center", display:"flex"
  }}>
    <Button  onClick={() => scrollTop(topSection)}
   
     >
    {t("top")}
      </Button>
      
      </Box>
     
      <hr className='myruler' />
    <Typography sx={{pt:10,fontSize:{lg:60, md:60, xs:35, sm:45}}}  variant="h2" gutterBottom ref={saharunSection}>{t("transfers5")}</Typography>
    <Typography sx={{pl:5,pr:5, fontSize:{lg:20,md:20, sm:25, xs:18}, lineHeight:{lg:1.9, md:1.9, xs:1.5}, pb:10,}}>
      {t("text14")}
        
    </Typography>
    <Box sx={{mb:5,alignItems:"center", justifyContent:"center", display:"flex"}}>
    <Button  onClick={() => scrollTop(topSection)}
   
     >
    {t("top")}
      </Button>
      </Box>
      
      <hr className='myruler' />
    <Typography sx={{pt:10,fontSize:{lg:60, md:60, xs:35, sm:45}}} variant="h2" gutterBottom ref={veliZalSection}>{t("transfers4")}</Typography>
    <Typography sx={{pl:5,pr:5, fontSize:{lg:20,md:20, sm:25, xs:18}, lineHeight:{lg:1.9, md:1.9, xs:1.5}, pb:10,}}>
       {t("saharun")}
    </Typography>
    <Box sx={{ alignItems:"center", justifyContent:"center", display:"flex"}}>
    <Button  onClick={() => scrollTop(topSection)}
   
     >
    {t("top")}
      </Button>
      </Box>
</Box>
</>
  )
}

export default Transfers