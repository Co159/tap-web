// CommonSkeleton.jsx
import React from "react";
import { Skeleton } from "@mui/material";

const CommonSkeleton = ({
  type = "text", // text, circular, rectangular
  width = "100%",
  height = 40,
  animation = "pulse", // pulse, wave, false
  sx = {}, // additional styles
}) => {
  // Map our custom types to MUI variants
  const variantMap = {
    text: "text",
    circle: "circular",
    rectangle: "rectangular",
    square: "rectangular",
  };

  // Adjust square height if type is square
  const finalHeight = type === "square" ? width : height;

  return (
    <Skeleton
      variant={variantMap[type]}
      width={width}
      height={finalHeight}
      animation={animation}
      sx={sx}
    />
  );
};

export default CommonSkeleton;
