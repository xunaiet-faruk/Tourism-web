import React from 'react';
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

const Banner = () => {
    const [activeRoute, setActiveRoute] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', id: 'home', href: '/' },
        { name: 'Tours', id: 'tours', href: '/tours' },
        { name: 'Hotel', id: 'hotel', href: '/hotel' },
        { name: 'Blog', id: 'blog', href: '/blog' },
        { name: 'About', id: 'about', href: '/about' },
        { name: 'Contact', id: 'contact', href: '/contact' },
    ];

    const handleNavClick = (id, e) => {
        e.preventDefault();
        setActiveRoute(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="relative w-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('/banner.png')`,
            }}>
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10">
                <nav className="sticky top-0 z-50 bg-black/20">
                    <div className="px-4 sm:px-6 lg:px-20">
                        <div className="flex justify-between items-center h-16 md:h-20">

                            <div className="flex-shrink-0">
                                <img src="/logo.png" alt="Logo" className="h-10 md:h-12 w-auto brightness-0 invert" />
                            </div>

                            <div className="hidden lg:flex lg:items-center lg:space-x-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(link.id, e)}
                                        className="px-3 lg:px-4 py-2 lg:py-2.5 text-[16px] font-normal font-[Manrope] transition-all duration-200 hover:text-[#FAB326] hover:bg-white/10 whitespace-nowrap rounded-lg text-white"
                                        style={activeRoute === link.id ? { color: '#FAB326' } : { color: 'white' }}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                            <div className="hidden lg:flex items-center gap-4">
                                <div className="flex items-center gap-2 text-white hover:text-[#FAB326] cursor-pointer transition-colors">
                                    <CiSearch className="text-xl" />
                                    <span className="text-[14px] font-medium">Search</span>
                                </div>
                                <button
                                    className="w-[100px] h-[44px] bg-[#FAB326] text-white font-semibold 
                                                rounded-[40px] px-4 py-2 flex items-center justify-center gap-2
                                                transition-all duration-200 hover:bg-[#e5a020] hover:shadow-md"
                                >
                                    Sign In
                                </button>
                            </div>

                            <div className="lg:hidden">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="p-2 rounded-lg text-white hover:text-[#FAB326] hover:bg-white/10 focus:outline-none transition-all duration-200"
                                    aria-label="Toggle menu"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        {isMobileMenuOpen ? (
                                            <path d="M6 18L18 6M6 6l12 12" />
                                        ) : (
                                            <path d="M4 6h16M4 12h16M4 18h16" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {isMobileMenuOpen && (
                            <div className="lg:hidden py-4 border-t border-white/20 animate-fadeIn bg-black/50 backdrop-blur-md rounded-2xl mt-2">
                                <div className="flex flex-col space-y-1">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.id}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(link.id, e)}
                                            className="px-4 py-3 rounded-lg font-medium transition-all duration-200 text-white hover:text-[#FAB326] hover:bg-white/10"
                                            style={activeRoute === link.id ? { color: '#FAB326' } : {}}
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                    <div className="flex items-center gap-2 px-4 py-3 text-white border-t border-white/20 mt-2 pt-3">
                                        <CiSearch className="text-xl" />
                                        <span className="text-[14px] font-medium">Search</span>
                                    </div>
                                    <div className="pt-2 px-4">
                                        <button
                                            className="w-full bg-[#FAB326] text-white font-semibold 
                                                        rounded-[40px] px-4 py-3 flex items-center justify-center
                                                        transition-all duration-200 hover:bg-[#e5a020]"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                <div className="w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
                    <div className="relative z-10 w-full max-w-6xl mx-auto text-center flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24  min-h-[500px] md:min-h-[600px]">

                        <button className="group mb-6 sm:mb-8 md:mb-10 flex items-center justify-center gap-2 sm:gap-3 bg-[#FAB326] hover:bg-[#f7bd4a] transition-all duration-300 rounded-full px-4 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all">
                            <img src="/earth.svg fill.png" alt="" />
                            <span className="text-white font-manrope font-medium text-sm sm:text-base md:text-lg tracking-wide">Explore the world</span>
                        </button>

                        <h1 className="font-manrope font-extrabold text-center text-white mb-4 sm:mb-6 md:mb-8 px-2"
                            style={{
                                fontWeight: 800,
                                fontStyle: 'normal',
                                letterSpacing: '0%',
                                fontSize: 'clamp(28px, 6vw, 52px)',
                                lineHeight: 'clamp(38px, 7vw, 76px)',
                            }}>
                            Your Gateway to Extraordinary Adventures
                        </h1>

                        <p className="font-manrope font-medium text-center text-white/90 max-w-4xl mx-auto px-3 sm:px-4"
                            style={{
                                fontWeight: 500,
                                fontStyle: 'normal',
                                letterSpacing: '0%',
                                fontSize: 'clamp(16px, 4vw, 24px)',
                                lineHeight: 'clamp(24px, 5vw, 32px)',
                            }}>
                            Pack your bags and let Travila redefine your travel experience. Where
                            every journey is a story waiting to be told.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;