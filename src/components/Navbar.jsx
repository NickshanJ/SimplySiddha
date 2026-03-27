import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white sticky top-0 z-50 flex justify-between items-center px-5 py-3.5 border-b border-[#e0e8dc]">
        <div className="text-[18px] font-medium text-[#1a5c2a]">
          Simply<span className="text-[#b8860b]">Siddha</span>
        </div>
        <button
          onClick={() => setMenuOpen(true)}
          className="w-9 h-9 bg-[#f5f7f2] rounded-lg border border-[#d4e8c8] flex flex-col justify-center items-center gap-1.25"
        >
          <span className="w-4.5 h-[1.5px] bg-[#1a5c2a] rounded" />
          <span className="w-4.5 h-[1.5px] bg-[#1a5c2a] rounded" />
          <span className="w-4.5 h-[1.5px] bg-[#1a5c2a] rounded" />
        </button>
      </nav>

      {/* Menu overlay */}
      <div
        className={`absolute top-0 left-0 right-0 bg-white z-200 rounded-b-3xl shadow-[0_8px_32px_rgba(26,92,42,0.15)] transition-transform duration-350 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Menu top bar */}
        <div className="px-5 py-3.5 flex justify-between items-center border-b border-[#e0e8dc]">
          <div className="text-[18px] font-medium text-[#1a5c2a]">
            Simply<span className="text-[#b8860b]">Siddha</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 bg-[#fef3f0] rounded-lg border border-[#f4c0b0] flex items-center justify-center text-[#c0392b] text-base"
          >
            ✕
          </button>
        </div>

        {/* Menu links */}
        <div className="py-2">
          {['Home', 'About', 'Treatments', 'Consult', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block px-5 py-3.5 text-[15px] text-[#1a3a22] border-b border-[#f0f4ee]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Menu buttons */}
        <div className="px-5 py-4 flex flex-col gap-2.5">
          <button className="bg-[#e8f4e0] text-[#1a5c2a] border border-[#a0cc88] rounded-3xl py-3 text-sm font-medium">
            📞 Consultation on Call
          </button>
          <button className="bg-[#1a5c2a] text-white rounded-3xl py-3 text-sm font-medium border-none">
            📅 Book an Appointment
          </button>
        </div>
      </div>
    </>
  )
}