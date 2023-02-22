import React, { useEffect, useState } from "react";
import Dingy from "../img/gumenjak.jpg";

import { Box } from "@mui/material";
import { useTranslation} from 'react-i18next';
import Banner from "../components/Banner";

const BoatTours = () => {
  
  const {t, i18n} = useTranslation()
  useEffect(()=> {
    
const lang = navigator.language;
i18n.changeLanguage(lang);

  },[])
  const lang = navigator.language;
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box
       
      
        
          height="100vh"
          
          width="100vw"
          display="flex"
          component="img"
          position="relative"
          alt="Speed boat."
          src={Dingy}
        />

        <Banner title={t("routes")} name={t("send")} />
      </Box>
    </div>
  );
};

export default BoatTours;
