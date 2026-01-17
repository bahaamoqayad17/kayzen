"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AboutUs() {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the section comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <div ref={sectionRef} className="py-10 pt-0 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three Content Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {contentBlocks.map((block, index) => (
            <div
              key={block.key}
              className={`relative rounded-4xl overflow-hidden border border-gray-600 hover:border-teal-400 transition-all duration-1000 ease-out ${
                index === 0 ? "lg:col-span-2" : ""
              } ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
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
                <div className="flex gap-4 items-center">
                  {block.showLogo && (
                    <div className="flex flex-col items-center">
                      <Image
                        src="/logo.png"
                        alt="Kaizen Logo"
                        width={800}
                        height={120}
                        priority
                      />

                      <div className="text-gray-400 text-md text-center">
                        {t("Tagline.title")}
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
          <div
            className={`relative transition-all duration-1000 ease-out delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            }`}
          >
            <Link href={"/about"}>
              <button className="bg-black cursor-pointer text-white px-14 py-4 rounded-lg transition-all duration-300 border border-gray-600 hover:border-gray-500">
                {t("AboutUs.readMore")}
              </button>
            </Link>

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
