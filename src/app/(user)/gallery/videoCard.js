"use client";
import { Card, CardMedia } from "@mui/material";

export default function VideoCard({ video }) {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
      <CardMedia
        component="video"
        src={video}
        controls
        autoPlay={false}
        sx={{ height: 240, objectFit: "cover" }}
      />
    </Card>
  );
}
