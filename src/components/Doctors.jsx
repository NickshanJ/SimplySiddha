import { useState, useRef, useEffect } from 'react'
import sangeetaImg from '../assets/sangeeta.png'
import preetiImg from '../assets/preeti.png'
import jayaImg from '../assets/jaya.png'

const doctors = [
  {
    id: 'dc0',
    image: sangeetaImg,
    name: 'Dr. Sangeeta',
    qual: 'BSMS',
    reg: 'Reg. No. SID/2019/1042',
    bio: 'A dedicated Siddha practitioner with expertise in treating chronic digestive disorders and lifestyle-related conditions using authentic herbal protocols.',
    specs: ['Digestive health', 'Lifestyle disorders'],
    btnLabel: 'Book with Dr. Sangeeta',
    exp: '7+',
    patients: '200+',
  },
  {
    id: 'dc1',
    image: preetiImg,
    name: 'Dr. Preeti',
    qual: 'BSMS, Kamai MD',
    reg: 'Reg. No. SID/2020/2218',
    bio: "With 5+ years of experience she provides a complete Siddha-based approach to women's health, respiratory conditions, and hormonal balance.",
    specs: ["Women's health", 'Respiratory care'],
    btnLabel: 'Book with Dr. Preeti',
    exp: '5+',
    patients: '180+',
  },
  {
    id: 'dc2',
    image: jayaImg,
    name: 'Dr. Jaya Pradeepan',
    qual: 'MBBS',
    reg: 'Reg. No. MED/2018/3374',
    bio: 'With over 5 years of experience, Dr. Jaya Pradeepan combines modern medicine with traditional Siddha practices to deliver comprehensive holistic care.',
    specs: ['General medicine', 'Holistic care'],
    btnLabel: 'Book with Dr. Jaya',
    exp: '5+',
    patients: '150+',
  },
]

const VW = 390
const CW = Math.round(VW * 0.80)
const GAP = 12
const LP = 20

function getTranslate(idx, total) {
  const cardX = LP + idx * (CW + GAP)
  if (idx === 0) return 0
  if (idx === total - 1) return cardX - (VW - CW - LP)
  return cardX - Math.round(VW * 0.10)
}

export default function Doctors() {
  const [cur, setCur] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    if (!trackRef.current) return
    const cards = trackRef.current.children
    Array.from(cards).forEach((card, i) => {
      card.style.width = `${CW}px`
      card.style.flexShrink = '0'
      card.style.opacity = i === cur ? '1' : '0.5'
      card.style.transform = i === cur ? 'scale(1)' : 'scale(0.95)'
      card.style.transition = 'opacity 0.35s, transform 0.35s'
    })
    trackRef.current.style.transform = `translateX(-${getTranslate(cur, doctors.length)}px)`
  }, [cur])

  return (
    <section id="doctors" className="py-9 bg-[#f5f7f2]">

      {/* Header */}
      <div className="px-5 mb-5">
        <p className="text-[11px] font-medium tracking-widest uppercase text-[#b8860b] mb-1.5">
          Our experts
        </p>
        <h2 className="text-[22px] font-medium text-[#1a3a22] leading-[1.3] mb-1.5">
          Meet our doctors
        </h2>
        <p className="text-[13px] text-[#6a8a72] leading-[1.6]">
          Experienced Siddha practitioners dedicated to your holistic wellbeing.
        </p>
      </div>

      {/* Peek carousel viewport */}
      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ paddingLeft: `${LP}px`, paddingRight: `${LP}px`, gap: `${GAP}px` }}
        >
          {doctors.map((doc, i) => (
            <div
              key={doc.id}
              onClick={() => setCur(i)}
              className="rounded-[20px] overflow-hidden border border-[#d4e8c8] bg-white cursor-pointer"
            >
              {/* Image band */}
              <div className="h-37.5 relative overflow-hidden">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
              </div>

              {/* Body */}
              <div className="p-4">
                <p className="text-[15px] font-medium text-[#1a3a22] mb-0.5">{doc.name}</p>
                <p className="text-[12px] text-[#b8860b] mb-0.5">{doc.qual}</p>
                <p className="text-[11px] text-[#8aaa92] mb-2">{doc.reg}</p>
                <p className="text-[12px] text-[#6a8a72] leading-[1.6] mb-2.5">{doc.bio}</p>

                {/* Specialty tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {doc.specs.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] bg-[#e8f4e0] text-[#2d7a3e] rounded-lg px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Book button */}
                <button className="w-full bg-[#1a5c2a] text-white text-[13px] font-medium rounded-[20px] py-2.75 border-none cursor-pointer">
                  {doc.btnLabel}
                </button>

                {/* Stats row */}
                <div className="flex border-t border-[#f0f4ee] mt-3">
                  <div className="flex-1 py-3 text-center border-r border-[#f0f4ee]">
                    <p className="text-[16px] font-medium text-[#1a5c2a]">{doc.exp}</p>
                    <p className="text-[10px] text-[#8aaa92] mt-0.5">Yrs exp</p>
                  </div>
                  <div className="flex-1 py-3 text-center">
                    <p className="text-[16px] font-medium text-[#1a5c2a]">{doc.patients}</p>
                    <p className="text-[10px] text-[#8aaa92] mt-0.5">Patients</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.25 mt-3.5">
        {doctors.map((_, i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            className={`h-1.5 rounded-full border-none cursor-pointer p-0 transition-all duration-200 ${
              i === cur ? 'w-5 bg-[#1a5c2a]' : 'w-1.5 bg-[#c8e6b8]'
            }`}
          />
        ))}
      </div>

    </section>
  )
}