import React, { useState, useEffect } from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart, Bar, Legend, FunnelChart, Funnel, LabelList
} from 'recharts';
import { 
  ArrowUpRight, ArrowDownRight, Users, Box, Cpu, Activity, 
  Layers, MapPin, Database, Server, Zap, 
  Clock, Calendar, ChevronDown, MonitorPlay, 
  Target, FileText, CheckCircle2, Shield,
  TrendingUp, Building2, Lightbulb, Briefcase,
  Award, Handshake, FileCheck, AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Mock Data ---

const INDUSTRY_DATA = [
  { name: '工业质检', value: 55, color: '#3b82f6' },
  { name: '教育科普', value: 25, color: '#06b6d4' },
  { name: '文创设计', value: 12, color: '#8b5cf6' },
  { name: '其他', value: 8, color: '#64748b' },
];

const STAGE_DATA = [
  { name: '初创期', value: 42 },
  { name: '成长期', value: 35 },
  { name: '扩张期', value: 18 },
  { name: '成熟期', value: 5 },
];

const TECH_DIRECTION_DATA = [
  { name: '大模型', value: 38, color: '#3b82f6' },
  { name: '智能体', value: 28, color: '#06b6d4' },
  { name: '数据智能', value: 20, color: '#8b5cf6' },
  { name: '工业 AI', value: 14, color: '#10b981' },
];

const SERVICE_DEMAND_DATA = [
  { name: '算力服务', value: 68, unit: '家' },
  { name: '模型调用', value: 52, unit: '家' },
  { name: '数据资源', value: 45, unit: '家' },
  { name: '政策咨询', value: 38, unit: '家' },
  { name: '融资对接', value: 25, unit: '家' },
];

const MODEL_RANK_DATA = [
  { rank: 1, vendor: '智谱 AI', name: 'GLM-5', calls: '3.1M', trend: 'up' },
  { rank: 2, vendor: 'MiniMax', name: 'MiniMax-M2.5', calls: '2.8M', trend: 'up' },
  { rank: 3, vendor: '阿里', name: 'Qwen3.5-Plus', calls: '2.4M', trend: 'down' },
  { rank: 4, vendor: 'NVIDIA', name: 'Nemotron-3-Super', calls: '1.9M', trend: 'up' },
  { rank: 5, vendor: '月之暗面', name: 'Moonshot-v1', calls: '1.5M', trend: 'up' },
];

const AREA_RANKING_DATA = [
  { name: 'A 区 - 科技园', count: 45, growth: 12 },
  { name: 'B 区 - 孵化器', count: 38, growth: 8 },
  { name: 'C 区 - 产业园', count: 32, growth: 15 },
  { name: 'D 区 - 创新中心', count: 25, growth: 6 },
  { name: 'E 区 - 加速器', count: 15, growth: 10 },
];

const MONTHLY_GROWTH_DATA = [
  { month: '1 月', new: 12, active: 128 },
  { month: '2 月', new: 18, active: 135 },
  { month: '3 月', new: 22, active: 142 },
  { month: '4 月', new: 25, active: 148 },
  { month: '5 月', new: 28, active: 152 },
  { month: '6 月', new: 32, active: 155 },
];

const POLICY_FUNNEL_DATA = [
  { stage: '申请', count: 245 },
  { stage: '受理', count: 218 },
  { stage: '审批', count: 195 },
  { stage: '公示', count: 187 },
  { stage: '发放', count: 182 },
];

const POLICY_METRICS_DATA = [
  { label: '平均审批时长', value: '5.2', unit: '天', trend: 'down', change: '18%' },
  { label: '资金拨付完成率', value: '94.5', unit: '%', trend: 'up', change: '3.2%' },
  { label: '延迟项目数', value: '8', unit: '个', trend: 'down', change: '25%' },
  { label: '异常预警', value: '3', unit: '个', trend: 'stable', change: '-' },
];

const TOKEN_CONSUMPTION_DATA = [
  { month: '1 月', tokens: 120 },
  { month: '2 月', tokens: 185 },
  { month: '3 月', tokens: 245 },
  { month: '4 月', tokens: 320 },
  { month: '5 月', tokens: 410 },
  { month: '6 月', tokens: 520 },
];

const ACHIEVEMENT_DATA = [
  { label: '新增签约项目', value: '28', unit: '个', sub: '↑ 15%', subLabel: '环比增长' },
  { label: '落地场景数', value: '42', unit: '个', sub: '↑ 8', subLabel: '本月新增' },
  { label: '标杆项目', value: '12', unit: '个', sub: '国家级 3 个', subLabel: '重点培育' },
  { label: '融资转化额', value: '1.8', unit: '亿元', sub: '↑ 22%', subLabel: '季度累计' },
  { label: '知识产权', value: '156', unit: '件', sub: '授权 89 件', subLabel: '专利申请' },
  { label: '解决方案落地', value: '35', unit: '个', sub: '工业 AI 18 个', subLabel: '垂类应用' },
  { label: '模型/智能体上线', value: '48', unit: '个', sub: '↑ 12', subLabel: '本月新增' },
];

// --- Components ---

const Card = ({ title, children, className, icon: Icon }: { title: string, children: React.ReactNode, className?: string, icon?: any }) => (
  <section className={cn("relative rounded-xl border border-slate-700/55 bg-slate-900/70 backdrop-blur-sm overflow-hidden flex flex-col", className)}>
    <div className="h-10 px-3 flex items-center gap-2 border-b border-slate-700/55 bg-slate-900/45">
      {Icon && <Icon className="w-3.5 h-3.5 text-cyan-300" />}
      <h3 className="text-slate-100 text-sm font-semibold tracking-wide">{title}</h3>
    </div>
    <div className="p-3 flex-1 min-h-0 text-slate-300">{children}</div>
  </section>
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

const MapVisualization = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 820 520" className="w-[88%] h-[88%]">
      <defs>
        <linearGradient id="polyFillA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(30,64,175,0.30)" />
          <stop offset="100%" stopColor="rgba(15,23,42,0.18)" />
        </linearGradient>
        <linearGradient id="polyFillB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(6,182,212,0.24)" />
          <stop offset="100%" stopColor="rgba(15,23,42,0.14)" />
        </linearGradient>
        <linearGradient id="polyFillC" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(99,102,241,0.22)" />
          <stop offset="100%" stopColor="rgba(15,23,42,0.12)" />
        </linearGradient>
      </defs>

      {/* Left arc group: D3 D4 D9 */}
      <polygon points="220,125 300,105 350,155 305,220 235,205 195,165" fill="url(#polyFillA)" stroke="#38bdf8" strokeWidth="2.2" />
      <polygon points="210,220 300,235 318,315 248,360 175,305 185,250" fill="url(#polyFillA)" stroke="#3b82f6" strokeWidth="2.2" />
      <polygon points="170,320 245,365 228,442 140,458 95,392 116,338" fill="url(#polyFillB)" stroke="#22d3ee" strokeWidth="2.2" />

      {/* Core D5 */}
      <polygon points="320,165 470,140 560,210 535,350 405,420 300,315" fill="url(#polyFillA)" stroke="#60a5fa" strokeWidth="2.6" />

      {/* D2 top-mid-left */}
      <polygon points="345,78 455,82 495,126 462,165 345,162 305,122" fill="url(#polyFillB)" stroke="#67e8f9" strokeWidth="2.2" />

      {/* Right vertical group D1 D6 D7 */}
      <rect x="566" y="88" width="125" height="68" rx="8" fill="url(#polyFillC)" stroke="#818cf8" strokeWidth="2.2" />
      <rect x="568" y="166" width="125" height="86" rx="8" fill="url(#polyFillC)" stroke="#6366f1" strokeWidth="2.2" />
      <rect x="572" y="263" width="125" height="82" rx="8" fill="url(#polyFillB)" stroke="#22d3ee" strokeWidth="2.2" />

      {/* D8 connector */}
      <polygon points="355,395 485,370 550,432 495,488 360,470 315,430" fill="url(#polyFillC)" stroke="#818cf8" strokeWidth="2.2" />

      {[
        ['D1', 620, 126], ['D2', 398, 122], ['D3', 255, 164], ['D4', 242, 274], ['D5', 430, 277],
        ['D6', 620, 214], ['D7', 624, 306], ['D8', 430, 438], ['D9', 168, 400],
      ].map(([txt, x, y]) => (
        <text key={txt} x={Number(x)} y={Number(y)} fill="#bfdbfe" fontSize="13" textAnchor="middle">{txt}</text>
      ))}

      <circle cx="450" cy="245" r="7" fill="#fbbf24" />
      <circle cx="372" cy="276" r="6" fill="#60a5fa" />
      <circle cx="520" cy="286" r="6" fill="#22d3ee" />
      <circle cx="272" cy="327" r="5" fill="#a78bfa" />
    </svg>
  </div>
);

export const DashboardPage = () => {
  return (
    <div className="h-screen bg-[#030712] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(14,165,233,0.14),transparent_36%),radial-gradient(circle_at_85%_8%,rgba(37,99,235,0.12),transparent_34%),linear-gradient(145deg,#030712_0%,#0a1224_55%,#0f172a_100%)] -z-20" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:38px_38px] opacity-25 -z-10" />

      <div className="h-full p-3 lg:p-4">
        <div className="h-full border border-slate-700/45 rounded-xl overflow-hidden bg-slate-950/35 backdrop-blur-sm grid grid-rows-[7%_11%_82%]">
          {/* Header */}
          <header className="px-4 lg:px-6 border-b border-slate-700/45 flex items-center">
            <div className="w-1/4 text-xs text-slate-400 hidden lg:flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>截至 2026.03</span>
            </div>
            <div className="flex-1 text-center">
              <h1 className="text-lg lg:text-[34px] leading-tight font-bold tracking-[0.06em] text-slate-50">上地街道·产业运营驾驶舱</h1>
              <p className="text-[11px] text-slate-400 tracking-wide">产业运营监测数据</p>
            </div>
            <div className="w-1/4 flex justify-end">
              <ClockWidget />
            </div>
          </header>

          {/* Unified Overview Strip */}
          <section className="px-4 lg:px-6 py-2 border-b border-slate-700/45">
            <div className="h-full rounded-lg border border-slate-700/55 bg-slate-900/55 grid grid-cols-6 divide-x divide-slate-700/50">
              {[
                { label: '社区主体总数', value: '155', unit: '家', sub: '↑ 12.3%', subColor: 'text-emerald-400', icon: Users },
                { label: '月度新增主体', value: '32', unit: '家', sub: '↑ 8', subColor: 'text-emerald-400', icon: TrendingUp },
                { label: '活跃企业数', value: '142', unit: '家', sub: '91.6%', subColor: 'text-cyan-400', icon: Activity },
                { label: '服务触达率', value: '87.5', unit: '%', sub: '↑ 5.2%', subColor: 'text-emerald-400', icon: Target },
                { label: '模型调用总量', value: '32.8', unit: '亿次', sub: '↑ 22%', subColor: 'text-emerald-400', icon: Server },
                { label: '政策覆盖企业数', value: '187', unit: '家', sub: '覆盖率 76%', subColor: 'text-cyan-400', icon: FileCheck },
              ].map((item) => (
                <div key={item.label} className="px-3 py-2 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-1"><item.icon className="w-3.5 h-3.5" />{item.label}</div>
                  <div className="flex items-baseline gap-1"><span className="font-mono text-[34px] leading-none font-bold text-white">{item.value}</span><span className="text-xs text-slate-500">{item.unit}</span></div>
                  <div className={cn('text-[11px] mt-1 font-medium', item.subColor)}>{item.sub}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Main Layout */}
          <main className="px-4 lg:px-6 py-2.5 grid grid-cols-12 gap-3 min-h-0">
        
        {/* Left Column */}
        <div className="col-span-3 flex flex-col gap-3 min-h-0">
          {/* 1. Entrepreneurship Status */}
          <Card title="创业态势" icon={Activity} className="basis-[42%] min-h-0">
            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="text-slate-400 text-xs mb-1">OPC 创新主体</p>
                <p className="text-3xl font-bold text-white font-mono tracking-tight drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">155<span className="text-sm font-sans text-slate-400 ml-1">家</span></p>
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
                <p className="text-[10px] text-slate-500 mb-0.5">上地街道占比</p>
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
          <Card title="主体画像" icon={Users} className="basis-[32%] min-h-0">
            <div className="mb-4">
              <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                <span>上地街道本地 <span className="text-blue-400 font-bold">52%</span></span>
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
          <Card title="模型调用量月度TOP5" icon={Server} className="basis-[26%] min-h-0">
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
        <div className="col-span-6 min-h-0">
           <div className="h-full rounded-xl border border-slate-700/55 bg-slate-900/60 overflow-hidden grid grid-rows-[1fr_auto]">
             <div className="relative min-h-0">
               <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-slate-950/70 border border-cyan-400/25 px-6 py-1 rounded-full flex items-center gap-2">
                  <Target className="w-4 h-4 text-cyan-300" />
                  <span className="text-slate-200 font-semibold text-sm tracking-wide">上地街道创业主体分布情况</span>
               </div>
               <MapVisualization />
               <div className="absolute right-3 top-12 rounded-lg border border-cyan-400/35 bg-slate-950/82 p-3 w-[220px]">
                 <p className="text-xs text-slate-400 mb-1">上地街道核心摘要</p>
                 <div className="text-2xl font-mono font-bold text-cyan-300">2,157 家</div>
                 <div className="grid grid-cols-2 gap-2 mt-2 text-[11px]">
                   <div><span className="text-slate-500">区域占比</span><p className="text-slate-100 font-semibold">18.7%</p></div>
                   <div><span className="text-slate-500">月度增长</span><p className="text-emerald-400 font-semibold">+12.3%</p></div>
                   <div className="col-span-2"><span className="text-slate-500">重点行业</span><p className="text-slate-100 font-semibold">工业质检 / 智能体 / 数据智能</p></div>
                 </div>
               </div>
             </div>
             <div className="grid grid-cols-4 gap-2 p-2 border-t border-slate-700/55 bg-slate-950/38">
              {[
                { label: '累计算力租赁', value: '1,256', unit: 'GPU时', sub: '↑ 12.3%', subLabel: '月度增长', icon: Zap, color: 'text-blue-400' },
                { label: '模型调用频次', value: '32.8', unit: '万次', sub: '42%', subLabel: '工业场景', icon: Cpu, color: 'text-cyan-400' },
                { label: '补贴发放总额', value: '2,480', unit: '万', sub: '187', subLabel: '覆盖(家)', icon: Layers, color: 'text-purple-400' },
                { label: '数据集下载量', value: '1,560', unit: 'GB', sub: '工业', subLabel: '数据集Top1', icon: Database, color: 'text-emerald-400' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-900/60 border border-slate-700/45 rounded-lg p-2.5 flex flex-col justify-between relative overflow-hidden">
                  <div className={`absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[11px] mb-1">{stat.label}</p>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-xl font-bold font-mono tracking-tight text-white`}>{stat.value}</span>
                      <span className="text-xs text-slate-500">{stat.unit}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-700/60">
                     <span className={`text-[11px] font-medium ${stat.color}`}>{stat.sub}</span>
                     <span className="text-[10px] text-slate-500">{stat.subLabel}</span>
                  </div>
                </div>
              ))}
             </div>
           </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 flex flex-col gap-3 min-h-0">
           {/* 1. Policy Process */}
           <Card title="政策申报流程监控" icon={CheckCircle2} className="basis-[68%] min-h-0">
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
              <div className="grid grid-cols-2 gap-2 mt-5">
                <div className="bg-blue-900/20 border border-blue-500/20 rounded p-2 text-center">
                  <p className="text-[10px] text-blue-300">覆盖企业</p>
                  <p className="text-lg font-bold text-white">187</p>
                </div>
                <div className="bg-cyan-900/20 border border-cyan-500/20 rounded p-2 text-center">
                  <p className="text-[10px] text-cyan-300">带动产值 (亿)</p>
                  <p className="text-lg font-bold text-white">1.2</p>
                </div>
                <div className="bg-indigo-900/20 border border-indigo-500/20 rounded p-2 text-center">
                  <p className="text-[10px] text-indigo-300">通过率</p>
                  <p className="text-lg font-bold text-white">88%</p>
                </div>
                <div className="bg-emerald-900/20 border border-emerald-500/20 rounded p-2 text-center">
                  <p className="text-[10px] text-emerald-300">审批时长</p>
                  <p className="text-lg font-bold text-white">5.2 天</p>
                </div>
                <div className="col-span-2 bg-rose-900/20 border border-rose-500/20 rounded p-2 text-center">
                  <p className="text-[10px] text-rose-300">异常待处理</p>
                  <p className="text-lg font-bold text-white">3 个</p>
                </div>
              </div>
           </Card>

           {/* 2. Token Consumption Trend */}
           <Card title="模型调用Token消耗趋势" icon={Activity} className="basis-[32%] min-h-0">
             <div className="w-full h-full">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={TOKEN_CONSUMPTION_DATA}>
                   <defs>
                     <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.42}/>
                       <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                   <XAxis dataKey="month" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                   <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                   <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', fontSize: '12px' }}
                      itemStyle={{ color: '#e2e8f0' }}
                   />
                   <Area type="monotone" dataKey="tokens" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorTokens)" strokeWidth={2.3} name="Token" />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
           </Card>
        </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
