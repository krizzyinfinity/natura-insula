import React, { useEffect, useState } from "react";
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

import ShareIcon from "@mui/icons-material/Share";
import { useTranslation } from "react-i18next";
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
    <Box>
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
          <CardHeader title={t("kayak")} subheader={t("daily")} />
          <CardMedia component="img" height="185" image={Kayak} alt="Kayak" />
          <CardContent>
            <Typography
              sx={{ fontSize: "140%" }}
              variant="body2"
              color="text.secondary"
            >
              {t("text1")}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="share">
              <ShareIcon onClick={handleClick} />
              <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message={t("copied")}
              />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="h5 " sx={{ fontWeight: "bold" }} paragraph>
                {t("safaris")}
              </Typography>
              <Typography
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
                paragraph
              >
                {" "}
                {t("option1")}
              </Typography>
              <Typography
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
                paragraph
              >
                {t("text2")}
              </Typography>
              <Typography
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
                paragraph
              >
                {t("option2")}
              </Typography>
              <Typography
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
                paragraph
              >
                {t("text3")}
              </Typography>
              <Typography
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
                paragraph
              >
                {t("option3")}
              </Typography>
              <Typography
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
                paragraph
              >
                {t("text4")}
              </Typography>
              <Typography
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
                paragraph
              >
                {t("option4")}
              </Typography>
              <Typography
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
                paragraph
              >
                {t("text5")}
              </Typography>
              <Typography
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
                paragraph
              >
                <span style={{ fontWeight: "bold" }}>{t("note")}</span>{" "}
                {t("text6")}
                <br></br>
                <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  {t("text7")}
                </span>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      
        <Card
          elevation={9}
          sx={{
            width: { xl: 400, xs: 300, sm: 300, md: 400, lg: 400 },
            minHeight: 700,
          }}
        >
          <CardHeader title={t("bike")} subheader={t("daily")} />
          <CardMedia component="img" height="185" image={Bikes} alt="bicycle" />
          <CardContent>
            <Typography
              sx={{ fontSize: "140%" }}
              variant="body2"
              color="text.secondary"
            >
              {t("text8")}
            </Typography>

            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <ShareIcon onClick={handleClick} />
                <Snackbar
                  open={open}
                  onClose={() => setOpen(false)}
                  autoHideDuration={2000}
                  message={t("copied")}
                />
              </IconButton>

              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick1}
                aria-expanded={expanded1}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded1} timeout="auto" unmountOnExit>
              <Typography
                paragraph
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
              >
                {t("text9")}
              </Typography>
            </Collapse>
          </CardContent>
        </Card>
     
        <Card
          elevation={9}
          sx={{
            width: { xl: 400, xs: 300, sm: 300, md: 400, lg: 400 },
            minHeight: 700,
          }}
        >
          <CardHeader title={t("sunset")} subheader={t("enjoy")} />
          <CardMedia
            component="img"
            height="185"
            image={Sunset}
            alt="Sunset Veli Zal Dragove"
          />
          <CardContent>
            <Typography
              sx={{ fontSize: "140%" }}
              variant="body2"
              color="text.secondary"
            >
              {t("text10")}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="share">
              <ShareIcon onClick={handleClick} />
              <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message={t("copied")}
              />
            </IconButton>
          </CardActions>
        </Card>
     
      
      
        <Card
          elevation={9}
          sx={{
            width: { xl: 400, xs: 300, sm: 300, md: 400, lg: 400 },
            minHeight: 640,
          }}
        >
         
          <CardHeader title={t("glide")} subheader={t("beginners")} />
          <CardMedia
            component="img"
            height="185"
            image={Aquaglide}
            alt="Aquaglide rent"
          />
          <CardContent>
            <Typography
              sx={{ fontSize: "140%" }}
              variant="body2"
              color="text.secondary"
            >
              {t("text11")}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="share">
              <ShareIcon onClick={handleClick} />
              <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message={t("copied")}
              />
            </IconButton>
          </CardActions>
        </Card>
        
        
          <Card
            elevation={9}
            sx={{
              width: { xl: 400, xs: 300, sm: 300, md: 400, lg: 400 },
              minHeight: 640,
            }}
          >
        
            <CardHeader title={t("lost")} subheader={t("diver")} />
            <CardMedia
              component="img"
              height="185"
              image={Diver}
              alt="Diver for rent"
            />
            <CardContent>
              <Typography
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
              >
                {t("diver2")}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <ShareIcon onClick={handleClick} />
                <Snackbar
                  open={open}
                  onClose={() => setOpen(false)}
                  autoHideDuration={2000}
                  message={t("copied")}
                />
              </IconButton>
            </CardActions>
          </Card>
        
          <Card
            elevation={9}
            sx={{
              width: { xl: 400, xs: 300, sm: 300, md: 400, lg: 400 },
              minHeight: 640,
            }}
          >
            <CardHeader title={t("sup")} subheader={t("daily")} />
            <CardMedia
              component="img"
              height="185"
              image={Sup}
              alt="Paddle board"
            />
            <CardContent>
              <Typography
                sx={{ fontSize: "140%" }}
                variant="body2"
                color="text.secondary"
              >
                {t("text12")}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <ShareIcon onClick={handleClick} />
                <Snackbar
                  open={open}
                  onClose={() => setOpen(false)}
                  autoHideDuration={2000}
                  message={t("copied")}
                />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
      </Box>
    
  );
};

export default Watersports;
