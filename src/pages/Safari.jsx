import React, { useEffect } from 'react'
import { useTranslation} from 'react-i18next';

import {
    Card,
    Box,
    Typography,
    CardHeader,
    styled,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Snackbar,
    Button,
  } from "@mui/material";
import Background from '../img/safari.jpg';
import { Link } from 'react-router-dom';

const Safari = () => {
    const {t, i18n} = useTranslation()
  useEffect(()=> {
const lang = navigator.language;
i18n.changeLanguage(lang);
  },[])
  const lang = navigator.language;
  return (
    <Box style={{backgroundPosition:"center",
    textAlign:"center",
    
    backgroundSize:"cover",
    backgroundAttachment: "fixed",
    backgroundImage: `url(${Background})`,
    backgroundRepeat:"no-repeat",
  
    }}>
         <Box
    
    sx={{
      display: "flex",
      flexDirection:"row",
    flexWrap:"wrap",
    
      justifyContent: "center",
      "& > :not(style)": {
        mt: { lg: 32, md: 35, xs: 10, sm: 30 },
        ml:{md:6, sm:3},
        mb:{xl:26, md:8, sm:15, xs:3}
       
      },
      
    }}
  >
    <Card
          elevation={9}
          sx={{
            width: { xl: 400, xs: 300, sm: 330, md: 400, lg: 400 },
          minHeight: 300, display:"flex", alignItems:"center", justifyContent:"center"
          }}
        >
          {/* <CardHeader title={t("kayak")} subheader={t("daily")} /> */}
         <Box >
          <Typography  sx={{ fontSize: "240%" }}
              variant="body2"
              color="text.secondary">ONE DAY TOURS</Typography>
            
          <CardContent>
            <Typography
              sx={{ fontSize: "140%" }}
              variant="body2"
              color="text.secondary"
            >
              Adventure starts from Veli zal beach
            </Typography>
            <Link to="/oneDayTours">
            <Button  style={{ backgroundColor:"#2E3B55", borderRadius:"2px", color:"white",marginTop:"40px" }}> {t("more")}</Button>
            </Link>
          </CardContent>

          </Box>
          </Card>
          <Card
          elevation={9}
          sx={{
            width: { xl: 400, xs: 300, sm: 330, md: 400, lg: 400 },
            minHeight:300, display:"flex", alignItems:"center", justifyContent:"center"
          }}
        >
          {/* <CardHeader title={t("kayak")} subheader={t("daily")} /> */}
         <Box>
          <Typography  sx={{ fontSize: "240%", marginTop:"2px", }}
              variant="body2"
              color="text.secondary">TWO DAYS TOURS</Typography>
          <CardContent>
            <Typography
              sx={{ fontSize: "140%" }}
              variant="body2"
              color="text.secondary"
            >
              Tours that include an accommodation
            </Typography>
            <Link to="/twoDaysTours">
            <Button  style={{ backgroundColor:"#2E3B55", borderRadius:"2px", color:"white",marginTop:"40px"  }}> {t("more")}</Button>
          </Link>
          </CardContent>
          </Box>
          </Card>
    </Box>
    </Box>
  )
}

export default Safari