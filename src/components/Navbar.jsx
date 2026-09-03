import { useState, useEffect } from 'react'

const navLinks = ['about', 'skills', 'experience', 'projects', 'awards']

export default function Navbar() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observers = []
    navLinks.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0d0d0d]/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center">
        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 text-sm font-mono ml-auto">
          {navLinks.map(s => (
            <a
              key={s}
              href={`#${s}`}
              className={`transition-colors duration-200 ${
                active === s ? 'text-[#64ffda]' : 'text-[#9ca3af] hover:text-[#64ffda]'
              }`}
            >
              {s}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto text-[#9ca3af] hover:text-[#64ffda] transition-colors text-lg"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(s => (
            <a
              key={s}
              href={`#${s}`}
              onClick={() => setMenuOpen(false)}
              className={`font-mono text-sm transition-colors duration-200 ${
                active === s ? 'text-[#64ffda]' : 'text-[#9ca3af]'
              }`}
            >
              {s}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
