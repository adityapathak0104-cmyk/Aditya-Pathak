/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { get, set } from 'idb-keyval';
import { 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  FileText, 
  Target, 
  TrendingUp, 
  Award, 
  Clock, 
  AlertTriangle,
  Cpu,
  Droplets,
  Wind,
  Lightbulb,
  Sun,
  Activity,
  CheckCircle2,
  XCircle,
  Mail,
  Phone,
  Building2,
  Download,
  Upload,
  ExternalLink,
  X,
  Maximize2
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---

interface SlideProps {
  isActive: boolean;
  onSelectDetail?: (detail: any) => void;
}

// --- Utils ---

const handleGoogleSearch = (query: string) => {
  const url = `https://www.google.com/search?q=${encodeURIComponent(query + " energy efficiency")}`;
  window.open(url, '_blank');
};

// --- Components ---

const Logo = ({ className, size = "normal" }: { className?: string; size?: "small" | "normal" }) => (
  <div className={cn("flex items-center gap-4", className)}>
    <div className={cn(
      "relative shrink-0 flex items-center justify-center",
      size === "small" ? "w-12 h-12" : "w-20 h-20"
    )}>
      {/* Bulb Body */}
      <div className="absolute inset-0 bg-[#8CC63F] rounded-full flex items-center justify-center shadow-lg">
        <span className={cn("text-white font-sans font-black tracking-tighter", size === "small" ? "text-lg" : "text-4xl")}>VP</span>
      </div>
      {/* Lightning Bolt Box */}
      <div className={cn(
        "absolute -top-1 -right-1 bg-[#FFD700] p-1 rounded-lg shadow-md transform rotate-6",
        size === "small" ? "scale-75" : "scale-100"
      )}>
        <Zap className="w-5 h-5 text-white fill-current" />
      </div>
      {/* Bulb Base */}
      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-[#2D5A27] rounded-b-lg" />
    </div>
    <div className="flex flex-col">
      <span className={cn(
        "text-[#1E4D8C] font-sans font-black leading-none tracking-tight",
        size === "small" ? "text-2xl" : "text-5xl"
      )}>Vishnu Priya</span>
      <span className={cn(
        "text-[#4A9D5D] uppercase tracking-[0.15em] font-black mt-1",
        size === "small" ? "text-[9px]" : "text-[14px]"
      )}>Energy Solutions Company (VPESCO)</span>
    </div>
  </div>
);

const SlideWrapper = ({ children, isActive, showCornerLogo = true }: { children: React.ReactNode; isActive: boolean; showCornerLogo?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.98 }}
    exit={{ opacity: 0, scale: 1.02 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={cn(
      "absolute inset-0 flex flex-col pt-8 pb-12 px-12 md:pt-10 md:pb-16 md:px-24 bg-[#F8F7F4] overflow-hidden",
      !isActive && "pointer-events-none"
    )}
  >
    {showCornerLogo && (
      <div className="absolute top-10 right-16 z-50 hidden md:block">
        <Logo size="small" />
      </div>
    )}
    {children}
  </motion.div>
);

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="mb-8 md:mb-12">
    <div className="flex items-center gap-6 mb-4">
      <span className="text-emerald-700 font-mono text-xs font-bold tracking-[0.3em] uppercase bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 shadow-sm">
        {number}
      </span>
      <div className="h-[2px] flex-1 bg-gradient-to-r from-zinc-200/60 to-transparent" />
    </div>
    <h2 className="text-5xl md:text-7xl font-serif font-medium text-zinc-900 tracking-tighter leading-[1.1] italic">
      {title}
    </h2>
  </div>
);

// --- Slides ---

const TitleSlide = ({ isActive }: SlideProps) => (
  <SlideWrapper isActive={isActive} showCornerLogo={false}>
    <div className="flex-1 flex flex-col justify-center max-w-5xl">
      <Logo />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-[90px] font-serif font-light text-zinc-900 mt-8 mb-6 leading-[0.85] tracking-tighter">
          Cutting Power Cost, <br />
          <span className="italic font-medium text-emerald-800">Powering Growth.</span>
        </h1>
      </motion.div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.6 }}
        className="text-xl font-serif italic text-zinc-600 max-w-2xl mb-12 leading-relaxed"
      >
        Strategic Energy Efficiency & Cost Reduction Solutions for Global Industries.
      </motion.p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-zinc-200 pt-8">
        {[
          { icon: BarChart3, label: "Energy Audit" },
          { icon: Zap, label: "Savings Logic" },
          { icon: Users, label: "Client Relations" },
          { icon: FileText, label: "ESCO Contracts" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="flex flex-col gap-3"
          >
            <item.icon className="w-5 h-5 text-emerald-700" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const IndexSlide = ({ isActive }: SlideProps) => {
  const items = [
    "ESCO Models (EU & USA)",
    "Core Services & Audit Scope Audit Part one",
    "Audit part 2 Detail Audit",
    "Target Customers",
    "Revenue Models",
    "Why Choose Us",
    "Market Opportunity",
    "Financial Projections",
    "Strategic Roadmap",
    "Risk Management",
    "Contact Details"
  ];

  return (
    <SlideWrapper isActive={isActive}>
      <SectionHeader number="00" title="Table of Contents" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8 mt-8">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            className="flex items-center gap-10 group cursor-default border-b border-zinc-200/50 pb-6"
          >
            <span className="font-mono text-xl text-emerald-700 font-bold w-12">{(i + 1).toString().padStart(2, '0')}</span>
            <span className="text-zinc-800 font-serif text-3xl group-hover:text-emerald-800 transition-colors italic font-medium">{item}</span>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};

const ESCOModelsSlide = ({ isActive }: SlideProps) => (
  <SlideWrapper isActive={isActive}>
    <SectionHeader number="01" title="Strategic ESCO Frameworks" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
      {[
        {
          title: "Shared Savings",
          subtitle: "US Standard",
          points: ["ESCO assumes 100% capital risk", "Repayment via actual savings", "Performance-guaranteed", "5–10 Year Strategic Term"],
          footer: "Ideal for capital conservation."
        },
        {
          title: "Guaranteed Savings",
          subtitle: "EU Standard",
          points: ["Client-led capital investment", "Fixed savings threshold guarantee", "ESCO covers performance gaps", "High technical accountability"],
          footer: "Preferred for institutional projects."
        },
        {
          title: "EPC Performance",
          subtitle: "Global Benchmark",
          points: ["Performance-linked contracting", "Rigorous M&V (IPMVP)", "International protocol compliance", "Long-term operational partnership"],
          footer: "The gold standard for efficiency."
        }
      ].map((model, i) => (
        <div key={i} className="bg-white p-10 rounded-[48px] border border-zinc-200 shadow-xl flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <h3 className="text-4xl font-serif italic font-bold text-zinc-900 mb-4">{model.title}</h3>
          <p className="text-xs font-black text-emerald-700 uppercase tracking-[0.3em] mb-10">{model.subtitle}</p>
          <ul className="space-y-6 mb-12 flex-1">
            {model.points.map((p, j) => (
              <li key={j} className="flex items-start gap-4 text-xl text-zinc-600 leading-relaxed">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 mt-2.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <p className="text-sm italic text-zinc-400 border-t border-zinc-100 pt-6 font-serif">{model.footer}</p>
        </div>
      ))}
    </div>
  </SlideWrapper>
);

const DetailSlide = ({ isActive, title, description, points, image, onBack, onUpload }: any) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <SlideWrapper isActive={isActive} showCornerLogo={false}>
      <div className="flex justify-between items-start mb-12">
        <div className="flex-1">
          <h3 className="text-emerald-700 font-mono text-base font-bold tracking-[0.4em] uppercase mb-4">Service Deep-Dive</h3>
          <h2 className="text-5xl md:text-[80px] font-serif font-medium text-zinc-900 tracking-tighter italic leading-none">{title}</h2>
        </div>
        <div className="flex flex-col items-end gap-8 mt-2">
          <button 
            onClick={onBack}
            className="px-8 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-emerald-700 transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Overview
          </button>
          <Logo size="small" className="mr-2" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-4">
        <div className="space-y-10">
          <p className="text-2xl md:text-3xl text-zinc-600 leading-relaxed font-serif italic border-l-4 border-emerald-500 pl-8">{description}</p>
          <ul className="space-y-6">
            {points.map((p: string, i: number) => (
              <li key={i} className="flex items-start gap-6 text-xl text-zinc-700 leading-snug">
                <div className="w-3 h-3 rounded-full bg-emerald-600 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(5,150,105,0.6)]" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative group">
          <div className="absolute -inset-8 bg-emerald-500/15 rounded-[60px] blur-[80px] group-hover:bg-emerald-500/25 transition-all duration-700" />
          <div className="relative rounded-[56px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border border-white/30 aspect-[4/3] cursor-pointer">
            <img 
              src={image} 
              alt={title}
              onClick={() => setIsLightboxOpen(true)}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={() => setIsLightboxOpen(true)}
                className="px-6 py-3 bg-white/90 backdrop-blur text-zinc-900 rounded-full text-xs font-black uppercase tracking-widest shadow-2xl hover:bg-white transition-all transform hover:scale-110 flex items-center gap-2"
              >
                <Maximize2 className="w-4 h-4" />
                View Full Image
              </button>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-3 bg-emerald-600/90 backdrop-blur text-white rounded-full text-xs font-black uppercase tracking-widest shadow-2xl hover:bg-emerald-600 transition-all transform hover:scale-110 flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Upload Custom Image
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) onUpload(title, file);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.button
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              className="absolute top-8 right-8 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
            >
              <X className="w-8 h-8" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={image} 
                alt={title}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <h3 className="text-white text-2xl font-serif italic">{title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideWrapper>
  );
};

const CORE_SERVICES_DATA = {
  services: [
    {
      title: "Power Factor Correction (PFC)",
      description: "Improves electrical system efficiency by reducing reactive power.",
      points: [
        "Uses automatic industrial capacitor banks to maintain power factor near unity.",
        "Reduces current flow, energy losses, and electricity bills.",
        "Prevents utility penalties for low power factor.",
        "Improves voltage stability and overall system reliability."
      ],
      image: "https://picsum.photos/seed/industrial-apfc-panel-electrical/1200/800"
    },
    {
      title: "Compressed Air Optimization",
      description: "Compressed air systems often waste energy due to air leaks and pressure losses.",
      points: [
        "Ultrasonic leak detection equipment identifies leaks quickly and accurately.",
        "Repairing leaks reduces unnecessary energy consumption.",
        "Improves system performance and reliability.",
        "Can achieve 10–20% immediate energy savings."
      ],
      image: "https://picsum.photos/seed/industrial-air-compressor-vfd/1200/800"
    },
    {
      title: "Lighting Retrofits",
      description: "Replacement of outdated lighting with high-efficiency LED systems.",
      points: [
        "Modern LED warehouse lighting provides better brightness with lower power consumption.",
        "Longer lifespan and reduced maintenance costs.",
        "Improves workplace visibility and safety.",
        "Significant reduction in overall energy usage."
      ],
      image: "https://picsum.photos/seed/industrial-led-lighting-factory/1200/800"
    },
    {
      title: "Motor & Drive Upgrades",
      description: "Electric motors consume a major portion of industrial electricity.",
      points: [
        "Upgrading to energy-efficient motors improves performance.",
        "Variable Frequency Drives (VFDs) adjust motor speed based on load demand.",
        "Reduces energy consumption and mechanical stress.",
        "Enhances process control and equipment lifespan."
      ],
      image: "https://picsum.photos/seed/ie5-motor-vfd-display/1200/800"
    },
    {
      title: "Solar Rooftop Advisory",
      description: "Installation of solar photovoltaic panels on industrial rooftops.",
      points: [
        "Generates clean electricity from sunlight.",
        "Reduces dependence on grid power and electricity costs.",
        "Utilizes unused roof space effectively.",
        "Supports sustainability and lowers carbon emissions."
      ],
      image: "https://picsum.photos/seed/factory-solar-rooftop-aerial/1200/800"
    },
    {
      title: "Real-Time Monitoring",
      description: "Uses SCADA-based monitoring systems to track industrial operations.",
      points: [
        "Collects real-time data from machines, sensors, and energy meters.",
        "Enables quick detection of faults and inefficiencies.",
        "Supports data-driven decision making.",
        "Improves operational efficiency and predictive maintenance."
      ],
      image: "https://picsum.photos/seed/scada-dashboard-factory-tablet/1200/800"
    }
  ],
  audits: [
    {
      title: "Power Quality Audit",
      description: "Ensuring electrical health and protecting sensitive industrial electronics.",
      points: [
        "Harmonic distortion analysis (THD-V & THD-I).",
        "Voltage sag, swell, and transient monitoring.",
        "Grounding and bonding integrity verification.",
        "Compliance with IEEE 519 international standards."
      ],
      image: "https://picsum.photos/seed/power-quality-analyzer-panel/1200/800"
    },
    {
      title: "Water System Audit",
      description: "Optimizing the energy-water nexus in industrial processes.",
      points: [
        "Pump performance testing and efficiency mapping.",
        "Hydraulic system modeling and friction loss reduction.",
        "Water balance and recycling potential assessment.",
        "Cooling tower and boiler feed-water optimization."
      ],
      image: "https://picsum.photos/seed/water-pumping-station-nature/1200/800"
    },
    {
      title: "HVAC System Audit",
      description: "Maximizing cooling/heating output while minimizing electrical input.",
      points: [
        "Chiller plant efficiency (IKW/TR) benchmarking.",
        "AHU airflow balancing and duct leak testing.",
        "VFD optimization for secondary pumping systems.",
        "Thermal storage feasibility and implementation."
      ],
      image: "https://picsum.photos/seed/rooftop-chiller-hvac-thermal/1200/800"
    },
    {
      title: "Thermography & Safety",
      description: "Predictive maintenance to prevent catastrophic failures and fires.",
      points: [
        "Infrared scanning of electrical panels and busbars.",
        "Identification of loose connections and hotspots.",
        "Mechanical bearing and steam trap thermal audits.",
        "Comprehensive electrical safety compliance reporting."
      ],
      image: "https://picsum.photos/seed/thermal-infrared-breaker-split/1200/800"
    },
    {
      title: "PAT Compliance",
      description: "Navigating the Bureau of Energy Efficiency's flagship regulatory scheme.",
      points: [
        "Baseline SEC (Specific Energy Consumption) verification.",
        "Identification of ECMs to meet PAT targets.",
        "M&V support for ESCert (Energy Saving Certificate) issuance.",
        "Strategic planning for upcoming PAT cycles."
      ],
      image: "https://picsum.photos/seed/pat-compliance-certificate-report/1200/800"
    },
    {
      title: "Green Energy Audit",
      description: "Holistic assessment of a facility's environmental and carbon footprint.",
      points: [
        "Scope 1, 2, and 3 carbon emission mapping.",
        "Renewable energy integration roadmaps.",
        "Waste-to-energy and circular economy potential.",
        "Sustainability reporting for ESG compliance."
      ],
      image: "https://picsum.photos/seed/futuristic-carbon-neutral-industrial-park/1200/800"
    }
  ]
};

const CoreServicesPartOneSlide = ({ isActive }: SlideProps) => {
  const keyServiceAreas = [
    { title: "Electricity Bill Forensic Audit", desc: "Identify billing errors, hidden charges, and tariff misapplications to recover losses and reduce costs." },
    { title: "Tariff Optimization Advisory", desc: "Analyze consumption patterns and recommend the most cost-effective tariff structure." },
    { title: "Contract Demand Restructuring", desc: "Optimize sanctioned demand based on actual load patterns to minimize demand penalties." },
    { title: "Power Factor Financial Optimization", desc: "Improve PF performance to avoid penalties and unlock incentive savings." },
    { title: "Solar Financial Feasibility & Load Analysis", desc: "Evaluate solar integration through detailed load profiling and financial viability studies." }
  ];

  const auditReportIncludes = [
    "Demand Pattern Analysis",
    "Power Factor (PF) Study",
    "Equipment Efficiency Assessment",
    "Financial Modeling of Savings",
    "ROI & IRR Projections for Energy Optimization Investments"
  ];

  return (
    <SlideWrapper isActive={isActive}>
      <SectionHeader number="02" title="Core Services & Audit Scope Audit Part one" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-serif italic font-bold text-zinc-900 mb-4">Core Service Offering – Energy Cost Optimization & Power Management</h3>
            <p className="text-xl text-zinc-600 leading-relaxed font-serif italic border-l-4 border-emerald-500 pl-6">
              Our platform delivers a comprehensive electricity cost optimization service for commercial and industrial consumers by combining technical energy analysis with financial modeling.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-black text-emerald-700 uppercase tracking-[0.3em]">Key Service Areas:</h4>
            <div className="space-y-3">
              {keyServiceAreas.map((area, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <div>
                    <span className="font-bold text-zinc-800 block">{area.title}</span>
                    <span className="text-sm text-zinc-500">{area.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-emerald-50 p-8 rounded-[48px] border border-emerald-100">
            <h4 className="text-sm font-black text-emerald-700 uppercase tracking-[0.3em] mb-6">Audit Report Includes:</h4>
            <ul className="space-y-4">
              {auditReportIncludes.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-zinc-700 font-serif italic">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-900 p-8 rounded-[48px] text-white shadow-2xl">
            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em] mb-4">Outcome:</h4>
            <p className="text-xl font-serif italic leading-relaxed">
              A data-driven roadmap to reduce electricity costs, improve energy efficiency, and maximize financial returns from energy investments.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

const CoreServicesAndAuditScopeSlide = ({ isActive, onSelectDetail }: any) => {
  const services = [
    { icon: Zap, title: "Power Factor Correction", desc: "Harmonious PF optimization" },
    { icon: Wind, title: "Compressed Air Optimization", desc: "Leak detection & VFD control" },
    { icon: Lightbulb, title: "Lighting Retrofits", desc: "Smart LED & sensor systems" },
    { icon: Cpu, title: "Motor & Drive Upgrades", desc: "IE4/IE5 super-premium motors" },
    { icon: Sun, title: "Solar Rooftop Advisory", desc: "Zero-capex feasibility" },
    { icon: Activity, title: "Real-time Monitoring", desc: "IoT & SCADA integration" }
  ];

  const audits = [
    { type: "Power Quality Audit", scope: "Harmonics, transients, IEEE compliance" },
    { type: "Water System Audit", scope: "Pump efficiency, hydraulic balancing" },
    { type: "HVAC System Audit", scope: "Chiller COP, AHU airflow optimization" },
    { type: "Thermography & Safety", scope: "Infrared scanning, fire risk assessment" },
    { type: "PAT Compliance", scope: "SEC analysis, ESCert management" },
    { type: "Green Energy Audit", scope: "Carbon footprint, RE integration" }
  ];

  const details = CORE_SERVICES_DATA;

  return (
    <SlideWrapper isActive={isActive}>
      <SectionHeader number="03" title="Audit part 2 Detail Audit" />
      <p className="text-zinc-500 text-2xl mb-12 -mt-8 font-serif italic">Click any service or audit type to explore technical details and point-wise scope.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start h-full">
        {/* Left Column: Services */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          {services.map((item, i) => (
            <div 
              key={i} 
              onClick={() => onSelectDetail(details.services[i])}
              className="flex items-center gap-8 p-6 rounded-[32px] border border-emerald-100 bg-white hover:bg-emerald-50 hover:border-emerald-300 cursor-pointer transition-all group shadow-sm hover:shadow-xl hover:-translate-x-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors border border-emerald-100 shadow-inner">
                <item.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-serif italic font-bold text-zinc-900">{item.title}</h4>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">{item.desc}</p>
              </div>
              <ChevronRight className="w-6 h-6 text-emerald-400 group-hover:text-emerald-600 transition-colors" />
            </div>
          ))}
        </div>

        {/* Right Column: Audit Table */}
        <div className="lg:col-span-7 bg-white rounded-[48px] border border-zinc-200 shadow-2xl overflow-hidden mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/80 border-b border-zinc-100">
                <th className="p-8 text-sm font-black uppercase tracking-[0.2em] text-zinc-400">Audit Type</th>
                <th className="p-8 text-sm font-black uppercase tracking-[0.2em] text-zinc-400">Key Focus Areas</th>
              </tr>
            </thead>
            <tbody>
              {audits.map((audit, i) => (
                <tr 
                  key={i} 
                  onClick={() => onSelectDetail(details.audits[i])}
                  className="border-b border-zinc-50 hover:bg-emerald-50/50 transition-all cursor-pointer group"
                >
                  <td className="p-8">
                    <div className="flex items-center gap-6">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
                      <span className="text-2xl font-serif italic font-bold text-zinc-900 group-hover:text-emerald-800 transition-colors">{audit.type}</span>
                    </div>
                  </td>
                  <td className="p-8 text-lg text-zinc-500 leading-relaxed font-medium">{audit.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SlideWrapper>
  );
};

const TargetCustomersSlide = ({ isActive }: SlideProps) => (
  <SlideWrapper isActive={isActive}>
    <SectionHeader number="04" title="Strategic Market Segments" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
      {[
        {
          title: "Industrial Manufacturing",
          icon: Building2,
          items: ["Steel & Cement", "Textiles", "Chemicals", "Engineering"]
        },
        {
          title: "High-Intensity MSMEs",
          icon: Target,
          items: ["Small Industries", "Processing Units", "Fabrication", "Cold Storage"]
        },
        {
          title: "Commercial Infrastructure",
          icon: Users,
          items: ["Hospitals & Malls", "IT Parks", "Educational", "Hotels"]
        },
        {
          title: "Public Utilities",
          icon: ShieldCheck,
          items: ["Power Plants", "Railways & Metro", "Water Utilities", "Municipal"]
        }
      ].map((cat, i) => (
        <div key={i} className="p-10 rounded-[48px] border border-zinc-200 bg-white shadow-xl flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner border border-emerald-100">
            <cat.icon className="w-12 h-12 text-emerald-700" />
          </div>
          <h3 className="text-3xl font-serif italic font-bold text-zinc-900 mb-6">{cat.title}</h3>
          <ul className="space-y-4">
            {cat.items.map((item, j) => (
              <li key={j} className="text-lg text-zinc-500 font-medium italic">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SlideWrapper>
);

const RevenueModelsSlide = ({ isActive }: SlideProps) => (
  <SlideWrapper isActive={isActive}>
    <SectionHeader number="05" title="Monetization Strategy" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-8">
      <div className="space-y-10">
        {[
          { title: "Strategic Consulting", desc: "High-margin audit reports and efficiency blueprints.", icon: FileText },
          { title: "Turnkey Implementation", desc: "Direct revenue from hardware and installation services.", icon: Zap },
          { title: "Performance-Based ESCO", desc: "Annuity-style revenue linked to verified energy savings.", icon: BarChart3 },
          { title: "Lifecycle Management", desc: "Recurring AMC and real-time monitoring subscriptions.", icon: Clock }
        ].map((model, i) => (
          <div key={i} className="flex gap-8 group">
            <div className="w-16 h-16 rounded-3xl bg-zinc-900 flex items-center justify-center shrink-0 shadow-2xl group-hover:bg-emerald-700 transition-all group-hover:scale-110">
              <model.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-3xl font-serif italic font-bold text-zinc-900 mb-2">{model.title}</h4>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-md">{model.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-[64px] p-12 border border-zinc-200 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[140px] rounded-full" />
        <h3 className="text-5xl font-serif italic mb-10 relative z-10 font-bold text-zinc-900">Value Proposition</h3>
        <div className="space-y-10 relative z-10">
          <div className="p-8 bg-zinc-50 rounded-[40px] border border-zinc-100 shadow-inner">
            <p className="text-emerald-700 font-black text-xs uppercase tracking-[0.3em] mb-3">Risk Mitigation</p>
            <p className="text-zinc-700 text-xl leading-relaxed font-serif italic">Our performance-linked model eliminates capital risk for clients, ensuring 100% alignment of interests.</p>
          </div>
          <div className="p-8 bg-zinc-50 rounded-[40px] border border-zinc-100 shadow-inner">
            <p className="text-emerald-700 font-black text-xs uppercase tracking-[0.3em] mb-3">Scalable ROI</p>
            <p className="text-zinc-700 text-xl leading-relaxed font-serif italic">We deliver measurable financial impact with typical payback periods under 30 months.</p>
          </div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const WhyChooseUsSlide = ({ isActive }: SlideProps) => (
  <SlideWrapper isActive={isActive}>
    <SectionHeader number="06" title="The Financial Case" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-8">
      <div className="bg-white p-12 rounded-[64px] border border-zinc-200 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-3 bg-emerald-700" />
        <h3 className="text-xs font-black text-emerald-700 uppercase tracking-[0.4em] mb-12">Economic Impact Study</h3>
        <div className="space-y-12">
          <div>
            <p className="text-xs text-zinc-400 uppercase font-black tracking-[0.2em] mb-3">Annual Energy Expenditure</p>
            <p className="text-6xl font-serif italic text-zinc-900 font-bold">₹2.77 Cr</p>
            <p className="text-sm text-zinc-400 mt-3 font-medium italic">Based on 3.03M KWH industrial consumption benchmark.</p>
          </div>
          <div className="h-px bg-zinc-100" />
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-emerald-700 uppercase font-black tracking-[0.2em] mb-3">Targeted Savings (20%)</p>
              <p className="text-7xl font-serif italic font-bold text-emerald-800">₹0.55 Cr</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-zinc-400 uppercase font-black tracking-[0.2em] mb-3">Payback Cycle</p>
              <p className="text-3xl font-serif italic text-zinc-900 font-bold">&lt; 30 Months</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-10">
        <div className="p-10 rounded-[48px] bg-emerald-50/50 border border-emerald-100/50 shadow-sm">
          <h4 className="text-3xl font-serif italic font-bold text-emerald-900 mb-4 flex items-center gap-4">
            <Zap className="w-8 h-8 text-emerald-700" /> Zero Capital Outlay
          </h4>
          <p className="text-zinc-700 text-xl leading-relaxed font-serif italic">Our ESCO framework allows enterprises to capture immediate operational savings without any initial CAPEX requirement.</p>
        </div>
        <div className="p-10 rounded-[48px] bg-zinc-900 text-white shadow-2xl">
          <h4 className="text-3xl font-serif italic font-bold text-emerald-400 mb-4 flex items-center gap-4">
            <ShieldCheck className="w-8 h-8" /> Institutional Transparency
          </h4>
          <p className="text-zinc-400 text-xl leading-relaxed font-serif italic">Every kilowatt-hour saved is audited and verified using international M&V protocols, ensuring absolute financial integrity.</p>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const MarketOpportunitySlide = ({ isActive }: SlideProps) => (
  <SlideWrapper isActive={isActive}>
    <SectionHeader number="07" title="Market Opportunity" />
    <div className="flex-1 flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-8 bg-zinc-900 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full" />
          <p className="text-5xl font-serif italic font-medium text-emerald-400 mb-2">&gt;40%</p>
          <p className="text-xs font-medium text-zinc-400 leading-relaxed uppercase tracking-widest">Industrial sector share of total electricity consumption in India.</p>
        </div>
        <div className="p-8 bg-white rounded-[40px] border border-zinc-200 shadow-xl relative overflow-hidden">
          <p className="text-5xl font-serif italic font-medium text-zinc-900 mb-2">15–30%</p>
          <p className="text-sm font-medium text-zinc-500 leading-relaxed uppercase tracking-widest">Untapped energy efficiency potential across primary manufacturing hubs.</p>
        </div>
        <div className="p-8 bg-emerald-50/50 rounded-[40px] border border-emerald-100 shadow-sm relative overflow-hidden">
          <p className="text-5xl font-serif italic font-medium text-emerald-800 mb-2">Rising</p>
          <p className="text-sm font-medium text-emerald-900/60 leading-relaxed uppercase tracking-widest">Increasing power tariffs driving urgent demand for saving solutions.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xs font-black text-zinc-400 uppercase tracking-[0.3em] mb-4">Institutional Support</h3>
          <div className="flex flex-wrap gap-2">
            {["BEE", "EESL", "MNRE", "PAT Scheme", "Udyam", "GST Benefits"].map((tag, i) => (
              <span key={i} className="px-3 py-1.5 bg-white border border-zinc-200 text-zinc-600 text-[9px] font-bold rounded-full uppercase tracking-widest shadow-sm">{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6 p-6 bg-white rounded-[24px] border border-zinc-200 shadow-sm">
          <TrendingUp className="w-10 h-10 text-emerald-700 shrink-0" />
          <p className="text-lg font-serif italic text-zinc-600 leading-relaxed">The Indian energy efficiency market is entering a multi-decade growth cycle as sustainability becomes a core mandated goal.</p>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const FinancialsSlide = ({ isActive }: SlideProps) => (
  <SlideWrapper isActive={isActive}>
    <SectionHeader number="08" title="Financial Projections" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      {[
        { year: "Fiscal Year 01", clients: "05 Strategic Clients", revenue: "₹1.5 Cr", profit: "₹40 Lakh", color: "bg-white" },
        { year: "Fiscal Year 02", clients: "12 Strategic Clients", revenue: "₹4.0 Cr", profit: "₹1.2 Cr", color: "bg-emerald-50/50" },
        { year: "Fiscal Year 03", clients: "25+ Strategic Clients", revenue: "₹10.0 Cr", profit: "₹3.0 Cr", color: "bg-zinc-900", dark: true }
      ].map((item, i) => (
        <div key={i} className={cn("p-8 rounded-[40px] flex flex-col justify-between border border-zinc-200 shadow-xl relative overflow-hidden", item.color, item.dark && "text-white border-none shadow-zinc-900/20")}>
          {item.dark && <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full" />}
          <div className="relative z-10">
            <p className={cn("text-[9px] font-bold uppercase tracking-[0.3em] mb-2", item.dark ? "text-emerald-400" : "text-emerald-700")}>{item.year}</p>
            <h3 className="text-2xl font-serif italic font-medium mb-8">{item.clients}</h3>
          </div>
          <div className="space-y-6 relative z-10">
             <div>
              <p className="text-[9px] opacity-40 uppercase font-bold tracking-widest mb-1">Projected Revenue</p>
              <p className="text-4xl font-serif italic font-medium tracking-tight">{item.revenue}</p>
            </div>
            <div>
              <p className="text-[9px] opacity-40 uppercase font-bold tracking-widest mb-1">EBITDA Margin (~30%)</p>
              <p className="text-xl font-serif italic font-medium">{item.profit}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-8 flex items-center justify-center gap-4 text-zinc-400">
      <div className="h-px w-12 bg-zinc-200" />
      <p className="text-[10px] italic font-serif">Projections assume 30–40% gross margins and standardized ESCO contract deployment cycles.</p>
      <div className="h-px w-12 bg-zinc-200" />
    </div>
  </SlideWrapper>
);

const ActionPlanSlide = ({ isActive }: SlideProps) => (
  <SlideWrapper isActive={isActive}>
    <SectionHeader number="09" title="Strategic Roadmap" />
    <div className="relative mt-8 pl-12 border-l border-zinc-200 space-y-10">
      {[
        { title: "Institutional Foundation", desc: "Corporate registration (Pvt Ltd/LLP), operational infrastructure, and premium brand positioning." },
        { title: "Human Capital Deployment", desc: "Recruitment of specialized talent: Certified Energy Auditors, Electrical Engineers, and Business Development leads." },
        { title: "Strategic Empanelment", desc: "Securing BEE/EESL recognition to establish institutional credibility and market trust." },
        { title: "Pilot & Proof of Concept", desc: "Execution of high-impact pilot projects to generate verified case studies and performance benchmarks." }
      ].map((item, i) => (
        <div key={i} className="relative">
          <div className="absolute -left-[53px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-700 border-4 border-[#F8F7F4] shadow-sm" />
          <h4 className="text-xl font-serif italic font-medium text-zinc-900 mb-2">{item.title}</h4>
          <p className="text-zinc-500 max-w-2xl leading-relaxed text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </SlideWrapper>
);

const RiskAnalysisSlide = ({ isActive }: SlideProps) => (
  <SlideWrapper isActive={isActive}>
    <SectionHeader number="10" title="Risk Management" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
      <div className="space-y-10">
        <div className="p-10 rounded-[48px] border border-zinc-200 bg-white shadow-xl">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center shadow-inner">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <h4 className="text-3xl font-serif italic font-bold text-zinc-900">Market Adoption Risk</h4>
          </div>
          <p className="text-lg text-zinc-500 mb-8 leading-relaxed font-serif italic">Initial client hesitation regarding performance-linked contracts or long-term commitments.</p>
          <div className="p-6 bg-emerald-50/50 rounded-[32px] border border-emerald-100 shadow-inner">
            <p className="text-xs font-black text-emerald-700 uppercase tracking-[0.3em] mb-3">Mitigation Strategy</p>
            <p className="text-xl text-emerald-900/70 italic font-serif font-medium">Deployment of rigorous M&V protocols and performance guarantees to ensure absolute alignment.</p>
          </div>
        </div>
        <div className="p-10 rounded-[48px] border border-zinc-200 bg-white shadow-xl">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center shadow-inner">
              <TrendingUp className="w-6 h-6 text-amber-600" />
            </div>
            <h4 className="text-3xl font-serif italic font-bold text-zinc-900">Capital Intensity</h4>
          </div>
          <p className="text-lg text-zinc-500 mb-8 leading-relaxed font-serif italic">High upfront capital requirements for large-scale energy efficiency retrofits.</p>
          <div className="p-6 bg-emerald-50/50 rounded-[32px] border border-emerald-100 shadow-inner">
            <p className="text-xs font-black text-emerald-700 uppercase tracking-[0.3em] mb-3">Mitigation Strategy</p>
            <p className="text-xl text-emerald-900/70 italic font-serif font-medium">Utilization of strategic financing partnerships and shared-savings models to optimize cash flows.</p>
          </div>
        </div>
      </div>
      <div className="p-16 bg-zinc-900 rounded-[64px] text-white flex flex-col justify-center relative overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[120px] rounded-full" />
        <h3 className="text-5xl font-serif italic mb-12 relative z-10 font-bold text-emerald-400">Competitive Edge</h3>
        <div className="space-y-12 relative z-10">
          <div className="flex gap-8">
            <div className="w-14 h-14 rounded-2xl bg-emerald-700 flex items-center justify-center shrink-0 shadow-lg">
              <Target className="w-7 h-7" />
            </div>
            <div>
              <p className="text-3xl font-serif italic font-bold mb-2">Niche MSME Focus</p>
              <p className="text-lg text-zinc-400 leading-relaxed font-serif italic">Dominating the mid-market segment often underserved by global ESCO giants.</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-14 h-14 rounded-2xl bg-emerald-700 flex items-center justify-center shrink-0 shadow-lg">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <p className="text-3xl font-serif italic font-bold mb-2">Strategic Ecosystem</p>
              <p className="text-lg text-zinc-400 leading-relaxed font-serif italic">Deep integration with banking partners and technology vendors for turnkey delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const CalculatorSlide = ({ isActive }: SlideProps) => {
  const [bill, setBill] = useState<number>(5000);
  const [usage, setUsage] = useState<number>(1000);
  const [industry, setIndustry] = useState<string>("Industrial");
  
  const savingsRate = industry === "Industrial" ? 0.25 : industry === "Commercial" ? 0.15 : 0.10;
  const annualSavings = bill * 12 * savingsRate;
  const co2Reduction = (usage * 12 * 0.85 * savingsRate) / 1000; // Tons of CO2
  const roi = industry === "Industrial" ? 18 : industry === "Commercial" ? 24 : 36;

  return (
    <SlideWrapper isActive={isActive}>
      <SectionHeader number="04" title="Interactive Savings Estimator" />
      
      <div className="flex-1 flex flex-col md:flex-row gap-12 items-center justify-center">
        {/* HTML Structure: The Form */}
        <div className="w-full md:w-1/2 bg-white p-10 rounded-[40px] shadow-2xl border border-zinc-100">
          <h3 className="text-2xl font-serif italic font-bold text-zinc-900 mb-8">Input Parameters</h3>
          
          <div className="space-y-8">
            <div>
              <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">Monthly Electricity Bill ($)</label>
              <input 
                type="range" 
                min="500" 
                max="50000" 
                step="500"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between mt-2 font-mono text-sm text-zinc-600">
                <span>$500</span>
                <span className="text-emerald-700 font-bold text-lg">${bill.toLocaleString()}</span>
                <span>$50k</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">Monthly Usage (kWh)</label>
              <input 
                type="number" 
                value={usage}
                onChange={(e) => setUsage(Number(e.target.value))}
                className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-2xl font-mono text-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">Industry Sector</label>
              <div className="grid grid-cols-3 gap-4">
                {["Residential", "Commercial", "Industrial"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setIndustry(type)}
                    className={cn(
                      "py-3 rounded-xl text-sm font-bold transition-all border",
                      industry === type 
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-lg scale-105" 
                        : "bg-white text-zinc-500 border-zinc-200 hover:border-emerald-300"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CSS Styling & JS Interactivity: The Results */}
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
          <div className="bg-emerald-900 p-10 rounded-[40px] text-white shadow-2xl transform hover:scale-[1.02] transition-transform">
            <TrendingUp className="w-10 h-10 text-emerald-400 mb-4" />
            <p className="text-xs font-black text-emerald-300/60 uppercase tracking-[0.3em] mb-2">Estimated Annual Savings</p>
            <p className="text-6xl font-serif italic font-bold tracking-tighter">${annualSavings.toLocaleString()}</p>
            <p className="mt-4 text-emerald-300/80 text-sm">Based on a {Math.round(savingsRate * 100)}% efficiency improvement target.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[40px] border border-zinc-200 shadow-xl">
              <Clock className="w-8 h-8 text-emerald-600 mb-3" />
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">ROI Period</p>
              <p className="text-3xl font-serif italic font-bold text-zinc-900">{roi} Months</p>
            </div>
            <div className="bg-white p-8 rounded-[40px] border border-zinc-200 shadow-xl">
              <Activity className="w-8 h-8 text-emerald-600 mb-3" />
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">CO2 Offset</p>
              <p className="text-3xl font-serif italic font-bold text-zinc-900">{co2Reduction.toFixed(1)} Tons</p>
            </div>
          </div>
          
          <button 
            onClick={() => handleGoogleSearch(`energy saving solutions for ${industry}`)}
            className="w-full py-6 bg-zinc-900 text-white rounded-[30px] font-bold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group"
          >
            Get Full Audit Report
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </SlideWrapper>
  );
};

const ContactSlide = ({ isActive }: SlideProps) => (
  <SlideWrapper isActive={isActive} showCornerLogo={false}>
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <Logo />
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-7xl md:text-[140px] font-serif font-light text-zinc-900 mt-12 mb-20 tracking-tighter italic leading-none"
      >
        Thank You.
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl">
        <div className="p-12 rounded-[56px] bg-white border border-zinc-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
          <Mail className="w-12 h-12 text-emerald-700 mx-auto mb-6" />
          <p className="text-xs font-black text-zinc-400 uppercase tracking-[0.4em] mb-2">Inquiries</p>
          <p className="text-2xl font-serif italic font-bold text-zinc-900">investors@vishnupriya.com</p>
        </div>
        <div className="p-12 rounded-[56px] bg-white border border-zinc-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
          <Phone className="w-12 h-12 text-emerald-700 mx-auto mb-6" />
          <p className="text-xs font-black text-zinc-400 uppercase tracking-[0.4em] mb-2">Direct Line</p>
          <p className="text-2xl font-serif italic font-bold text-zinc-900">+91 98765 43210</p>
        </div>
        <div className="p-12 rounded-[56px] bg-white border border-zinc-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
          <Building2 className="w-12 h-12 text-emerald-700 mx-auto mb-6" />
          <p className="text-xs font-black text-zinc-400 uppercase tracking-[0.4em] mb-2">Headquarters</p>
          <p className="text-2xl font-serif italic font-bold text-zinc-900">Mumbai, India</p>
        </div>
      </div>
      
      <p className="mt-20 text-zinc-400 font-mono text-xs uppercase tracking-[0.5em] font-bold">Vishnu Priya Energy Solutions Company (VPESCO) © 2026 | Confidential</p>
    </div>
  </SlideWrapper>
);

const RegistrationSlide = ({ isActive }: SlideProps) => null;
const CostComparisonSlide = ({ isActive }: SlideProps) => null;

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [isTextReportMode, setIsTextReportMode] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<any>(null);
  const [imageOverrides, setImageOverrides] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadSavedImages = async () => {
      try {
        const saved = await get('imageOverrides');
        if (saved) {
          const urls: Record<string, string> = {};
          for (const [title, blob] of Object.entries(saved as Record<string, Blob>)) {
            urls[title] = URL.createObjectURL(blob);
          }
          setImageOverrides(urls);
        }
      } catch (error) {
        console.error('Failed to load saved images:', error);
      }
    };
    loadSavedImages();
  }, []);
  
  const handleImageUpload = async (title: string, file: File) => {
    const url = URL.createObjectURL(file);
    setImageOverrides(prev => ({ ...prev, [title]: url }));
    
    try {
      const currentSaved = (await get('imageOverrides')) || {};
      await set('imageOverrides', { ...currentSaved, [title]: file });
    } catch (error) {
      console.error('Failed to save image:', error);
    }
  };
  
  const slides = [
    TitleSlide,
    IndexSlide,
    CalculatorSlide,
    ESCOModelsSlide,
    CoreServicesPartOneSlide,
    CoreServicesAndAuditScopeSlide,
    TargetCustomersSlide,
    RevenueModelsSlide,
    WhyChooseUsSlide,
    MarketOpportunitySlide,
    FinancialsSlide,
    ActionPlanSlide,
    RiskAnalysisSlide,
    ContactSlide
  ];

  const nextSlide = () => {
    if (selectedDetail) {
      setSelectedDetail(null);
    } else {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };
  
  const prevSlide = () => {
    if (selectedDetail) {
      setSelectedDetail(null);
    } else {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const handleDownloadPDF = () => {
    setIsPrintMode(true);
    setIsTextReportMode(false);
    setTimeout(() => {
      window.print();
      setIsPrintMode(false);
    }, 500);
  };

  const handleDownloadTextReport = () => {
    setIsPrintMode(true);
    setIsTextReportMode(true);
    setTimeout(() => {
      window.print();
      setIsPrintMode(false);
      setIsTextReportMode(false);
    }, 500);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setSelectedDetail(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedDetail]);

  if (isPrintMode) {
    if (isTextReportMode) {
      return (
        <div className="bg-white p-16 max-w-4xl mx-auto font-sans text-zinc-900">
          <div className="flex justify-between items-start mb-16 border-b-2 border-emerald-700 pb-8">
            <Logo />
            <div className="text-right">
              <h1 className="text-3xl font-serif italic font-bold text-zinc-900">Technical Energy Audit Report</h1>
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">Confidential Strategy Document | 2026</p>
            </div>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-serif italic font-bold text-emerald-800 mb-6 border-l-4 border-emerald-600 pl-4">Executive Summary</h2>
              <p className="text-lg leading-relaxed text-zinc-700 font-serif italic mb-4">
                Vishnu Priya Energy Solutions Company (VPESCO) provides end-to-end energy efficiency solutions for global industries, 
                leveraging strategic frameworks like Shared Savings and Guaranteed Savings models.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic font-bold text-emerald-800 mb-6 border-l-4 border-emerald-600 pl-4">Core Services & Audit Scope</h2>
              <div className="grid grid-cols-1 gap-12">
                {[...CORE_SERVICES_DATA.services, ...CORE_SERVICES_DATA.audits].map((item, i) => (
                  <div key={i} className="border-b border-zinc-100 pb-8">
                    <h3 className="text-xl font-serif italic font-bold text-zinc-900 mb-3">{item.title}</h3>
                    <p className="text-zinc-600 italic mb-4">{item.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {item.points.map((p, j) => (
                        <li key={j} className="text-sm text-zinc-500 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif italic font-bold text-emerald-800 mb-6 border-l-4 border-emerald-600 pl-4">Financial Projections & ROI</h2>
              <div className="space-y-8">
                <p className="text-lg text-zinc-700 italic font-serif">
                  Our financial model targets a 20% reduction in annual energy expenditure, typically yielding a payback cycle of less than 30 months.
                </p>
                <div className="grid grid-cols-3 gap-8">
                  <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Year 1 Revenue</p>
                    <p className="text-2xl font-serif italic font-bold text-zinc-900">₹1.5 Cr</p>
                  </div>
                  <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Year 2 Revenue</p>
                    <p className="text-2xl font-serif italic font-bold text-zinc-900">₹4.0 Cr</p>
                  </div>
                  <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Year 3 Revenue</p>
                    <p className="text-2xl font-serif italic font-bold text-zinc-900">₹10.0 Cr</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-24 pt-8 border-t border-zinc-100 text-center">
            <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.4em]">Vishnu Priya Energy Solutions Company (VPESCO) | Confidential Technical Report</p>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white print-mode-container">
        {slides.map((Slide, index) => (
          <div key={index} className="relative w-full aspect-video border-b border-zinc-100">
            <Slide isActive={true} onSelectDetail={() => {}} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-zinc-100 flex items-center justify-center font-sans p-4">
      <div className="relative w-full h-auto max-h-full aspect-video bg-white shadow-2xl overflow-hidden rounded-lg">
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-100 z-50">
          <motion.div 
            className="h-full bg-emerald-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Slides Container */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            {selectedDetail ? (
              <DetailSlide 
                key="detail"
                isActive={true} 
                {...selectedDetail} 
                image={imageOverrides[selectedDetail.title] || selectedDetail.image}
                onBack={() => setSelectedDetail(null)} 
                onUpload={handleImageUpload}
              />
            ) : (
              slides.map((Slide, index) => (
                index === currentSlide && <Slide key={index} isActive={true} onSelectDetail={setSelectedDetail} />
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 right-6 flex items-center gap-4 z-50">
          <div className="flex items-center gap-2">
            <button 
              onClick={handleDownloadPDF}
              className="flex items-center gap-3 px-5 py-2.5 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-zinc-100 rounded-full hover:bg-zinc-50 transition-all active:scale-95 group"
              title="Download Presentation PDF"
            >
              <Download className="w-4 h-4 text-zinc-500 group-hover:text-emerald-600 transition-colors" />
              <span className="text-[11px] font-bold text-[#4A6FA5] uppercase tracking-widest">PDF</span>
            </button>
            <button 
              onClick={handleDownloadTextReport}
              className="flex items-center gap-3 px-5 py-2.5 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-zinc-100 rounded-full hover:bg-zinc-50 transition-all active:scale-95 group"
              title="Download Technical Text Report"
            >
              <FileText className="w-4 h-4 text-zinc-500 group-hover:text-emerald-600 transition-colors" />
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">Text</span>
            </button>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur shadow-sm rounded-full border border-zinc-100">
            <span className="font-mono text-[10px] font-bold text-emerald-600">{(currentSlide + 1).toString().padStart(2, '0')}</span>
            <span className="text-zinc-300 text-[10px]">/</span>
            <span className="font-mono text-[10px] font-bold text-zinc-400">{slides.length.toString().padStart(2, '0')}</span>
          </div>
          <button 
            onClick={prevSlide}
            className="w-8 h-8 rounded-full bg-white shadow-md border border-zinc-100 flex items-center justify-center hover:bg-zinc-50 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 text-zinc-600 group-hover:text-emerald-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-emerald-600 shadow-lg shadow-emerald-100 flex items-center justify-center hover:bg-emerald-700 transition-colors group"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </div>
  );
}
