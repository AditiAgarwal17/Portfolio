import { useScrollReveal } from '../hooks/useScrollReveal'

const roles = [
  {
    title: 'Software Engineer – SAP Datasphere',
    company: 'SAP Labs India',
    period: 'Jul 2024 – Present',
    tech: 'TypeScript · Node.js · Express.js · Distributed Systems · Microservices',
    bullets: [
      'Architected and designed resilient backend services and REST APIs for Apache Spark application deployment orchestration (versioning, rollbacks, deprecations), supporting 25+ concurrent heavy jobs per request',
      'Engineered a state-machine-driven deployment engine with multipart streaming upload (50 MB/file, 10-file limit) and stuck-state reconciliation for long-running deployments',
      'Built fault-tolerant webhook/callback job tracking with polling fallback, orphan detection, and 5-retry exponential backoff, eliminating resource leaks across crash/restart scenarios',
      'Enforced zero-trust security via hybrid JWT + mTLS authentication with privilege-scoped RBAC and comprehensive audit trail logging for enterprise compliance',
      'Instrumented 30+ production metrics via Dynatrace and Grafana for real-time per-tenant alerting and workload monitoring',
      'Built a low-latency data preview pipeline with direct Delta Lake file access, bypassing relational database query paths for large object-store datasets',
      'Scheduled automated cleanup jobs for stale deployments with observability tracking, reducing storage overhead across tenant spaces',
      'Spearheaded testing initiative raising code coverage from ~50% to 80%; resolved ~50 critical platform issues impacting deployment reliability and tenant workloads',
    ],
  },
  {
    title: 'Software Engineer – Document Object Extraction (DOX)',
    company: 'SAP Labs India',
    period: 'Jan 2024 – Jun 2024',
    tech: 'Python · REST APIs · Microservices',
    bullets: [
      'Built microservice health check APIs classifying failures across 5+ downstream dependencies into SLA-impacting and non-SLA degradations for proactive incident management',
      'Extended LLM-based schema generation pipelines to support 3+ configurable field constraint types, improving schema accuracy and document processing flexibility',
      'Solved multiple UI and backend bugs improving platform stability',
    ],
  },
  {
    title: 'Software Engineer – Marketplace Platform',
    company: 'SAP Labs India',
    period: 'May 2023 – Dec 2023',
    tech: 'Java · Spring Boot · Angular · Relational Databases',
    bullets: [
      'Shipped 15+ full stack features and validation workflows spanning Spring Boot backend services and Angular client-side interfaces',
      'Diagnosed a critical data corruption issue affecting 210+ production records; authored targeted Flyway migration scripts to repair null and inconsistent metadata',
    ],
  },
  {
    title: 'Software Engineer – Industry Cloud for Retail',
    company: 'SAP Labs India',
    period: 'Sep 2022 – Apr 2023',
    tech: 'Java · Spring Boot · Web Technologies · Testing Frameworks',
    bullets: [
      'Developed and maintained Spring Boot backend services and enterprise UI components supporting retail platform workflows',
      'Resolved 25+ systemic UI and backend defects; increased regression test coverage by ~40% using JUnit and QUnit automated test suites',
    ],
  },
  {
    title: 'Software Engineering Intern – SAP Engineering Academy',
    company: 'SAP Labs India',
    period: 'Jul 2021 – Sep 2021',
    tech: 'Web Technologies · Cloud Infrastructure · AWS',
    bullets: [
      'Engineered a component-driven enterprise web application with RESTful architecture; integrated cloud-native storage via AWS DynamoDB and Lambda Functions for serverless execution',
    ],
  },
]

export default function Experience() {
  const ref = useScrollReveal()
  return (
    <section id="experience" className="py-16">
      <div ref={ref} className="reveal">
        <h2 className="text-3xl font-bold text-[#f0f0f0] mb-8">Experience</h2>
        <div className="space-y-4">
          {roles.map(({ title, company, period, tech, bullets }) => (
            <div key={title} className="border border-white/10 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="text-base font-semibold text-[#f0f0f0]">{title}</h3>
                <span className="text-[#64ffda] font-mono text-xs shrink-0 md:ml-4">{period}</span>
              </div>
              <p className="text-[#9ca3af] text-sm mb-1">{company}</p>
              <p className="text-[#6b7280] font-mono text-xs mb-5">{tech}</p>
              <ul className="space-y-2.5">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#9ca3af] leading-relaxed">
                    <span className="text-[#64ffda] mt-0.5 shrink-0">▸</span>
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
