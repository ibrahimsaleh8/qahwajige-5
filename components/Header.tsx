"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { HeaderData } from "@/lib/responseType";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#gallery", label: "معرض الصور" },
  { href: "#contact", label: "تواصل معنا" },
];

export function Header({
  brandName,
  telephone,
}: HeaderData & { telephone?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="md:container w-full rounded-2xl fixed bg-white px-3 shadow-sm top-1 left-1/2 -translate-x-1/2 z-50 duration-300 border-b border-black/10">
      <div>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 md:text-2xl text-xl font-bold">
            {brandName.split(" ").length == 2 ? (
              <span className="text-black">
                {brandName.split(" ")[0]}{" "}
                <span className="text-main-color">
                  {brandName.split(" ")[1]}
                </span>
              </span>
            ) : (
              <span className="text-white/80">{brandName}</span>
            )}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[hsl(var(--primary))] transition-colors font-medium">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button
              aria-label="toggle mobile menu"
              className="lg:hidden text-[hsl(var(--foreground))] cursor-pointer p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <div className="flex items-center gap-4">
              <a
                target="_blank"
                href={`tel:${telephone}`}
                className="bg-main-color hover:opacity-75 text-white md:px-6 md:py-3 px-4 py-2 text-sm md:text-base rounded-lg shadow-[0_4px_20px_hsl(var(--shadow-gold))] transition-all">
                احجز الآن
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-main-color/30 text-black rounded-2xl border-t border-white/40">
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setTimeout(() => {
                      setIsMobileMenuOpen(false);
                    }, 600);
                  }}
                  className="text-[hsl(var(--foreground)/0.8)] hover:text-[hsl(var(--primary))] transition-colors font-medium text-lg py-2">
                  {link.label}
                </a>
              ))}
              <a
                target="_blank"
                href={`tel:${telephone}`}
                className="bg-main-color hover:opacity-80 text-white mt-4 w-full py-3 rounded-lg shadow-[0_4px_20px_hsl(var(--shadow-gold))] text-center">
                احجز الآن
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
