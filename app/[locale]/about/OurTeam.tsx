"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function OurTeam() {
  const t = useTranslations("OurTeam");
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

  const teamMembers = [
    { image: "/team-members/team1.png" },
    { image: "/team-members/team2.png" },
    { image: "/team-members/team3.png" },
    { image: "/team-members/team4.png" },
    { image: "/team-members/team5.png" },
    { image: "/team-members/team6.png" },
    { image: "/team-members/team7.png" },
    { image: "/team-members/team8.png" },
    { image: "/team-members/team9.png" },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background with subtle grid and stars */}
      <div className="absolute inset-0">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-white/70 text-lg">{t("subtitle")}</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${(index + 1) * 200}ms`,
              }}
            >
              {/* Team Member Card */}

              <div className="relative bg-transparent border-3 border-black outline outline-1 outline-gray-600 rounded-2xl overflow-hidden backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
                {/* Profile Image */}
                <div
                  className="relative aspect-square overflow-hidden"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* <div className="p-6 absolute bottom-0 left-0 right-0 z-10">
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-white/70 text-sm">{member.role}</p>
                  </div> */}
                  {/* Subtle overlay for dramatic effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
                </div>

                {/* Member Info */}
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
