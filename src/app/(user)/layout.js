"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider, CssBaseline, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import theme from "../../theme";
import Navbar from "@/components/navbar";
import BottomNav from "@/components/bottomNavigation";

// Dynamically load client-only components
// const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });
// const BottomNav = dynamic(() => import("@/components/bottomNavigation"), { ssr: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // ✅ block if width > 768 OR if landscape mode (width > height)
      if (width > 768 || width > height) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    window.addEventListener("orientationchange", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
      window.removeEventListener("orientationchange", checkScreen);
    };
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isMobile ? (
            <>
              <Navbar />
              <Box
                component="main"
                sx={{
                  paddingBottom: "50px",
                  minHeight: "100vh",
                }}
              >
                {children}
              </Box>
              <BottomNav />
            </>
          ) : (
            <Box
              sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                p: 2,
              }}
            >
              <Typography variant="h5" color="error">
                🚫 This app is only available on mobile in portrait mode
              </Typography>
            </Box>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
