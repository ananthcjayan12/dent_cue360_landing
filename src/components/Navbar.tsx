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
        { name: 'ROI Calculator', href: '/#roi-calculator' },
        { name: 'Profit Calculators', href: '/clinic-profit-intelligence', isNew: true },
        { name: 'Pricing', href: '/#pricing' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`sticky top-0 w-full z-[1000] transition-all duration-300 ${isScrolled || mobileMenuOpen
                    ? 'glass shadow-md border-b border-white/20'
                    : 'bg-transparent'
                    }`}
            >
                <div className="w-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
                    {/* Logo - Left */}
                    <Link
                        to="/"
                        onClick={() => window.scrollTo(0, 0)}
                        className="flex items-center gap-2 cursor-pointer z-50 shrink-0"
                    >
                        <img src="/logo.png" alt="Cue360 Logo" className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform hover:scale-105" />
                    </Link>

                    {/* Centered Desktop Nav */}
                    <div className="hidden md:flex items-center justify-center gap-6 xl:gap-10 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map(link => (
                            link.href.startsWith('/#') ? (
                                <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-900 hover:text-dental-600 transition-colors whitespace-nowrap flex items-center gap-1.5">
                                    {link.name}
                                    {link.isNew && <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-600 text-[10px] font-black uppercase tracking-wider shadow-sm">New</span>}
                                </a>
                            ) : (
                                <Link key={link.name} to={link.href} className="text-sm font-semibold text-slate-900 hover:text-dental-600 transition-colors whitespace-nowrap flex items-center gap-1.5">
                                    {link.name}
                                    {link.isNew && <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-600 text-[10px] font-black uppercase tracking-wider shadow-sm">New</span>}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Right Area - CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4 shrink-0 z-[1000]">
                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center gap-4">
                            <a href="https://dent.cue360.in/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-900 hover:text-dental-600 whitespace-nowrap">Login</a>
                            <button
                                onClick={() => goToContact('Book a Demo')}
                                className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
                            >
                                Book Demo
                            </button>
                            <button
                                onClick={() => goToContact('Start Free Trial')}
                                className="bg-blue-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-800 hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
                            >
                                Start Free Trial
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden md:hidden"
                        >
                            <div className="mx-4 mb-4 p-4 space-y-4 bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-2xl">
                                <div className="flex flex-col gap-2">
                                    {navLinks.map(link => (
                                        link.href.startsWith('/#') ? (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="flex items-center gap-2 text-slate-900 font-bold text-lg py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-dental-600 transition-all"
                                            >
                                                {link.name}
                                                {link.isNew && <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-600 text-[10px] font-black uppercase tracking-wider ml-auto">New</span>}
                                            </a>
                                        ) : (
                                            <Link
                                                key={link.name}
                                                to={link.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="flex items-center gap-2 text-slate-900 font-bold text-lg py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-dental-600 transition-all"
                                            >
                                                {link.name}
                                                {link.isNew && <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-600 text-[10px] font-black uppercase tracking-wider ml-auto">New</span>}
                                            </Link>
                                        )
                                    ))}
                                </div>
                                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                                    <a
                                        href="https://dent.cue360.in/"
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

            {/* Mobile Bottom CTA Bar */}
            <div
                className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-[1000] flex gap-3"
                style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
            >
                <button
                    onClick={() => goToContact('View Demo')}
                    className="flex-1 bg-white border-2 border-slate-900 text-slate-900 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
                >
                    View Demo
                </button>
                <button
                    onClick={() => goToContact('Start Free Trial')}
                    className="flex-1 bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors"
                >
                    Start Free Trial
                </button>
            </div>
        </>
    );
};

export default Navbar;
