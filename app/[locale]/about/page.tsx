import Navbar from "@/components/Navbar";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Goals from "./Goals";
import OurTeam from "./OurTeam";
import Faq from "./Faq";
import Gallery from "./Gallery";
import ContactUsForm from "@/components/ContactUsForm";

export default function About() {
  const t = useTranslations("About");

  return (
    <>
      <Navbar />

      {/* About Hero Section */}
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about-bg.png"
            alt="About Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay with grid pattern and stars */}
        <div className="absolute inset-0 bg-black/40">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-20">
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
              ></div>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="items-center min-h-[80vh]">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Small teal text */}
              <div className="text-center">
                <h2 className="text-teal-400 text-lg font-medium mb-4">
                  {t("subtitle")}
                </h2>

                {/* Main heading */}
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                  {t("title")}
                </h1>

                {/* Description paragraph */}
                <p className="text-white/90 text-center text-lg md:text-3xl leading-relaxed">
                  {t("description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <Goals />

      {/* Our Team Section */}
      <OurTeam />

      {/* FAQ Section */}
      <Faq />

      {/* Gallery Section */}
      <Gallery />

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
