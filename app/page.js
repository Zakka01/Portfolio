"use client"

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import ScrollIndicator from "@/components/ScrollIndicator";
import HeroLoader from "@/components/HeroLoader";
import Nav from "../components/Navbar_var2"
import Whoami from "../components/Whoami"
import Work from "../components/Work"
import Footer from "../components/Footer"
import BgReveal from "../components/BgReveal"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <HeroLoader onComplete={handleLoadingComplete} />}

      {!isLoading && (
        <>
          <Nav />
          <Hero />
          <Whoami />
          <Work />
          <Footer/>
          <ScrollIndicator />
        </>
      )}
    </>
  );
}
