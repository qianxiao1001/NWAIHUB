import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Box,
  Bot,
  BriefcaseBusiness,
  Building2,
  CircleCheck,
  ClipboardList,
  Cpu,
  Database,
  Gauge,
  Handshake,
  Headphones,
  Orbit,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Wrench,
} from 'lucide-react';
import { Layout } from '@/components/layout';
import { Badge, Button } from '@/components/ui/common';

const capabilityCards = [
  {
    title: '算力资源优先保障',
    desc: '提供秒级算力申请绿色通道优先课题，保障关键项目稳定运行。',
    icon: Orbit,
    iconClass: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    title: '模型接入与适配支持',
    desc: '支持主流模型接入、评测与多租户架构支持，避免上线割裂。',
    icon: Wrench,
    iconClass: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  },
  {
    title: '专家顾问与运营跟跑',
    desc: '配置技术与运营双服务，持续跟踪企业性能优化与建设进度。',
    icon: UserRoundCheck,
    iconClass: 'text-cyan-600 bg-cyan-50 border-cyan-100',
  },
  {
    title: '专享活动与政策协同',
    desc: '提供路演、对接与政策申报前置支持，提升发展效率。',
    icon: ClipboardList,
    iconClass: 'text-violet-600 bg-violet-50 border-violet-100',
  },
];

const focusItems = [
  { label: '算力源供给', icon: Cpu },
  { label: '模型服务接入', icon: Box },
  { label: '数据资产智能应用', icon: Database },
  { label: '全周期接入·部署·运营支持', icon: Handshake },
];

const overviewTasks = ['实时算力监控', '模型调用态势', '终端流转追踪', '智能体运行健康'];

const stats = [
  { label: '近7日告警', value: '502', extra: '较上周 -12%' },
  { label: '在线服务调用', value: '48,612', extra: '今日累计' },
  { label: '低风险问题', value: '294', extra: '自动修复中' },
  { label: '新增企业', value: '126', extra: '本周新增' },
];

const PROMO_BANNER = `${import.meta.env.BASE_URL}banners/qianfanagent.png?v=20260318a`;

