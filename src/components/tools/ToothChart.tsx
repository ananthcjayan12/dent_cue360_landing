import React, { useState } from 'react';
import { Share2, Printer, Info } from 'lucide-react';

type NotationSystem = 'fdi' | 'universal';
type DentitionType = 'adult' | 'paediatric';

interface ToothData {
  id: string; // Internal ID
  fdi: string;
  universal: string;
  palmer: string;
  name: string;
  type: string;
  roots: number;
  procedures: string[];
  arch: 'upper' | 'lower';
  quadrant: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  position: number; // 1 (central incisor) to 8 (third molar)
}

// Generate Adult Teeth
const adultTeeth: ToothData[] = [];
// Upper Right (Quad 1) 18 to 11
for (let i = 8; i >= 1; i--) {
  const fdi = `1${i}`;
  const un = `${9 - i}`;
  adultTeeth.push(generateToothData(fdi, un, i, 1, 'upper'));
}
// Upper Left (Quad 2) 21 to 28
for (let i = 1; i <= 8; i++) {
  const fdi = `2${i}`;
  const un = `${8 + i}`;
  adultTeeth.push(generateToothData(fdi, un, i, 2, 'upper'));
}
// Lower Left (Quad 3) 31 to 38
for (let i = 1; i <= 8; i++) {
  const fdi = `3${i}`;
  const un = `${24 - i + 1}`;
  adultTeeth.push(generateToothData(fdi, un, i, 3, 'lower'));
}
// Lower Right (Quad 4) 48 to 41
for (let i = 8; i >= 1; i--) {
  const fdi = `4${i}`;
  const un = `${24 + i}`;
  adultTeeth.push(generateToothData(fdi, un, i, 4, 'lower'));
}

// Generate Paediatric Teeth
const paedoTeeth: ToothData[] = [];
const uniUpper = ['E','D','C','B','A', 'F','G','H','I','J'];
const uniLower = ['T','S','R','Q','P', 'K','L','M','N','O'];
// Upper Right (Quad 5) 55 to 51
for (let i = 5; i >= 1; i--) {
  paedoTeeth.push(generatePaedoToothData(`5${i}`, uniUpper[5 - i], i, 5, 'upper'));
}
// Upper Left (Quad 6) 61 to 65
for (let i = 1; i <= 5; i++) {
  paedoTeeth.push(generatePaedoToothData(`6${i}`, uniUpper[4 + i], i, 6, 'upper'));
}
// Lower Left (Quad 7) 71 to 75
for (let i = 1; i <= 5; i++) {
  paedoTeeth.push(generatePaedoToothData(`7${i}`, uniLower[10 - i], i, 7, 'lower'));
}
// Lower Right (Quad 8) 85 to 81
for (let i = 5; i >= 1; i--) {
  paedoTeeth.push(generatePaedoToothData(`8${i}`, uniLower[i - 1], i, 8, 'lower'));
}

function generateToothData(fdi: string, uni: string, pos: number, quad: number, arch: 'upper'|'lower'): ToothData {
  const types = {
    1: { name: 'Central Incisor', roots: 1, procs: ['Composite Filling', 'Root Canal', 'Crown'] },
    2: { name: 'Lateral Incisor', roots: 1, procs: ['Composite Filling', 'Root Canal', 'Veneer'] },
    3: { name: 'Canine', roots: 1, procs: ['Composite Filling', 'Root Canal', 'Extraction'] },
    4: { name: 'First Premolar', roots: arch === 'upper' ? 2 : 1, procs: ['Amalgam/Composite', 'Root Canal', 'Crown'] },
    5: { name: 'Second Premolar', roots: 1, procs: ['Amalgam/Composite', 'Root Canal', 'Crown'] },
    6: { name: 'First Molar', roots: arch === 'upper' ? 3 : 2, procs: ['Filling', 'Root Canal', 'Crown', 'Extraction'] },
    7: { name: 'Second Molar', roots: arch === 'upper' ? 3 : 2, procs: ['Filling', 'Root Canal', 'Crown', 'Extraction'] },
    8: { name: 'Third Molar (Wisdom Tooth)', roots: arch === 'upper' ? 3 : 2, procs: ['Surgical Extraction', 'Impaction'] },
  };
  
  const archName = arch === 'upper' ? 'Upper' : 'Lower';
  const sideName = (quad === 1 || quad === 4) ? 'Right' : 'Left';
  const t = types[pos as keyof typeof types];

  return {
    id: fdi,
    fdi,
    universal: uni,
    palmer: `${['┘','└','┌','┐'][quad-1]} ${pos}`,
    name: `${archName} ${sideName} ${t.name}`,
    type: t.name,
    roots: t.roots,
    procedures: t.procs,
    arch,
    quadrant: quad as any,
    position: pos
  };
}

