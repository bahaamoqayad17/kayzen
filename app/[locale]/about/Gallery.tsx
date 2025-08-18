"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
  const t = useTranslations("Gallery");
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

  const galleryItems = [
    { id: 1, image: "/projects/project1.jpg", alt: "Gallery Image 1" },
    { id: 2, image: "/projects/project2.jpg", alt: "Gallery Image 2" },
    { id: 3, image: "/projects/project3.jpg", alt: "Gallery Image 3" },
    { id: 4, image: "/projects/project4.jpg", alt: "Gallery Image 4" },
    { id: 5, image: "/projects/project5.jpg", alt: "Gallery Image 5" },
    { id: 6, image: "/projects/project6.jpg", alt: "Gallery Image 6" },
    { id: 7, image: "/projects/project7.jpg", alt: "Gallery Image 7" },
    { id: 8, image: "/projects/project8.jpg", alt: "Gallery Image 8" },
    { id: 9, image: "/projects/project9.jpg", alt: "Gallery Image 9" },
    { id: 10, image: "/projects/project10.jpg", alt: "Gallery Image 10" },
    { id: 11, image: "/projects/project11.jpg", alt: "Gallery Image 11" },
    { id: 12, image: "/projects/project12.jpg", alt: "Gallery Image 12" },
    { id: 13, image: "/projects/project13.jpg", alt: "Gallery Image 13" },
    { id: 14, image: "/projects/project14.jpg", alt: "Gallery Image 14" },
    { id: 15, image: "/projects/project15.jpg", alt: "Gallery Image 15" },
    { id: 16, image: "/projects/project16.jpg", alt: "Gallery Image 16" },
    { id: 17, image: "/projects/project17.jpg", alt: "Gallery Image 17" },
    { id: 18, image: "/projects/project18.jpg", alt: "Gallery Image 18" },
    { id: 19, image: "/projects/project19.jpg", alt: "Gallery Image 19" },
    { id: 20, image: "/projects/project20.jpg", alt: "Gallery Image 20" },
    { id: 21, image: "/projects/project21.jpg", alt: "Gallery Image 21" },
    { id: 22, image: "/projects/project22.jpg", alt: "Gallery Image 22" },
    { id: 23, image: "/projects/project23.jpg", alt: "Gallery Image 23" },
    { id: 24, image: "/projects/project24.jpg", alt: "Gallery Image 24" },
    { id: 25, image: "/projects/project25.jpg", alt: "Gallery Image 25" },
    { id: 26, image: "/projects/project26.jpg", alt: "Gallery Image 26" },
    { id: 27, image: "/projects/project27.jpg", alt: "Gallery Image 27" },
    { id: 28, image: "/projects/project28.jpg", alt: "Gallery Image 28" },
    { id: 29, image: "/projects/project29.jpg", alt: "Gallery Image 29" },
    { id: 30, image: "/projects/project30.jpg", alt: "Gallery Image 30" },
    { id: 31, image: "/projects/project31.jpg", alt: "Gallery Image 31" },
    { id: 32, image: "/projects/project32.jpg", alt: "Gallery Image 32" },
    { id: 33, image: "/projects/project33.jpg", alt: "Gallery Image 33" },
    { id: 34, image: "/projects/project34.jpg", alt: "Gallery Image 34" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Background with subtle grid */}
      <div className="absolute inset-0">
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
      </div>

      {/* Full Width Swiper Section */}
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
            delay: 3000,
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
              slidesPerView: 4,
            },
          }}
          className="gallery-swiper"
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-600 transition-transform duration-300 hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={`w-full transition-all duration-1000 ease-out delay-500 ${
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
              slidesPerView: 3.5,
            },
          }}
          className="gallery-swiper"
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="relative mt-10 aspect-[4/3] rounded-2xl overflow-hidden border border-gray-600 transition-transform duration-300 hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <style jsx global>{`
        .gallery-swiper {
          padding: 0 60px 40px 60px;
        }

        .gallery-swiper .swiper-slide {
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
      `}</style> */}
    </section>
  );
}
