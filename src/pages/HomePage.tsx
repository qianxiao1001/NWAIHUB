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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[420px]">
        <div className="lg:col-span-5 max-w-[600px]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-blue-700 text-xs font-semibold backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            OPC技术服务平台
          </div>
          <h1 className="mt-4 max-w-[580px] text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] font-bold text-slate-900 tracking-tight">
            <span className="block whitespace-nowrap">一站式人工智能OPC</span>
            <span className="block text-blue-700">技术服务平台</span>
          </h1>
          <p className="mt-4 max-w-[560px] text-sm text-slate-600 leading-relaxed">
            聚合算力、数据、模型三大核心要素，为企业提供从基础设施到应用落地的全周期技术服务，助力人工智能产业高质量发展。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button size="lg" className="h-9 px-5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all">
              立即咨询
            </Button>
            <Link to="/models">
              <Button variant="secondary" size="lg" className="h-9 px-5 bg-white border-slate-200 text-slate-600 hover:text-blue-700 hover:border-blue-200 hover:bg-blue-50/50 text-sm font-semibold shadow-sm transition-all">
                浏览服务
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
            {TRUST_POINTS.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 w-full">
          <div className="w-full max-w-[650px] ml-auto rounded-xl border border-slate-200/60 bg-white/50 backdrop-blur-sm p-4 shadow-sm">
            <div className="mt-0 p-4 rounded-lg border border-slate-100/80 bg-slate-50/50">
              <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
                {CAPABILITY_CARDS.map((item, index) => (
                  <div
                    key={item.title}
                    className={cn(
                      'card-enterprise p-4 h-[110px] flex flex-col justify-between',
                      index === 0 && 'col-start-1 row-start-1',
                      index === 1 && 'col-start-3 row-start-1',
                      index === 2 && 'col-start-1 row-start-2',
                      index === 3 && 'col-start-3 row-start-2'
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
                <div className="col-start-2 row-start-1 row-span-2 rounded-lg border border-blue-100 bg-white p-4 h-[120px] w-[124px] flex items-center justify-center shadow-sm">
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
  <Section className="bg-white border-t border-slate-200/60">
    <div className="rounded-xl border border-slate-200/80 bg-gradient-to-b from-slate-50/50 to-white p-6 sm:p-8">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold">
          <Shield className="w-3.5 h-3.5" />
          OPC 算力配套支持计划
        </span>
        <h2 className="mt-4 text-[28px] leading-tight font-bold text-slate-900 tracking-tight">
          享受核心权益，全方位保驾护航
        </h2>
        <p className="mt-3 text-slate-600 leading-relaxed text-[15px]">
          面向园区企业提供算力、模型、运营与专家服务的一体化保障，帮助项目更快落地、更稳增长。
        </p>
      </div>

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
            className="card-enterprise p-5 sm:p-6 flex flex-col items-start hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <item.icon className="w-5 h-5" />
            </div>
            <h3 className="text-[17px] font-bold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-10 shadow-sm hover:shadow-md">
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        <div className="lg:col-span-5 flex flex-col justify-center">

          <h2 className="mt-2 text-2xl leading-tight font-bold text-slate-900 tracking-tight">
            园区 AI 运营总控中心
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            通过统一总控驾驶舱，实时掌握算力资源、模型调用、企业运行、智能体活跃度与产业态势，构建园区级智能运营管理中枢。
          </p>
          <div className="mt-6 space-y-3">
            {[
              { title: '实时算力监控', desc: '关注集群负载、队列状态与任务分发效率', icon: Cpu },
              { title: '算力与Token消耗', desc: '洞察大模型调用规模与资源利用趋势', icon: Building2 },
              { title: '智能体运行概览', desc: '跟踪智能体在线率、成功率与服务健康度', icon: Brain },
              { title: '园区数据统一调度', desc: '统一汇聚企业侧数据并支撑跨系统联动', icon: Database },
            ].map((item) => (
              <div key={item.title} className="card-enterprise px-3.5 py-3 flex items-start gap-3 hover:-translate-y-0.5">
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
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 h-8 text-xs shadow-sm"
              onClick={() => {
                navigate('/dashboard');
              }}
            >
              查看总控大屏
            </Button>
            <Button variant="secondary" className="bg-white border-slate-200 text-slate-600 hover:text-blue-700 hover:border-blue-200 px-5 h-8 text-xs shadow-sm">
              预约演示
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7">
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

               {/* Main Chart Area (Abstract) */}
               <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 flex items-end justify-between px-6 pb-6 pt-10 gap-2 opacity-80">
                     {[40, 65, 45, 80, 55, 70, 60, 90, 75, 85, 60, 70, 50, 65, 80].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-50 rounded-t-sm relative group/bar hover:bg-blue-100 transition-colors">
                           <div 
                              className="absolute bottom-0 left-0 right-0 bg-blue-500/80 rounded-t-sm transition-all duration-500"
                              style={{ height: `${h}%` }}
                           />
                        </div>
                     ))}
                  </div>
                  <div className="absolute top-3 left-4 text-xs font-semibold text-slate-600">
                     资源调用趋势 (24H)
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
