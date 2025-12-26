import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32 bg-white border-t border-slate-100">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to upgrade your practice?</h2>
                <p className="text-slate-500 mb-8 max-w-sm mx-auto">
                    Get started with Dent.Cue360 today.
                    <br className="hidden md:block" /> No credit card required.
                </p>

                <form className="max-w-md mx-auto space-y-4 relative">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all font-medium"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all font-medium"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all font-medium"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full px-6 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform active:scale-95 duration-200 mt-2"
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
