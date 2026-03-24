import React, { useState } from 'react';
import { useNavigateToContact } from '../hooks/useNavigateToContact';

const ROICalculator: React.FC = () => {
    const [noShows, setNoShows] = useState<number>(5);
    const [avgValue, setAvgValue] = useState<number>(2000);
    const [chairs, setChairs] = useState<number>(2);

    const goToContact = useNavigateToContact();

    const formatINR = (value: number) => {
        return 'Rs.' + new Intl.NumberFormat('en-IN').format(Math.round(value));
    };

    const calculateROI = () => {
        // Multiply by chairs to reflect total clinic volume
        const monthlyLoss = noShows * chairs * avgValue * 4.33;
        const planCost = 16999 / 12;
        const recovery = monthlyLoss * 0.40;
        const netGain = recovery - planCost;
        const annualNetGain = netGain * 12;

        return {
            monthlyLoss,
            planCost,
            recovery,
            netGain,
            annualNetGain
        };
    };

    const { monthlyLoss, planCost, recovery, netGain, annualNetGain } = calculateROI();

    return (
        <section id="roi-calculator" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center space-x-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                        <span className="text-sm font-bold text-blue-300 tracking-wider uppercase">Interactive Calculator</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                        See what <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">no-shows</span> are costing you
                    </h2>
                    <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">Use your own numbers to calculate your monthly ROI with Cue360.</p>
                </div>

                <div className="max-w-[740px] mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-indigo-500/10 border border-white/50">
                    <div className="space-y-8 mb-10">
                        {/* Slider 1 */}
                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <label className="text-sm font-extrabold text-slate-700 uppercase tracking-wide">No-shows per chair <span className="text-[10px] text-slate-400 font-bold ml-1">(WEEKLY)</span></label>
                                <span className="text-4xl font-black text-indigo-700">{noShows}</span>
                            </div>
                            <input 
                                type="range" 
                                min="1" 
                                max="20" 
                                step="1" 
                                value={noShows} 
                                onChange={(e) => setNoShows(Number(e.target.value))} 
                                className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>

                        {/* Slider 2 */}
                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <label className="text-sm font-extrabold text-slate-700 uppercase tracking-wide">Average patient value</label>
                                <span className="text-4xl font-black text-indigo-700">{formatINR(avgValue)}</span>
                            </div>
                            <input 
                                type="range" 
                                min="500" 
                                max="5000" 
                                step="100" 
                                value={avgValue} 
                                onChange={(e) => setAvgValue(Number(e.target.value))} 
                                className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>

                        {/* Slider 3 */}
                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <label className="text-sm font-extrabold text-slate-700 uppercase tracking-wide">Number of chairs</label>
                                <span className="text-4xl font-black text-indigo-700">{chairs}</span>
                            </div>
                            <input 
                                type="range" 
                                min="1" 
                                max="5" 
                                step="1" 
                                value={chairs} 
                                onChange={(e) => setChairs(Number(e.target.value))} 
                                className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>
                    </div>

                    {/* Output Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="p-6 rounded-2xl bg-red-50/80 border border-red-100 flex flex-col justify-center">
                            <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">Revenue lost to no-shows</p>
                            <p className="text-3xl font-black text-red-600">{formatINR(monthlyLoss)}<span className="text-lg font-semibold text-red-400">/mo</span></p>
                        </div>
                        
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-center">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Cue360 Growth plan</p>
                            <p className="text-3xl font-black text-slate-800">{formatINR(planCost)}<span className="text-lg font-semibold text-slate-500">/mo</span></p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mb-8">
                        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 flex flex-col justify-center items-center text-center">
                            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Estimated recovery (40%)</p>
                            <p className="text-3xl font-black text-emerald-600">{formatINR(recovery)}</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 flex flex-col justify-center items-center text-center shadow-2xl shadow-blue-600/30 transform transition-transform hover:scale-[1.02] relative overflow-hidden group">
                            {/* Shiny effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 transform -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

                            <div className="inline-flex items-center justify-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4">
                                <span className="text-[11px] font-black text-amber-300 tracking-widest uppercase">Projected Annual Profit</span>
                            </div>
                            
                            <p className="text-4xl md:text-5xl font-black text-white mb-1 drop-shadow-md">
                                {annualNetGain > 0 ? (
                                    `+ ${formatINR(annualNetGain)}`
                                ) : (
                                    "Depends on volume"
                                )}
                            </p>
                            
                            <p className="text-sm font-semibold text-blue-100 mt-1 mb-3">
                                {netGain > 0 ? (
                                    <>Added straight to your <span className="text-amber-300">bottom line.</span></>
                                ) : (
                                    "Let's talk to calculate your clinic's ROI"
                                )}
                            </p>

                            {netGain > 0 && (
                            <div className="mt-2 pt-4 border-t border-white/20 w-full flex justify-between items-center px-1 md:px-4">
                                <div className="text-left">
                                    <p className="text-[10px] text-blue-200 uppercase tracking-wider font-extrabold mb-1">Monthly Extra</p>
                                    <p className="text-xl font-black text-white">+{formatINR(netGain)}</p>
                                </div>
                                <div className="h-8 w-px bg-white/20 mx-3"></div>
                                <div className="text-right">
                                    <p className="text-[10px] text-blue-200 uppercase tracking-wider font-extrabold mb-1">Software ROI</p>
                                    <p className="text-xl font-black text-emerald-300">~{Math.round((recovery/planCost) * 100)}%</p>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>

                    <button 
                        onClick={() => goToContact('Start free trial from ROI Calculator')}
                        className="w-full py-5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-xl shadow-amber-500/25 transform hover:-translate-y-1"
                    >
                        Start free trial — recover {formatINR(recovery)}
                    </button>
                    
                    <p className="text-[11px] font-medium text-slate-400 text-center mt-6 px-4 uppercase tracking-wider">
                        * Recovery assumption: 40%. Estimates based on average reduction.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
