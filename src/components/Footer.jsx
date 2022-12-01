import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const Footer = () => (
 
  <Box bgcolor="#484e57">
    
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
 
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' }, color:"white", mt:2}}  textAlign="center">Natura Insula company</Typography>
    <Typography variant="h3" sx={{ fontSize: { lg: '28px', xs: '20px' }, color:"white" }} mt="3px" textAlign="center" >Dragove 12 a</Typography>
    <Typography variant="h3" sx={{ fontSize: { lg: '28px', xs: '20px' }, color:"white" }} mt="3px" textAlign="center" >Dugi Otok Croatia</Typography>
    <Typography variant="h3" sx={{ fontSize: { lg: '28px', xs: '20px' } , color:"white", pb:3}} mt="3px" textAlign="center" >Phone: +00385957116161</Typography>
  
  </Box>
 
);

export default Footer;