import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32 bg-white border-t border-slate-100">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to upgrade your practice?</h2>
                <p className="text-slate-500 mb-10 text-lg">
                    Join the waitlist for early access to DentCharts V5.
                    <br className="hidden md:block" /> No credit card required.
                </p>

                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
                    <input
                        type="email"
                        placeholder="doctor@clinic.com"
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
                    />
                    <button
                        type="button"
                        className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
                    >
                        Request Access
                    </button>
                </form>

                <p className="mt-6 text-xs text-slate-400">
                    By requesting access, you agree to our Terms of Service.
                </p>
            </div>
        </section>
    );
};

export default Contact;
