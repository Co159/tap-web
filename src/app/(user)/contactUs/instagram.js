"use client";
import React from "react";
import { Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const InstagramActionButton = ({
  username = "your_username_here", // just username, not full URL
  label = "Instagram",
}) => {
  const handleInstagramClick = () => {
    const url = `https://instagram.com/${username}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      variant="contained"
      startIcon={<InstagramIcon />}
      onClick={handleInstagramClick}
      sx={{ bgcolor: "#fde2e4", color: "#000", minWidth: 120 }}
    >
      {label}
    </Button>
  );
};

export default InstagramActionButton;
