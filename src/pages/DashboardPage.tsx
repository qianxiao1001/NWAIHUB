import React, { useState, useEffect } from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid
} from 'recharts';
import { 
  ArrowUpRight, Users, Box, Cpu, Activity, 
  Layers, MapPin, Database, Server, Zap, 
  Clock, Calendar, ChevronDown, MonitorPlay, 
  Target, FileText, CheckCircle2, Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Mock Data ---

const INDUSTRY_DATA = [
  { name: '工业质检', value: 55, color: '#3b82f6' }, // blue-500
  { name: '教育科普', value: 25, color: '#06b6d4' }, // cyan-500
  { name: '文创设计', value: 12, color: '#8b5cf6' }, // violet-500
  { name: '其他', value: 8, color: '#64748b' },     // slate-500
];

const STAGE_DATA = [
  { name: '概念研究', value: 35, full: 100 },
  { name: '验证测试', value: 22, full: 100 },
  { name: '优化推广', value: 15, full: 100 },
  { name: '量产扩张', value: 28, full: 100 },
];

const MODEL_RANK_DATA = [
  { rank: 1, vendor: '阿里', name: 'Qwen3.5-Plus', calls: '3.1M', trend: 'up' },
  { rank: 2, vendor: '阿里', name: 'Wan2.6', calls: '2.8M', trend: 'up' },
  { rank: 3, vendor: '阿里', name: 'Fun-ASR', calls: '2.4M', trend: 'down' },
  { rank: 4, vendor: '阿里', name: 'Qwen-Image', calls: '1.9M', trend: 'up' },
  { rank: 5, vendor: '月之暗面', name: 'Moonshot-v1', calls: '1.5M', trend: 'up' },
];

const POLICY_EFFICIENCY_DATA = [
  { month: '1月', compute: 40, model: 24, data: 20 },
  { month: '2月', compute: 30, model: 13, data: 22 },
  { month: '3月', compute: 50, model: 38, data: 25 },
  { month: '4月', compute: 45, model: 30, data: 30 },
  { month: '5月', compute: 60, model: 45, data: 35 },
  { month: '6月', compute: 55, model: 50, data: 40 },
];

const SUBSIDY_LOGS = [
  { company: '江苏智能制造科技有限公司', type: '研发补贴', amount: '120万', date: '2026-02-01', level: '重点' },
  { company: '南京数字创新研究院', type: '平台建设', amount: '80万', date: '2026-01-28', level: '重点' },
  { company: '苏州工业互联网集团', type: '设备采购', amount: '50万', date: '2026-01-25', level: '一般' },
  { company: '扬子江AI实验室', type: '人才引进', amount: '30万', date: '2026-01-20', level: '一般' },
  { company: '建邺区智慧城市运营中心', type: '场景应用', amount: '200万', date: '2026-01-15', level: '重点' },
];

// --- Components ---

const Card = ({ title, children, className, icon: Icon }: { title: string, children: React.ReactNode, className?: string, icon?: any }) => (
  <div className={cn("relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col shadow-sm", className)}>
    <div className="px-4 py-3 border-b border-slate-800 flex items-center gap-2 bg-slate-900/50">
      {Icon && <Icon className="w-4 h-4 text-blue-400" />}
      <h3 className="text-slate-200 font-semibold tracking-wide text-sm">{title}</h3>
    </div>
    <div className="p-4 flex-1 overflow-hidden relative text-slate-300">
      {children}
    </div>
  </div>
);

const NumberTicker = ({ value }: { value: string | number }) => (
  <span className="font-mono text-white tracking-wider tabular-nums">
    {value}
  </span>
);

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-end text-right">
      <div className="text-2xl font-mono font-bold text-blue-100 tracking-widest leading-none drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
        {time.toLocaleTimeString('en-US', { hour12: false })}
      </div>
      <div className="text-xs text-blue-400 font-medium mt-1 tracking-wider opacity-80">
        {time.toLocaleDateString('zh-CN', { year: 'numeric', month: 'numeric', day: 'numeric' }).replace(/\//g, '.')}
      </div>
    </div>
  );
};

const MapVisualization = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Abstract Map SVG (Conceptual Nanjing) */}
      <svg viewBox="0 0 400 400" className="w-[80%] h-[80%]">
        <path d="M200,80 L240,110 L230,160 L260,180 L250,240 L200,280 L140,230 L150,160 L120,130 L160,90 Z" 
              fill="rgba(30, 58, 138, 0.2)" stroke="#3b82f6" strokeWidth="1.5" className="hover:fill-blue-900/40 transition-colors duration-300 cursor-pointer" />
        <path d="M240,110 L280,100 L300,150 L260,180 L230,160 Z" 
              fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="1.5" className="hover:fill-cyan-900/30 transition-colors duration-300 cursor-pointer" />
        <path d="M250,240 L280,260 L240,320 L200,280 Z" 
              fill="rgba(99, 102, 241, 0.1)" stroke="#6366f1" strokeWidth="1.5" className="hover:fill-indigo-900/30 transition-colors duration-300 cursor-pointer" />
        
        {/* Hotspots */}
        <circle cx="210" cy="150" r="4" fill="#fbbf24" className="animate-pulse" />
        <circle cx="250" cy="190" r="3" fill="#34d399" className="animate-pulse" />
        <circle cx="180" cy="200" r="3" fill="#60a5fa" className="animate-pulse" />
        
        {/* Tooltip Overlay (Static for design) */}
        <g transform="translate(260, 130)">
          <path d="M0,0 L20,-20 H100 V30 H0 Z" fill="rgba(15, 23, 42, 0.9)" stroke="#3b82f6" strokeWidth="1" />
          <text x="30" y="0" fill="white" fontSize="10" fontWeight="bold">建邺区</text>
          <text x="30" y="16" fill="#60a5fa" fontSize="12" fontWeight="bold">2,157 家</text>
        </g>
      </svg>
    </div>
  );
};