const HomePageMain = () => {
  return (
  <main className="bg-[#f6f8fc]">
    <section 
      className="relative min-h-[360px] sm:min-h-[400px] flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Logos/Gemini_Generated_Image_gaqs6sgaqs6sgaqs.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/65 to-white/80 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-transparent to-blue-50/40" />
      
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-2 sm:px-8 py-8 sm:py-10">
        <div className="text-center">
          <Badge className="mb-5 border-blue-100 bg-blue-50 text-blue-700 px-4 py-1.5 text-sm font-medium">上地街道 · OPC技术服务平台</Badge>
          <h1 className="text-[clamp(1rem,4.1vw,3rem)] sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3 whitespace-nowrap">
            上地街道产业智能服务中枢
          </h1>
          <p className="text-[clamp(0.72rem,3.1vw,1.875rem)] leading-tight font-semibold text-slate-800 mb-4 sm:text-[30px] whitespace-nowrap">
            聚合算力、模型、数据与智能体能力，构建上地街道产业智能协同底座
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-2.5 mb-6">
            <Link to="/community">
              <button className="inline-flex items-center justify-center h-10 px-7 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 text-[13px]">
                申请入驻
                <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </button>
            </Link>
            <Link to="/models">
              <button className="inline-flex items-center justify-center h-10 px-7 bg-white/80 hover:bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-slate-300 shadow-sm transition-all duration-300 text-[13px]">
                服务资源
                <ArrowRight className="ml-2 w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-slate-500">
            <span className="inline-flex items-center gap-2 opacity-80">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              权威产品渠道
            </span>
            <span className="inline-flex items-center gap-2 opacity-80">
              <Building2 className="w-4 h-4 text-blue-500" />
              政企服务对接
            </span>
            <span className="inline-flex items-center gap-2 opacity-80">
              <Headphones className="w-4 h-4 text-blue-500" />
              专家咨询服务
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="py-4 border-b border-slate-200">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-2.5">
          {capabilityCards.map(({ title, desc, icon: Icon, iconClass }) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
              <div className="flex items-start gap-2.5">
                <div className={`w-9 h-9 rounded-md border flex items-center justify-center ${iconClass}`}>
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-0.5">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Link to="/policy">
            <Button className="h-9 px-10 bg-blue-600 hover:bg-blue-700 text-sm">
              申请支持计划
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-4 border-b border-slate-200 bg-white/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={PROMO_BANNER}
            alt="平台推广图"
            className="w-full h-[220px] sm:h-[300px] lg:h-[420px] object-contain"
            loading="eager"
          />
        </div>
      </div>
    </section>

    <section className="py-8">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <div className="mb-3 flex items-center justify-between gap-3">
            <Badge variant="blue">
              实时算力监控
            </Badge>
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              系统在线
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">上地街道产业智能总控中心</h2>
          <p className="text-sm text-slate-500 leading-6 mb-5">
            以首页作为观测枢纽完成算力交互与模型运行指标态势，让管理者快速查看资源算力、模型、数据与服务健康状态。
          </p>

          <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
            <div className="lg:col-span-4 space-y-3">
              {overviewTasks.map((task) => (
                <div key={task} className="rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                  <div className="text-[13px] text-slate-900 font-semibold inline-flex items-center gap-2">
                    <CircleCheck className="w-4 h-4 text-blue-600" />
                    {task}
                  </div>
                </div>
              ))}
              <div className="pt-1 flex flex-col gap-2">
                <Link to="/dashboard" className="w-full">
                  <Button size="sm" className="w-full h-10 bg-blue-600 hover:bg-blue-700 justify-center">
                    进入总控大厅
                    <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 rounded-xl border border-slate-200 bg-slate-50/70 p-4 md:p-5">
              <div className="pb-3 mb-3 border-b border-slate-200">
                <h3 className="text-[34px] leading-tight font-semibold text-slate-900 md:text-4xl">上地街道 · 产业运行监测</h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-3 md:p-4">
                    <p className="text-[11px] text-slate-500">{item.label}</p>
                    <p className="text-3xl font-semibold text-slate-900 mt-1">{item.value}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{item.extra}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-slate-600 font-medium">近 24 小时 Token 调用趋势</p>
                  <span className="text-xs text-slate-500 inline-flex items-center gap-1">
                    <Gauge className="w-3.5 h-3.5" />
                    24H 总量：127,476 Tokens
                  </span>
                </div>
                <div className="h-32 w-full rounded bg-[linear-gradient(180deg,rgba(37,99,235,0.14)_0%,rgba(37,99,235,0.03)_72%,rgba(255,255,255,0.92)_100%)] relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-3 h-[2px] bg-blue-200" />
                  <svg viewBox="0 0 600 80" className="absolute inset-0 w-full h-full">
                    <path
                      d="M0,62 C45,58 90,66 130,60 C180,52 225,34 270,37 C320,42 360,22 405,30 C455,38 500,45 600,60"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
};

const HomeShortcut = () => (
  <section className="py-6 border-t border-slate-200 bg-white">
    <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Link
          to="/models"
          className="rounded-lg border border-slate-200 p-3 text-sm text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          模型广场
        </Link>
        <Link
          to="/compute"
          className="rounded-lg border border-slate-200 p-3 text-sm text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
        >
          <Cpu className="w-4 h-4 text-blue-600" />
          算力资源
        </Link>
        <Link
          to="/datasets"
          className="rounded-lg border border-slate-200 p-3 text-sm text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
        >
          <Database className="w-4 h-4 text-blue-600" />
          数据资源
        </Link>
        <Link
          to="/apps"
          className="rounded-lg border border-slate-200 p-3 text-sm text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
        >
          <Bot className="w-4 h-4 text-blue-600" />
          智能应用市场
        </Link>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <Layout>
      <HomePageMain />
      <HomeShortcut />
    </Layout>
  );
}
