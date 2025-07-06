import { Box, Stack, Typography } from "@mui/material";
import PDFDownloadCard from "./pdfDownloadCard";

export default function Gallery() {
  return (
    <>
      <Box sx={{ px: 3, py: 4 }}>
        <Typography variant="h6" fontWeight="bold" align="center" gutterBottom>
          Downloads
        </Typography>
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

        <Stack spacing={3}>
          <PDFDownloadCard title="Menu" fileUrl="/pdfs/menu.pdf" />
          <PDFDownloadCard title="Bheed Bhad" fileUrl="/pdfs/bheed-bhad.pdf" />
        </Stack>
      </Box>
    </>
  );
}
