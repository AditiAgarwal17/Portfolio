const skills = [
  { category: 'Languages', items: ['TypeScript', 'Java', 'JavaScript', 'Python', 'SQL'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'Microservices'] },
  { category: 'Big Data', items: ['Apache Spark', 'Delta Lake', 'Parquet', 'Distributed Systems'] },
  { category: 'Cloud & DevOps', items: ['AWS Lambda', 'Docker', 'Git', 'CI/CD'] },
  { category: 'Observability', items: ['Dynatrace', 'Grafana', 'Postman'] },
  { category: 'Database', items: ['SQL', 'Flyway', 'DynamoDB', 'PostgreSQL'] },
  { category: 'Testing', items: ['JUnit', 'QUnit', 'Mocha', 'Chai', 'Cypress', 'TestCafe'] },
  { category: 'Frontend', items: ['Angular', 'SAP UI5', 'React', 'HTML', 'CSS'] },
  { category: 'Concepts', items: ['Scalability', 'High Availability', 'Fault Tolerance', 'Observability', 'Agile'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-[#f0f0f0] mb-8">Tech Stack</h2>
      <div className="grid gap-5">
        {skills.map(({ category, items }) => (
          <div key={category} className="flex gap-6 items-start">
            <span className="text-[#64ffda] font-mono text-xs w-28 shrink-0 pt-1">{category}</span>
            <div className="flex flex-wrap gap-2">
              {items.map(item => (
                <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 text-[#9ca3af] text-xs font-mono">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
