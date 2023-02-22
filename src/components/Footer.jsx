import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => (
  <Stack
    gap="10px"
    sx={{ alignItems: "center", bgcolor: "#484e57" }}
    flexWrap="wrap"
    px="10px"
    pt="24px"
  >
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" }, color: "white", mt: 2 }}
    >
      Natura Insula
    </Typography>
    <Typography
      variant="h3"
      sx={{ fontSize: { lg: "28px", xs: "20px" }, color: "white", mt: "3px" }}
    >
      Dragove 12 a
    </Typography>
    <Typography
      variant="h3"
      sx={{ fontSize: { lg: "28px", xs: "20px" }, color: "white", mt: "3px" }}
    >
      Dugi Otok Croatia
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        mb: 10,
      }}
    >
      <LocalPhoneIcon style={{ color: "white", fontSize: "200%" }} />
      <Typography
        variant="h3"
        sx={{ fontSize: { lg: "28px", xs: "20px" }, color: "white", mt: "3px" }}
      >
        +00385957116161
      </Typography>
    </Box>
  </Stack>
);

export default Footer;
