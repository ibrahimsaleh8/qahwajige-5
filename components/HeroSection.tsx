import Image from "next/image";
import { HeroSectionData } from "@/lib/responseType";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
  image,
}: HeroSectionData & {
  image?: string | null;
}) {
  return (
    <section
      id="home"
      className="relative mt-25 my-20 min-h-[calc(100vh-10rem)] container mx-auto rounded-2xl flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-main-black/80 via-main-black/60 to-main-black/90 z-10" />
        {image && (
          <Image
            src={image}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        )}{" "}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-white mb-4 text-shadow leading-tight">
            {headline}
          </h1>

          {/* Description */}
          <p className="md:text-lg text-sm lg:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              target="_blank"
              href={`https://wa.me/${
                whatsApp?.includes("+") ? whatsApp.replace("+", "") : whatsApp
              }`}
              className="bg-green-700 px-8 py-4 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-main-color/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              اطلب الخدمة الآن
            </a>
            <a
              href={"#gallery"}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              مشاهدة أعمالنا
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
