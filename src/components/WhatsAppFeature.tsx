import React from 'react';
import { TrendingDown, Bot, ArrowRight } from 'lucide-react';

const WhatsAppFeature: React.FC = () => {
    return (
        <section id="whatsapp-feature-section" className="py-24 bg-[#F0FBF5] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column - Text Content */}
                    <div className="max-w-xl">
                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold tracking-wider uppercase">
                            WhatsApp Reminders
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            Cut no-shows by up to 40% — automatically.
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            Cue360 sends WhatsApp appointment reminders without you lifting a finger. No manual follow-up. No missed bookings.
                        </p>

                        <div className="space-y-8 mb-10">
                            {/* Benefit 1 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-green-600 border border-green-100">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">Up to 40% fewer no-shows</h4>
                                    <p className="text-slate-600 mt-1">Patients confirm directly on WhatsApp</p>
                                </div>
                            </div>
                            
                            {/* Benefit 2 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-green-600 border border-green-100">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">Zero manual follow-up</h4>
                                    <p className="text-slate-600 mt-1">Reminders go out automatically 24h and 2h before appointments</p>
                                </div>
                            </div>

                            {/* Benefit 3 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-green-600 border border-green-100">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M12.012 2C6.488 2 2 6.488 2 12.012c0 1.767.464 3.498 1.343 5.01L2 22l5.12-1.343a9.982 9.982 0 004.892 1.258h.004c5.522 0 10.01-4.488 10.01-10.01C22.026 6.488 17.538 2 12.012 2zm0 18.064c-1.547 0-3.04-.416-4.358-1.2l-.312-.178-3.235.85.864-3.155-.196-.312A8.17 8.17 0 013.9 12.013c0-4.502 3.666-8.167 8.113-8.167 4.5 0 8.165 3.665 8.165 8.167 0 4.498-3.665 8.05-8.166 8.05zm4.48-6.14c-.246-.123-1.455-.718-1.68-.8-.224-.084-.388-.124-.552.122-.164.246-.632.8-.775.964-.144.164-.288.185-.534.062-.246-.124-1.04-.384-1.98-1.222-.734-.654-1.228-1.464-1.372-1.71-.144-.246-.015-.378.108-.5.11-.11.246-.287.368-.43.123-.143.164-.246.246-.41.082-.164.04-.308-.02-.43-.062-.123-.553-1.332-.756-1.825-.198-.48-.402-.416-.553-.424-.143-.008-.307-.008-.47-.008-.164 0-.43.062-.656.308-.226.246-.86 8.4-8.6 1.045 0 1.343.53 1.948.86 2.45v2.45a9.074 9.074 0 002.394 2.115c.246.123 1.455.718 1.68.802.224.084.734.02 1.05-.123.315-.144 1.454-.595 1.66-1.17.204-.575.204-1.066.143-1.17-.062-.103-.225-.164-.47-.287z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">Built-in — not a plugin</h4>
                                    <p className="text-slate-600 mt-1">No extra charges. Included in Growth plan and above.</p>
                                </div>
                            </div>
                        </div>

                        <a href="#demo" className="inline-flex items-center gap-2 text-[#00A884] font-bold hover:text-[#068a6d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00A884] focus:ring-offset-2 rounded-md px-1">
                            See how it works
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Right Column - Phone Mockup */}
                    <div className="relative mx-auto w-full max-w-[340px] lg:max-w-[380px]">
                        {/* Blob Backgrounds for Depth */}
                        <div className="absolute top-1/4 -right-8 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#00A884] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                        
                        {/* Mobile Phone Mockup */}
                        <div className="relative z-10 bg-[#e5ddd5] rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-slate-900 h-[680px] flex flex-col">
                            
                            {/* Dynamic Island / Notch */}
                            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
                                <div className="w-1/3 h-[18px] bg-slate-900 rounded-b-xl"></div>
                            </div>

                            {/* WhatsApp Header */}
                            <div className="pt-10 pb-4 px-4 bg-[#128C7E] flex items-center gap-3 shadow-md z-40">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#128C7E] font-bold text-xl overflow-hidden">
                                    <img src="/clinic-logo-placeholder.png" alt="S" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerText = 'S'; }} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold text-[17px] leading-tight flex items-center justify-between">
                                        SmileCare Clinic
                                    </h4>
                                    <p className="text-green-100 text-[13px] flex items-center gap-1.5 mt-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-300"></span>
                                        Online
                                    </p>
                                </div>
                            </div>
                            
                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-[url('https://whatsapp-chat-bg.vercel.app/bg.svg')] opacity-40 z-0 pointer-events-none"></div>

                            {/* Chat View */}
                            <div className="flex-1 relative z-10 p-4 flex flex-col gap-4 overflow-y-auto w-full pt-6">
                                
                                {/* Date Badge */}
                                <div className="flex justify-center mb-2">
                                    <div className="bg-[#D4EAF4] text-slate-600 text-[12px] px-3 py-1 rounded-lg uppercase tracking-wide font-medium shadow-sm">
                                        Today
                                    </div>
                                </div>

                                {/* Clinic Message 1 */}
                                <div className="self-end max-w-[85%]">
                                    <div className="bg-[#25D366] text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm relative">
                                        <p className="text-[15px] leading-snug">
                                            Hi! Your appointment at SmileCare Clinic is tomorrow at 11:00 AM. Reply YES to confirm or call us to reschedule.
                                        </p>
                                        <div className="text-right mt-1">
                                            <span className="text-white/80 text-[11px]">10:00 AM</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Patient Reply */}
                                <div className="self-start max-w-[85%] mt-2">
                                    <div className="bg-white text-slate-800 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                                        <p className="text-[15px] leading-snug">
                                            YES confirmed, thank you!
                                        </p>
                                        <div className="text-right mt-1">
                                            <span className="text-slate-400 text-[11px]">10:05 AM</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Clinic Message 2 */}
                                <div className="self-end max-w-[85%] mt-2">
                                    <div className="bg-[#25D366] text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm">
                                        <p className="text-[15px] leading-snug">
                                            Great! See you tomorrow at 11 AM. We have noted your confirmation.
                                        </p>
                                        <div className="text-right mt-1">
                                            <span className="text-white/80 text-[11px]">10:06 AM</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                            {/* Fake Input Area (Optional but adds realism) */}
                            <div className="bg-[#f0f2f5] p-3 flex items-center gap-2 relative z-20">
                                <div className="bg-white rounded-full flex-1 px-4 py-2.5 text-slate-400 text-[15px] shadow-sm">
                                    Type a message
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#128C7E] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatsAppFeature;
