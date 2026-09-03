export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0d0d0d]/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-[#64ffda] font-mono text-sm tracking-wider">aa.</span>
        <div className="flex gap-6 text-sm text-[#9ca3af] font-mono">
          {['about', 'skills', 'experience', 'projects', 'awards'].map(s => (
            <a key={s} href={`#${s}`} className="hover:text-[#64ffda] transition-colors duration-200">
              {s}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
