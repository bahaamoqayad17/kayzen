"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function Faq() {
  const t = useTranslations("Faq");
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const locale = useLocale();

  const faqItems = [
    {
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      question: t("question3"),
      answer: t("answer3"),
    },
    {
      question: t("question4"),
      answer: t("answer4"),
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-600 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-white hover:bg-gray-800/30 transition-colors duration-200"
              >
                {/* Question Text */}
                <span
                  className={`text-lg font-medium ${
                    locale === "ar" ? "text-right" : "text-left"
                  } flex-1`}
                >
                  {item.question}
                </span>

                {/* Chevron Icon */}
                <div className="ml-4 flex-shrink-0">
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <p
                    className={`text-white/80 leading-relaxed ${
                      locale === "ar" ? "text-right" : "text-left"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
