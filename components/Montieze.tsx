import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Montieze() {
  const t = useTranslations();

  return (
    <section className="py-10">
      {/* Text block */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("Montieze.title")}
          </h2>
          <p className="text-white/85 text-lg md:text-xl leading-relaxed">
            {t("Montieze.description")}
          </p>
        </div>
      </div>

      {/* Image with gutters, rounded corners, and side fade */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="relative h-[48vh] md:h-[56vh] lg:h-[64vh] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <Image
            src="/montieze.png"
            alt="Kaizen Team"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* side fades to match the mock (blend to page background) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-[#0a0f14] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-20 lg:w-24 bg-gradient-to-l from-[#0a0f14] to-transparent" />

          {/* subtle top/bottom fade (optional) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 md:h-12 bg-gradient-to-b from-[#0a0f14]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 md:h-16 bg-gradient-to-t from-[#0a0f14]/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
