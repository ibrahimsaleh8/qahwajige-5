"use client";
import { motion } from "motion/react";
import { PackageData } from "@/lib/responseType";
import { Check, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.includes("+")
    ? whatsapp.split("+").join("")
    : whatsapp;
  const waLink = `https://wa.me/${whatsappNumber}?text=`;

  if (!packages?.length) return null;

  return (
    <section
      id="packages"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "var(--second-bg, #faf7f0)" }}>
      {/* Top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "rgba(20,184,75,0.15)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "rgba(20,184,75,0.15)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-18 max-w-2xl mx-auto" dir="rtl">
          <span
            className="inline-block text-sm font-bold tracking-widest mb-3 uppercase"
            style={{ color: "var(--main-color, #14b84b)" }}>
            باقاتنا
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-snug"
            style={{ color: "var(--main-black, #111318)" }}>
            اختر الباقة المناسبة لك
          </h2>
          <div
            className="w-12 h-1 mx-auto rounded-full mb-5"
            style={{ background: "var(--main-color, #14b84b)" }}
          />
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "var(--low-color, #979797)" }}>
            نقدم لك مجموعة متميزة من الباقات المصممة بعناية لتلبي احتياجاتك
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto w-full">
          {packages.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              key={pkg.id}
              className="group relative flex flex-col h-full w-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "var(--card-background, #fdfbf7)",
                border: "1px solid rgba(20,184,75,0.12)",
                boxShadow: "0 2px 16px rgba(17,19,24,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 40px rgba(20,184,75,0.12), 0 2px 16px rgba(17,19,24,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 16px rgba(17,19,24,0.06)";
              }}>
              {/* Image */}
              <div
                className="relative aspect-video overflow-hidden"
                style={{ background: "#e8f5ed" }}>
                {pkg.image ? (
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #e8f5ed 0%, #faf7f0 100%)",
                    }}>
                    <span
                      className="text-5xl font-extrabold"
                      style={{ color: "rgba(20,184,75,0.3)" }}>
                      {pkg.title?.charAt(0) ?? "?"}
                    </span>
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                {/* Package badge */}
                <div className="absolute top-3 right-3" dir="rtl">
                  <span
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-white text-xs font-bold shadow"
                    style={{ background: "var(--main-color, #14b84b)" }}>
                    الباقة {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-7" dir="rtl">
                <h3
                  className="text-xl md:text-2xl font-extrabold mb-4 text-right"
                  style={{ color: "var(--main-black, #111318)" }}>
                  {pkg.title}
                </h3>

                {/* Divider */}
                <div
                  className="w-10 h-0.5 rounded-full mb-4"
                  style={{ background: "var(--main-color, #14b84b)" }}
                />

                {/* Features */}
                {pkg.features?.length > 0 ? (
                  <div className="flex-1 mb-6">
                    <p className="text-sm font-bold mb-3 text-right">
                      المميزات :
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-right">
                          <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center">
                            <Check
                              className="w-3 h-3"
                              strokeWidth={3}
                              style={{ color: "var(--main-color, #14b84b)" }}
                            />
                          </span>
                          <span className="text-sm md:text-base leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex-1 mb-6" />
                )}

                {/* CTA Button */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-3.5 px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-white"
                  style={{ background: "var(--main-color, #14b84b)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "#0fa33e")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "var(--main-color, #14b84b)")
                  }>
                  <MessageCircle className="w-5 h-5" />
                  اطلب الخدمة عبر واتساب
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
