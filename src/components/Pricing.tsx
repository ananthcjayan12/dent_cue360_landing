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
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Transparent Pricing</h2>
                    <p className="text-slate-500">Choose the perfect plan for your practice growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">

                    {/* Essential Plan */}
                    <div className="p-6 rounded-3xl border border-slate-200 bg-white flex flex-col hover:border-dental-200 transition-colors">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Essential</h3>
                        <div className="mb-6">
                            <span className="text-3xl font-bold text-slate-900">₹10,999</span>
                            <span className="text-slate-500 text-xs"> / Year</span>
                        </div>
                        <p className="text-xs font-semibold text-slate-500 mb-4 uppercase tracking-wider">2 Users</p>
                        <ul className="space-y-3 mb-8 flex-grow">
                            {['Booking Management', 'Consultation Records', 'Smart Dental Charts', 'Smart Prescription Manager', 'Invoice Manager', 'Dashboard & Reports', 'Companion Smart Mobile App' ].map(f => (
                                <li key={f} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                                    <CheckIcon className="w-4 h-4 text-dental-500 flex-shrink-0" /> {f}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => goToContact('Interested in the Essential Plan')}
                            className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Growth Plan - Highlighted */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-200 relative z-10 flex flex-col border border-slate-800"
                    >
                        <div className="absolute top-0 right-0 bg-dental-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                            Best Value
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">Growth</h3>
                        <div className="mb-6">
                            <span className="text-3xl font-bold">₹16,999</span>
                            <span className="text-slate-400 text-xs"> / Year</span>
                        </div>
                        <p className="text-xs font-semibold text-dental-400 mb-4 uppercase tracking-wider">5 Users</p>
                        <ul className="space-y-3 mb-8 flex-grow">
                            {['Everything in Essential', 'Whatsapp Integration', 'User Role Management', 'Expense Manager', 'Premium Support', 'Website Builder', 'Smart Reports'].map(f => (
                                <li key={f} className="flex items-start gap-2 text-xs font-medium text-slate-300">
                                    <CheckIcon className="w-4 h-4 text-dental-400 flex-shrink-0" /> {f}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => goToContact('Interested in the Growth Plan')}
                            className="w-full py-3 rounded-xl bg-dental-600 text-white font-bold text-sm hover:bg-dental-500 transition-colors shadow-lg"
                        >
                            Get Growth
                        </button>
                    </motion.div>

                    {/* Empire Plan */}
                    <div className="p-6 rounded-3xl border border-slate-200 bg-white flex flex-col hover:border-dental-200 transition-colors">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Empire</h3>
                        <div className="mb-6">
                            <span className="text-3xl font-bold text-slate-900">₹26,999</span>
                            <span className="text-slate-500 text-xs"> / Year</span>
                        </div>
                        <p className="text-xs font-semibold text-slate-500 mb-4 uppercase tracking-wider">5 Users/Clinic (Max 5)</p>
                        <ul className="space-y-3 mb-8 flex-grow">
                            {['Everything in Growth', 'Multi Clinic Management', 'Centralized Admin', 'Advanced Analytics'].map(f => (
                                <li key={f} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                                    <CheckIcon className="w-4 h-4 text-dental-500 flex-shrink-0" /> {f}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => goToContact('Interested in the Empire Plan')}
                            className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                        >
                            Get Empire
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="p-6 rounded-3xl border border-slate-200 bg-dental-50/50 flex flex-col">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Enterprise</h3>
                        <div className="mb-6">
                            <span className="text-2xl font-bold text-slate-900">Custom</span>
                        </div>
                        <p className="text-xs font-semibold text-slate-500 mb-4 uppercase tracking-wider">Unlimited Scale</p>
                        <ul className="space-y-3 mb-8 flex-grow">
                            {['Custom Pricing', 'Custom Integrations', 'Dedicated Account Mgr', 'SLA & Priority Support'].map(f => (
                                <li key={f} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                                    <CheckIcon className="w-4 h-4 text-slate-400 flex-shrink-0" /> {f}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => goToContact('Enterprise / Custom Pricing Enquiry')}
                            className="w-full py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-bold text-sm hover:bg-slate-900 hover:text-white transition-colors"
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
