"use client";
import { Grid } from "@mui/material";
import ProductCard from "./productCard";

export default function Product() {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ m: 2 }}>
      <Grid item xs={12} sm={6} md={4}>
        <ProductCard
          image="/images/img1.jpg"
          name="Samosa"
          price={25}
          whatsappPhone="919033664653"
          inquiryLink="/inquiry"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductCard
          image="/images/bg-2.jpg"
          name="Burger"
          price={45}
          whatsappPhone="919033664653"
          inquiryLink="/inquiry"
        />
      </Grid>
    </Grid>
  );
}
