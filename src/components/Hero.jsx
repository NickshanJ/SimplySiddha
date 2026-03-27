import { useState, useEffect } from 'react'

const slide1 = '/assets/slide1.png'
const slide2 = '/assets/slide2.png'
const slide3 = '/assets/slide3.png'
const slide4 = '/assets/slide4.png'

const slides = [
  {
    img: slide1,
    badge: '🌿 Ancient Siddha Medicine',
    title: 'Heal Naturally.',
    titleEm: 'Live Fully.',
    para: 'Your discipline, lifestyle, and right nutrition are the foundation of lifelong health.',
    num: '1/4',
  },
  {
    img: slide2,
    badge: '🧘 Holistic Wellness',
    title: 'Ancient Wisdom.',
    titleEm: 'Modern Care.',
    para: 'Expert Siddha practitioners dedicated to your complete holistic wellbeing.',
    num: '2/4',
  },
  {
    img: slide3,
    badge: '💊 100% Natural Remedies',
    title: 'Pure Herbs.',
    titleEm: 'Real Results.',
    para: 'Personalised herbal prescriptions from 5,000 years of Siddha knowledge.',
    num: '3/4',
  },
  {
    img: slide4,
    badge: '🏠 Doorstep Delivery',
    title: 'Consult Online.',
    titleEm: 'Heal at Home.',
    para: 'Video & phone consultations with e-prescription and doorstep delivery.',
    num: '4/4',
  },
]

const trustItems = [
  '500+ Patients Treated',
  '5+ Years Experience',
  '100% Natural Remedies',
  'Expert Siddha Doctors',
  'Doorstep Delivery',
  'Online Consultations',
]

const heroStyles = `
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track { animation: marquee 18s linear infinite; }
  .dot-pattern {
    background-image: radial-gradient(circle, #fff 1px, transparent 1px);
    background-size: 24px 24px;
  }
`

export default function Hero() {
  const [cur, setCur] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCur((prev) => (prev + 1) % slides.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <style>{heroStyles}</style>

      {/* ── Hero Slider ── */}
      <div className="relative h-130 overflow-hidden bg-black">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
              i === cur ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* AI Generated Background Image */}
            <img 
              src={slide.img} 
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay — This ensures white text is readable over the image */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Dot overlay */}
            <div className="dot-pattern absolute inset-0 opacity-[0.06]" />

            {/* Slide content */}
            <div className="absolute inset-0 flex flex-col justify-end px-6 pt-17.5 pb-7.5">

              {/* Badge */}
              <span className="w-fit inline-flex items-center px-3.5 py-1.25 mb-3.5 text-[11px] text-white/90 border border-white/25 rounded-[20px] bg-white/15 backdrop-blur-sm">
                {slide.badge}
              </span>

              {/* Title */}
              <h1 className="text-white text-[30px] font-medium leading-[1.2] mb-2.5 drop-shadow-md">
                {slide.title}
                <br />
                <em className="not-italic text-[#f0d080]">{slide.titleEm}</em>
              </h1>

              {/* Paragraph */}
              <p className="text-white/80 text-[13px] leading-[1.65] mb-5.5 drop-shadow-sm">
                {slide.para}
              </p>

              {/* Buttons */}
              <div className="flex gap-2.5">
                <button className="flex-1 bg-[#b8860b] text-white text-[13px] font-medium rounded-[26px] px-5 py-3.25 border-none cursor-pointer">
                  Consultation on Call
                </button>
                <button className="flex-1 bg-white/15 backdrop-blur-md text-white text-[13px] rounded-[26px] px-4.5 py-3.25 border border-white/40 cursor-pointer">
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Slide number */}
            {/* <div className="absolute top-17.5 right-5 text-white/50 text-[12px]">
              {slide.num}
            </div> */}
          </div>
        ))}

        {/* Slide dots */}
        <div className="absolute bottom-5 right-5 flex gap-1.25">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className={`h-1.5 rounded-full border-none cursor-pointer p-0 transition-all duration-300 ${
                i === cur ? 'w-5 bg-[#f0d080]' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Trust Marquee Bar ── */}
      <div className="bg-[#1a5c2a] py-3 overflow-hidden whitespace-nowrap">
        <div className="marquee-track inline-flex">
          {[...trustItems, ...trustItems].map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-7 text-[12px] text-white/85 border-r border-white/20"
            >
              <span className="w-1.25 h-1.25 rounded-full bg-[#f0d080] shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}