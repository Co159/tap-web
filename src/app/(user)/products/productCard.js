"use client";
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const ProductCard = ({ image, name, price, whatsappPhone, inquiryLink }) => {
  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in ${name}.`;
    const encodedMsg = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappPhone}?text=${encodedMsg}`;
    window.open(url, "_blank");
  };

  const handleInquiryClick = () => {
    window.location.href = inquiryLink;
  };

  return (
    <Card sx={{ width: "100%",height: "100%", borderRadius: 2, p: 1, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="100"
        image={image}
        alt={name}
        sx={{
          objectFit: "cover",
          borderRadius: 2,
          aspectRatio: "1 / 1",
          width: "100%",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          ₹ {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="column" spacing={1}>
          <Button
            variant="outlined"
            startIcon={<ContactMailIcon />}
            onClick={handleInquiryClick}
          >
            Inquiry
          </Button>
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsAppClick}
            sx={{ bgcolor: "#25D366", color: "#fff" }}
          />
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
