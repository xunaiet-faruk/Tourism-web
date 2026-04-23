import { CiSearch } from "react-icons/ci";
import React, { useState } from 'react';
import Heading from './Heading';

const Navbar = () => {
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
        <>
            <Heading />
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo / Brand */}
                        <div className="flex-shrink-0 ">
                            <img src="/logo.png" alt="Logo" className="h-10 md:h-12 w-auto" />
                        </div>

                        {/* Desktop Navigation Links - visible on tablet and large screens */}
                        <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(link.id, e)}
                                    className="px-3 lg:px-4 py-2 lg:py-2.5 text-[16px] font-normal font-[Manrope] transition-all duration-200 hover:text-gray-900 hover:bg-gray-50 whitespace-nowrap rounded-lg"
                                    style={activeRoute === link.id ? { color: '#FAB326' } : { color: '#4B5563' }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Desktop Right Section - Search & Sign In */}
                        <div className="hidden md:flex items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">
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

                        {/* Mobile menu button - visible on small screens only */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-all duration-200"
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

                    {/* Mobile Menu - visible when hamburger is clicked */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-100 animate-fadeIn">
                            <div className="flex flex-col space-y-1">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(link.id, e)}
                                        className="px-4 py-3 rounded-lg font-medium transition-all duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                        style={activeRoute === link.id ? { color: '#FAB326' } : {}}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                {/* Mobile Search */}
                                <div className="flex items-center gap-2 px-4 py-3 text-gray-600 border-t border-gray-100 mt-2 pt-3">
                                    <CiSearch className="text-xl" />
                                    <span className="text-[14px] font-medium">Search</span>
                                </div>
                                {/* Mobile Sign In Button */}
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

          
        </>
    );
};

export default Navbar;