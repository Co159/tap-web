"use client";
import React from "react";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppActionButton = ({
  phone = "91xxxxxxxxxx",
  message = "Hello!",
  label = "WhatsApp",
}) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      variant="contained"
      startIcon={<WhatsAppIcon />}
      onClick={handleWhatsAppClick}
      sx={{ bgcolor: "#e0f7fa", color: "#000", minWidth: 120 }}
    >
      {label}
    </Button>
  );
};

export default WhatsAppActionButton;
