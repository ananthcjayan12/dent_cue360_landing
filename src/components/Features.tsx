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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">

                    {/* Card 1: Visual Dental Charting (Span 2) */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500">
                        {/* Dental Chart Image - Full Cover */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/dental-chart.png"
                                alt="Interactive Dental Chart"
                                className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Subtle Gradient for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent z-10 pointer-events-none"></div>

                        <div className="relative z-20 max-w-md p-10">
                            <div className="w-12 h-12 bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mb-6">
                                <Squares2X2Icon className="w-6 h-6 text-dental-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Visual Charting</h3>
                            <p className="text-slate-600 font-medium leading-relaxed text-lg">
                                Tap to chart. Drag to plan. An interface so intuitive, it feels like second nature.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Native Mobile (Span 1, Vertical) */}
                    <div className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-indigo-50/30 border border-slate-100 p-10 flex flex-col items-center">
                        <div className="relative z-20 text-center mb-8 w-full">
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-indigo-100 flex items-center justify-center mb-4 mx-auto">
                                <DevicePhoneMobileIcon className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Native Mobile</h3>
                            <p className="text-slate-500 text-base leading-relaxed">
                                Your entire practice ecosystem, accessible from anywhere.
                            </p>
                        </div>

                        {/* Phone Image - Large & Immersive */}
                        <div className="relative z-10 w-full flex-grow flex items-end justify-center">
                            <img
                                src="/mobile-app.png"
                                alt="Mobile App"
                                className="w-[110%] max-w-none transform translate-y-12 group-hover:translate-y-6 transition-transform duration-500 drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Card 3: Instant Sync (Span 1) */}
                    <div className="md:col-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 p-10 flex flex-col justify-between hover:border-orange-200 transition-colors shadow-sm hover:shadow-lg">
                        <div>
                            <div className="w-12 h-12 bg-orange-50 rounded-2xl border border-orange-100 flex items-center justify-center mb-6">
                                <BoltIcon className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Instant Sync</h3>
                            <p className="text-slate-500 mt-2 text-sm">Real-time database.</p>
                        </div>
                        <div className="mt-4">
                            <span className="text-6xl font-mono font-bold text-slate-900 tracking-tighter">0.1s</span>
                            <span className="text-orange-600 text-xs font-bold uppercase ml-2 tracking-widest">LATENCY</span>
                        </div>
                    </div>

                    {/* Card 4: Analytics (Span 1) */}
                    <div className="md:col-span-1 group relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100">
                        {/* Text Area */}
                        <div className="absolute top-0 left-0 right-0 p-8 px-10 z-20">
                            <h3 className="text-xl font-bold text-slate-900">Practice Intel</h3>
                            <p className="text-slate-500 text-sm">Automated financial tracking.</p>
                        </div>

                        {/* Dashboard Image - Slide Up Effect */}
                        <div className="absolute bottom-0 left-0 right-0 h-[70%] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <img
                                src="/analytics-dashboard.png"
                                alt="Analytics"
                                className="w-full h-full object-cover object-top shadow-xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default Features;
