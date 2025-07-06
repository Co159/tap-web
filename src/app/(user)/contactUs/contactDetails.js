"use client";
import React from "react";
import {
  Box,
  Typography,
  Stack,
  Link,
  Button,
  IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppActionButton from "./whatsapp";
import InstagramActionButton from "./instagram";

export default function ContactDetails() {
  return (
    <Box sx={{ px: 3, py: 2 }}>
      {/* Working Hours */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Working Hours
      </Typography>
      {[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ].map((day) => (
        <Typography key={day} variant="body2" sx={{ mb: 0.5 }}>
          <strong>{day}</strong> : 11.30 AM – 11.30 PM
        </Typography>
      ))}

      {/* Address */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Bheed Bhaad Snacks
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Near Bombay Garments, Navjivan Mil-2 Road, Dahod, Gujarat, India –
          389151
        </Typography>
      </Box>

      {/* Contact Info */}
      <Stack spacing={1} sx={{ mt: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <PhoneIcon color="primary" />
          <Typography variant="body2">+91 9712504666</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <PhoneIcon color="primary" />
          <Typography variant="body2">+91 8200704202</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <EmailIcon color="action" />
          <Typography variant="body2">bheedbhaaddahod29@gmail.com</Typography>
        </Stack>
      </Stack>

      {/* Links */}
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{ mt: 4, mb: 2, textAlign: "center" }}
      >
        Links
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
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        spacing={2}
        useFlexGap
      >
        <WhatsAppActionButton phone="918200704202" />

        <InstagramActionButton username="bheedbhaadsnacks" />
      </Stack>
    </Box>
  );
}
