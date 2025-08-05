"use client";

import React from "react";
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
      className="py-20 w-full"
      style={{
        backgroundImage: `url(/our-clients.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header Section */}
      <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t("OurClient.title")}
        </h2>
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          {t("OurClient.description")}
        </p>
      </div>

      {/* Client Logos Swiper - Full Width */}
      <div className="w-full">
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
