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
            marginTop:-20, position:"absolute"}} >Private Transfers From Brbinj To Veli Zal</Typography>
    
       <Button sx={{width: {lg:"160px", xs: "100px", md:220, sm:"180px"},textAlign:"center", 
height: {lg:"60px", xs:"45px", md:90},
        fontSize: { lg: '15px', xs: 10, md:25, sm:"16px" },
        backgroundColor:'#2E3B55', color:"white",
       marginTop:30, position:"absolute"}}  onClick={() => scrollDown(customSection)}
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
            marginTop:-20, position:"absolute"}} >Private Transfers From Brbinj To Saharun</Typography>
     
    
    
   <Button sx={{width: {lg:"160px", xs: "100px", md:220, sm:"180px"},textAlign:"center", 
height: {lg:"60px", xs:"45px", md:90},
        fontSize: { lg: '15px', xs: '13px', md:25, sm:"16px" },
        backgroundColor:'#2E3B55', color:"white",
       marginTop:30, position:"absolute"}}  onClick={() => scrollDown(veliZalSection)}
   >See more...
    </Button>
    
     </Paper>
      <Paper style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <img src={VeliRat} alt="Lighthouse Dugi otok" className="sliderimg"/>
      
      <Typography  variant="h5"
     sx={{
      fontSize: { lg: 40, xs: 20, md:45, sm:30 },
              color:"white",
            marginTop:-20, position:"absolute"}} >Private Transfers From Brbinj To Veli Rat</Typography>
     
      <Button sx={{width: {lg:"160px", xs: "100px", md:220, sm:"180px"},textAlign:"center", 
height: {lg:"60px", xs:"45px", md:90},
        fontSize: { lg: '15px', xs: '13px', md:25, sm:"16px" },
        backgroundColor:'#2E3B55', color:"white",
       marginTop:30, position:"absolute"}}  onClick={() => scrollDown(saharunSection)}
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
        Dugi Otok is 44 kilometers long and there is a lot to see
        and a lot to explore. We offer private transfers from Brbinj to Veli Zal 
        beach and that is our most sought after route. Veli Zal is very famous beach 
        on the island and features white sand in the sea and beautiful white pebbles outside.
        We rent sun loungers and umbrellas on the beach so you are comfortable enjoying the summer time
        and we also rent transparent and ocean kayaks if you feel adventurous enough or 
        just want to break away from the beach. There is a small island called Mezanj just in front of the beach and 
        that is a great opportunity for you to rent a kayak and go exploring. With crystal clear sea like that you might want 
        to go snorkeling and that is also an opportunity to rent our crystal kayaks
        as you can paddle and stare at the beautiful sea bed. Beside that, we also rent aquaglide equipment for windy days.
        There is a beach bar on the beach that offers great food and drink. There is also a fast food near by if you don't mind
        jumping in your car to get the food. 
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
       This transfer is also amongst our most sought after route and we can offer it to you at 
       affordable price as well. We can also all of our transfers with kayaking. Veli Rat is actually the biggest 
       lighthouse in Adriatic sea and is very worth visiting. Beside the lighthouse there are two very cute pebbles beaches 
       and a very famous shipwreck St Michelle which is acessible only by sea. Veli Rat is famous 
       for a beautiful sunset and there is also an option you to 
       rent kayaks from us and enjoy the lovely colours 
       in privacy. The spot is renowed for weddings and wedding photosessions as well as 
       many couples go there to enjoy the view.
        Like mentioned in previous sections, we can also offer you custom routes 
       transfers to multiple locations in one day. If you are in Zadar and 
       want to see Dugi Otok in only one day, you can reach to us 
       and we can offer you affordable transfers for Dugi Otok sightseeing
        
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
        Bozava to Saharun beach is a very popular transfer and we can offer it to you at 
        affordable price. Not to say that you can be anywhere on the island and ask a transfer 
        to Saharun beach. You can refer to our other sections to see what kind of transfers we offer. Basically,
        we can drive you everywhere on the north side of the island. Saharun is the most famous beach on the island
        and everyone wants to see it in person. You don't actually have to be in Bozava and want to see Saharun beach but you do 
        have to be on the north side of the island. We can offer you custom made transfers as well in case you want to see the main attractions on the
        island in one day, just send us a query and we can come up with something
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