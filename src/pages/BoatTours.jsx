import React from 'react'
import Dingy from "../img/gumenjak.jpg";
import { Box } from '@mui/material'

import Banner from '../components/Banner';

const BoatTours = () => {
  return (
    <div>
   <Box display="flex" alignItems="center" justifyContent="center">
    <Box 
  
    
    height="100vh" width="100vw" display="flex"  
      component="img"
      position="relative"
        alt="Speed boat."
        src={Dingy}
      />
     

     
      <Banner title="We have many custom routes"
      name="Send an email"
          />
          </Box>   
           
   
  
      </div>
  )
}

export default BoatTours