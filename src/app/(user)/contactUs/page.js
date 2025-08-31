"use client";
import { Box, Typography } from "@mui/material";
import Map from "./map";
import ContactDetails from "./contactDetails";
import CommonSkeleton from "@/components/custom/skeleton";
import { useEffect, useState } from "react";

export default function ContactUs() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // cleanup
  }, []);

    if (loading) {
    // Show skeleton while loading
    return (
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <CommonSkeleton type="text" width="60%" height={30} />
        <CommonSkeleton type="rectangle" width="100%" height={150} />
        <CommonSkeleton type="text" width="60%" height={30} />
        <CommonSkeleton type="rectangle" width="100%" height={150} />
        <CommonSkeleton type="text" width="60%" height={30} />
        <CommonSkeleton type="rectangle" width="100%" height={150} />
      </Box>
    );
  }
  return (
    <Box sx={{ mx: "auto" }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        sx={{ textAlign: "center" , mt:2}}
      >
        Contact Us
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
      <Map />
      <ContactDetails/>
    </Box>
  );
}
