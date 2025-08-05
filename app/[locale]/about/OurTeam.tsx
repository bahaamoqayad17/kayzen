import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function OurTeam() {
  const t = useTranslations("OurTeam");

  const teamMembers = [
    {
      name: t("member1.name"),
      role: t("member1.role"),
    },
    {
      name: t("member2.name"),
      role: t("member2.role"),
    },
    {
      name: t("member1.name"),
      role: t("member1.role"),
    },
    {
      name: t("member1.name"),
      role: t("member1.role"),
    },
    {
      name: t("member2.name"),
      role: t("member2.role"),
    },
    {
      name: t("member1.name"),
      role: t("member1.role"),
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with subtle grid and stars */}
      <div className="absolute inset-0">
        {/* Subtle grid lines */}
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

        {/* Scattered stars */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-white/70 text-lg">{t("subtitle")}</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              {/* Team Member Card */}

              <div className="relative bg-transparent border-3 border-black outline outline-1 outline-gray-600 rounded-2xl overflow-hidden backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
                {/* Profile Image */}
                <div
                  className="relative aspect-square overflow-hidden"
                  style={{
                    backgroundImage: `url(/avatar.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="p-6 absolute bottom-0 left-0 right-0 z-10">
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-white/70 text-sm">{member.role}</p>
                  </div>
                  {/* Subtle overlay for dramatic effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
                </div>

                {/* Member Info */}
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
