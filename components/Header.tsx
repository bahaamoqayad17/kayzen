"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Navbar from "./Navbar";
import ContactButton from "./ContactButton";
import Stars from "./Stars";

export default function Header() {
  const t = useTranslations();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: `url(/header.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      <Stars />

      <div className="container relative z-10 w-full mt-0 md:mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Right Side - Title and Description */}
          <div className="text-center md:[text-align:unset] mb-5 md:mb-10">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-teal-400 mb-6 leading-tight transition-all duration-1000 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {t("Header.title")}
            </h1>
            <p
              className={`text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 ease-out delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {t("Header.description")}
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ease-out delay-500 ${
              isLoaded
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            }`}
          >
            <ContactButton />
          </div>
        </div>
        {/* Video Placeholder with Glowing Border */}
        {/* <div className="p-5 md:p-0">
          <div
            className={`w-full h-full flex justify-center items-center glow-box mt-10 transition-all duration-1000 ease-out delay-700 ${
              isLoaded
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-12 opacity-0 scale-95"
            }`}
          >
            <div>
              <video
                className="z-10 w-full h-auto"
                controls
                autoPlay
                muted
                loop
              >
                <source src="/promo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
