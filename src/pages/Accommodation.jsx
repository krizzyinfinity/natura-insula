import { Box, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'

import {Link} from '@material-ui/core'
import { useTranslation } from 'react-i18next';
export const Accommodation = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const lang = navigator.language;
    i18n.changeLanguage(lang);
  }, []);
  return (
    <Box className='div' style={{display:"flex",width:"100%", flexDirection:"column",backgroundPosition: "50% 0",
    alignItems:"center",justifyContent:"center", height:"100vh", margin:0 }} >
    
 
    <Typography style={{fontSize:"240%", m:20, fontWeight:"bold"}}>{t("accommodation")}</Typography>
    <Typography style={{fontSize:"160%", m:20, fontWeight:"bold"}} >{t("acc1")}</Typography>
    <Typography style={{fontSize:"160%", m:20, fontWeight:"bold"}} >{t("acc2")}</Typography>
  <Typography style={{fontSize:"160%", m:20, fontWeight:"bold"}}variant="h5">{t("acc3")} <Link style={{color:"white"}} href="https://apartmentsruza.com">{t("acc4")}</Link></Typography>
 </Box>

 
  )
}
