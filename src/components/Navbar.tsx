import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Showcase', href: '#showcase' },
        { name: 'Pricing', href: '#pricing' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${isScrolled || mobileMenuOpen
                    ? 'glass rounded-2xl shadow-glow'
                    : 'bg-transparent'
                    }`}
            >
                <div className="px-6 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-8 bg-dental-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-dental-500/30">
                            D
                        </div>
                        <span className="font-bold text-slate-900 tracking-tight">Dent.Cue360</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-dental-600 transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="#" className="text-sm font-semibold text-slate-900 hover:text-dental-600">Login</a>
                        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 hover:shadow-lg transition-all active:scale-95">
                            Book Demo
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-slate-600"
                    >
                        {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden md:hidden border-t border-slate-100"
                        >
                            <div className="p-4 space-y-4">
                                {navLinks.map(link => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block text-slate-600 font-medium py-2"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                                    <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-medium">
                                        Book Demo
                                    </button>
                                    <button className="w-full text-slate-600 py-3 font-medium">
                                        Login
                                    </button>
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
