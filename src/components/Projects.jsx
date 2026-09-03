import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'AI Resume Analyzer',
    github: 'https://github.com/aditiagarwal17',
    tech: 'Node.js · Express · Groq API · Llama 3.3 70B · PostgreSQL · JWT · React',
    bullets: [
      'Full-stack web app that analyzes resumes against job descriptions using Llama 3.3 70B via Groq API',
      'AI-powered ATS compatibility scoring with keyword match breakdown and improvement suggestions',
      'Resume tailoring feature that rewrites weak bullet points to match a JD without fabricating experience',
      'JWT-based user authentication with per-user analysis history stored in PostgreSQL',
    ],
  },
  {
    title: 'E-mart – E-commerce Platform',
    github: 'https://github.com/aditiagarwal17',
    tech: 'Django · Python · PostgreSQL · PayPal API',
    bullets: [
      'Built a full-stack e-commerce platform with authentication, product catalog, cart, and PayPal payment integration',
      'Implemented invoice generation and security features including admin honeypot and session timeout',
    ],
  },
]

export default function Projects() {
  const ref = useScrollReveal()
  return (
    <section id="projects" className="py-16">
      <div ref={ref} className="reveal">
        <h2 className="text-3xl font-bold text-[#f0f0f0] mb-8">Projects</h2>
        <div className="grid gap-4">
          {projects.map(({ title, github, tech, bullets }) => (
            <div key={title} className="border border-white/10 p-6 md:p-8 hover:border-[#64ffda]/30 transition-colors duration-300">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-[#f0f0f0]">{title}</h3>
                <a href={github} target="_blank" rel="noreferrer" className="text-[#64ffda] font-mono text-xs hover:underline ml-4 shrink-0">
                  {'GitHub →'}
                </a>
              </div>
              <p className="text-[#6b7280] font-mono text-xs mb-5">{tech}</p>
              <ul className="space-y-2">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#9ca3af] leading-relaxed">
                    <span className="text-[#64ffda] shrink-0 mt-0.5">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
