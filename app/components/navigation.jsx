"use client";

import Link from "next/link";

export default function Navigation({ isMenuOpen, setIsMenuOpen }) {
  const navItems = [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Work", href: "/#work" },
    { label: "Research", href: "/#writing" },
    { label: "Talks", href: "/#talks" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-neutral-200/80">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/#home"
          className="text-base font-semibold tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors"
        >
          Anshuman Pati
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://drive.google.com/file/d/1pSNvC8wb6eBipCeX4HWb0emujOtJHFFa/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-xs font-medium px-4 py-2 rounded-lg border border-neutral-300 text-neutral-900 bg-white hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all shadow-xs"
          >
            Resume (PDF)
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen && setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-xs font-medium text-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-300 bg-white hover:border-neutral-900 transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={Boolean(isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-[#FAFAF9] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
                className="text-base font-medium text-neutral-900 hover:text-neutral-600 py-1"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1pSNvC8wb6eBipCeX4HWb0emujOtJHFFa/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
              className="inline-block text-xs font-medium text-center text-white bg-neutral-900 px-4 py-2.5 rounded-lg mt-2 shadow-xs"
            >
              Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}