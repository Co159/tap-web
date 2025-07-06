"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@mui/material";

export default function BottomNav() {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { icon: <HomeIcon />, href: "/" },
    { icon: <ProductionQuantityLimitsIcon />, href: "/products" },
    { icon: <PhotoLibraryIcon />, href: "/gallery" },
    { icon: <QuestionAnswerIcon />, href: "/inquiry" },
    { icon: <ContactMailIcon />, href: "/contactUs" },
  ];

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    const index = navItems.findIndex((item) => item.href === pathname);
    setSelectedIndex(index === -1 ? 0 : index);
  }, [pathname]);

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxShadow: "0 -2px 8px rgba(0,0,0,0.08)",
        background: "#fff",
      }}
    >
      <BottomNavigation
        value={selectedIndex}
        onChange={(_, newIndex) => {
          setSelectedIndex(newIndex);
          router.push(navItems[newIndex].href);
        }}
        showLabels={false}
        sx={{
          "& .Mui-selected, & .Mui-selected svg": {
            color: theme.palette.primary.main,
          },
        }}
      >
        {navItems.map((item, index) => (
          <BottomNavigationAction
            key={index}
            icon={
              <div style={{ position: "relative", paddingBottom: 6 }}>
                {item.icon}
                {selectedIndex === index && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 16,
                      height: 3,
                      borderRadius: 2,
                      backgroundColor: theme.palette.primary.main,
                    }}
                  />
                )}
              </div>
            }
          />
        ))}
      </BottomNavigation>
    </nav>
  );
}
