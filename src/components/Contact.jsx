import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const ref = useScrollReveal()
  return (
    <section id="contact" className="py-16">
      <div ref={ref} className="reveal">
        <h2 className="text-3xl font-bold text-[#f0f0f0] mb-4">Get in Touch</h2>
        <p className="text-[#9ca3af] max-w-lg leading-relaxed mb-8">
          Whether you have a question, a role in mind, or just want to say hi — my inbox is open.
        </p>
        <a
          href="mailto:agrwl.aditi17@gmail.com"
          className="inline-block px-6 py-3 border border-[#64ffda] text-[#64ffda] font-mono text-sm hover:bg-[#64ffda]/10 transition-colors duration-200"
        >
          {'Say Hello ↗'}
        </a>
      </div>
    </section>
  )
}
