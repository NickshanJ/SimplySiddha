import { useState, useRef, useEffect } from 'react'
import hairImg from '../assets/hair.png'
import beardImg from '../assets/beard.png'
import skinImg from '../assets/skin.png'

const results = [
  {
    id: 'ba0',
    image: hairImg,
    name: 'Hair fall treatment',
    result: 'Significant reduction in hair fall within 8 weeks',
    time: 'Duration: 8 weeks · 100% natural',
  },
  {
    id: 'ba1',
    image: beardImg,
    name: 'Beard hair treatment',
    result: 'Visible beard regrowth and thickness in 10 weeks',
    time: 'Duration: 10 weeks · 100% natural',
  },
  {
    id: 'ba2',
    image: skinImg,
    name: 'Skin disorder treatment',
    result: 'Clear skin achieved in 6 weeks with herbal therapy',
    time: 'Duration: 6 weeks · 100% natural',
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

export default function ClinicalSuccess() {
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
    trackRef.current.style.transform =
      `translateX(-${getTranslate(cur, results.length)}px)`
  }, [cur])

  return (
    <section id="clinical-success" className="bg-white py-9">

      {/* Header */}
      <div className="px-5 mb-5">
        <p className="text-[11px] font-medium tracking-widest uppercase text-[#b8860b] mb-1.5">
          Proven results
        </p>
        <h2 className="text-[22px] font-medium text-[#1a3a22] leading-[1.3] mb-1.5">
          Clinical success
        </h2>
        <p className="text-[13px] text-[#6a8a72] leading-[1.6]">
          Real transformations from our patients through natural Siddha treatment.
        </p>
      </div>

      {/* Peek carousel viewport */}
      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex transition-transform duration-420 ease-in-out"
          style={{
            paddingLeft: `${LP}px`,
            paddingRight: `${LP}px`,
            gap: `${GAP}px`,
          }}
        >
          {results.map((item, i) => (
            <div
              key={item.id}
              onClick={() => setCur(i)}
              className="rounded-[20px] overflow-hidden border border-[#d4e8c8] bg-white cursor-pointer"
            >
              {/* Before / After image row */}
              <div className="h-42.5 relative overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              {/* Info */}
              <div className="px-4 py-3.5">
                <p className="text-[14px] font-medium text-[#1a3a22] mb-1">{item.name}</p>
                <p className="text-[12px] text-[#2d7a3e] mb-1">{item.result}</p>
                <p className="text-[11px] text-[#8aaa92]">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3.5">
        {results.map((_, i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            className={`h-1.5 rounded-full border-none cursor-pointer p-0 transition-all duration-200 ${
              i === cur ? 'w-5 bg-[#1a5c2a]' : 'w-1.5 bg-[#d4e8c8]'
            }`}
          />
        ))}
      </div>

    </section>
  )
}