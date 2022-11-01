import React, { useRef, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {FormControl,
     InputLabel,
      Input,
       FormHelperText,
    TextField,
Button }from '@mui/material';
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
  
    <InputLabel htmlFor="my-input" sx={{fontSize:"40px"}}
  >Contact Form</InputLabel>
  
  
  <ThemeProvider theme={theme}>
  <TextField id="outlined-basic" label="Name"  
    name="user_name" color="neutral" variant="outlined"
  sx={{mb:2, mt:9}}>Name </TextField>
  <TextField sx={{mb:2}}id="outlined-basic" name="user_subject" 
  
   label="Your Title" color="neutral" variant="outlined">Your Subject </TextField>
  <TextField sx={{mb:2}}id="outlined-basic" label="Email"
  
   name="user_email" color="neutral" variant="outlined">Email </TextField>
  <TextField
  sx={{mb:2}}
        id="outlined-multiline-static"
        label="Your message"
        multiline
        rows={4}
        name="text"
        color="neutral"
        
        />
        <FormHelperText sx={{mb:2, fontSize:"15px"}} id="my-helper-text" >We will get back to you as soon as possible!</FormHelperText>
       
        <Button variant="contained" color="neutral" type="submit">Send</Button>
        {done && "Your email has been sent. Thank you!"}
        </ThemeProvider>
</FormControl>
</form>
</Box>
  )
}

export default Form