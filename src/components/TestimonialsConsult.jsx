import { useState } from "react";

const reviews = [
  {
    av: "SK",
    name: "Shalini Kumar",
    date: "3 weeks ago",
    stars: "★★★★★",
    text: "I had severe PCOD for years. After just 3 months with Dr. Preeti, my cycles are regular and I feel so much better.",
    short: '"PCOD gone in 3 months!"',
  },
  {
    av: "RK",
    name: "Ravi Krishnan",
    date: "1 month ago",
    stars: "★★★★★",
    text: "The personalised approach made all the difference. Natural, safe, and truly effective. I feel like a new person after 6 weeks.",
    short: '"Natural, safe and effective!"',
  },
  {
    av: "MG",
    name: "Meera Gupta",
    date: "3 weeks ago",
    stars: "★★★★★",
    text: "Dr. Sangeeta treated my IBS completely. The herbs she prescribed worked better than any medicine I had tried before.",
    short: '"IBS healed completely!"',
  },
  {
    av: "AP",
    name: "Ananya Patel",
    date: "2 weeks ago",
    stars: "★★★★☆",
    text: "My hairfall was extreme. After 8 weeks of Siddha treatment the results are visible. Very happy with SimplySiddha!",
    short: '"Hairfall reduced in 8 weeks!"',
  },
];

const consultFeatures = [
  { icon: "📹", text: "Video or phone consultation" },
  { icon: "📋", text: "E-prescription sent to patient" },
  { icon: "🏠", text: "Doorstep medicine delivery" },
  { icon: "🌿", text: "100% natural Siddha remedies" },
];

export default function TestimonialsConsult() {
  const [cur, setCur] = useState(1);

  const left = (cur + reviews.length - 1) % reviews.length;
  const right = (cur + 1) % reviews.length;

  return (
    <>
      {/* ── Testimonials ── */}
      <section id="testimonials" className="bg-[#f5f7f2] px-5 py-9">
        {/* Header */}
        <p className="text-[11px] font-medium tracking-widest uppercase text-[#b8860b] mb-1.5">
          Patient stories
        </p>
        <h2 className="text-[22px] font-medium text-[#1a3a22] leading-[1.3] mb-5">
          What they say
        </h2>

        {/* Carousel row */}
        <div className="flex gap-2.5 items-stretch">
          {/* Left side card */}
          <div
            onClick={() => setCur(left)}
            className="w-17.5 shrink-0 bg-white/65 rounded-[14px] p-2.5 border border-[#d4e8c8] opacity-55 cursor-pointer"
          >
            <p className="text-[#b8860b] text-[9px] mb-1">
              {reviews[left].stars}
            </p>
            <p className="text-[9px] text-[#6a8a72] leading-[1.4] line-clamp-4">
              {reviews[left].short}
            </p>
            <div className="w-4.5 h-4.5 rounded-full bg-[#c8e6b8] flex items-center justify-center text-[7px] font-medium text-[#1a5c2a] mt-1.5">
              {reviews[left].av}
            </div>
          </div>

          {/* Center main card */}
          <div className="flex-1 bg-white rounded-[18px] p-4.5 border-2 border-[#2d7a3e]">
            {/* Profile FIRST */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8.5 h-8.5 rounded-full bg-[#c8e6b8] flex items-center justify-center text-[12px] font-medium text-[#1a5c2a] shrink-0">
                {reviews[cur].av}
              </div>

              <div>
                <p className="text-[12px] font-medium text-[#1a3a22]">
                  {reviews[cur].name}
                </p>

                <p className="text-[10px] text-[#8aaa92]">
                  {reviews[cur].date}
                </p>

                {/* ⭐ Stars moved HERE */}
                <p className="text-[#b8860b] text-[12px] mt-0.5">
                  {reviews[cur].stars}
                </p>
              </div>
            </div>

            {/* Text LAST */}
            <p className="text-[13px] text-[#3a5a42] leading-[1.65]">
              {reviews[cur].text}
            </p>
          </div>

          {/* Right side card */}
          <div
            onClick={() => setCur(right)}
            className="w-17.5 shrink-0 bg-white/65 rounded-[14px] p-2.5 border border-[#d4e8c8] opacity-55 cursor-pointer"
          >
            <p className="text-[#b8860b] text-[9px] mb-1">
              {reviews[right].stars}
            </p>
            <p className="text-[9px] text-[#6a8a72] leading-[1.4] line-clamp-4">
              {reviews[right].short}
            </p>
            <div className="w-4.5 h-4.5 rounded-full bg-[#c8e6b8] flex items-center justify-center text-[7px] font-medium text-[#1a5c2a] mt-1.5">
              {reviews[right].av}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className={`h-1.5 rounded-full border-none cursor-pointer p-0 transition-all duration-200 ${
                i === cur ? "w-5 bg-[#1a5c2a]" : "w-1.5 bg-[#c8e6b8]"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── Online Consultation ── */}
      <section id="consult" className="bg-white px-5 py-9">
        {/* Header */}
        <p className="text-[11px] font-medium tracking-widest uppercase text-[#b8860b] mb-1.5">
          Get started
        </p>
        <h2 className="text-[22px] font-medium text-[#1a3a22] leading-[1.3] mb-1.5">
          Online consultation
        </h2>
        <p className="text-[13px] text-[#6a8a72] leading-[1.6] mb-5">
          Speak to a certified Siddha doctor from anywhere in the world.
        </p>

        {/* CTA card */}
        <div
          className="rounded-3xl px-5.5 py-7 relative overflow-hidden"
          style={{ background: "linear-gradient(145deg, #1a5c2a, #2d7a3e)" }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -left-10 w-27.5 h-27.5 rounded-full bg-[#b8860b]/12" />

          {/* Title */}
          <h3 className="text-xl font-medium text-white leading-[1.3] mb-2 relative">
            Start your healing <br />
            <span className="text-[#f0d080]">journey today</span>
          </h3>

          {/* Subtitle */}
          <p className="text-[13px] text-white/75 leading-[1.65] mb-4.5 relative">
            Video & phone consultations available. E-prescription sent to you.
            100% natural, expert-backed care.
          </p>

          {/* Feature list */}
          <div className="flex flex-col gap-2.5 mb-5.5 relative">
            {consultFeatures.map((f) => (
              <div key={f.text} className="flex items-center gap-2.5">
                <div className="w-7.5 h-7.5 rounded-lg bg-white/12 flex items-center justify-center text-sm shrink-0">
                  {f.icon}
                </div>
                <p className="text-[13px] text-white/85">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <button className="relative w-full bg-[#b8860b] text-white text-sm font-medium rounded-[26px] py-3.5 border-none cursor-pointer mb-2.5">
            Book Appointment Now
          </button>
          <button className="relative w-full bg-white/12 text-white text-[13px] rounded-[26px] py-3 border border-white/30 cursor-pointer">
            📞 Consultation on Call
          </button>

          {/* Trust stats */}
          <div className="flex justify-around mt-4.5 pt-4 border-t border-white/15 relative">
            {[
              { num: "500+", label: "Patients healed" },
              { num: "5+", label: "Years exp" },
              { num: "100%", label: "Natural" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[18px] font-medium text-[#f0d080]">
                  {stat.num}
                </p>
                <p className="text-[10px] text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}