export const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 overflow-hidden flex flex-col relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0f172a] to-[#1e1b4b] -z-10" />
      
      {/* Header */}
      <header className="h-16 relative flex items-center justify-between px-4 lg:px-8 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md z-20">
        <div className="hidden lg:flex items-center gap-4 w-1/4">
          <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-xs text-slate-300">
            <Calendar className="w-3.5 h-3.5" />
            <span>2025.12.01 - 2026.01.31</span>
            <ChevronDown className="w-3 h-3 opacity-50 ml-2" />
          </div>
          <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-xs text-slate-300">
            <MapPin className="w-3.5 h-3.5" />
            <span>全部区域</span>
            <ChevronDown className="w-3 h-3 opacity-50 ml-2" />
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <h1 className="text-base lg:text-xl font-bold text-slate-100 tracking-wide uppercase text-center relative z-10 truncate px-2">
            南京 OPC 创业创新专区 · 产业运营看板
          </h1>
        </div>

        <div className="hidden lg:flex w-1/4 justify-end">
          <ClockWidget />
        </div>
      </header>

      {/* Main Layout */}
      <main className="flex-1 p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 overflow-y-auto lg:overflow-hidden">
        
        {/* Left Column */}
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-5 h-auto lg:h-full">
          {/* 1. Entrepreneurship Status */}
          <Card title="创业态势" icon={Activity} className="h-[300px] lg:h-[32%]">
            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="text-slate-400 text-xs mb-1">全国 OPC 创业主体</p>
                <p className="text-3xl font-bold text-white font-mono tracking-tight drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">12,587<span className="text-sm font-sans text-slate-400 ml-1">家</span></p>
              </div>
              <div className="text-emerald-400 text-sm font-medium flex items-center bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <ArrowUpRight className="w-3.5 h-3.5 mr-1" />
                12.3%
              </div>
            </div>
            
            <div className="flex items-center h-[120px]">
              <div className="w-1/2 h-full relative">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={INDUSTRY_DATA}
                        cx="50%"
                        cy="50%"
                        innerRadius={35}
                        outerRadius={50}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {INDUSTRY_DATA.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                 </ResponsiveContainer>
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[10px] text-slate-400">行业<br/>分布</span>
                 </div>
              </div>
              <div className="w-1/2 space-y-2">
                {INDUSTRY_DATA.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-slate-300">{item.name}</span>
                    </div>
                    <span className="font-mono text-white">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-auto pt-4 border-t border-slate-800/50">
              <div className="text-center">
                <p className="text-[10px] text-slate-500 mb-0.5">南京占比</p>
                <p className="text-sm font-bold text-blue-300">18.7%</p>
              </div>
              <div className="text-center border-l border-slate-800/50">
                <p className="text-[10px] text-slate-500 mb-0.5">新增/月</p>
                <p className="text-sm font-bold text-cyan-300">246</p>
              </div>
              <div className="text-center border-l border-slate-800/50">
                <p className="text-[10px] text-slate-500 mb-0.5">重点项目</p>
                <p className="text-sm font-bold text-white">32</p>
              </div>
            </div>
          </Card>

          {/* 2. Subject Portrait */}
          <Card title="主体画像" icon={Users} className="h-[300px] lg:h-[32%]">
            <div className="mb-4">
              <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                <span>南京本地 <span className="text-blue-400 font-bold">52%</span></span>
                <span>省内其他 <span className="text-slate-500 font-bold">48%</span></span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-blue-500 w-[52%]" />
                <div className="h-full bg-slate-700 w-[48%]" />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-end gap-3">
               {STAGE_DATA.map((item, idx) => (
                 <div key={item.name} className="space-y-1">
                   <div className="flex justify-between text-[10px] text-slate-400">
                     <span>{item.name}</span>
                     <span className="font-mono text-white">{item.value}%</span>
                   </div>
                   <div className="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden">
                     <div 
                        className={cn(
                          "h-full rounded-full transition-all duration-1000 ease-out",
                          idx === 0 ? "bg-indigo-500" :
                          idx === 1 ? "bg-blue-500" :
                          idx === 2 ? "bg-cyan-500" :
                          "bg-emerald-500"
                        )} 
                        style={{ width: `${item.value}%` }}
                      />
                   </div>
                 </div>
               ))}
            </div>
          </Card>

          {/* 3. Model Rankings */}
          <Card title="模型调用量月度 TOP5" icon={Server} className="h-[300px] lg:flex-1">
            <div className="space-y-3 mt-2">
              {MODEL_RANK_DATA.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors group cursor-default border border-transparent hover:border-blue-500/20">
                  <div className={cn(
                    "w-6 h-6 rounded flex items-center justify-center text-xs font-bold",
                    index < 3 ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-500"
                  )}>
                    {item.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded scale-90 origin-left">{item.vendor}</span>
                      <span className="text-sm text-slate-200 font-medium truncate group-hover:text-blue-300 transition-colors">{item.name}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono font-bold text-white tabular-nums">{item.calls}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Center Column */}
        <div className="col-span-1 lg:col-span-6 flex flex-col gap-6 h-auto lg:h-full relative">
           {/* Center Header */}
           <div className="lg:absolute top-0 left-0 right-0 h-12 flex items-center justify-center z-10 mb-4 lg:mb-0">
              <div className="bg-slate-900/80 backdrop-blur border border-slate-700 px-8 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-400" />
                <span className="text-slate-200 font-semibold tracking-wide">南京 OPC 创业主体分布情况</span>
              </div>
           </div>

           {/* Map Area */}
           <div className="h-[400px] lg:flex-1 relative rounded-2xl border border-slate-800 bg-slate-900/20 overflow-hidden group">
              <MapVisualization />
           </div>

           {/* Bottom Stats */}
           <div className="h-auto lg:h-[140px] grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: '累计算力租赁', value: '1,256', unit: 'GPU时', sub: '↑ 12.3%', subLabel: '月度增长', icon: Zap, color: 'text-blue-400' },
                { label: '模型调用频次', value: '32.8', unit: '万次', sub: '42%', subLabel: '工业场景', icon: Cpu, color: 'text-cyan-400' },
                { label: '补贴发放总额', value: '2,480', unit: '万', sub: '187', subLabel: '覆盖(家)', icon: Layers, color: 'text-purple-400' },
                { label: '数据集下载量', value: '1,560', unit: 'GB', sub: '工业', subLabel: '数据集Top1', icon: Database, color: 'text-emerald-400' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-900/60 border border-slate-800/80 backdrop-blur rounded-xl p-4 flex flex-col justify-between hover:border-blue-500/30 transition-all hover:-translate-y-1 relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-1">{stat.label}</p>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-2xl font-bold font-mono tracking-tight text-white`}>{stat.value}</span>
                      <span className="text-xs text-slate-500">{stat.unit}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                     <span className={`text-xs font-medium ${stat.color}`}>{stat.sub}</span>
                     <span className="text-[10px] text-slate-500">{stat.subLabel}</span>
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* Right Column */}
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-5 h-auto lg:h-full">
           {/* 1. Policy Efficiency */}
           <Card title="政策效能趋势" icon={Box} className="h-[300px] lg:h-[32%]">
             <div className="w-full h-full -ml-4 mt-2">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={POLICY_EFFICIENCY_DATA}>
                   <defs>
                     <linearGradient id="colorCompute" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                       <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                     </linearGradient>
                     <linearGradient id="colorModel" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                       <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                   <XAxis dataKey="month" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                   <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                   <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', fontSize: '12px' }}
                      itemStyle={{ color: '#e2e8f0' }}
                   />
                   <Area type="monotone" dataKey="compute" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCompute)" strokeWidth={2} name="算力" />
                   <Area type="monotone" dataKey="model" stroke="#06b6d4" fillOpacity={1} fill="url(#colorModel)" strokeWidth={2} name="模型" />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
           </Card>

           {/* 2. Policy Process */}
           <Card title="政策申报流程监控" icon={CheckCircle2} className="h-[250px] lg:h-[25%]">
              <div className="flex items-center justify-between px-2 mt-4 relative">
                {/* Connecting Line */}
                <div className="absolute top-4 left-4 right-4 h-0.5 bg-slate-800 -z-10" />
                
                {['申请', '审批', '公示', '发放'].map((step, i) => (
                  <div key={step} className="flex flex-col items-center gap-2">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 z-10 bg-slate-900 transition-all duration-500",
                      i === 3 ? "border-slate-600 text-slate-500" : "border-blue-500 text-blue-400"
                    )}>
                      {i + 1}
                    </div>
                    <span className={cn("text-xs", i === 3 ? "text-slate-600" : "text-slate-300")}>{step}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-blue-900/20 border border-blue-500/20 rounded p-2 text-center">
                  <p className="text-[10px] text-blue-300">覆盖企业</p>
                  <p className="text-lg font-bold text-white">187</p>
                </div>
                <div className="bg-cyan-900/20 border border-cyan-500/20 rounded p-2 text-center">
                  <p className="text-[10px] text-cyan-300">带动产值(亿)</p>
                  <p className="text-lg font-bold text-white">1.2</p>
                </div>
              </div>
           </Card>

           {/* 3. Policy Subsidy Logs */}
           <Card title="政策补贴日志" icon={FileText} className="h-[300px] lg:flex-1">
             <div className="flex gap-2 mb-3">
               <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30 cursor-pointer hover:bg-blue-500/30">全部行业</span>
               <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700 cursor-pointer hover:bg-slate-700">全部等级</span>
             </div>
             <div className="space-y-2 overflow-y-auto max-h-[200px] pr-1 custom-scrollbar">
               {SUBSIDY_LOGS.map((log, i) => (
                 <div key={i} className="bg-slate-800/30 p-2 rounded border border-slate-800 hover:border-blue-500/30 transition-colors">
                   <div className="flex justify-between items-start mb-1">
                     <span className="text-xs text-slate-200 font-medium truncate max-w-[140px]" title={log.company}>{log.company}</span>
                     <span className={cn(
                       "text-[10px] px-1.5 py-0.5 rounded-full scale-90 origin-right",
                       log.level === '重点' ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" : "bg-slate-700 text-slate-400"
                     )}>{log.level}</span>
                   </div>
                   <div className="flex justify-between items-center text-[10px] text-slate-500">
                     <span>{log.type}</span>
                     <div className="flex gap-3">
                       <span className="text-emerald-400">{log.amount}</span>
                       <span>{log.date}</span>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </Card>
        </div>
      </main>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(71, 85, 105, 0.8);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;
