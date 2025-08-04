"use client";

import React from "react";
import { useTranslations } from "next-intl";
import ContactUsForm from "./ContactUsForm";
import Image from "next/image";

export default function OurClients() {
  const t = useTranslations();

  // Client logos data - using SVG icons as placeholders
  const clients = [
    { icon: "/client1.svg" },
    { icon: "/client1.svg" },
    { icon: "/client1.svg" },
    { icon: "/client1.svg" },
    { icon: "/client1.svg" },
    { icon: "/client1.svg" },
    { icon: "/client1.svg" },
    { icon: "/client1.svg" },
    { icon: "/client1.svg" },
    { icon: "/client1.svg" },
    { icon: "/client1.svg" },
  ];

  return (
    <div
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(/our-clients.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("OurClient.title")}
          </h2>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {t("OurClient.description")}
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={client.icon}
                      alt="Client"
                      width={179}
                      height={93}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 mx-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-teal-300 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={client.icon}
                      alt="Client"
                      width={179}
                      height={93}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <ContactUsForm />
    </div>
  );
}
