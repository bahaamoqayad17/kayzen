"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations();

  const contentBlocks = [
    {
      key: "whoWeAre",
      gradient: "from-teal-400 via-teal-500 to-teal-600",
      showLogo: true,
    },
    {
      key: "ourVision",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      showLogo: false,
    },
    {
      key: "ourMission",
      gradient: "from-cyan-400 via-cyan-500 to-cyan-600",
      showLogo: false,
    },
  ];

  return (
    <div className="py-10 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three Content Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {contentBlocks.map((block, index) => (
            <div
              key={block.key}
              className={`relative rounded-4xl overflow-hidden border border-gray-600 hover:border-teal-400 transition-colors duration-300 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Background overlay (10% opacity + 40px blur) */}
              <div
                className="pointer-events-none absolute inset-0 rounded-lg backdrop-blur-[40px]"
                style={{
                  background:
                    "linear-gradient(10deg, rgba(1,138,131,0.10) 0%, rgba(0,218,206,0.10) 100%)",
                }}
              />

              {/* Optional gradient border glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400" />
              </div>

              {/* Content (stays fully opaque) */}
              <div className="relative z-10 p-6">
                <div className="flex gap-4">
                  {block.showLogo && (
                    <div className="flex flex-col items-center">
                      <Image
                        src="/aboutus-logo.png"
                        alt="Kaizen Logo"
                        width={120}
                        height={120}
                        priority
                      />
                      <div className="text-center">
                        <div className="text-gray-400 text-xs">
                          {t("Tagline.title")}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col items-start justify-between mb-2">
                    <h3 className={`text-2xl font-bold text-white`}>
                      {t(`AboutUs.${block.key}.title`)}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {t(`AboutUs.${block.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <div className="relative">
            <button className="bg-black text-white px-14 py-4 rounded-lg transition-all duration-300 border border-gray-600 hover:border-gray-500">
              {t("AboutUs.readMore")}
            </button>

            {/* Glowing teal line below the button */}
            <div className="absolute -bottom-1 left-0 right-0 h-1 w-25 mx-auto bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
            {/* Faint white glow beneath teal line */}
            <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 w-25 mx-auto bg-white opacity-20 blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
