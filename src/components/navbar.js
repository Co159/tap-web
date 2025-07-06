import Image from "next/image";
import React from "react";
import logo from "@/assets/Centillion_Logo.png";

const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.4rem 0",
        background: "#fff",
         position: "sticky",
         top: 0,
        zIndex: 1100,
        boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
      }}
    >
      <Image
        src={logo}
        alt="Logo"
        width={120}
        height={60}
        style={{ objectFit: "contain" }}
        priority 
      />
    </nav>
  );
};

export default Navbar;
