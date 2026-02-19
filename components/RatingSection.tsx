"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";
import { motion } from "framer-motion";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) {
          setSubmitted(value);
        }
      }
    } catch {
      // localStorage not available
    }
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;

    setSelectedRating(value);
    setIsLoading(true);

    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(value);
        try {
          localStorage.setItem(STORAGE_KEY(projectId), String(value));
        } catch {
          // localStorage not available
        }
        Toast({ icon: "success", message: "شكراً لتقييمك!" });
      } else {
        setSelectedRating(0);
        Toast({
          icon: "error",
          message: data.message || data.error || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="relative inline-block">
          {interactive ? (
            <button
              type="button"
              disabled={isLoading || !mounted}
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 rounded-lg transition-all duration-200 hover:scale-125 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
              style={
                {
                  // ring color on focus
                }
              }
              aria-label={`تقييم ${star} من 5`}>
              <Star
                className="w-10 h-10 md:w-12 md:h-12 transition-colors duration-200"
                style={{
                  fill: star <= value ? "#14b84b" : "#e5e0d8",
                  color: star <= value ? "#14b84b" : "#e5e0d8",
                  filter:
                    star <= value
                      ? "drop-shadow(0 1px 4px rgba(20,184,75,0.3))"
                      : "none",
                }}
              />
            </button>
          ) : (
            <Star
              className="w-10 h-10 md:w-12 md:h-12 transition-colors"
              style={{
                fill: star <= value ? "#14b84b" : "#e5e0d8",
                color: star <= value ? "#14b84b" : "#e5e0d8",
              }}
            />
          )}
        </span>
      ))}
    </div>
  );

  return (
    <section
      id="rating"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "var(--second-bg, #faf7f0)" }}>
      {/* Subtle background decoration */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(20,184,75,0.04) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "rgba(20,184,75,0.15)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "rgba(20,184,75,0.15)" }}
      />

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        {/* Card */}
        <motion.div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "var(--card-background, #fdfbf7)",
            border: "1px solid rgba(20,184,75,0.12)",
            boxShadow: "0 8px 40px rgba(17,19,24,0.07)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          <div className="p-8 md:p-12 text-center">
            {/* Section label */}
            <span
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                background: "rgba(20,184,75,0.08)",
                color: "var(--main-color, #14b84b)",
              }}>
              آراء العملاء
            </span>

            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight"
              style={{ color: "var(--main-black, #111318)" }}>
              قيّم تجربتك معنا
            </h2>
            <p
              className="text-base md:text-lg mb-8 max-w-xl mx-auto"
              style={{ color: "var(--low-color, #979797)" }}>
              رأيك يهمنا! ساعدنا في التحسين من خلال تقييم تجربتك
            </p>

            {/* Stats row */}
            {(averageRating > 0 || totalRatings > 0) && (
              <div
                className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 py-4 px-6 rounded-2xl mx-auto w-fit"
                style={{
                  background: "rgba(20,184,75,0.05)",
                  border: "1px solid rgba(20,184,75,0.1)",
                }}>
                {averageRating > 0 && (
                  <div className="flex items-center gap-2">
                    <span
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: "var(--main-black, #111318)" }}>
                      {averageRating.toFixed(1)}
                    </span>
                    <span style={{ color: "var(--low-color, #979797)" }}>
                      / 5
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5"
                          style={{
                            fill:
                              star <= Math.round(averageRating)
                                ? "#14b84b"
                                : "#e5e0d8",
                            color:
                              star <= Math.round(averageRating)
                                ? "#14b84b"
                                : "#e5e0d8",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {totalRatings > 0 && (
                  <div
                    className="text-sm md:text-base"
                    style={{ color: "var(--low-color, #979797)" }}>
                    <span
                      className="font-semibold"
                      style={{ color: "var(--main-black, #111318)" }}>
                      {totalRatings}
                    </span>{" "}
                    {totalRatings === 1 ? "تقييم" : "تقييمات"}
                  </div>
                )}
              </div>
            )}

            {submitted !== null && mounted ? (
              <div className="py-4">
                {renderStars(submitted, false)}
                <p
                  className="font-semibold mt-4 text-lg"
                  style={{ color: "var(--main-color, #14b84b)" }}>
                  شكراً لتقييمك!
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--low-color, #979797)" }}>
                  نسعد بتقييمك وسنعمل على تحسين تجربتك
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {renderStars(displayRating || 0, true)}
                <p
                  className="text-sm"
                  style={{ color: "var(--low-color, #979797)" }}>
                  {mounted && !isLoading
                    ? "انقر على النجم المناسب للتقييم"
                    : ""}
                  {isLoading && "جاري الإرسال..."}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
