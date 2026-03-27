const treatments = [
  {
    id: 't0',
    emoji: '🫁',
    bg: 'linear-gradient(135deg, #1a3a22, #2d6e3a)',
    title: 'Digestive disorders',
    desc: 'Restore gut health and digestive balance through herbal remedies and personalised diet guidance.',
    tags: ['Ulcer', 'IBS', 'Acidity', 'Constipation'],
  },
  {
    id: 't1',
    emoji: '🫀',
    bg: 'linear-gradient(135deg, #1a2a3a, #2d4a6e)',
    title: 'Respiratory disorders',
    desc: 'Strengthen the respiratory system with proven Siddha herbs and breathing therapies.',
    tags: ['Allergies', 'Asthma', 'Cough & cold'],
  },
  {
    id: 't2',
    emoji: '🩺',
    bg: 'linear-gradient(135deg, #3a2a0a, #6e4a1a)',
    title: 'Lifestyle disorders',
    desc: 'Holistic management of modern lifestyle diseases using Siddha diet, herbs, and routine correction.',
    tags: ['Diabetes', 'Obesity', 'High cholesterol'],
  },
  {
    id: 't3',
    emoji: '🌸',
    bg: 'linear-gradient(135deg, #2a1a3a, #4a2a6e)',
    title: "Women's health",
    desc: "Safe, natural Siddha treatments addressing women's unique health needs at every stage of life.",
    tags: ['PCOD', 'Thyroid', 'Hormonal issues'],
  },
]

const steps = [
  {
    num: '1',
    title: 'Online consultation',
    desc: 'Book a video or phone consultation with our certified Siddha doctor at your preferred time.',
  },
  {
    num: '2',
    title: 'Personalised prescription',
    desc: 'Receive a detailed e-prescription based on your condition, body type, and lifestyle.',
  },
  {
    num: '3',
    title: 'Preparing & packing',
    desc: 'Your authentic Siddha medicines are carefully prepared and hygienically packed.',
  },
  {
    num: '4',
    title: 'Courier dispatch',
    desc: 'Dispatched via trusted courier partners with tracking provided at every step.',
  },
  {
    num: '5',
    title: 'Doorstep delivery',
    desc: 'Medicines delivered safely to your home. Safe, hygienic, and secured for freshness.',
  },
]

export default function Treatments() {
  return (
    <>
      {/* ── Treatments Section ── */}
      <section id="treatments" className="bg-white px-5 py-9">

        {/* Header */}
        <p className="text-[11px] font-medium tracking-widest uppercase text-[#b8860b] mb-1.5">
          Specialisations
        </p>
        <h2 className="text-[22px] font-medium text-[#1a3a22] leading-[1.3] mb-1.5">
          Our treatments
        </h2>
        <p className="text-[13px] text-[#6a8a72] leading-[1.6] mb-5">
          Authentic Siddha therapies for lasting relief from chronic conditions.
        </p>

        {/* Treatment cards */}
        <div className="flex flex-col gap-4">
          {treatments.map((t) => (
            <div
              key={t.id}
              className="rounded-[20px] overflow-hidden border border-[#d4e8c8]"
            >
              {/* Image band */}
              <div
                className="h-37.5 flex items-center justify-center relative overflow-hidden"
                style={{ background: t.bg }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/35" />
                {/* Emoji */}
                <span className="relative z-10 text-[52px]">{t.emoji}</span>
              </div>

              {/* Body */}
              <div className="bg-white p-4">
                <p className="text-[15px] font-medium text-[#1a3a22] mb-1">{t.title}</p>
                <p className="text-[12px] text-[#6a8a72] leading-[1.6] mb-2.5">{t.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-[#f5f7f2] text-[#3a5a42] rounded-md px-2.5 py-0.75 border border-[#d4e8c8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works Section ── */}
      <section id="how-it-works" className="bg-[#f5f7f2] px-5 py-9">

        {/* Header */}
        <p className="text-[11px] font-medium tracking-widest uppercase text-[#b8860b] mb-1.5">
          The process
        </p>
        <h2 className="text-[22px] font-medium text-[#1a3a22] leading-[1.3] mb-1.5">
          How it works
        </h2>
        <p className="text-[13px] text-[#6a8a72] leading-[1.6] mb-5">
          From consultation to doorstep delivery in 5 simple steps.
        </p>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="flex gap-4 items-start relative pb-6 last:pb-0"
            >
              {/* Vertical connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-11 bottom-0 w-px bg-[#d4e8c8]" />
              )}

              {/* Step number circle */}
              <div className="w-10.5 h-10.5 rounded-full bg-[#1a5c2a] text-white flex items-center justify-center text-[15px] font-medium shrink-0 relative z-10">
                {step.num}
              </div>

              {/* Step content */}
              <div className="flex-1 pt-2">
                <p className="text-[14px] font-medium text-[#1a3a22] mb-1">{step.title}</p>
                <p className="text-[12px] text-[#6a8a72] leading-[1.6]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  )
}