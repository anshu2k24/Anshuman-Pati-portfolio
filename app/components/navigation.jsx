import React from 'react'

// Accept the props here
export default function Navigation({ isMenuOpen, setIsMenuOpen }) {
    const navItems = ["Home", "Tech Stack", "Projects", "Hackathons", "Contact"];
    
    // The onClick handler is correct, it uses the passed prop function
    // The className logic is also correct, using the passed prop state
    return (
        <>
        {/* Navigation - Premium Glassmorphism Style */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100 shadow-lg shadow-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-xl sm:text-2xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 drop-shadow-[0_0_8px_rgba(79,70,229,0.3)]">
                                <span className="hidden sm:inline">
                                    code Anshu()&#123;...&#125;
                                </span>
                                <span className="sm:hidden">Anshu</span>
                            </span>
                        </div>

                        <div className="hidden md:flex space-x-2 lg:space-x-3">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(" ", "")}`}
                                    className="relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium group text-sm lg:text-base rounded-lg hover:bg-blue-50/50"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)} // Uses the prop setIsMenuOpen
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors backdrop-blur-sm text-gray-800"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span
                                    className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                                        isMenuOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                                ></span>
                                <span
                                    className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                                        isMenuOpen ? "opacity-0" : ""
                                    }`}
                                ></span>
                                <span
                                    className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                                        isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                                ></span>
                            </div>
                        </button>
                    </div>

                    <div
                        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/90 border-t border-gray-100 ${
                            isMenuOpen ? "max-h-96 pb-4" : "max-h-0" // Uses the prop isMenuOpen
                        }`}
                    >
                        <div className="flex flex-col space-y-2 pt-4">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(" ", "")}`}
                                    onClick={() => setIsMenuOpen(false)} // Closes menu on link click
                                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2.5 px-4 rounded-lg hover:bg-gray-100/80"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}