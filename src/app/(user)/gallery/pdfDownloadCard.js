"use client";
import React from "react";
import { Box, Typography, Card, CardActionArea } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const PDFDownloadCard = ({ title, fileUrl }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 2,
        bgcolor: "#f9f9f9",
        overflow: "hidden",
        textAlign: "center",
        p: 2,
      }}
    >
      <CardActionArea onClick={handleDownload}>
        <Box
          sx={{
            bgcolor: "#EAEFEF",
            borderRadius: 2,
            p: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DownloadIcon sx={{ fontSize: 60, color: "#000" }} />
        </Box>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1 }}>
          {title}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default PDFDownloadCard;
