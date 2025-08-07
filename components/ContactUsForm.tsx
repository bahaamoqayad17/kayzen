"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContactUsForm() {
  const t = useTranslations();
  const [selectedService, setSelectedService] = useState("service1");
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
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen text-white pb-0 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <div
          className={`text-center mb-16 pt-10 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("ContactUsForm.title")}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {t("ContactUsForm.description")}
          </p>
        </div>

        {/* Contact Form */}
        <div
          className={`space-y-8 rounded-3xl p-8 border border-gray-700 backdrop-blur-[40px] transition-all duration-1000 ease-out delay-300 ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
          style={{
            background:
              "linear-gradient(10deg, rgba(174, 201, 255,0.10) 0%, rgba(104, 121, 153,0.10) 100%)",
          }}
        >
          {/* Form Title */}
          <h2 className="text-2xl font-bold text-center mb-8">
            {t("ContactUsForm.formTitle")}
          </h2>

          {/* Name and Email Fields */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("ContactUsForm.nameLabel")}
            </label>
            <input
              type="text"
              placeholder={t("ContactUsForm.namePlaceholder")}
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              {t("ContactUsForm.emailLabel")}
            </label>
            <input
              type="email"
              placeholder={t("ContactUsForm.emailPlaceholder")}
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors duration-200"
            />
          </div>

          {/* Service Selection */}
          <div>
            <h3 className="text-lg font-medium mb-6">
              {t("ContactUsForm.serviceTitle")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service) => (
                <div
                  key={service.key}
                  className={`relative p-4 rounded-lg border cursor-pointer transition-all duration-200 bg-transparent ${
                    selectedService === service.key
                      ? "border-teal-400"
                      : "border-gray-600 hover:border-gray-500"
                  }`}
                  onClick={() => setSelectedService(service.key)}
                >
                  {/* Glowing border for selected service */}
                  {selectedService === service.key && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/20 via-transparent to-teal-400/20"></div>
                  )}

                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={t(`ContactUsForm.services.${service.key}.title`)}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                    <p className="text-sm text-gray-300">
                      {t(`ContactUsForm.services.${service.key}.title`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Box */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("ContactUsForm.messageLabel")}
            </label>
            <textarea
              placeholder={t("ContactUsForm.messagePlaceholder")}
              rows={10}
              className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors duration-200 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex">
            <div className="relative">
              <button className="bg-[#032422] text-white px-18 py-4 rounded-lg transition-all duration-300 cursor-pointer hover:border-gray-500">
                {t("ContactUsForm.submitButton")}
              </button>
              {/* Glowing teal line below the button */}
              <div className="absolute -bottom-1 left-0 right-0 h-1 w-25 mx-auto bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
