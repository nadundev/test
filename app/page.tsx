"use client";

import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Brands from "./components/brands";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeBlack = window.scrollY > 500;
      setIsScrolled(shouldBeBlack);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <NavBar isScrolled={isScrolled} />
      <main className="mt-[65px]">
        <Hero />
        <Brands />
      </main>
    </>
  );
}
