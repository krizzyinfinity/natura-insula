import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { useTranslation} from 'react-i18next';
import Section from "../components/Section";
import YouTube from "react-youtube";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";

const Home = () => {
  const {t, i18n} = useTranslation()
  useEffect(()=> {
const lang = navigator.language;
i18n.changeLanguage(lang);
  },[])
  const lang = navigator.language;
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Hero />

        <Banner
          title={t("options")}
          name={t("enquiry")}
        />
      </Box>
      <Box sx={{paddingBottom:40, paddingTop:40, height:"70vh"
    }}>
      <iframe width="70%" height="100%" src="https://www.youtube.com/embed/xCBlj0s7yxA?si=ih9DRlKT9HX0lSkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      </Box>

      <Section />
     
    </>
  );
};

export default Home;
