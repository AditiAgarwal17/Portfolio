const awards = [
  {
    title: 'Embrace Curiosity Award – Find & Replace (LTF)',
    date: 'Jan 2025',
    detail: 'Owned and delivered all UI tasks for an async Find & Replace feature with zero bugs and ahead of schedule.',
  },
  {
    title: 'Thank Award – We take Charge · Code Coverage Initiative',
    date: 'Aug 2025',
    detail: 'Raised component code coverage from ~50% to 80% through independent initiative.',
  },
  {
    title: '3× Awards – We take Charge',
    date: 'Jan–Feb 2026',
    detail: 'Delivered production-quality data preview feature (delta extractor, parquet parser) and backend work under a short timeline with new technologies.',
  },
]

export default function Awards() {
  return (
    <section id="awards" className="py-16">
      <h2 className="text-3xl font-bold text-[#f0f0f0] mb-8">Awards & Recognition</h2>
      <div className="grid gap-4">
        {awards.map(({ title, date, detail }) => (
          <div key={title} className="border border-white/10 p-5 flex gap-5">
            <span className="text-[#64ffda] font-mono text-xs shrink-0 pt-0.5 w-20">{date}</span>
            <div>
              <p className="text-[#f0f0f0] font-medium text-sm mb-1">{title}</p>
              <p className="text-[#9ca3af] text-sm leading-relaxed">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
