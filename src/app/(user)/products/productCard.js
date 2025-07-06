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
    <Card sx={{ maxWidth: 300, borderRadius: 2, p: 1, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={name}
        sx={{ objectFit: "cover", borderRadius: 2 }}
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
        <Stack direction="row" spacing={1}>
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
            
          {/* </Button> */}
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
