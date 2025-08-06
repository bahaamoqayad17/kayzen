import React from "react";
import { useTranslations } from "next-intl";
import Navbar from "./Navbar";
import ContactButton from "./ContactButton";

export default function Header() {
  const t = useTranslations();

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

      <div className="container relative z-10 w-full mt-0 md:mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Right Side - Title and Description */}
          <div className="text-center md:[text-align:unset] mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-400 mb-6 leading-tight">
              {t("Header.title")}
            </h1>
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t("Header.description")}
            </p>
          </div>

          <ContactButton />
        </div>
        {/* Video Placeholder with Glowing Border */}
        <div className="p-5 md:p-0">
          <div className="w-full h-full flex justify-center items-center glow-box mt-10">
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
        </div>
      </div>
    </div>
  );
}
