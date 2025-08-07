"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Goals() {
  const t = useTranslations("Goals");
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

  const goals = [
    {
      title: t("vision.title"),
      subtitle: t("vision.subtitle"),
      description: t("vision.description"),
      image: "/vision.png", // Placeholder - replace with actual image
      overlayText: t("vision.overlayText"),
    },
    {
      title: t("mission.title"),
      subtitle: t("mission.subtitle"),
      description: t("mission.description"),
      image: "/message.png", // Placeholder - replace with actual image
      overlayText: t("mission.overlayText"),
    },
    {
      title: t("goals.title"),
      subtitle: t("goals.subtitle"),
      description: t("goals.description"),
      image: "/goals.png", // Placeholder - replace with actual image
      overlayText: t("goals.overlayText"),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Background with subtle grid and stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(2, 220, 208, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(2, 220, 208, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Scattered stars */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("mainTitle")}
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            {t("mainDescription")}
          </p>
        </div>

        {/* Goals Sections - Alternating Layout */}
        <div className="space-y-20">
          {goals.map((goal, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto transition-all duration-1000 ease-out ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${(index + 1) * 200}ms`,
              }}
            >
              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-6 max-w-xl mb-5 md:mb-0">
                {/* Small teal subtitle */}
                <div>
                  <h3 className="text-teal-400 text-xl font-medium mb-2">
                    {goal.title}
                  </h3>

                  {/* Main heading */}
                  <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                    {goal.subtitle}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-white/80 text-lg leading-relaxed">
                  {goal.description}
                </p>
              </div>

              {/* Image Container with Glowing Border */}

              <Image
                src={goal.image}
                alt={goal.title}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
