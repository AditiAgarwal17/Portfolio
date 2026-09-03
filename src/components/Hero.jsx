export default function Hero() {
  return (
    <section className="pt-32 pb-16">
      <h1
        className="hero-animate text-5xl md:text-7xl font-bold text-[#f0f0f0] tracking-tight mb-4"
        style={{ animationDelay: '0ms' }}
      >
        Aditi Agarwal
      </h1>
      <h2
        className="hero-animate text-lg text-[#9ca3af] mb-6"
        style={{ animationDelay: '120ms' }}
      >
        Software Engineer · SAP Labs India, Bengaluru
      </h2>
      <p
        className="hero-animate text-[#6b7280] max-w-lg leading-relaxed mb-10"
        style={{ animationDelay: '240ms' }}
      >
        I build full stack — distributed systems and APIs on the backend, interfaces on the front.
        I care about reliability, observability, and owning things end-to-end.
      </p>
      <div
        className="hero-animate flex flex-wrap gap-3"
        style={{ animationDelay: '360ms' }}
      >
        <a
          href="https://github.com/aditiagarwal17"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 border border-[#64ffda] text-[#64ffda] text-sm font-mono hover:bg-[#64ffda]/10 transition-colors duration-200"
        >
          {'GitHub ↗'}
        </a>
        <a
          href="https://linkedin.com/in/aditiagarwal17"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 border border-[#64ffda] text-[#64ffda] text-sm font-mono hover:bg-[#64ffda]/10 transition-colors duration-200"
        >
          {'LinkedIn ↗'}
        </a>
        <a
          href="mailto:agrwl.aditi17@gmail.com"
          className="px-5 py-2.5 border border-[#64ffda] text-[#64ffda] text-sm font-mono hover:bg-[#64ffda]/10 transition-colors duration-200"
        >
          {'Email ↗'}
        </a>
        <a
          href="/resume_Aditi.pdf"
          download
          className="px-5 py-2.5 border border-[#64ffda] text-[#64ffda] text-sm font-mono hover:bg-[#64ffda]/10 transition-colors duration-200"
        >
          Resume ↓
        </a>
      </div>
    </section>
  )
}
