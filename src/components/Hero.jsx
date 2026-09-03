export default function Hero() {
  return (
    <section className="pt-32 pb-16">
      <p className="text-[#64ffda] font-mono text-sm mb-4 tracking-widest">hi, i'm</p>
      <h1 className="text-6xl md:text-8xl font-bold text-[#f0f0f0] tracking-tight mb-3">
        Aditi Agarwal
      </h1>
      <h2 className="text-xl md:text-2xl text-[#9ca3af] mb-6">
        Full Stack Software Engineer
      </h2>
      <p className="text-[#6b7280] max-w-md leading-relaxed mb-10">
        4 years building scalable microservices, APIs, and interfaces.
        Currently at SAP Labs, Bengaluru.
      </p>
      <div className="flex gap-3">
        <a
          href="https://github.com/aditiagarwal17"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 border border-[#64ffda] text-[#64ffda] text-sm font-mono hover:bg-[#64ffda]/10 transition-colors duration-200"
        >
          GitHub ↗
        </a>
        <a
          href="https://linkedin.com/in/aditiagarwal17"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 border border-white/10 text-[#9ca3af] text-sm font-mono hover:border-white/30 hover:text-[#e5e5e5] transition-colors duration-200"
        >
          LinkedIn ↗
        </a>
      </div>
    </section>
  )
}
