import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function ContactButton() {
  const t = useTranslations();
  return (
    <div className="flex justify-center">
      <div className="relative">
        <Link href={"/contact"}>
          <button className="bg-[#032422] cursor-pointer font-bold text-white px-8 py-4 rounded-lg transition-all duration-300 border border-gray-600 hover:border-gray-500">
            {t("Header.button")}
          </button>
        </Link>

        {/* Glowing teal line below the button */}
        <div className="absolute -bottom-1 left-0 right-0 h-1 w-25 mx-auto bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
        {/* Faint white glow beneath teal line */}
        <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 w-25 mx-auto bg-white opacity-20 blur-sm"></div>
      </div>
    </div>
  );
}
