import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import InvoiceGenerator from './tools/InvoiceGenerator';

const DentalInvoicePage: React.FC = () => {
    useEffect(() => {
        // Handle SEO Meta Tags dynamically
        document.title = "Free Dental Invoice Generator | Create Professional Invoices | Cue360";
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', "Generate clean, professional dental invoices in seconds. Auto-save clinic details, add procedures, calculate GST, and download as PDF completely free.");
        }

        return () => {
             // Optional cleanup
        };
    }, []);

    return (
        <div className="bg-[#F8FAFC] relative overflow-hidden selection:bg-cyan-200 selection:text-cyan-900">
            {/* Soft Ambient Orbs for Clinical, Peaceful Vibe */}
            <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-cyan-100/40 blur-[120px] pointer-events-none print:hidden z-0"></div>
            <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#4B6EF5]/10 blur-[150px] pointer-events-none print:hidden z-0"></div>
            
            <div className="relative z-10 print:hidden">
                <Navbar />
            </div>

            <div className="relative z-10 pt-24 md:pt-32 min-h-screen">
                <InvoiceGenerator />
            </div>

            <div className="relative z-10 print:hidden mt-20 border-t border-blue-50">
                <Footer />
            </div>
        </div>
    );
};

export default DentalInvoicePage;
