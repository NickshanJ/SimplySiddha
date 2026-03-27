import aboutImage from '../assets/AboutImg.png';

export default function About() {
  return (
    <section id="about" className="bg-white px-5 py-9">

      {/* Section label */}
      <p className="text-[11px] font-medium tracking-widest uppercase text-[#b8860b] mb-1.5">
        Who we are
      </p>

      {/* Section title */}
      <h2 className="text-[22px] font-medium text-[#1a3a22] leading-[1.3] mb-1.5">
        The Siddha Concept
      </h2>

      {/* Image placeholder */}
      <div className="w-full h-45 rounded-[18px] mb-5 overflow-hidden border border-[#d4e8c8]">
        <img 
          src={aboutImage} 
          alt="Ancient Siddha Medicinal Herbs and Tools"
          className="w-full h-full object-cover" // Ensures image fills the container beautifully
        />
      </div>

      {/* Paragraphs */}
      <p className="text-[13px] text-[#3a5a42] leading-[1.7] mb-3">
        Siddha medicine is one of the world's oldest healing systems, originating
        in Tamil Nadu over 5,000 years ago. It treats the root cause of disease
        rather than just the symptoms.
      </p>
      <p className="text-[13px] text-[#3a5a42] leading-[1.7] mb-3">
        Our practitioners follow authentic Siddha protocols using herbs, minerals,
        and lifestyle guidance to restore balance in body, mind, and spirit.
      </p>
      <p className="text-[13px] text-[#3a5a42] leading-[1.7] mb-5">
        Simply Siddha brings this ancient wisdom to modern life through expert
        consultations, personalised prescriptions, and doorstep delivery of
        genuine Siddha medicines.
      </p>

      {/* Tamil slogan box */}
      <div
        className="rounded-2xl px-5 py-4.5 text-center"
        style={{ background: 'linear-gradient(135deg, #1a5c2a, #2d7a3e)' }}
      >
        <p className="text-[15px] font-medium text-[#f0d080] mb-1.5">
          உடல் நலம் தான் உயிர் நலம்
        </p>
        <p className="text-[12px] text-white/80 italic">
          "Health of the body is the health of the soul"
        </p>
      </div>

    </section>
  )
}