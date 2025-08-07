"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import HappyClients from "@/components/HappyClients";
import ContactUsForm from "@/components/ContactUsForm";
import Stars from "@/components/Stars";

export default function Services() {
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

  const services = [
    { key: "service1", icon: "/service1.svg" },
    { key: "service2", icon: "/service2.svg" },
    { key: "service3", icon: "/service3.svg" },
    { key: "service4", icon: "/service4.svg" },
    { key: "service5", icon: "/service5.svg" },
    { key: "service6", icon: "/service6.svg" },
    { key: "service7", icon: "/service7.svg" },
    { key: "service8", icon: "/service8.svg" },
    { key: "service9", icon: "/service9.svg" },
    { key: "service10", icon: "/service10.svg" },
    { key: "service11", icon: "/service11.svg" },
  ];

  return (
    <>
      <Navbar />
      <div
        ref={sectionRef}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={
          {
            // backgroundImage: `url(/services-bg.png)`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
          }
        }
      >
        <Stars />

        <div className="container mx-auto">
          {/* Header Section */}
          <div
            className={`mb-16 mt-20 transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#02DCD0] mb-6">
              {t("Services.ourServices")}
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("Services.title")}
            </h2>
            <p className="text-white text-lg md:text-xl max-w-3xl leading-relaxed">
              {t("Services.tagline")}
            </p>
          </div>

          {/* Main Grid - 3x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {services.slice(0, 10).map((service, index) => (
              <div
                key={service.key}
                className={`bg-gray-900 rounded-3xl p-6 border border-gray-700 hover:border-teal-400 transition-all duration-1000 ease-out group ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-8 opacity-0 scale-95"
                }`}
                style={{
                  background:
                    "linear-gradient(0deg, rgba(4, 8, 14, 0.1) 0%, rgba(5, 8, 14, 0.1) 100%)",
                  transitionDelay: `${(index + 1) * 100}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className="flex justify-center mb-4 w-25 mx-auto rounded-3xl backdrop-blur-[40px]"
                  style={{
                    background:
                      "linear-gradient(10deg, rgba(174, 201, 255,0.10) 0%, rgba(104, 121, 153,0.10) 100%)",
                  }}
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt={`${t(
                        `Services.services.${service.key}.title`
                      )} icon`}
                      width={48}
                      height={48}
                      className="w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {t(`Services.services.${service.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed text-right">
                  {t(`Services.services.${service.key}.description`)}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Services - 2 cards */}
          <div className="grid grid-cols-1 gap-6 w-full md:w-1/2 mx-auto">
            {services.slice(10).map((service, index) => (
              <div
                key={service.key}
                className={`bg-gray-900 rounded-3xl p-6 border border-gray-700 hover:border-teal-400 transition-all duration-1000 ease-out group ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-8 opacity-0 scale-95"
                }`}
                style={{
                  background:
                    "linear-gradient(0deg, rgba(4, 8, 14, 0.1) 0%, rgba(5, 8, 14, 0.1) 100%)",
                  transitionDelay: `${(10 + index + 1) * 100}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className="flex justify-center mb-4 w-25 mx-auto rounded-3xl backdrop-blur-[40px]"
                  style={{
                    background:
                      "linear-gradient(10deg, rgba(174, 201, 255,0.10) 0%, rgba(104, 121, 153,0.10) 100%)",
                  }}
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt={`${t(
                        `Services.services.${service.key}.title`
                      )} icon`}
                      width={48}
                      height={48}
                      className="w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {t(`Services.services.${service.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed text-right">
                  {t(`Services.services.${service.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HappyClients />

      <div
        style={{
          backgroundImage: `url(/our-clients.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ContactUsForm />
      </div>
    </>
  );
}
