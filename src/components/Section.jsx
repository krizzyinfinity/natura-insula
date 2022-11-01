
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
import Image7 from "../img/image7.jpeg"
import Kayak4 from "../img/kayak4.jpg"
import Kayak2 from "../img/kayak2.jpg"
import Kayak3 from "../img/kayak3.png"
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
    {
      label: 'Veli Zal',
      imgPath:Kayak4,
    },
    {
      label: 'Mezanj',
      imgPath: Image7,
    },
        
    {
      label: 'Golubinka cave',
      imgPath:Kayak2,
       
    },
    {
      label: 'Veli zal',
      imgPath: Kayak3,
    },
  ];
  
const Section = () => {
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
            Gallery
        </Typography>
    </Box>
    <Box sx={{ maxWidth:{lg: 700, md:700, xs: 300}, flexGrow: 1,  margin:"auto" }}>
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
                height: 455,
                display: 'block',
                maxWidth: 1000,
                overflow: 'hidden',
                width: '100%',
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
          Next
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
          Back
        </Button>
      }
    />
  </Box>
  </>
  )
}

export default Section