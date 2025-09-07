"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CommonSkeleton from "./custom/skeleton";

const Navbar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // cleanup
  }, []);

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
      {loading ? (
        <CommonSkeleton type="circle" width={60} height={60} />
      ) : (
        <Image
          src="/images/logo-main.png"
          alt="Logo"
          width={120}
          height={60}
          style={{ objectFit: "contain" }}
          priority
        />
      )}
    </nav>
  );
};

export default Navbar;
