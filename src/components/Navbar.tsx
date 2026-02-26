import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigateToContact } from '../hooks/useNavigateToContact';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const goToContact = useNavigateToContact();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '/#features' },
        { name: 'Showcase', href: '/#showcase' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] md:w-[98%] max-w-[1400px] transition-all duration-300 ${isScrolled || mobileMenuOpen
                    ? 'glass rounded-2xl shadow-glow'
                    : 'bg-transparent'
                    }`}
            >
                <div className="px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-3 md:gap-6">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 cursor-pointer shrink-0">
                        <img src="/logo.png" alt="Cue360 Logo" className="h-14 md:h-16 lg:h-20 w-auto object-contain" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-center">
                        {navLinks.map(link => (
                            link.href.startsWith('/#') ? (
                                <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-dental-600 transition-colors whitespace-nowrap">
                                    {link.name}
                                </a>
                            ) : (
                                <Link key={link.name} to={link.href} className="text-sm font-medium text-slate-500 hover:text-dental-600 transition-colors whitespace-nowrap">
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-4 shrink-0">
                        <a href="https://app.cue360.in" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-900 hover:text-dental-600 whitespace-nowrap">Login</a>
                        <button
                            onClick={() => goToContact('Book a Demo')}
                            className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
                        >
                            Book Demo
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden lg:hidden"
                        >
                            <div className="mx-4 mb-4 p-4 space-y-4 bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-2xl">
                                <div className="flex flex-col gap-2">
                                {navLinks.map(link => (
                                    link.href.startsWith('/#') ? (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block text-slate-700 font-semibold text-lg py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-dental-600 transition-all"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block text-slate-700 font-semibold text-lg py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-dental-600 transition-all"
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                ))}
                                </div>
                                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                                    <button
                                        onClick={() => { setMobileMenuOpen(false); goToContact('Book a Demo'); }}
                                        className="w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors"
                                    >
                                        Book Demo
                                    </button>
                                    <a
                                        href="https://app.cue360.in"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full text-center text-slate-600 py-3 font-medium hover:text-slate-900 transition-colors"
                                    >
                                        Login
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navbar;
