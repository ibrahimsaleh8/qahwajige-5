import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "الرئيسية", href: "#home" },
      { name: "عن الشركة", href: "#about" },
      { name: "خدماتنا", href: "#services" },
      { name: "اتصل بنا", href: "#contact" },
    ],
  };

  return (
    <footer className="border-t border-black/5 relative z-10 overflow-hidden bg-white/50">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="text-main-color flex items-center gap-2 mb-6 text-xl font-bold hover:text-main-color transition-colors">
                {brandName}
              </Link>
              <p className="mb-6 leading-relaxed">{description}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">روابط سريعة</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-black/60 hover:text-main-color transition-colors inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-black font-bold text-lg mb-6">تواصل معنا</h3>
              <ul className="space-y-4 text-black/80">
                {address && (
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1" />
                    <span>{address}</span>
                  </li>
                )}
                {email && (
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1" />
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-main-color transition-colors">
                      {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1" />
                    <a
                      href={`tel:${phone}`}
                      className="hover:text-main-color transition-colors">
                      {phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10">
          <div className="container mx-auto px-4 py-6">
            <p className="text-black/60 text-sm text-center md:text-center">
              © {currentYear} {brandName}. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
