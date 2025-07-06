"use client";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "../../theme";

// Dynamically load client-only components
const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });
const BottomNav = dynamic(() => import("@/components/bottomNavigation"), { ssr: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
        </ThemeProvider>
      </body>
    </html>
  );
}
