"use client";
import { Box, Typography } from "@mui/material";
import Map from "./map";
import ContactDetails from "./contactDetails";

export default function ContactUs() {
  return (
    <Box sx={{ mx: "auto" }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        sx={{ textAlign: "center" , mt:2}}
      >
        Contact Us
      </Typography>

      {/* Stylish HR line */}
      <Box
        component="hr"
        sx={{
          width: 80,
          border: "none",
          height: 4,
          backgroundColor: "primary.main",
          borderRadius: 2,
          margin: "0 auto 24px auto",
        }}
      />
      <Map />
      <ContactDetails/>
    </Box>
  );
}
