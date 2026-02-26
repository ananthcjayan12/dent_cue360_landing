import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigateToContact } from '../hooks/useNavigateToContact';

const Footer: React.FC = () => {
    const goToContact = useNavigateToContact();
    return (
        <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to modernize?</h3>
                        <p className="text-slate-500">Join 500+ clinics running on Dent.Cue360.</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => goToContact('Get Started with Dent.Cue360')}
                            className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
                        >
                            Get Started
                        </button>
                        <button
                            onClick={() => goToContact('Contact Sales Enquiry')}
                            className="px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
                        >
                            Contact Sales
                        </button>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <img src="/logo.png" alt="Cue360 Logo" className="h-14 md:h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                    </div>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="hover:text-slate-900">Privacy</Link>
                        <Link to="/terms" className="hover:text-slate-900">Terms</Link>
                        <a href="#" className="hover:text-slate-900">Twitter</a>
                        <a href="#" className="hover:text-slate-900">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
