import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()
  return (
    <section id="about" className="py-16">
      <div ref={ref} className="reveal">
        <h2 className="text-3xl font-bold text-[#f0f0f0] mb-6">About Me</h2>
        <p className="text-[#9ca3af] leading-relaxed max-w-2xl">
          Software Engineer with 4 years of experience building distributed backend systems and
          enterprise-scale applications using Node.js, Java, Spring Boot, TypeScript, Angular,
          Apache Spark, and cloud-native architectures. Experienced in scalability, high availability,
          fault tolerance, service reliability, production monitoring, and CI/CD practices.
        </p>
      </div>
    </section>
  )
}
