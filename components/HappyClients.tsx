"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function HappyClients() {
  const t = useTranslations();
  const locale = useLocale();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = ["testimonial1", "testimonial2", "testimonial3"];

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

  // Auto-loop functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
          setTimeout(() => setIsTransitioning(false), 150);
        }, 300);
      }
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isTransitioning, testimonials.length]);

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
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image with Bouncing Animation */}
      <div className="absolute inset-0">
        <Image
          src="/happy-clients.png"
          alt="Happy Clients Background"
          fill
          className="object-cover animate-bounce-slow"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Background with 3D elements */}

      <div className="relative z-10 container mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
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
        <div
          className={`flex justify-center mb-8 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
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
        <div
          className={`relative flex items-center justify-center w-full md:w-[40%] mx-auto gap-4 transition-all duration-1000 ease-out delay-500 ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
        >
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

      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
