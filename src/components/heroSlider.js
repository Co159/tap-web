"use client";

import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";
import { useState, useEffect } from "react";

// import bg1 from "../assests/img1.jpg";
import bg2 from "../assets/bg-2.avif";
import bg3 from "../assets/bg-3.avif";
import bg4 from "../assets/bg-4.avif";

const slides = [{ image: bg2 }, { image: bg3 }, {image: bg4}];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsZoomed(false);
      setTimeout(() => setIsZoomed(true), 100);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsZoomed(true);
    return () => setIsZoomed(false);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsZoomed(false);
    setTimeout(() => setIsZoomed(true), 100);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsZoomed(false);
    setTimeout(() => setIsZoomed(true), 100);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 200, sm: 300, md: 400 },
        overflow: "hidden",
      }}
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            display: currentSlide === index ? "block" : "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            fill
            style={{
              objectFit: "cover",
              transition: "transform 0.8s ease-in-out",
              // transform:
              //   isZoomed && currentSlide === index ? "scale(1.1)" : "scale(1)",
            }}
            priority={index === 0}
          />
        </Box>
      ))}

      {/* Navigation */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          // transform: "translateY(-50%)",
          zIndex: 10,
          color: "#fff",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.1)", // subtle dark hover on light bg
          },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          // transform: "translateY(-50%)",
          zIndex: 10,
          color: "#fff",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.1)", // subtle dark hover on light bg
          },
        }}
      >
        <ChevronRightIcon />
      </IconButton>

      {/* Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              // backgroundColor: "rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
              // border: "1px solid #ccc",
              transition: "all 0.3s ease-in-out",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
