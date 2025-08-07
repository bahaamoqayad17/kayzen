"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import ContactUsForm from "./ContactUsForm";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OurClients() {
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

  // Client logos data - using SVG icons as placeholders
  const clients = [
    { icon: "/clients/client1.png" },
    { icon: "/clients/client2.png" },
    { icon: "/clients/client3.png" },
    { icon: "/clients/client4.png" },
    { icon: "/clients/client5.png" },
    { icon: "/clients/client6.png" },
    { icon: "/clients/client7.png" },
    { icon: "/clients/client8.png" },
    { icon: "/clients/client9.png" },
    { icon: "/clients/client10.png" },
    { icon: "/clients/client11.png" },
    { icon: "/clients/client12.png" },
    { icon: "/clients/client13.png" },
    { icon: "/clients/client14.png" },
    { icon: "/clients/client15.png" },
    { icon: "/clients/client16.png" },
    { icon: "/clients/client17.png" },
    { icon: "/clients/client18.png" },
    { icon: "/clients/client19.png" },
    { icon: "/clients/client20.png" },
    { icon: "/clients/client21.png" },
  ];

  return (
    <div
      ref={sectionRef}
      className="py-20 w-full"
      style={{
        backgroundImage: `url(/our-clients.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header Section */}
      <div
        className={`text-center mb-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t("OurClient.title")}
        </h2>
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          {t("OurClient.description")}
        </p>
      </div>

      {/* Client Logos Swiper - Full Width */}
      <div
        className={`w-full transition-all duration-1000 ease-out delay-300 ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-8 opacity-0 scale-95"
        }`}
      >
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
          className="clients-swiper"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <Image src={client.icon} alt="Client" width={180} height={100} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .clients-swiper {
          padding: 0 60px 40px 60px;
        }

        .clients-swiper .swiper-slide {
          height: auto;
        }

        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
          background: rgba(0, 0, 0, 0.5) !important;
          width: 48px !important;
          height: 48px !important;
          border-radius: 50% !important;
          backdrop-filter: blur(8px) !important;
          transition: all 0.2s ease !important;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(0, 0, 0, 0.7) !important;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px !important;
          font-weight: bold !important;
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background: #00dace !important;
        }
      `}</style>

      <ContactUsForm />
    </div>
  );
}
