import React from 'react';

const Testimonials: React.FC = () => {
    const reviews = [
        { name: "Dr. Rajesh Malhotra", role: "Orthodontist, Mumbai", text: "Dent.Cue360's charting is intuitive. The 3D model helps patients visualize issues instantly." },
        { name: "Dr. Priya Sharma", role: "DDS, Sharma Family Dental", text: "The WhatsApp integration cut our no-shows by 40%. It pays for itself." },
        { name: "Anjali Gupta", role: "Clinic Manager, Delhi", text: "Billing used to take hours. Now generate invoices and tax reports in seconds." },
        { name: "Dr. Vikram Singh", role: "Implantologist", text: "The iPad app is perfect for chairside consultations. No more running back to the PC." },
        { name: "Dr. Meera Reddy", role: "Pediatric Dentist", text: "Parents love the digital prescriptions. It makes the whole experience premium." }
    ];

    // Duplicate for infinite scroll
    const marqueeReviews = [...reviews, ...reviews, ...reviews];

    return (
        <section id="testimonials" className="py-20 bg-slate-50 overflow-hidden relative border-y border-slate-200">
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-sm font-bold text-dental-600 uppercase tracking-widest">Trusted by Top Clinicians</h2>
            </div>

            <div className="flex w-fit animate-marquee hover:pause-marquee" style={{ animationDuration: '60s' }}>
                {marqueeReviews.map((review, i) => (
                    <div key={i} className="w-[350px] mx-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex-shrink-0 hover:border-dental-200 transition-colors">
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, j) => (
                                <svg key={j} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                        <p className="text-slate-700 text-sm mb-4 leading-relaxed">"{review.text}"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                                {review.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-900">{review.name}</p>
                                <p className="text-[10px] text-slate-500 uppercase font-semibold">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
