import React from 'react';
import { motion } from 'framer-motion';
import { useNavigateToContact } from '../hooks/useNavigateToContact';
import { CheckIcon } from '@heroicons/react/24/solid';

const Pricing: React.FC = () => {
    const goToContact = useNavigateToContact();
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold text-dental-600 tracking-wider uppercase mb-3">Transparent Pricing</p>
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Choose the perfect plan for your practice growth</h2>
                    <p className="text-slate-500">No hidden costs. No setup fees. Cancel anytime.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">

                    {/* Essential Plan */}
                    <div className="p-6 rounded-3xl border border-slate-200 bg-white flex flex-col hover:border-dental-200 transition-colors">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Essential</h3>
                        <div className="mb-2 flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-slate-900">₹10,999</span>
                            <span className="text-slate-500 text-xs font-medium">/month</span>
                        </div>
                        <p className="text-sm italic text-teal-600 mb-6 font-medium">Less than ₹365 per day</p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {['Your front desk, automated', 'Smart patient records', 'Get paid faster — zero billing errors', 'Prescription manager', 'Basic reports', 'Native mobile app'].map(f => (
                                <li key={f} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                                    <CheckIcon className="w-5 h-5 text-dental-500 flex-shrink-0" /> {f}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => goToContact('Interested in the Essential Plan')}
                            className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-dental-500 hover:text-dental-600 transition-colors"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Growth Plan - Highlighted */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-200 relative z-10 flex flex-col border border-slate-800"
                    >
                        <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl tracking-wider">
                            Best Buy
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">Growth</h3>
                        <div className="mb-2 flex items-baseline gap-1">
                            <span className="text-3xl font-bold">₹16,999</span>
                            <span className="text-slate-400 text-xs font-medium">/month</span>
                        </div>
                        <p className="text-sm italic text-teal-400 mb-6 font-medium">Pays for itself with just 2 recovered no-shows per week</p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {['Everything in Essential', 'Cut no-shows by up to 40%', 'Live slot management', 'Know where your clinic is leaking money', 'Premium support', 'Run your clinic from anywhere', 'Smart Reports included'].map(f => (
                                <li key={f} className="flex items-start gap-3 text-sm font-medium text-slate-200">
                                    <CheckIcon className="w-5 h-5 text-white flex-shrink-0" /> {f}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => goToContact('Interested in the Growth Plan')}
                            className="w-full py-3 rounded-xl bg-blue-500 text-white font-bold text-sm hover:bg-blue-400 transition-colors shadow-lg"
                        >
                            Get Growth
                        </button>
                    </motion.div>

                    {/* Empire Plan */}
                    <div className="p-6 rounded-3xl border border-slate-200 bg-white flex flex-col hover:border-dental-200 transition-colors">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Empire</h3>
                        <div className="mb-2 flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-slate-900">₹26,999</span>
                            <span className="text-slate-500 text-xs font-medium">/month</span>
                        </div>
                        <p className="text-sm italic text-teal-600 mb-6 font-medium">Full multi-clinic control from one screen</p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {['Everything in Growth', 'Multi-clinic management', 'Centralised admin control', 'Advanced analytics', 'Priority support'].map(f => (
                                <li key={f} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                                    <CheckIcon className="w-5 h-5 text-dental-500 flex-shrink-0" /> {f}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => goToContact('Interested in the Empire Plan')}
                            className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-dental-500 hover:text-dental-600 transition-colors"
                        >
                            Get Empire
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="p-6 rounded-3xl border border-slate-200 bg-slate-50 flex flex-col">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Enterprise</h3>
                        <div className="mb-2 flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-slate-900">Custom</span>
                        </div>
                        <p className="text-sm italic text-slate-500 mb-6 font-medium">For large chains and hospital networks</p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {['Custom pricing', 'Custom integrations', 'Dedicated account manager', 'SLA and priority support'].map(f => (
                                <li key={f} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                                    <CheckIcon className="w-5 h-5 text-dental-500 flex-shrink-0" /> {f}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => goToContact('Enterprise / Custom Pricing Enquiry')}
                            className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
                        >
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
