"use client";
import React from "react";
import { Box } from "@mui/material";

const Map = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "95%",
        mx: "auto", 
        paddingTop: "56.25%", // 16:9 aspect ratio (height = width * 9 / 16)
        borderRadius: 2,
        overflow: "hidden",
        my: 2,
      }}
    >
      <Box
        component="iframe"
        title="Google Map Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.6323375046727!2d72.42875707477825!3d23.292805406190745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c249c0a4a200d%3A0x72e6044172c9284e!2s35%2C%20Arise%20Pk%20Rd%2C%20Dhanot%2C%20Gujarat%20382715!5e0!3m2!1sen!2sin!4v1741598146079!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </Box>
  );
};

export default Map;
