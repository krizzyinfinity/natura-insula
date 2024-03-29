
import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';

import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Kayak5 from "../img/kayak5.jpeg"
import Kayak4 from "../img/kayak4.jpg"
import Kayak2 from "../img/kayak2.jpg"
import Kayak6 from "../img/kayak6.jpeg"
import Kayak3 from "../img/kayak3.png"
import { useTranslation } from 'react-i18next';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
    {
      label: 'Veli Zal',
      imgPath:Kayak4,
    },
    {
      label: 'Veli zal',
      imgPath: Kayak5,
    },
        
    {
      label:"Golubinka cave",
      imgPath:Kayak2,
       
    },
    {
      label: 'Mezanj',
      imgPath: Kayak3,
    },
    {
      label: 'Veli zal',
      imgPath: Kayak6,
    },
  ];
  
const Section = () => {
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const {t, i18n} = useTranslation()
  
  React.useEffect(()=> {
const lang = navigator.language;
i18n.changeLanguage(lang);
  },[])
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
    <Box >
        <Typography variant="h5"
        sx={{textAlign:"center", fontSize:{lg:"69px", md:"89px", sm:"90px"}}}>
            {t("gallery")}
        </Typography>
    </Box>
    <Box sx={{ maxWidth:700, flexGrow: 1,  margin:"auto", width:{xs:300, sm:600, md:700, lg:700} }}>
    <Paper
      square
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 50,
        pl: 2,
        bgcolor: 'background.default',
      }}
    >
      <Typography>{images[activeStep].label}</Typography>
    </Paper>
    <AutoPlaySwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {images.map((step, index) => (
        <div key={step.label}>
          {Math.abs(activeStep - index) <= 2 ? (
            <Box
              component="img"
              sx={{
                height:{xl:550, lg:500, md:500, xs:350, sm:450},
    maxWidth: 700,
 
    overflow: 'hidden',
    display: 'block',
    width:"100vw"
                
              }}
              src={step.imgPath}
              alt={step.label}
            />
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
    <MobileStepper
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
         
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
         
        </Button>
      }
    />
  </Box>
  </>
  )
}

export default Section