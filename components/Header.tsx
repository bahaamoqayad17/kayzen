"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Navbar from "./Navbar";

export default function Header() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 w-full mt-10 md:mt-20">
        <div className="flex justify-between items-center">
          {/* Right Side - Title and Description */}
          <div className="text-center lg:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-400 mb-6 leading-tight">
              {t("Header.title")}
            </h1>
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t("Header.description")}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <button className="bg-black text-white px-8 py-4 rounded-lg transition-all duration-300 border border-gray-600 hover:border-gray-500">
                {t("Header.button")}
              </button>

              {/* Glowing teal line below the button */}
              <div className="absolute -bottom-1 left-0 right-0 h-1 w-25 mx-auto bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
              {/* Faint white glow beneath teal line */}
              <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 w-25 mx-auto bg-white opacity-20 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Video Placeholder with Glowing Border */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-4xl aspect-video">
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 p-1 animate-pulse">
              <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                {/* Placeholder content for future video */}
                <div className="text-gray-500 text-center">
                  <div className="text-2xl font-bold italic mb-2">Promo</div>
                  <div className="text-xl font-bold italic mb-2">
                    Test Promo
                  </div>
                  <div className="text-lg font-bold italic">TestvPromo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
