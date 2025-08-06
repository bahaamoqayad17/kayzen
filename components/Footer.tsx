"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/locales/navigation";

export default function Footer() {
  const t = useTranslations();

  const socialMediaIcons = [
    { src: "/X.svg", alt: "X (Twitter)" },
    { src: "/facebook.svg", alt: "Facebook" },
    { src: "/insta.svg", alt: "Instagram" },
    { src: "/linkedin.svg", alt: "LinkedIn" },
  ];

  const navigationLinks = [
    { href: "/", title: "home" },
    { href: "/about", title: "about" },
    { href: "/services", title: "services" },
    { href: "/contact", title: "contact" },
  ];

  return (
    <footer className="bg-black text-white py-16 pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Right Column - Company Information & Social Media */}
          <div>
            {/* Logo and Tagline */}
            <Image
              src="/logo.png"
              alt="Kaizen Logo"
              width={120}
              height={120}
              className="h-10 w-auto mb-2"
            />

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6">
              {t("Footer.description")}
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialMediaIcons.map((icon, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer w-12 h-12 bg-black rounded-2xl flex items-center justify-center border border-gray-600 hover:border-teal-400 transition-colors duration-200"
                >
                  {/* Glowing effect - always visible */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-teal-400/20 via-transparent to-teal-400/20"></div>

                  {/* Icon */}
                  <div className="relative z-10">
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={24}
                      height={24}
                      className="w-6 h-6 text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column - Navigation Links */}
          <div className="">
            <h3 className="text-white font-bold text-lg mb-6">
              {t("Footer.pages")}
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200 block"
                  >
                    {t(`Navbar.${link.title}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Left Column - Newsletter Subscription */}
          <div className="relative">
            <h3 className="text-white font-bold text-lg mb-6">
              {t("Footer.newsletter")}
            </h3>
            <div className="flex bg-[#011F1D] p-2 rounded-lg overflow-hidden shadow-[0_0_10px_rgba(2,220,208,0.3)]">
              <input
                type="email"
                placeholder={t("Footer.emailPlaceholder")}
                className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="px-8 py-3 bg-[#018A83] cursor-pointer text-white hover:bg-teal-500 transition-colors duration-200 font-medium rounded-2xl">
                {t("Footer.subscribe")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Section with Kaizen Image */}
      <div
        className="relative h-[330px] md:min-h-screen flex items-center justify-center mt-4"
        style={{
          background: `linear-gradient(180deg, #000E0E 0%, #006E69 100%)`,
        }}
      >
        <div className="absolute top-0 left-[17%] w-70">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full blur-sm opacity-80"></div>
        </div>
        {/* Kaizen Image */}
        <div className="w-full">
          {/* Glowing horizontal line effect */}

          {/* gutters */}
          <div className="mx-auto px-4 sm:px-6 lg:px-15">
            {/* sized box for fill */}
            <div className="relative h-[13vh] md:h-[60vh] rounded-2xl overflow-hidden">
              <Image
                src="/kayzen.png"
                alt="Kaizen"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Copyright and Credits */}
        {/* <div className="absolute bottom-4 left-4 text-gray-400 text-sm">
          Designed By Batikha Studio
        </div> */}
        <div className="absolute bottom-4 right-4 text-white text-md font-bold">
          2025, kayzen ©
        </div>
      </div>
    </footer>
  );
}
