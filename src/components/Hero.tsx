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
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-slate-700 tracking-wide">Trusted by dental clinics across India</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8"
                    >
                        Your clinic, fully automated. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-600 to-indigo-600">
                            Starting today.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl sm:text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto mb-10 leading-relaxed"
                    >
                        <span className="text-slate-900 font-bold">Cut no-shows by up to 40%. Get paid faster.</span> <br className="hidden sm:block" />
                        <span className="text-slate-700 font-medium">Know exactly where your clinic is making — and losing — money.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
                    >
                        <button
                            onClick={() => goToContact('Start 14-Day Free Trial')}
                            className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-xl text-lg font-bold shadow-2xl shadow-slate-900/30 hover:scale-105 transition-all"
                        >
                            Start 14-Day Free Trial
                        </button>
                        <button
                            onClick={() => goToContact('Watch 60-Second Demo')}
                            className="w-full sm:w-auto px-10 py-5 bg-transparent text-slate-900 border-2 border-slate-300 rounded-xl text-lg font-bold hover:border-slate-900 hover:bg-slate-50 transition-all"
                        >
                            Watch 60-Second Demo
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-stretch justify-center gap-6 sm:gap-8 mb-16 w-full max-w-5xl mx-auto"
                    >
                        <div className="flex items-center gap-5 bg-white shadow-md hover:shadow-lg transition-shadow border border-slate-200/60 rounded-2xl p-5 flex-1">
                            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="font-extrabold text-slate-900 text-xl mb-1">Easiest</span>
                                <span className="text-slate-600 font-semibold text-sm leading-snug">Instant Adoption- No Experience Required</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 bg-white shadow-md hover:shadow-lg transition-shadow border border-slate-200/60 rounded-2xl p-5 flex-1">
                            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 text-yellow-600">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="font-extrabold text-slate-900 text-xl mb-1">Fastest</span>
                                <span className="text-slate-600 font-semibold text-sm leading-snug">0.1s real-time sync</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 bg-white shadow-md hover:shadow-lg transition-shadow border border-slate-200/60 rounded-2xl p-5 flex-1">
                            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 text-purple-600">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <circle cx="12" cy="12" r="9" strokeWidth="2.5" />
                                    <circle cx="12" cy="12" r="3" strokeWidth="2.5" />
                                </svg>
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="font-extrabold text-slate-900 text-xl mb-1">Smartest</span>
                                <span className="text-slate-600 font-semibold text-sm leading-snug">Automated financial intelligence</span>
                            </div>
                        </div>
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
