"use client";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "0 auto",
        padding: 4,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        gutterBottom
        sx={{ fontWeight: 600 }}
      >
        About
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

      <Typography
        variant="body1"
        sx={{
          textAlign: "justify",
          lineHeight: 1.8,
          fontSize: { xs: "1rem", sm: "1.1rem" },
          color: "text.secondary",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        voluptatum voluptatibus reiciendis pariatur vitae et tempora, ducimus
        perspiciatis aliquid atque nam tempore, quidem aspernatur amet
        praesentium sint magni laudantium ab dicta obcaecati nostrum eos at
        minima? Perspiciatis laborum aperiam ad animi porro? Facilis placeat
        atque distinctio omnis eaque cupiditate, ab nam! Eum blanditiis et porro
        quae nemo molestiae magnam voluptatem nobis tenetur accusantium
        consequuntur, repellat ab harum a totam cum eius ullam deserunt
        laudantium? Quo perferendis sapiente delectus soluta enim?
      </Typography>
    </Box>
  );
}
