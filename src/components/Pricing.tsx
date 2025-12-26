import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Pricing</h2>
                    <p className="text-slate-500">Simple, transparent pricing for every stage.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {/* Basic */}
                    <div className="p-8 rounded-3xl border border-slate-100 bg-white">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Basic</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-slate-900">$0</span>
                            <span className="text-slate-500 text-sm"> / per month</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {['Single Practitioner', 'Basic Charting', '1GB Storage'].map(f => (
                                <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                                    <CheckIcon className="w-4 h-4 text-slate-400" /> {f}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:border-slate-300 transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Pro - Highlighted */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-8 rounded-3xl bg-dental-600 text-white shadow-2xl shadow-dental-200 relative z-10"
                    >
                        <h3 className="text-xl font-bold mb-2">Pro</h3>
                        <div className="mb-6">
                            <span className="text-5xl font-bold">$70</span>
                            <span className="text-dental-200 text-sm"> / per month</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {['Unlimited Practitioners', 'Advanced Imaging', 'Patient Portal', 'Priority Support'].map(f => (
                                <li key={f} className="flex items-center gap-3 text-sm text-dental-50">
                                    <CheckIcon className="w-4 h-4 text-white" /> {f}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-3 rounded-xl bg-white text-dental-600 font-bold shadow-lg hover:shadow-xl transition-all">
                            Get Pro
                        </button>
                    </motion.div>

                    {/* Enterprise */}
                    <div className="p-8 rounded-3xl border border-slate-100 bg-white">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-slate-900">$120</span>
                            <span className="text-slate-500 text-sm"> / per month</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {['Custom API', 'SLA Guarantee', 'Dedicated Manager'].map(f => (
                                <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                                    <CheckIcon className="w-4 h-4 text-slate-400" /> {f}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:border-slate-300 transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
