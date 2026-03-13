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
        const monthlyLoss = noShows * avgValue * 4.33;
        const planCost = 16999;
        const recovery = monthlyLoss * 0.40;
        const netGain = recovery - planCost;

        return {
            monthlyLoss,
            planCost,
            recovery,
            netGain
        };
    };

    const { monthlyLoss, planCost, recovery, netGain } = calculateROI();

    return (
        <section id="roi-calculator" className="py-24 bg-gradient-to-b from-[#EBF1FA] to-[#E0ECF8]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold text-dental-600 tracking-wider uppercase mb-3 text-blue-600">ROI Calculator</p>
                    <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">See what no-shows are costing your clinic</h2>
                    <p className="text-slate-500">Use your own numbers to calculate your monthly ROI with Cue360.</p>
                </div>

                <div className="max-w-[740px] mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-white/50">
                    <div className="space-y-8 mb-10">
                        {/* Slider 1 */}
                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <label className="text-sm font-bold text-slate-700">No-shows per week</label>
                                <span className="text-3xl font-bold text-slate-900">{noShows}</span>
                            </div>
                            <input 
                                type="range" 
                                min="1" 
                                max="20" 
                                step="1" 
                                value={noShows} 
                                onChange={(e) => setNoShows(Number(e.target.value))} 
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>

                        {/* Slider 2 */}
                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <label className="text-sm font-bold text-slate-700">Average patient value</label>
                                <span className="text-3xl font-bold text-slate-900">{formatINR(avgValue)}</span>
                            </div>
                            <input 
                                type="range" 
                                min="500" 
                                max="5000" 
                                step="100" 
                                value={avgValue} 
                                onChange={(e) => setAvgValue(Number(e.target.value))} 
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>

                        {/* Slider 3 */}
                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <label className="text-sm font-bold text-slate-700">Number of chairs</label>
                                <span className="text-3xl font-bold text-slate-900">{chairs}</span>
                            </div>
                            <input 
                                type="range" 
                                min="1" 
                                max="5" 
                                step="1" 
                                value={chairs} 
                                onChange={(e) => setChairs(Number(e.target.value))} 
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>
                    </div>

                    {/* Output Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="p-5 rounded-2xl bg-red-50 border border-red-100 flex flex-col justify-center">
                            <p className="text-xs font-semibold text-red-600/80 uppercase tracking-wider mb-1">Monthly revenue lost to no-shows</p>
                            <p className="text-2xl font-bold text-red-600">{formatINR(monthlyLoss)}</p>
                        </div>
                        
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-center">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Cue360 Growth plan</p>
                            <p className="text-2xl font-bold text-slate-900">{formatINR(planCost)}/month</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <div className="p-5 rounded-2xl bg-green-50 border border-green-100 flex flex-col justify-center items-center text-center">
                            <p className="text-xs font-semibold text-green-700/80 uppercase tracking-wider mb-1">Estimated recovery with Cue360 (40%)</p>
                            <p className="text-2xl font-bold text-green-600">{formatINR(recovery)}</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-900 flex flex-col justify-center items-center text-center shadow-lg">
                            <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Your net gain with Cue360</p>
                            <p className="text-2xl font-bold text-white">
                                {netGain > 0 ? (
                                    `You are ahead by ${formatINR(netGain)} every month`
                                ) : (
                                    "Your ROI depends on volume — let us talk"
                                )}
                            </p>
                        </div>
                    </div>

                    <p className="text-xs italic text-slate-400 text-center mt-6 mb-8 px-4">
                        Recovery assumption: 40%. Estimates based on average no-show reduction. Results vary by clinic.
                    </p>

                    <button 
                        onClick={() => goToContact('Start free trial from ROI Calculator')}
                        className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
                    >
                        Start free trial — recover {formatINR(recovery)} this month
                    </button>

                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
