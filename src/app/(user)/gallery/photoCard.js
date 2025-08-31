"use client";
import { Card, CardMedia } from "@mui/material";

export default function PhotoCard({ img }) {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
      <CardMedia
        component="img"
        image={img}
        alt="photo"
        sx={{ height: 200, objectFit: "cover" }}
      />
    </Card>
  );
}
