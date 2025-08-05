"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/locales/navigation";
import { useLocale } from "next-intl";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale();

  const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "services", href: "/services" },
    { key: "contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const currentPath = pathname;
    const newPath = `/${newLocale}${currentPath}`;
    window.location.href = newPath;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex flex-col items-start">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Kaizen Logo"
                  priority
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <React.Fragment key={item.key}>
                <Link
                  href={item.href}
                  className={`text-white hover:text-teal-300 transition-colors duration-200 ${
                    pathname === item.href ? "font-semibold" : ""
                  }`}
                >
                  {t(`Navbar.${item.key}`)}
                </Link>
              </React.Fragment>
            ))}

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex cursor-pointer items-center space-x-2 text-white hover:text-teal-300 transition-colors duration-200 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-white/20"
            >
              <Image
                src="/lang.svg"
                alt="Language"
                width={24}
                height={24}
                className="w-4 h-4"
              />
              <span className="text-sm font-medium">
                {locale === "en" ? "العربية" : "English"}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Toggle Button for Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-white hover:text-teal-300 transition-colors duration-200 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md hover:bg-white/20"
            >
              <Image
                src="/lang.svg"
                alt="Language"
                width={14}
                height={14}
                className="w-3.5 h-3.5"
              />
              <span className="text-xs font-medium">
                {locale === "en" ? "عربي" : "EN"}
              </span>
            </button>

            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-white hover:bg-white/20 transition-colors ${
                    pathname === item.href ? "bg-white/20 font-semibold" : ""
                  }`}
                >
                  {t(`Navbar.${item.key}`)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
