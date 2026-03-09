import { PhoneCall, ClipboardList, CalendarCheck, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "تواصل معنا",
    description:
      "تواصل معنا عبر واتساب أو الهاتف وأخبرنا بتفاصيل مناسبتك وعدد الضيوف والموعد المطلوب.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "تخصيص الباقة",
    description:
      "نقدم لك عرضاً مخصصاً يناسب احتياجاتك وميزانيتك من باقاتنا الفاخرة المتنوعة.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "تأكيد الحجز",
    description:
      "نؤكد حجزك ونحدد كافة التفاصيل اللوجستية لضمان تجربة خالية من أي قلق أو متاعب.",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "لحظات لا تُنسى",
    description:
      "يصل فريقنا في الوقت المحدد مستعداً لتقديم أرقى خدمات الضيافة السعودية في مناسبتك.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-20 relative overflow-hidden bg-white" dir="rtl">
      {/* Decorative background blobs */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--main-color, #14b84b), transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--main-color, #14b84b), transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-4xl md:text-5xl font-bold text-main-color mb-4">
            كيف نعمل
          </p>
          <div className="w-24 h-1 bg-main-color/90 mx-auto rounded-full mb-6" />
          <p className="text-2xl font-semibold mb-4">أربع خطوات نحو ضيافة استثنائية</p>
          <p className="text-low-color text-lg max-w-3xl mx-auto leading-relaxed">
            نجعل تجربتك معنا سلسة وممتعة من أول تواصل حتى آخر لحظة في مناسبتك
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={item.step} className="relative flex flex-col items-center text-center group">
                {/* Connector line (hidden on last) */}
                {!isLast && (
                  <div
                    className="hidden lg:block absolute top-10 left-0 w-full h-px"
                    style={{
                      background:
                        "linear-gradient(to left, transparent, var(--main-color, #14b84b) 50%, transparent)",
                      opacity: 0.3,
                    }}
                  />
                )}

                {/* Icon Circle */}
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-md transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "var(--card-background, #fdfbf7)",
                    border: "2px solid rgba(20,184,75,0.25)",
                  }}
                >
                  <Icon className="w-8 h-8 text-main-color" />
                  {/* Step badge */}
                  <span
                    className="absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-extrabold shadow"
                    style={{ background: "var(--main-color, #14b84b)" }}
                  >
                    {index + 1}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="bg-card-background rounded-2xl p-6 w-full border border-main-color/10 hover:border-main-color/30 transition-all duration-300 card-hover flex-1"
                >
                  <p className="text-xl font-bold text-main-color mb-3">{item.title}</p>
                  <p className="text-low-color text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
