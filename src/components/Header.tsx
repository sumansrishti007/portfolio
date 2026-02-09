'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Code2 } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#27272a]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-lg font-semibold hover:text-blue-500 transition-colors"
        >
          SS<span className="text-blue-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="#skills"
            className="text-sm text-[#a1a1aa] hover:text-white transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm text-[#a1a1aa] hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-sm text-[#a1a1aa] hover:text-white transition-colors"
          >
            Experience
          </a>

          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-[#27272a]">
            {/* GitHub - Opens your GitHub profile */}
            <a
              href="https://github.com/sumansrishti007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1aa] hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            
            {/* LinkedIn - Opens your LinkedIn profile */}
            <a
              href="https://www.linkedin.com/in/srishti-suman-2416231b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1aa] hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            
            {/* LeetCode - Opens your LeetCode profile */}
            <a
              href="https://leetcode.com/u/sumansrishti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1a1aa] hover:text-white transition-colors"
              title="LeetCode"
            >
              <Code2 size={18} />
            </a>
            
            {/* Email - Opens email client */}
            <a
              href="mailto:sumansrishti007@gmail.com"
              className="text-[#a1a1aa] hover:text-white transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="https://github.com/sumansrishti007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1aa] hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/srishti-suman-2416231b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1aa] hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:sumansrishti007@gmail.com"
            className="text-[#a1a1aa] hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </nav>
    </header>
  )
}