import React from 'react';
import { Layout } from '@/components/layout';
import { Section, Button } from '@/components/ui/common';
import { 
  ArrowRight, Cpu, Database, Brain, Users, Rocket, Shield, 
  Layers, BarChart3, CheckCircle2, Calendar, Building2, Network
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';


const TRUST_POINTS = ['官方认证平台', '全栈资源对接', '专家技术支持'];
const CAPABILITY_CARDS = [
  { title: '算力资源', value: '5000+ GPU', status: '统一调度', icon: Cpu },
  { title: '模型服务', value: '120+ API', status: '稳定可用', icon: Brain },
  { title: '数据资产', value: '50.2 PB', status: '安全合规', icon: Database },
  { title: '产业服务', value: '200+ 项目', status: '专家协同', icon: Rocket },
];
const Hero = () => (
  <div className="relative bg-slate-50 overflow-hidden border-b border-slate-200 ui-reveal">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 lg:gap-12 lg:items-center min-h-[420px]">
        {/* Hero Content - Full width on mobile */}
        <div className="lg:col-span-5 lg:max-w-[600px] w-full">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-blue-700 text-xs font-semibold backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            OPC技术服务平台
          </div>
          <h1 className="mt-4 max-w-[580px] mobile-title-hero lg:text-[42px] lg:leading-[1.15] font-bold text-slate-900 tracking-tight">
            <span className="block">一站式人工智能OPC</span>
            <span className="block text-blue-700">技术服务平台</span>
          </h1>
          <p className="mt-4 max-w-[560px] mobile-text-body lg:text-sm text-slate-600 leading-relaxed mobile-text-truncate-3">
            聚合算力、数据、模型三大核心要素，为企业提供从基础设施到应用落地的全周期技术服务，助力人工智能产业高质量发展。
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="mobile-button-large lg:h-9 lg:px-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm hover:shadow-md transition-all">
              立即咨询
            </Button>
            <Link to="/models" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="mobile-button-large lg:h-9 lg:px-5 bg-white border-slate-200 text-slate-600 hover:text-blue-700 hover:border-blue-200 hover:bg-blue-50/50 font-semibold shadow-sm transition-all w-full">
                浏览服务
              </Button>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:flex lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-2 text-xs text-slate-500">
            {TRUST_POINTS.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Platform Capabilities - Full width on mobile */}
        <div className="lg:col-span-7 w-full mt-8 lg:mt-0">
          <div className="w-full lg:max-w-[650px] lg:ml-auto rounded-xl border border-slate-200/60 bg-white/50 backdrop-blur-sm p-4 shadow-sm">
            <div className="mt-0 p-4 rounded-lg border border-slate-100/80 bg-slate-50/50">
              {/* Mobile: 2x2 Grid | Desktop: Complex Layout */}
              <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-3 lg:items-center">
                {CAPABILITY_CARDS.map((item, index) => (
                  <div
                    key={item.title}
                    className={cn(
                      'card-enterprise p-4 flex flex-col justify-between mobile-card-compact lg:h-[110px]',
                      'min-h-[100px]', // Ensure minimum height on mobile
                      index === 0 && 'lg:col-start-1 lg:row-start-1',
                      index === 1 && 'lg:col-start-3 lg:row-start-1',
                      index === 2 && 'lg:col-start-1 lg:row-start-2',
                      index === 3 && 'lg:col-start-3 lg:row-start-2'
                    )}
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-slate-800">{item.title}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5 font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
                {/* OPC Hub - Hidden on mobile, visible on desktop */}
                <div className="hidden lg:block lg:col-start-2 lg:row-start-1 lg:row-span-2 rounded-lg border border-blue-100 bg-white p-4 h-[120px] w-[124px] flex items-center justify-center shadow-sm">
                  <div className="text-center">
                    <div className="mx-auto w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                      <Network className="w-5 h-5" />
                    </div>
                    <p className="mt-2 text-[15px] font-bold text-slate-800">能力中枢</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">OPC Hub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SupportPlanSection = () => (
  <Section className="bg-white border-t border-slate-200/60 mobile-section">
    <div className="rounded-xl border border-slate-200/80 bg-gradient-to-b from-slate-50/50 to-white p-6 mobile-card-standard">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold">
          <Shield className="w-3.5 h-3.5" />
          OPC 算力配套支持计划
        </span>
        <h2 className="mt-4 mobile-title-hero lg:text-[28px] lg:leading-tight font-bold text-slate-900 tracking-tight">
          享受核心权益，全方位保驾护航
        </h2>
        <p className="mt-3 mobile-text-body lg:text-[15px] text-slate-600 leading-relaxed">
          面向园区企业提供算力、模型、运营与专家服务的一体化保障，帮助项目更快落地、更稳增长。
        </p>
      </div>

      {/* Mobile: Single column | Desktop: 2 columns */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: '算力资源优先保障',
            desc: '提供训练与推理资源池优先调度，保障关键项目稳定运行。',
            icon: Layers,
          },
          {
            title: '模型接入与适配支持',
            desc: '支持主流模型接入、评测与场景化调优，缩短上线周期。',
            icon: Brain,
          },
          {
            title: '专家顾问与运营陪跑',
            desc: '配置技术与运营双顾问，持续跟进企业智能化建设进度。',
            icon: Users,
          },
          {
            title: '专项活动与政策协同',
            desc: '提供路演、供需对接与政策申报协同支持，提升发展效率。',
            icon: Calendar,
          },
        ].map((item) => (
          <div
            key={item.title}
            className="card-enterprise p-5 mobile-card-standard flex flex-col items-start hover:-translate-y-1 mobile-touch-feedback"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <item.icon className="w-5 h-5" />
            </div>
            <h3 className="mobile-title-section lg:text-[17px] font-bold text-slate-900">{item.title}</h3>
            <p className="mt-2 mobile-text-body text-sm leading-6 text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button className="mobile-button-large lg:px-8 lg:h-10 bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md">
          申请支持计划
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  </Section>
);

const OperationsCockpitPreview = () => {
  const navigate = useNavigate();

  return (
  <Section className="bg-slate-50 border-t border-slate-200/60">
    <div className="rounded-xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm">
      {/* Mobile: Top text, Bottom preview | Desktop: Left text, Right preview */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 lg:items-stretch">
        {/* Text Content - Full width on mobile */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="mt-2 mobile-title-section lg:text-2xl lg:leading-tight font-bold text-slate-900 tracking-tight">
            园区 AI 运营总控中心
          </h2>
          <p className="mt-3 mobile-text-body lg:text-sm text-slate-600 leading-relaxed mobile-text-truncate-3">
            通过统一总控驾驶舱，实时掌握算力资源、模型调用、企业运行、智能体活跃度与产业态势，构建园区级智能运营管理中枢。
          </p>
          
          {/* Features List - Compact on mobile */}
          <div className="mt-6 space-y-3">
            {[
              { title: '实时算力监控', desc: '关注集群负载、队列状态与任务分发效率', icon: Cpu },
              { title: '算力与Token消耗', desc: '洞察大模型调用规模与资源利用趋势', icon: Building2 },
              { title: '智能体运行概览', desc: '跟踪智能体在线率、成功率与服务健康度', icon: Brain },
              { title: '园区数据统一调度', desc: '统一汇聚企业侧数据并支撑跨系统联动', icon: Database },
            ].map((item) => (
              <div key={item.title} className="card-enterprise px-3.5 py-3 flex items-start gap-3 hover:-translate-y-0.5 mobile-touch-feedback">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-slate-700">{item.title}</p>
                  <p className="mt-0.5 text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Action Buttons - Full width on mobile */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              className="mobile-button bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
              onClick={() => {
                navigate('/dashboard');
              }}
            >
              查看总控大屏
            </Button>
            <Button variant="secondary" className="mobile-button bg-white border-slate-200 text-slate-600 hover:text-blue-700 hover:border-blue-200 shadow-sm">
              预约演示
            </Button>
          </div>
        </div>

        {/* Preview Panel - Full width on mobile */}
        <div className="lg:col-span-7 mt-8 lg:mt-0">
          <div className="h-full min-h-[360px] rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-inner relative overflow-hidden group">
            {/* Cleaner, static dashboard preview */}
            <div className="absolute inset-0 bg-white/50" />
            
            <div className="relative z-10 flex flex-col h-full gap-4">
               {/* Header */}
               <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                  <div>
                    <div className="text-xs font-bold text-slate-800">中关村AI北纬社区数据调度</div>
                    <div className="text-[10px] text-slate-400">Unified Operations Command Panel</div>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                     <span className="text-[10px] text-emerald-600 font-medium">System Online</span>
                  </div>
               </div>

               {/* Stats Grid */}
               <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: '实时算力', value: '8.6 PF', trend: '+6.4%', color: 'text-blue-600' },
                    { label: '在线智能体', value: '48,612', trend: '+1,024', color: 'text-indigo-600' },
                    { label: 'Token消耗', value: '2.9B', trend: '+8.1%', color: 'text-violet-600' },
                    { label: '数据吞吐', value: '126 TB/h', trend: '-', color: 'text-slate-600' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                       <div className="text-[10px] text-slate-500">{stat.label}</div>
                       <div className={cn("text-lg font-bold mt-1", stat.color)}>{stat.value}</div>
                       <div className="text-[10px] text-emerald-500 mt-0.5">{stat.trend}</div>
                    </div>
                  ))}
               </div>

               {/* 24小时Token消耗量趋势 */}
               <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 shadow-sm overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                     <div className="text-xs font-semibold text-slate-700 leading-5">
                        过去24小时Token消耗量趋势
                     </div>
                     <div className="text-[11px] text-slate-500 grid grid-cols-2 gap-x-4 gap-y-1 sm:block sm:space-y-1 sm:text-right">
                        <div>24H总消耗：1274万 Tokens</div>
                        <div>峰值时段：15:00</div>
                        <div>峰值小时消耗：101万 Tokens</div>
                        <div>活跃企业：50家</div>
                     </div>
                  </div>

                  <div className="mt-3 h-[156px] sm:h-[168px] px-1 pb-1">
                     <svg className="w-full h-full" viewBox="0 0 288 120" preserveAspectRatio="none">
                        {/* Background Grid */}
                        <defs>
                           <linearGradient id="tokenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                           </linearGradient>
                        </defs>
                        
                        {/* Y-axis grid lines */}
                        {[0, 25, 50, 75, 100].map(y => (
                           <line key={y} x1="0" y1={120 - y * 1.1} x2="288" y2={120 - y * 1.1} stroke="#e2e8f0" strokeWidth="0.5" opacity="0.5" />
                        ))}
                        
                        {/* Area Fill */}
                        <path
                           d="M 0,108 L 12,103 L 24,107 L 36,109 L 48,110 L 60,108 L 72,102 L 84,95 L 96,82 L 108,66 L 120,50 L 132,44 L 144,62 L 156,56 L 168,42 L 180,37 L 192,43 L 204,50 L 216,57 L 228,64 L 240,71 L 252,77 L 264,89 L 276,103 L 288,108 L 288,120 L 0,120 Z"
                           fill="url(#tokenGradient)"
                        />
                        
                        {/* Line Path */}
                        <path
                           d="M 0,108 L 12,103 L 24,107 L 36,109 L 48,110 L 60,108 L 72,102 L 84,95 L 96,82 L 108,66 L 120,50 L 132,44 L 144,62 L 156,56 L 168,42 L 180,37 L 192,43 L 204,50 L 216,57 L 228,64 L 240,71 L 252,77 L 264,89 L 276,103 L 288,108"
                           stroke="#3b82f6"
                           strokeWidth="2"
                           fill="none"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                        
                        {/* Data Points */}
                        {[
                           {x: 0, y: 108, value: 18}, {x: 12, y: 103, value: 14}, {x: 24, y: 107, value: 10},
                           {x: 36, y: 109, value: 8}, {x: 48, y: 110, value: 7}, {x: 60, y: 108, value: 9},
                           {x: 72, y: 102, value: 15}, {x: 84, y: 95, value: 28}, {x: 96, y: 82, value: 46},
                           {x: 108, y: 66, value: 72}, {x: 120, y: 50, value: 88}, {x: 132, y: 44, value: 94},
                           {x: 144, y: 62, value: 76}, {x: 156, y: 56, value: 82}, {x: 168, y: 42, value: 96},
                           {x: 180, y: 37, value: 101}, {x: 192, y: 43, value: 93}, {x: 204, y: 50, value: 86},
                           {x: 216, y: 57, value: 79}, {x: 228, y: 64, value: 68}, {x: 240, y: 71, value: 61},
                           {x: 252, y: 77, value: 55}, {x: 264, y: 89, value: 41}, {x: 276, y: 103, value: 27}
                        ].map((point, i) => (
                           <circle key={i} cx={point.x} cy={point.y} r="2" fill="#3b82f6" opacity="0.8" />
                        ))}
                        
                        {/* X-axis labels (hours) */}
                        <text x="0" y="115" textAnchor="middle" className="text-[9px] fill-slate-500">00</text>
                        <text x="36" y="115" textAnchor="middle" className="text-[9px] fill-slate-500">06</text>
                        <text x="72" y="115" textAnchor="middle" className="text-[9px] fill-slate-500">12</text>
                        <text x="108" y="115" textAnchor="middle" className="text-[9px] fill-slate-500">18</text>
                        <text x="144" y="115" textAnchor="middle" className="text-[9px] fill-slate-500">00</text>
                        <text x="180" y="115" textAnchor="middle" className="text-[9px] fill-slate-500">06</text>
                        <text x="216" y="115" textAnchor="middle" className="text-[9px] fill-slate-500">12</text>
                        <text x="252" y="115" textAnchor="middle" className="text-[9px] fill-slate-500">18</text>
                        <text x="288" y="115" textAnchor="middle" className="text-[9px] fill-slate-500">24</text>
                        
                        {/* Y-axis labels (values) */}
                        <text x="280" y="119" textAnchor="end" className="text-[9px] fill-slate-500">0</text>
                        <text x="280" y="94" textAnchor="end" className="text-[9px] fill-slate-500">25</text>
                        <text x="280" y="69" textAnchor="end" className="text-[9px] fill-slate-500">50</text>
                        <text x="280" y="44" textAnchor="end" className="text-[9px] fill-slate-500">75</text>
                        <text x="280" y="19" textAnchor="end" className="text-[9px] fill-slate-500">100</text>
                        
                        {/* Unit label */}
                        <text x="270" y="10" textAnchor="end" className="text-[9px] fill-slate-600 font-medium">万Tokens</text>
                     </svg>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
  );
};

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <SupportPlanSection />
      <OperationsCockpitPreview />
    </Layout>
  );
}
