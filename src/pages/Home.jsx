import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

import Section from '../components/Section'

import { Box } from '@material-ui/core'


  
const Home = () => {

  return (
    <>
   <Box 
   
   display="flex" alignItems="center" justifyContent="center">
        <Hero />
        
            <Banner title="Many options to explore Dugi Otok"
           name="Make an enquiry"   />
          
       
              
</Box>
           
          <Section />

    </>
  );
}

export default Home