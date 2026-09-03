import { useScrollReveal } from '../hooks/useScrollReveal'

const education = [
  {
    degree: 'MTech in Software Engineering',
    institution: 'BITS Pilani',
    period: '2022 – 2026',
    detail: 'CGPA: 8.9',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Institute of Engineering and Management, Kolkata',
    period: '2019 – 2022',
    detail: 'CGPA: 9.75',
  },
]

const certifications = [
  'Node.js Essential Training',
  'End-to-End JS Testing with Cypress.io',
  'AWS for Developers: DynamoDB',
]

export default function Education() {
  const ref = useScrollReveal()
  return (
    <section id="education" className="py-16">
      <div ref={ref} className="reveal">
        <h2 className="text-3xl font-bold text-[#f0f0f0] mb-8">Education</h2>
        <div className="grid gap-4 mb-10">
          {education.map(({ degree, institution, period, detail }) => (
            <div key={degree} className="border border-white/10 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <p className="text-[#f0f0f0] font-medium">{degree}</p>
                <p className="text-[#9ca3af] text-sm mt-0.5">{institution} · {detail}</p>
              </div>
              <span className="text-[#64ffda] font-mono text-xs shrink-0">{period}</span>
            </div>
          ))}
        </div>
        <p className="text-[#9ca3af] text-sm font-medium mb-3">Certifications</p>
        <div className="flex flex-wrap gap-2">
          {certifications.map(cert => (
            <span key={cert} className="px-3 py-1.5 bg-white/5 border border-white/10 text-[#9ca3af] text-xs font-mono">
              {cert} · LinkedIn Learning
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
