import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { useTranslation} from 'react-i18next';
import Section from "../components/Section";

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

      <Section />
     
    </>
  );
};

export default Home;