function generatePaedoToothData(fdi: string, uni: string, pos: number, quad: number, arch: 'upper'|'lower'): ToothData {
  const types = {
    1: { name: 'Primary Central Incisor', roots: 1, procs: ['Pulpectomy', 'Strip Crown'] },
    2: { name: 'Primary Lateral Incisor', roots: 1, procs: ['Pulpectomy', 'Strip Crown'] },
    3: { name: 'Primary Canine', roots: 1, procs: ['Filling', 'Extraction'] },
    4: { name: 'Primary First Molar', roots: arch === 'upper' ? 3 : 2, procs: ['Pulpotomy', 'Stainless Steel Crown'] },
    5: { name: 'Primary Second Molar', roots: arch === 'upper' ? 3 : 2, procs: ['Pulpotomy', 'Stainless Steel Crown'] },
  };
  const archName = arch === 'upper' ? 'Upper' : 'Lower';
  const sideName = (quad === 5 || quad === 8) ? 'Right' : 'Left';
  const t = types[pos as keyof typeof types];
  
  return {
    id: fdi,
    fdi,
    universal: uni,
    palmer: `${['┘','└','┌','┐'][quad-5]} ${['A','B','C','D','E'][pos-1]}`,
    name: `${archName} ${sideName} ${t.name}`,
    type: t.name,
    roots: t.roots,
    procedures: t.procs,
    arch,
    quadrant: quad as any,
    position: pos
  };
}

