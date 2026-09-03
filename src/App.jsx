import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-[#0d0d0d] text-[#e5e5e5] min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Education />
        <Contact />
      </main>
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-white/5 mt-8">
        <p className="text-center text-[#444] text-sm font-mono">
          built by aditi · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}

