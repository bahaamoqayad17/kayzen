"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function HappyClients() {
  const t = useTranslations();

  const locale = useLocale();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = ["testimonial1", "testimonial2", "testimonial3"];

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 150);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setTimeout(() => setIsTransitioning(false), 150);
    }, 300);
  };

  return (
    <div
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url(/happy-clients.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background with 3D elements */}

      <div className="relative z-10 container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Heart Icon */}
          <div className="flex justify-center">
            <Image src="/heart.svg" alt="Heart" width={28} height={24} />
          </div>

          {/* Subtitle */}
          <p className="text-teal-400 text-lg font-medium mb-4">
            {t("HappyClients.subtitle")}
          </p>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("HappyClients.title")}
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {t("HappyClients.description")}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {locale === "ar" ? (
              <>
                <Image
                  src="/right-arrow.svg"
                  alt="Right Arrow"
                  width={34}
                  height={35}
                  onClick={nextTestimonial}
                  className="cursor-pointer"
                />

                <Image
                  src="/left-arrow.svg"
                  alt="Left Arrow"
                  width={34}
                  height={35}
                  onClick={prevTestimonial}
                  className="cursor-pointer"
                />
              </>
            ) : (
              <>
                <Image
                  src="/left-arrow.svg"
                  alt="Left Arrow"
                  width={34}
                  height={35}
                  onClick={prevTestimonial}
                  className="cursor-pointer"
                />
                <Image
                  src="/right-arrow.svg"
                  alt="Right Arrow"
                  width={34}
                  height={35}
                  onClick={nextTestimonial}
                  className="cursor-pointer"
                />
              </>
            )}
          </div>
        </div>

        {/* Testimonial Card with Vertical Progress Bar */}
        <div className="relative flex items-center justify-center w-full md:w-[40%] mx-auto gap-4">
          <div className="relative h-full flex flex-col justify-center z-10">
            {/* Progress Bar Container */}
            <div className="relative w-1 h-40 bg-gray-700 rounded-full">
              {/* Progress Fill */}
              <div
                className="absolute bottom-0 w-full bg-white rounded-full transition-all duration-500 ease-out"
                style={{
                  height: `${
                    ((currentTestimonial + 1) / testimonials.length) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
          {/* Main Card */}
          <div
            className={`relative bg-[#101010] rounded-lg p-8 md:p-12 border border-gray-700 shadow-2xl transition-all duration-300 ${
              isTransitioning
                ? "opacity-0 transform scale-95"
                : "opacity-100 transform scale-100"
            }`}
            style={{ zIndex: 2 }}
          >
            {/* Testimonial Content */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Text Content */}
              <div className="flex-1">
                {/* Profile Picture */}

                <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
                  {t(
                    `HappyClients.testimonials.${testimonials[currentTestimonial]}.text`
                  )}
                </p>

                <div className="flex items-center gap-4">
                  <div className="rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src="/avatar.png"
                      alt="Client"
                      width={90}
                      height={90}
                    />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-1">
                      {t(
                        `HappyClients.testimonials.${testimonials[currentTestimonial]}.name`
                      )}
                    </h3>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">
                      {t(
                        `HappyClients.testimonials.${testimonials[currentTestimonial]}.title`
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Stacked card effect - positioned below */}

          <div
            className={`absolute top-3 ${
              locale === "ar" ? "left-1" : "right-1"
            } w-full h-full bg-[#101010] rounded-lg border border-gray-700`}
            style={{ zIndex: 1 }}
          ></div>
          <div
            className={`absolute top-6 ${
              locale === "ar" ? "left-4" : "right-4"
            } w-full h-full bg-[#101010] rounded-lg border border-gray-700`}
            style={{ zIndex: 0 }}
          ></div>
          <div
            className={`absolute top-9 ${
              locale === "ar" ? "left-6" : "right-6"
            } w-full h-full bg-[#101010] rounded-lg border border-gray-700`}
            style={{ zIndex: -1 }}
          ></div>
        </div>
      </div>
    </div>
  );
}
