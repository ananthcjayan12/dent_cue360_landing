import React from 'react';
import {
    Squares2X2Icon,
    DevicePhoneMobileIcon,
    BoltIcon,
} from '@heroicons/react/24/outline';

const Features: React.FC = () => {
    return (
        <section id="features" className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tighter leading-[1.1]">
                        Everything you need. <br />
                        <span className="text-slate-300">Nothing you don't.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

                    {/* Card 1: Visual Dental Charting (Span 2) */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-slate-50 p-10 flex flex-col justify-between hover:bg-slate-100 transition-colors duration-500">
                        {/* Abstract Grid Visual */}
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                            <div className="grid grid-cols-4 gap-4 p-8 transform rotate-3 scale-110">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200"></div>
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10 max-w-sm pt-4">
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                                <Squares2X2Icon className="w-6 h-6 text-dental-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Visual Dental Charting</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Tap to chart. Drag to plan. An interface so intuitive, training takes minutes.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Mobile Native (Span 1, Row 2 - Vertical) */}
                    <div className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-10 flex flex-col justify-end">
                        {/* Gradient & Glow */}
                        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>

                        {/* Phone Icon Placeholder / Visual */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <DevicePhoneMobileIcon className="w-64 h-64 text-slate-800" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-slate-800/50 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-slate-700/50">
                                <DevicePhoneMobileIcon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Mobile Native</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Rounds, imaging, and charting. Anywhere, anytime.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Lightning Fast (Span 1) */}
                    <div className="md:col-span-1 group relative overflow-hidden rounded-[2.5rem] bg-orange-50/50 p-10 flex flex-col justify-between hover:bg-orange-50 transition-colors">
                        <div>
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-orange-100 flex items-center justify-center mb-6">
                                <BoltIcon className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Lightning Fast</h3>
                            <p className="text-slate-500 mt-2 text-sm">Built for speed. Zero lag.</p>
                        </div>
                        <div className="mt-4">
                            <span className="text-5xl font-mono font-bold text-slate-900 tracking-tighter">99.9</span>
                            <span className="text-orange-600/60 text-xs font-bold uppercase ml-1">% Uptime</span>
                        </div>
                    </div>

                    {/* Card 4: Business Intel (Span 1 - Laptop Image) */}
                    <div className="md:col-span-1 group relative overflow-hidden rounded-[2.5rem] bg-slate-100">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                            alt="Analytics Dashboard"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

                        <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                            <div className="mb-4 w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">Business Intel</h3>
                            <p className="text-slate-200 text-sm">Real-time revenue tracking.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
