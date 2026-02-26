import React from 'react';
import { motion } from 'framer-motion';
import { useNavigateToContact } from '../hooks/useNavigateToContact';


const Hero: React.FC = () => {
    const goToContact = useNavigateToContact();
    return (
        <section className="relative pt-28 pb-40 overflow-hidden bg-slate-50">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-dental-200/40 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px]" />
                {/* Grid Pattern overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Content */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-white/50 backdrop-blur border border-white/60 shadow-sm rounded-full px-4 py-1.5 mb-8"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dental-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-dental-500"></span>
                        </span>
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Smart Clinic Management</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8"
                    >
                        The Smartest <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-600 to-indigo-600">
                            Dental Platform
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        The intelligent platform for high-performance clinics.
                        <span className="text-slate-900 font-semibold"> Charting, billing, and patient engagement in one beautiful interface.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => goToContact('Start 14-Day Trial')}
                            className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold shadow-2xl shadow-slate-900/20 hover:scale-105 transition-all"
                        >
                            Start 14-Day Trial
                        </button>
                        <button
                            onClick={() => goToContact('View Interactive Demo')}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all"
                        >
                            View Interactive Demo
                        </button>
                    </motion.div>
                </div>

                {/* 3D Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 100, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="perspective-[2000px] relative group"
                >
                    {/* The Component rendered as the hero image */}
                    <div className="transform transition-all duration-500 group-hover:rotate-x-2 group-hover:scale-[1.01] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.25)] rounded-xl border-4 border-slate-900/5 bg-slate-900 overflow-hidden">
                        <img
                            src="/dashboard-stats.png"
                            alt="Dent.Cue360 Dashboard"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Glow effect behind */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-dental-500 to-purple-500 rounded-xl blur-3xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity duration-1000"></div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
