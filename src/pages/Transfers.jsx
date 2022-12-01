import React, { useRef } from 'react'

import VeliRat from "../img/veliRat.jpg"
import VeliZal from "../img/veliZal.jpg"
import Saharun from "../img/saharun.jpg"
import { Box, Paper, Typography, Button } from '@mui/material'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Transfers = () => {
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
            marginTop:-40, position:"absolute"}} >Private Transfers From Brbinj To Veli Zal</Typography>
    
       <Button sx={{width: {lg:"160px", xs: "100px", md:220, sm:"180px"},textAlign:"center", 
height: {lg:"60px", xs:"45px", md:90},
        fontSize: { lg: '15px', xs: "13px", md:25, sm:"16px" },
        backgroundColor:'#2E3B55', color:"white",
       marginTop:20, position:"absolute"}}  onClick={() => scrollDown(customSection)}
   >See more...
    </Button>
        
      
       
    
      
   </Paper>
     
      <Paper style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"center"}} >
      <img src={Saharun} alt="Saharun beach Dugi otok" className="sliderimg"
      />
      <Typography  variant="h5"
     sx={{
      fontSize: { lg: 40, xs: 20, md:45, sm:30 },
              color:"white",
            marginTop:-40, position:"absolute"}} >Private Transfers From Brbinj To Saharun</Typography>
     
    
    
   <Button sx={{width: {lg:"160px", xs: "100px", md:220, sm:"180px"},textAlign:"center", 
height: {lg:"60px", xs:"45px", md:90},
        fontSize: { lg: '15px', xs: '13px', md:25, sm:"16px" },
        backgroundColor:'#2E3B55', color:"white",
       marginTop:20, position:"absolute"}}  onClick={() => scrollDown(veliZalSection)}
   >See more...
    </Button>
    
     </Paper>
      <Paper style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <img src={VeliRat} alt="Lighthouse Dugi otok" className="sliderimg"/>
      
      <Typography  variant="h5"
     sx={{
      fontSize: { lg: 40, xs: 20, md:45, sm:30 },
              color:"white",
            marginTop:-40, position:"absolute"}} >Private Transfers From Brbinj To Veli Rat</Typography>
     
      <Button sx={{width: {lg:"160px", xs: "100px", md:220, sm:"180px"},textAlign:"center", 
height: {lg:"60px", xs:"45px", md:90},
        fontSize: { lg: '15px', xs: '13px', md:25, sm:"16px" },
        backgroundColor:'#2E3B55', color:"white",
       marginTop:20, position:"absolute"}}  onClick={() => scrollDown(saharunSection)}
   >See more...
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
    variant="h2" sx={{pt:10, fontSize:{lg:60, md:60, xs:35, sm:45}}} gutterBottom ref={customSection}>Brbinj to Veli Zal</Typography>
    <Typography  sx={{pl:5,pr:5, fontSize:{lg:20,md:20, sm:25, xs:18}, lineHeight:{lg:1.9, md:1.9, xs:1.5}, pb:10,}}>
        Veli Zal is the ultimate non commercialized beach, and is highly recommend for those wanting to reconnect with true unspoiled sea side. We offer private transfers from Brbinj
        and that is our most sought after route. Veli Zal is very famous 
        on the island and features white sand in the sea and beautiful white pebbles outside.
        We also rent sun loungers and umbrellas so you are comfortable enjoying your day at the beach. Our transparent canoes and ocean kayaks are there if you feel adventurous enough for one of our many safaris, 
        or if you just want to break away from the beach, and head to the small island called Mezanj directly opposite. The crystal clear water will make you want 
        to go snorkeling and that is the perfect opportunity to rent our crystal canoes,
        as you can paddle and stare at the beautiful sea bed. We also rent aquaglide equipment for windy days, and the near by beach bar provides beach goers with the perfect venue to enjoy a bite and a drink. 
    </Typography>
    <Box sx={{mb:5, alignItems:"center", justifyContent:"center", display:"flex"
  }}>
    <Button  onClick={() => scrollTop(topSection)}
   
     >
    Back to top
      </Button>
      
      </Box>
     
      <hr className='myruler' />
    <Typography sx={{pt:10,fontSize:{lg:60, md:60, xs:35, sm:45}}}  variant="h2" gutterBottom ref={saharunSection}>Brbinj to Veli Rat</Typography>
    <Typography sx={{pl:5,pr:5, fontSize:{lg:20,md:20, sm:25, xs:18}, lineHeight:{lg:1.9, md:1.9, xs:1.5}, pb:10,}}>
       Veli Rat has arguably the best campsite on Dugi otok, and is the nearest departing point, for those wishing to go snorkel around the famous St Michelle shipwreck. Veli Rat is also famous for its lighthouse, the tallest in the Adriatic and it truly is worth a visit. Add the two very cute peebles beaches beside the lighthouse and the spot's reputation as the best sunset this side of Italy, and you have all of the best reasons in the world to come visit it.
        
    </Typography>
    <Box sx={{mb:5,alignItems:"center", justifyContent:"center", display:"flex"}}>
    <Button  onClick={() => scrollTop(topSection)}
   
     >
    Back to top
      </Button>
      </Box>
      
      <hr className='myruler' />
    <Typography sx={{pt:10,fontSize:{lg:60, md:60, xs:35, sm:45}}} variant="h2" gutterBottom ref={veliZalSection}>Bozava or Brbinj to Saharun beach</Typography>
    <Typography sx={{pl:5,pr:5, fontSize:{lg:20,md:20, sm:25, xs:18}, lineHeight:{lg:1.9, md:1.9, xs:1.5}, pb:10,}}>
        Saharun is by far the most sought after destination on Dugi otok. It has aquired the reputation as one of Croatia's most beautiful beach. It is unique in that it is shallow and sandy.
         Nested in a beautiful bay, Saharun is really a couple's dream, but beware the crowds !
    </Typography>
    <Box sx={{ alignItems:"center", justifyContent:"center", display:"flex"}}>
    <Button  onClick={() => scrollTop(topSection)}
   
     >
    Back to top
      </Button>
      </Box>
</Box>
</>
  )
}

export default Transfers