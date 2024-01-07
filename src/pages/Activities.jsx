import React, { useEffect, useState } from "react";
import Background from '../img/transparent.jpg';
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
} from "@mui/material";
import Kayak from "../img/kayak1.jpg";
import Sup from "../img/sup.jfif";
import Diver from "../img/diver.jfif";
import Aquaglide from "../img/aquaglide.jfif";

import Bikes from "../img/bikes.jfif";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Sunset from "../img/sunset.jfif";
import IconButton from "@mui/material/IconButton";
import Safari2 from "../img/safari2.jpg";
import ShareIcon from "@mui/icons-material/Share";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const Watersports = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);

  const { t, i18n } = useTranslation();
  useEffect(() => {
    const lang = navigator.language;
    i18n.changeLanguage(lang);
  }, []);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.toString());
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  return (
    < Box  style={{backgroundPosition:"center",
      textAlign:"center",
      backgroundAttachment: "fixed",
      backgroundImage: `url(${Background})`
      }}>
 
    <Box
    
      sx={{
        display: "flex",
        flexDirection:"row",
      flexWrap:"wrap",
      
        justifyContent: "center",
        "& > :not(style)": {
          mt: { lg: 12, md: 10, xs: 10, sm: 9 },
          ml:{md:6, sm:3},
          mb:{xl:10, md:8, sm:8, xs:2}
         
        },
      }}
    >
      
     
      
        <Card
          elevation={9}
          sx={{
            width: { xl: 400, xs: 300, sm: 300, md: 400, lg: 400 },
            minHeight: 700,
          }}
        >
          {/* <CardHeader title={t("kayak")} subheader={t("daily")} /> */}
          <CardMedia component="img" height="285" image={Kayak} alt="Kayak" />
          <Typography  sx={{ fontSize: "240%", marginTop:"2px", }}
              variant="body2"
              color="text.secondary">{t("kayak")}</Typography>
          <CardContent>
            <Typography
              sx={{ fontSize: "140%" }}
              variant="body2"
              color="text.secondary"
            >
              {t("text1")}
            </Typography>
          </CardContent>
          
          
        </Card>
        <Card
          elevation={9}
          sx={{
            width: { xl: 400, xs: 300, sm: 300, md: 400, lg: 400 },
            minHeight: 700,
          }}
        >
          {/* <CardHeader title={t("kayak")} subheader={t("daily")} /> */}
          <CardMedia component="img" height="285" image={Safari2} alt="Kayak" />
          <Typography  sx={{ fontSize: "240%", marginTop:"2px", }}
              variant="body2"
              color="text.secondary">{t("kayak2")}</Typography>
          <CardContent>
            <Typography
              sx={{ fontSize: "140%" }}
              variant="body2"
              color="text.secondary"
            >
             Most popular costline spots are situated in the North-West of the island. Whether on or under the surface of the water. For many it is the best to have a guide but for those of you out there wishing to explore on your own, this is your ticket to freedom. We offer several routes with varying levels of difficulty
            </Typography>
          </CardContent>
          <Link to="/safari">
          <Button  style={{ backgroundColor:"#2E3B55", borderRadius:"2px", color:"white" }}> {t("more")}</Button>
          </Link>
        </Card>
      
        <Card
          elevation={9}
          sx={{
            width: { xl: 400, xs: 300, sm: 300, md: 400, lg: 400 },
            minHeight: 700,
          }}
        >
         
          <CardMedia component="img" height="285" image={Bikes} alt="bicycle" />
          <Typography  sx={{ fontSize: "240%", marginTop:"2px", }}
              variant="body2"
              color="text.secondary">{t("bike")}</Typography>
              
          <CardContent>
            <Typography
              sx={{ fontSize: "140%" }}
              variant="body2"
              color="text.secondary"
            >
              {t("text8")}
            </Typography>

           
              <Typography
                paragraph
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
              >
                {t("text9")}
              </Typography>
           
          </CardContent>
        </Card>
     
        <Card
          elevation={9}
          sx={{
            width: { xl: 400, xs: 300, sm: 300, md: 400, lg: 400 },
            minHeight: 700,
          }}
        >
          
          <CardMedia
            component="img"
            height="285"
            image={Sunset}
            alt="Sunset Veli Zal Dragove"
          />
             <Typography  sx={{ fontSize: "240%", marginTop:"2px", }}
              variant="body2"
              color="text.secondary">{t("sunset")}</Typography>
          <CardContent>
            <Typography
              sx={{ fontSize: "140%" }}
              variant="body2"
              color="text.secondary"
            >
              {t("text10")}
            </Typography>
          </CardContent>
         
        </Card>
     
      
      
        <Card
          elevation={9}
          sx={{
            width: { xl: 400, xs: 300, sm: 300, md: 400, lg: 400 },
            minHeight: 640,
          }}
        >
         
         
          <CardMedia
            component="img"
            height="285"
            image={Aquaglide}
            alt="Aquaglide rent"
          />
             <Typography  sx={{ fontSize: "240%", marginTop:"2px", }}
              variant="body2"
              color="text.secondary">{t("glide")}</Typography>
                 <Typography  sx={{ fontSize: "140%", marginTop:"2px", }}
              variant="body2"
              color="text.secondary">{t("beginners")}</Typography>
          <CardContent>
            <Typography
              sx={{ fontSize: "140%" }}
              variant="body2"
              color="text.secondary"
            >
              {t("text11")}
            </Typography>
          </CardContent>
          
        </Card>
        
        
          <Card
            elevation={9}
            sx={{
              width: { xl: 400, xs: 300, sm: 300, md: 400, lg: 400 },
              minHeight: 640,
            }}
          >
        
           
            <CardMedia
              component="img"
              height="285"
              image={Diver}
              alt="Diver for rent"
            />
               <Typography  sx={{ fontSize: "240%", marginTop:"2px", }}
              variant="body2"
              color="text.secondary">{t("lost")}</Typography>
                 <Typography  sx={{ fontSize: "140%", marginTop:"2px", }}
              variant="body2"
              color="text.secondary">{t("diver")}</Typography>
            <CardContent>
              <Typography
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
              >
                {t("diver2")}
              </Typography>
            </CardContent>
           
          </Card>
        
          <Card
            elevation={9}
            sx={{
              width: { xl: 400, xs: 300, sm: 300, md: 400, lg: 400 },
              minHeight: 640,
            }}
          >
           
            <CardMedia
              component="img"
              height="285"
              image={Sup}
              alt="Paddle board"
            />
               <Typography  sx={{ fontSize: "240%", marginTop:"2px", }}
              variant="body2"
              color="text.secondary">{t("sup")}</Typography>
            <CardContent>
              <Typography
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
              >
                {t("text12")}
              </Typography>
            </CardContent>
           
          </Card>
        </Box>
       
      </Box>
    
  );
};

export default Watersports;
