"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations();
  const [animatedNumbers, setAnimatedNumbers] = useState({
    stat1: 0,
    stat2: 0,
    stat3: 0,
    stat4: 0,
    stat5: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { key: "stat1", icon: "/stats1.svg" },
    { key: "stat2", icon: "/stats2.svg" },
    { key: "stat3", icon: "/stats3.svg" },
    { key: "stat4", icon: "/stats4.svg" },
    { key: "stat5", icon: "/stats5.svg" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateNumbers = () => {
    const targetNumbers = {
      stat1: 6523,
      stat2: 2632,
      stat3: 536,
      stat4: 365,
      stat5: 2632,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;

      setAnimatedNumbers({
        stat1: Math.floor((targetNumbers.stat1 * currentStep) / steps),
        stat2: Math.floor((targetNumbers.stat2 * currentStep) / steps),
        stat3: Math.floor((targetNumbers.stat3 * currentStep) / steps),
        stat4: Math.floor((targetNumbers.stat4 * currentStep) / steps),
        stat5: Math.floor((targetNumbers.stat5 * currentStep) / steps),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedNumbers(targetNumbers);
      }
    }, stepDuration);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div
          ref={statsRef}
          className="rounded-3xl p-4 md:p-8 border border-gray-700 backdrop-blur-[40px]"
          style={{
            background:
              "linear-gradient(10deg, rgba(1,138,131,0.10) 0%, rgba(0,218,206,0.10) 100%)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
            {stats.map((stat, index) => (
              <div key={stat.key} className="relative">
                <div className="flex justify-center items-center text-center p-4">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src={stat.icon}
                      alt={`${t(`Stats.${stat.key}.title`)} icon`}
                      width={32}
                      height={32}
                      className="w-8 h-8 text-teal-400"
                    />
                  </div>
                  {/* Title */}
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-teal-400 text-sm font-medium mb-2">
                      {t(`Stats.${stat.key}.title`)}
                    </h3>

                    {/* Number */}
                    <span className="text-3xl md:text-4xl font-bold text-white mb-3">
                      +
                      {
                        animatedNumbers[
                          stat.key as keyof typeof animatedNumbers
                        ]
                      }
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
