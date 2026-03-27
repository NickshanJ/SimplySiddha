const footerLinks = ['Home', 'About', 'Treatments', 'Consult', 'Contact']

export default function Footer() {
  return (
    <>
      {/* ── Footer ── */}
      <footer id="footer" className="bg-[#0d3a1a] px-5 py-6 text-center">

        {/* Logo */}
        <p className="text-[18px] font-medium text-white mb-2">
          Simply<span className="text-[#f0d080]">Siddha</span>
        </p>

        {/* Links */}
        <div className="flex justify-center flex-wrap gap-x-4.5 gap-y-2 mb-3.5">
          {footerLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[12px] text-white/60 no-underline"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-3.5" />

        {/* Copyright */}
        <p className="text-[11px] text-white/35">
          &copy; 2020&ndash;2025 SimplySiddha. All rights reserved.
        </p>

      </footer>

      {/* ── Sticky Bottom Bar ── */}
      <div className="sticky bottom-0 z-50 bg-white/97 px-5 py-3 flex gap-2.5 border-t border-[#d4e8c8]">
        <button className="flex-1 bg-[#e8f4e0] text-[#1a5c2a] text-[13px] font-medium rounded-3xl py-3 border border-[#a0cc88] cursor-pointer">
          📞 Call now
        </button>
        <button className="flex-[1.2] bg-[#1a5c2a] text-white text-[13px] font-medium rounded-3xl py-3 border-none cursor-pointer">
          📅 Book appointment
        </button>
      </div>
    </>
  )
}