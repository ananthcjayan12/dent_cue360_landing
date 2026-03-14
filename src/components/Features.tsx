import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Calendar as CalendarIcon, Clock, Check } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
};

const ChartingCard = () => {
   const [teeth, setTeeth] = useState(Array(32).fill(0)); // 0: default, 1: treated, 2: watch
   const toggleTooth = (index: number) => {
       setTeeth(prev => prev.map((t, i) => i === index ? (t + 1) % 3 : t));
   };

   const getToothNumber = (index: number) => {
       if (index >= 0 && index <= 7) return 11 + index;
       if (index >= 8 && index <= 15) return 21 + (index - 8);
       if (index >= 16 && index <= 23) return 41 + (index - 16);
       if (index >= 24 && index <= 31) return 31 + (index - 24);
       return '';
   };

   const renderQuadrant = (startIndex: number, reverse: boolean = false, isLower: boolean = false) => {
       const indices = Array.from({ length: 8 }, (_, i) => startIndex + i);
       if (reverse) indices.reverse();
       return (
           <div className="flex gap-[2px] md:gap-1 lg:gap-1.5">
               {indices.map(i => (
                   <div 
                       key={i} 
                       onClick={() => toggleTooth(i)}
                       className={`w-[18px] h-[36px] md:w-[24px] md:h-[48px] lg:w-[28px] lg:h-[56px] cursor-pointer transition-all duration-200 border-[1.5px] flex items-center justify-center text-[7px] md:text-[9px] lg:text-[11px] font-dmsans font-medium select-none 
                           ${isLower ? 'rounded-b-sm rounded-t-md' : 'rounded-t-sm rounded-b-md'}
                           ${teeth[i] === 0 ? 'bg-transparent border-[rgba(10,22,40,0.15)] hover:border-[#0066FF]/50 text-slate-400' 
                             : teeth[i] === 1 ? 'bg-[#0066FF] border-[#0066FF] scale-105 shadow-sm text-white' 
                             : 'bg-[#FEF3C7] border-[#F59E0B] scale-105 shadow-sm text-amber-700'}
                       `}
                   >
                       {getToothNumber(i)}
                   </div>
               ))}
           </div>
       );
   }

   return (
       <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-7 bg-[#F8FAFD] rounded-[16px] border border-[rgba(10,22,40,0.06)] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden relative p-8 flex flex-col justify-between min-h-[400px]">
           <div className="absolute top-6 right-6 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-blue-100 flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] animate-pulse-slow z-10">
               <span className="w-2 h-2 rounded-full bg-[#0066FF]"></span>
               <span className="text-xs font-dmsans font-medium font-[500] text-blue-700">8 min saved</span>
           </div>

           <div className="mb-10 z-10 relative">
               <span className="text-[#0066FF] font-dmsans font-[500] text-sm tracking-wider bg-blue-50 px-2 py-1 rounded-md border border-blue-100 uppercase">Visual Charting</span>
               <h3 className="text-3xl md:text-4xl font-bricolage font-[800] tracking-[-0.03em] text-[#0A1628] mt-4 max-w-md leading-tight">Chart in seconds. See more patients.</h3>
           </div>

           <div className="flex flex-col items-center justify-center py-4 px-6 md:py-6 md:px-10 bg-white/60 backdrop-blur-md rounded-2xl border border-[rgba(10,22,40,0.04)] shadow-sm relative z-10 w-fit mx-auto max-w-full">
               <div className="flex items-end gap-1 md:gap-2 mb-2">
                   {renderQuadrant(0, true, false)}
                   <div className="h-10 w-[1px] bg-[rgba(10,22,40,0.1)] mx-1 md:mx-2 lg:mx-4"></div>
                   {renderQuadrant(8, false, false)}
               </div>
               <div className="h-[1px] w-full bg-[rgba(10,22,40,0.1)] my-2 md:my-3"></div>
               <div className="flex items-start gap-1 md:gap-2 mt-2">
                   {renderQuadrant(16, true, true)}
                   <div className="h-10 w-[1px] bg-[rgba(10,22,40,0.1)] mx-1 md:mx-2 lg:mx-4"></div>
                   {renderQuadrant(24, false, true)}
               </div>
           </div>
           
           {/* Decorative bg */}
           <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
       </motion.div>
   );
}

const PracticeIntelCard = () => {
    return (
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-5 bg-[#0A1628] rounded-[16px] border border-[#1e293b] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden relative p-8 flex flex-col justify-between text-white min-h-[400px]">
            <div>
                <span className="text-blue-400 font-dmsans font-[500] text-sm uppercase tracking-wider bg-blue-900/30 px-2 py-1 rounded-md border border-blue-800">Practice Intel</span>
                <h3 className="text-3xl font-bricolage font-[800] tracking-[-0.03em] text-white mt-4 leading-tight">Automated financial tracking.</h3>
            </div>
            
            <div className="mt-8 z-10 relative">
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                        <p className="text-slate-400 text-xs font-dmsans font-[400] mb-1">Collected</p>
                        <p className="text-2xl font-bricolage font-[800]">₹1,24,000</p>
                    </div>
                    <div className="grid grid-rows-2 gap-4">
                        <div className="bg-emerald-950/30 rounded-xl px-3 py-2 border border-emerald-900/50 flex flex-col justify-center gap-1">
                            <span className="text-emerald-500/80 text-[10px] uppercase tracking-wider font-dmsans font-[500]">Net Profit</span>
                            <span className="text-emerald-400 font-[800] font-bricolage text-lg leading-none">+18%</span>
                        </div>
                        <div className="bg-rose-950/30 rounded-xl px-3 py-2 border border-rose-900/50 flex flex-col justify-center gap-1">
                            <span className="text-rose-500/80 text-[10px] uppercase tracking-wider font-dmsans font-[500]">Leakage</span>
                            <span className="text-rose-400 font-[800] font-bricolage text-lg leading-none">₹8,500</span>
                        </div>
                    </div>
                </div>

                {/* SVG Graph */}
                <div className="w-full h-24 sm:h-32 relative">
                    <svg viewBox="0 0 400 120" className="w-full h-full preserve-3d overflow-visible">
                        <defs>
                            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path d="M0 120 L0 80 Q 50 80, 100 60 T 200 70 T 300 30 T 400 10 L400 120 Z" fill="url(#lineGrad)" />
                        <path d="M0 80 Q 50 80, 100 60 T 200 70 T 300 30 T 400 10" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                        
                        {/* Data points */}
                        <circle cx="100" cy="60" r="4" fill="#0A1628" stroke="#38bdf8" strokeWidth="3" />
                        <circle cx="200" cy="70" r="4" fill="#0A1628" stroke="#38bdf8" strokeWidth="3" />
                        <circle cx="300" cy="30" r="4" fill="#0A1628" stroke="#38bdf8" strokeWidth="3" />
                        <circle cx="400" cy="10" r="6" fill="#0A1628" stroke="#38bdf8" strokeWidth="4" className="animate-pulse" />
                    </svg>
                </div>
            </div>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </motion.div>
    );
}

const PatientRemindersCard = () => {
    return (
        <motion.div variants={itemVariants} className="col-span-1 lg:col-span-4 bg-[#F0FBF5] rounded-[16px] border border-[rgba(10,22,40,0.06)] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden relative p-8 flex flex-col min-h-[350px]">
            <div className="mb-6 z-10 relative">
                <span className="text-emerald-700 font-dmsans font-[500] text-sm uppercase tracking-wider">Patient Reminders</span>
                <h3 className="text-2xl font-bricolage font-[800] tracking-[-0.03em] text-[#0A1628] mt-2">Cut no-shows to near zero.</h3>
            </div>
            
            <div className="flex-1 flex flex-col justify-end z-10 relative">
                <div className="w-full bg-[#E5DDD5] rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[rgba(10,22,40,0.06)] overflow-hidden mt-4">
                    <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#075E54] relative shadow-sm">
                            <span className="font-bricolage font-bold text-sm">S</span>
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] border border-white rounded-full"></div>
                        </div>
                        <div>
                            <p className="text-white text-sm font-[500] font-dmsans tracking-wide">SmileCare Dental</p>
                            <p className="text-white/80 text-[10px] font-dmsans leading-none mt-0.5">Online</p>
                        </div>
                    </div>
                    {/* Recreating whatsapp background seamlessly without external images if possible, otherwise plain color or pattern */}
                    <div className="p-4 bg-[#E5DDD5] space-y-3 relative">
                        {/* Fake doodle overlay */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://camo.githubusercontent.com/4z821t_w_mU5v-r9s_D_QoJ8_4xJ26k8Wk6oB7413R3/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3131333439392f73637265656e73686f74732f363032333734342f77686174736170705f6261636b67726f756e645f7061747465726e2e706e67')] bg-repeat z-0"></div>
                        
                        <div className="bg-white p-3 rounded-xl rounded-tl-sm shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] text-[13px] font-dmsans font-[400] text-[#111] max-w-[90%] relative z-10 leading-relaxed">
                            Hi Arun, reminder for your Root Canal with Dr. Smith tomorrow at 10:30 AM. Reply 'Y' to confirm.
                            <div className="text-[10px] text-slate-400 text-right mt-1">10:00 AM</div>
                        </div>
                        <div className="bg-[#DCF8C6] p-3 rounded-xl rounded-tr-sm shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] text-[13px] font-dmsans font-[400] text-[#111] ml-auto max-w-[80%] relative z-10">
                            Y
                            <div className="text-[10px] text-slate-500 text-right mt-1 flex items-center justify-end gap-1">
                                10:05 AM 
                                <Check size={14} className="text-[#34B7F1] ml-0.5" />
                                <Check size={14} className="text-[#34B7F1] -ml-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"></div>
        </motion.div>
    );
};

const NativeMobileCard = () => {
    return (
        <motion.div variants={itemVariants} className="col-span-1 lg:col-span-3 bg-[#F8FAFD] rounded-[16px] border border-[rgba(10,22,40,0.06)] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden relative p-6 flex flex-col justify-between min-h-[350px]">
            <div>
                <h3 className="text-xl font-bricolage font-[800] tracking-[-0.03em] text-[#0A1628]">Native Mobile</h3>
                <p className="text-slate-500 text-sm font-dmsans mt-1 mb-6">Your practice in your pocket.</p>
            </div>
            
            <div className="bg-white rounded-[16px] p-5 shadow-sm border border-[rgba(10,22,40,0.06)] flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-50 pb-3">
                    <span className="text-xs font-bold font-dmsans text-slate-400 uppercase tracking-widest">Today's Schedule</span>
                    <CalendarIcon size={14} className="text-blue-500" />
                </div>
                <div className="space-y-4 pt-1">
                    {[
                        { time: '09:00', name: 'Priya S.', tx: 'Consultation' },
                        { time: '10:30', name: 'Arun K.', tx: 'Root Canal' },
                        { time: '11:45', name: 'Neha M.', tx: 'Cleaning' },
                        { time: '14:00', name: 'Rahul V.', tx: 'Extraction' },
                        { time: '15:30', name: 'Sara J.', tx: 'Follow-up' },
                    ].map((apt, i) => (
                        <div key={i} className="flex gap-4 items-center group cursor-default">
                            <div className={`w-1 h-8 rounded-full ${i===1 ? 'bg-[#0066FF]' : 'bg-slate-200'} group-hover:bg-[#0066FF] transition-colors`}></div>
                            <div className="flex-1">
                                <p className="text-[13px] font-bricolage font-[800] text-slate-800 leading-none mb-1 group-hover:text-[#0066FF] transition-colors">{apt.name}</p>
                                <p className="text-[11px] text-slate-400 font-dmsans leading-none">{apt.tx}</p>
                            </div>
                            <span className="text-[11px] font-dmsans font-[500] text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">{apt.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const BookingCard = () => {
    return (
        <motion.div variants={itemVariants} className="col-span-1 lg:col-span-3 bg-[#F8FAFD] rounded-[16px] border border-[rgba(10,22,40,0.06)] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden relative p-6 flex flex-col min-h-[350px]">
            <div>
                <h3 className="text-xl font-bricolage font-[800] tracking-[-0.03em] text-[#0A1628]">Automated Booking</h3>
                <p className="text-slate-500 text-sm font-dmsans mt-1 mb-6">Patients book 24/7.</p>
            </div>
            
            <div className="flex-1 flex flex-col justify-end">
                <div className="space-y-3">
                    {['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:30 PM'].map((time, i) => (
                        <div key={i} className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${i===1 || i===3 ? 'bg-blue-50/50 border-[#0066FF]/30 shadow-sm' : 'bg-white border-[rgba(10,22,40,0.06)] hover:border-[rgba(10,22,40,0.15)]'}`}>
                            <div className="flex items-center gap-3">
                                <Clock size={16} className={i===1 || i===3 ? 'text-[#0066FF]' : 'text-slate-400'} />
                                <span className={`font-dmsans font-[500] text-[13px] ${i===1 || i===3 ? 'text-[#0A1628]' : 'text-slate-600'}`}>{time}</span>
                            </div>
                            {i===1 || i===3 ? (
                                <span className="text-[10px] font-bricolage font-[800] bg-[#0A1628] text-white px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm">Booked</span>
                            ) : (
                                <span className="text-[12px] font-dmsans font-[500] text-[#0066FF] cursor-pointer">Select</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const SyncCard = () => {
    return (
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0066FF] to-blue-800 rounded-[16px] border border-[rgba(10,22,40,0.06)] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden relative p-8 flex flex-col justify-center items-center text-center text-white min-h-[350px]">
             <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-[16px] flex items-center justify-center mb-6 border border-white/20 shadow-lg relative z-10">
                 <Zap className="w-8 h-8 text-[#FFD700] fill-[#FFD700]" />
             </div>
             <div className="z-10 relative mt-2">
                <h3 className="text-[40px] font-bricolage font-[800] tracking-[-0.03em] text-white leading-none">0.1s</h3>
                <p className="text-blue-200 text-xs font-dmsans mt-2 font-[500] tracking-[0.2em] uppercase">Latency</p>
             </div>
             
             <p className="text-white/80 text-xs font-dmsans mt-8 z-10 relative">Instant cross-device sync</p>
             
             {/* Decorative Elements */}
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-50 z-0"></div>
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl z-0 pointer-events-none"></div>
             <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl z-0 pointer-events-none"></div>
        </motion.div>
    );
}

const Features: React.FC = () => {
    return (
        <section id="features" className="bg-white relative">
            <div className="max-w-[1200px] mx-auto py-[80px] px-[24px]">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bricolage font-[800] text-[#0A1628] tracking-[-0.03em] leading-[1.05]">
                        Everything you need. <br />
                        <span className="text-slate-300">Nothing you don't.</span>
                    </h2>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[12px]"
                >
                    <ChartingCard />
                    <PracticeIntelCard />
                    <PatientRemindersCard />
                    <NativeMobileCard />
                    <BookingCard />
                    <SyncCard />
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
