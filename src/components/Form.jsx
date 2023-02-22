import React, { useEffect, useRef, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {FormControl,
     InputLabel,
      Input,
       FormHelperText,
    TextField,
Button }from '@mui/material';
import { useTranslation} from 'react-i18next';
import { Box } from '@material-ui/core';
import emailjs from "@emailjs/browser";

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#2E3B55',
      contrastText: '#fff',
    },
  },
});


const Form = () => {
  const {t, i18n} = useTranslation()
  useEffect(()=> {
const lang = navigator.language;
i18n.changeLanguage(lang);
  },[])
    const [done, setDone] = useState(false);
  const formRef = useRef();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
      .sendForm(
        "service_9t2ha7i",
        "template_jjutr0x",
        formRef.current,
        "user_A1ycZIK8gTj4NAhtnExZG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
       
      };
  return (
    <Box 
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    marginBottom="20px">
     <form onSubmit={handleSubmit} ref={formRef} > 
    <FormControl >
  
    <InputLabel htmlFor="my-input" sx={{fontSize:{xs:25, sm:30, md:27, lg:27, xl:27}}}
  >{t("form")}</InputLabel>
  
  
  <ThemeProvider theme={theme}>
  <TextField id="outlined-basic" label={t("name")}  
    name="user_name" color="neutral" variant="outlined"
  sx={{mb:2, mt:9}}>{t("name")} </TextField>
  <TextField sx={{mb:2}}id="outlined-basic" name="user_subject" 
  
   label={t("title")} color="neutral" variant="outlined" />
  <TextField sx={{mb:2}}id="outlined-basic" label={t("email")}
  
   name="user_email" color="neutral" variant="outlined" />
  <TextField
  sx={{mb:2}}
        id="outlined-multiline-static"
        label={t("message")}
        multiline
        rows={4}
        name="text"
        color="neutral"
        
        />
        <FormHelperText sx={{mb:2, fontSize:"15px"}} id="my-helper-text" >{t("soon")}</FormHelperText>
       
        <Button variant="contained" color="neutral" type="submit">{t("send2")}</Button>
        {done && (t("emailSent"))}
        </ThemeProvider>
</FormControl>
</form>
</Box>
  )
}

export default Form