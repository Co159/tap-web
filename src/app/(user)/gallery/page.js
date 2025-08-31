"use client"
import { Box, Stack, Typography } from "@mui/material";
import PDFDownloadCard from "./pdfDownloadCard";
import MediaTabs from "./tabs";
import CommonSkeleton from "@/components/custom/skeleton";
import { useEffect, useState } from "react";

export default function Gallery() {
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
      </Box>
    );
  }
  return (
    <>
      <MediaTabs/>
    </>
  );
}