const ToothChart: React.FC = () => {
  const [notation, setNotation] = useState<NotationSystem>('fdi');
  const [dentition, setDentition] = useState<DentitionType>('adult');
  const [selectedTooth, setSelectedTooth] = useState<ToothData | null>(null);

  const activeTeeth = dentition === 'adult' ? adultTeeth : paedoTeeth;
  const upperTeeth = activeTeeth.filter(t => t.arch === 'upper');
  const lowerTeeth = activeTeeth.filter(t => t.arch === 'lower');

  const handleShareTool = () => {
    const url = `${window.location.origin}${window.location.pathname}#tooth-chart`;
    navigator.clipboard.writeText(url);
    alert('Tool link copied to clipboard!');
  };

  const handlePrint = () => {
    window.print();
  };

  const SimpleToothSVG = ({ isMolar }: { isMolar: boolean }) => (
    <svg viewBox="0 0 40 60" className="w-full h-full drop-shadow-sm transition-all duration-300 pointer-events-none group-hover:-translate-y-1 group-active:translate-y-0">
      {isMolar ? (
        <path 
           d="M10,25 C5,25 5,10 10,5 C15,0 25,0 30,5 C35,10 35,25 30,25 C35,40 30,55 25,55 C20,55 20,40 20,40 C20,40 20,55 15,55 C10,55 5,40 10,25 Z" 
           fill="currentColor" stroke="rgba(0,0,0,0.1)" strokeWidth="1"
        />
      ) : (
        <path 
           d="M15,25 C10,25 10,10 15,5 C20,0 20,0 25,5 C30,10 30,25 25,25 C30,40 25,55 20,55 C15,55 10,40 15,25 Z" 
           fill="currentColor" stroke="rgba(0,0,0,0.1)" strokeWidth="1"
        />
      )}
    </svg>
  );

  return (
    <div id="tooth-chart" className="scroll-mt-32 max-w-5xl mx-auto py-12 md:py-20 border-b border-slate-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] tracking-tight mb-3">
            Interactive Tooth Number Chart
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            The complete visual reference for dental notation — FDI and Universal systems.
          </p>
        </div>
        <button 
          onClick={handleShareTool}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition-colors shrink-0 print:hidden"
        >
          <Share2 className="w-4 h-4" />
          Share This Tool
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Controls */}
        <div className="bg-slate-50 border-b border-slate-200 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 print:hidden">
          <div className="flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm">
             <button 
               onClick={() => { setDentition('adult'); setSelectedTooth(null); }}
               className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${dentition === 'adult' ? 'bg-[#4B6EF5] text-white' : 'text-slate-600 hover:bg-slate-100'}`}
             >
               Adult Teeth (32)
             </button>
             <button 
               onClick={() => { setDentition('paediatric'); setSelectedTooth(null); }}
               className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${dentition === 'paediatric' ? 'bg-[#4B6EF5] text-white' : 'text-slate-600 hover:bg-slate-100'}`}
             >
               Paediatric Teeth (20)
             </button>
          </div>

          <div className="flex items-center gap-3">
             <span className="text-sm font-bold text-slate-600">Notation System:</span>
             <div className="flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm">
               <button 
                 onClick={() => setNotation('fdi')}
                 className={`px-3 py-1.5 rounded-md text-sm font-bold transition-colors ${notation === 'fdi' ? 'bg-[#0D1B2A] text-white' : 'text-slate-600 hover:bg-slate-100'}`}
               >
                 FDI (India/Intl)
               </button>
               <button 
                 onClick={() => setNotation('universal')}
                 className={`px-3 py-1.5 rounded-md text-sm font-bold transition-colors ${notation === 'universal' ? 'bg-[#0D1B2A] text-white' : 'text-slate-600 hover:bg-slate-100'}`}
               >
                 Universal (US)
               </button>
             </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="p-6 md:p-10 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col gap-12 print:gap-8">
            
            {/* Upper Arch */}
            <div>
              <h3 className="text-center font-bold tracking-widest text-slate-400 uppercase text-sm mb-6 print:text-xs">Upper Arch (Maxillary)</h3>
              <div className="flex justify-center gap-1 md:gap-3">
                 {upperTeeth.map(tooth => (
                    <div 
                      key={tooth.id} 
                      onClick={() => setSelectedTooth(tooth)}
                      className={`flex flex-col items-center cursor-pointer group ${dentition === 'adult' ? 'w-8 md:w-12' : 'w-10 md:w-16'}`}
                    >
                      <div className={`w-full aspect-[2/3] rounded-lg flex items-center justify-center transition-colors ${selectedTooth?.id === tooth.id ? 'text-[#4B6EF5]' : 'text-slate-200 group-hover:text-blue-200'}`}>
                         <SimpleToothSVG isMolar={tooth.position >= 4} />
                      </div>
                      <div className={`mt-3 w-8 h-8 md:w-10 md:h-10 border-2 rounded-full flex items-center justify-center text-xs md:text-sm font-extrabold transition-all duration-300 ${selectedTooth?.id === tooth.id ? 'bg-[#4B6EF5] border-[#4B6EF5] text-white shadow-md shadow-blue-500/30 ring-2 ring-blue-500/20 ring-offset-2' : 'border-slate-200 text-slate-600 group-hover:border-[#4B6EF5] group-hover:text-[#4B6EF5]'}`}>
                        {notation === 'fdi' ? tooth.fdi : tooth.universal}
                      </div>
                    </div>
                 ))}
              </div>
            </div>
            
            <div className="w-full h-px bg-slate-200 flex items-center justify-center my-4 opacity-50 print:hidden">
              <span className="bg-white px-4 text-xs font-bold text-slate-300 uppercase tracking-widest">Midline</span>
            </div>

            {/* Lower Arch */}
            <div>
              <div className="flex justify-center gap-1 md:gap-3">
                 {lowerTeeth.map(tooth => (
                    <div 
                      key={tooth.id} 
                      onClick={() => setSelectedTooth(tooth)}
                      className={`flex flex-col-reverse items-center cursor-pointer group ${dentition === 'adult' ? 'w-8 md:w-12' : 'w-10 md:w-16'}`}
                    >
                      <div className={`w-full aspect-[2/3] rounded-lg flex items-center justify-center rotate-180 transition-colors ${selectedTooth?.id === tooth.id ? 'text-[#4B6EF5]' : 'text-slate-200 group-hover:text-blue-200'}`}>
                         <SimpleToothSVG isMolar={tooth.position >= 4} />
                      </div>
                      <div className={`mb-3 w-8 h-8 md:w-10 md:h-10 border-2 rounded-full flex items-center justify-center text-xs md:text-sm font-extrabold transition-all duration-300 ${selectedTooth?.id === tooth.id ? 'bg-[#4B6EF5] border-[#4B6EF5] text-white shadow-md shadow-blue-500/30 ring-2 ring-blue-500/20 ring-offset-2' : 'border-slate-200 text-slate-600 group-hover:border-[#4B6EF5] group-hover:text-[#4B6EF5]'}`}>
                        {notation === 'fdi' ? tooth.fdi : tooth.universal}
                      </div>
                    </div>
                 ))}
              </div>
              <h3 className="text-center font-bold tracking-widest text-slate-400 uppercase text-sm mt-6 print:text-xs">Lower Arch (Mandibular)</h3>
            </div>

          </div>
        </div>

        {/* Info Panel */}
        <div className={`transition-all duration-500 ease-in-out border-t border-slate-200 bg-[#F8FAFC] print:hidden ${selectedTooth ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
           {selectedTooth && (
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                 <div className="flex-1 space-y-2">
                    <h4 className="text-2xl font-extrabold text-[#0D1B2A]">{selectedTooth.name}</h4>
                    <p className="text-slate-500 font-medium">Quadrant {selectedTooth.quadrant} • {selectedTooth.type}</p>
                 </div>
                 
                 <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <span className="block text-xs uppercase text-slate-400 font-bold mb-1">FDI Notation</span>
                      <span className="text-2xl font-black text-[#4B6EF5]">{selectedTooth.fdi}</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <span className="block text-xs uppercase text-slate-400 font-bold mb-1">Universal</span>
                      <span className="text-2xl font-black text-[#4B6EF5]">{selectedTooth.universal}</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <span className="block text-xs uppercase text-slate-400 font-bold mb-1">Palmer</span>
                      <span className="text-2xl font-black text-slate-700">{selectedTooth.palmer}</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <span className="block text-xs uppercase text-slate-400 font-bold mb-1">Root Count</span>
                      <span className="text-2xl font-black text-slate-700">{selectedTooth.roots}</span>
                    </div>
                 </div>

                 <div className="flex-1">
                    <h5 className="font-bold text-[#0D1B2A] mb-3 flex items-center gap-2">
                      <Info className="w-4 h-4 text-slate-400" /> Common Procedures
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedTooth.procedures.map((proc, idx) => (
                        <span key={idx} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {proc}
                        </span>
                      ))}
                    </div>
                 </div>
              </div>
           )}
        </div>

      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 print:hidden">
         <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
           <strong>Assumption Note:</strong> Tooth anatomy and notation based on FDI World Dental Federation two-digit notation system (ISO 3950) and Universal Numbering System. Root counts and procedure associations are general references and may vary by individual patient anatomy.
         </p>
         
         <button 
            onClick={handlePrint}
            className="shrink-0 flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#0D1B2A] text-[#0D1B2A] rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm"
         >
            <Printer className="w-4 h-4" /> Print Reference Chart
         </button>
      </div>

       <div className="mt-8 bg-blue-50/50 rounded-xl p-6 border border-blue-100 print:hidden">
        <div className="rounded-lg flex flex-col md:flex-row sm:items-center justify-between gap-4">
          <div>
            <h5 className="font-bold text-[#0D1B2A] text-sm md:text-base">Want to chart faster and better?</h5>
            <p className="text-slate-600 text-sm mt-1">
              Cue360 uses visual tap-to-chart dental charting — the fastest way to document patient teeth digitally.
            </p>
          </div>
          <a 
            href="/#features" 
            className="shrink-0 text-sm font-bold text-white bg-[#4B6EF5] hover:bg-blue-700 px-5 py-2.5 rounded-lg transition-colors text-center"
          >
            See Dental Charting →
          </a>
        </div>
      </div>

    </div>
  );
};

export default ToothChart;
