import React from 'react';
import { Layout } from '@/components/layout';
import { Section, Button } from '@/components/ui/common';
import { 
  ArrowRight, Cpu, Database, Brain, Users, Rocket, Shield, 
  Layers, BarChart3, CheckCircle2, Calendar, Building2, Network
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';


const TRUST_POINTS = ['官方认证平台', '全栈资源对接', '专家技术支持'];
const CAPABILITY_CARDS = [
  { title: '算力资源', value: '5000+ GPU', status: '统一调度', icon: Cpu },
  { title: '模型服务', value: '120+ API', status: '稳定可用', icon: Brain },
  { title: '数据资产', value: '50.2 PB', status: '安全合规', icon: Database },
  { title: '产业服务', value: '200+ 项目', status: '专家协同', icon: Rocket },
];
const Hero = () => (
  <div className="relative bg-slate-50 overflow-hidden border-b border-slate-200">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.14]" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-9 pb-10 lg:pt-10 lg:pb-11">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[500px]">
        <div className="lg:col-span-5 max-w-[600px]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            OPC技术服务平台
          </div>
          <h1 className="mt-4 max-w-[580px] text-[40px] sm:text-[44px] lg:text-[48px] leading-[1.08] font-bold text-slate-900 tracking-tight">
            <span className="block whitespace-nowrap">一站式人工智能OPC</span>
            <span className="block text-blue-700">技术服务平台</span>
          </h1>
          <p className="mt-5 max-w-[560px] text-base text-slate-600 leading-7">
            聚合算力、数据、模型三大核心要素，为企业提供从基础设施到应用落地的全周期技术服务，助力人工智能产业高质量发展。
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button size="lg" className="h-11 px-7 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold shadow-sm">
              立即咨询
            </Button>
            <Link to="/models">
              <Button variant="secondary" size="lg" className="h-11 px-7 bg-white border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold shadow-sm">
                浏览服务
              </Button>
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
            {TRUST_POINTS.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-7 w-full"
        >
          <div className="w-full max-w-[650px] ml-auto rounded-2xl border border-slate-200/80 bg-white p-4 lg:p-5 shadow-[0_20px_44px_-34px_rgba(15,23,42,0.26)]">

            <div className="mt-4 p-4 rounded-xl border border-slate-100/90 bg-slate-50/75">
              <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2.5 gap-y-2.5 items-center">
                {CAPABILITY_CARDS.map((item, index) => (
                  <div
                    key={item.title}
                    className={cn(
                      'rounded-xl border border-slate-200 bg-white p-3.5 h-[118px] flex flex-col justify-between shadow-[0_8px_20px_-20px_rgba(15,23,42,0.35)]',
                      index === 0 && 'col-start-1 row-start-1',
                      index === 1 && 'col-start-3 row-start-1',
                      index === 2 && 'col-start-1 row-start-2',
                      index === 3 && 'col-start-3 row-start-2'
                    )}
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                      <item.icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.value} · {item.status}</p>
                    </div>
                  </div>
                ))}
                <div className="col-start-2 row-start-1 row-span-2 rounded-xl border border-blue-200 bg-white p-4 h-[128px] w-[132px] flex items-center justify-center shadow-[0_16px_30px_-24px_rgba(37,99,235,0.5)]">
                  <div className="text-center">
                    <div className="mx-auto w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                      <Network className="w-5.5 h-5.5" />
                    </div>
                    <p className="mt-2.5 text-lg font-bold text-slate-800">能力中枢</p>
                    <p className="text-xs text-slate-500 mt-0.5">OPC Hub Core</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const SupportPlanSection = () => (
  <Section className="bg-white py-16 border-t border-slate-200">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="rounded-[28px] border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-8 lg:p-10 shadow-[0_24px_58px_-44px_rgba(15,23,42,0.32)]">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5" />
            OPC 算力配套支持计划
          </span>
          <h2 className="mt-4 text-[30px] leading-[1.18] font-bold text-slate-900 tracking-tight">
            享受核心权益，全方位保驾护航
          </h2>
          <p className="mt-3 text-slate-600 leading-7">
            面向园区企业提供算力、模型、运营与专家服务的一体化保障，帮助项目更快落地、更稳增长。
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
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
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.35)] hover:border-blue-200 hover:shadow-[0_16px_36px_-26px_rgba(37,99,235,0.35)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button className="bg-blue-700 hover:bg-blue-800 text-white px-7">
            申请支持计划
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  </Section>
);

const OperationsCockpitPreview = () => (
  <Section className="bg-slate-50 py-16 border-t border-slate-200">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="rounded-[28px] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 sm:p-7 lg:p-8 shadow-[0_28px_64px_-46px_rgba(15,23,42,0.35)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col">

            <h2 className="mt-4 text-[30px] leading-[1.18] font-bold text-slate-900 tracking-tight">
              园区 AI 运营总控中心
            </h2>
            <p className="mt-3 text-slate-600 leading-7">
              通过统一总控驾驶舱，实时掌握算力资源、模型调用、企业运行、智能体活跃度与产业态势，构建园区级智能运营管理中枢。
            </p>
            <div className="mt-6 space-y-3">
              {[
                { title: '实时算力监控', desc: '关注集群负载、队列状态与任务分发效率', icon: Cpu },
                { title: '算力与Token消耗', desc: '洞察大模型调用规模与资源利用趋势', icon: Building2 },
                { title: '智能体运行概览', desc: '跟踪智能体在线率、成功率与服务健康度', icon: Brain },
                { title: '园区数据统一调度', desc: '统一汇聚企业侧数据并支撑跨系统联动', icon: Database },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-700">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-500 leading-5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                className="bg-blue-700 hover:bg-blue-800 text-white px-6"
                onClick={() => {
                  window.location.href = 'http://localhost:3001/opc-control-center-demo.html';
                }}
              >
                查看总控大屏
              </Button>
              <Button variant="secondary" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50 px-6">
                预约演示
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="h-full min-h-[440px] rounded-[24px] border border-slate-600/65 bg-gradient-to-br from-[#16243f] via-[#1a2f53] to-[#223d68] p-4 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_52px_-36px_rgba(15,23,42,0.85)]">
              <div className="rounded-2xl border border-white/15 bg-slate-900/35 px-4 py-3">
                <div className="flex flex-wrap items-start justify-between gap-2.5">
                  <div>
                    <p className="text-sm font-semibold text-slate-100">中关村AI北纬社区数据调度</p>
                    <p className="mt-1 text-[10px] text-slate-300/90 uppercase tracking-[0.16em]">Unified Operations Command Panel</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1 text-[10px] text-emerald-200">
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
                        className="h-1.5 w-1.5 rounded-full bg-emerald-300"
                      />
                      在线运行
                    </div>
                    <div className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1 text-[10px] text-cyan-100">
                      最近更新 10:24
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-12">
                <div className="lg:col-span-3 space-y-2.5">
                  {[
                    { label: '实时算力', value: '8.6 PF', trend: '+6.4%' },
                    { label: '在线智能体', value: '48,612', trend: '+1,024' },
                    { label: 'Token消耗', value: '2.9B', trend: '+8.1%' },
                    { label: '数据吞吐', value: '126 TB/h', trend: '稳定' },
                  ].map((item, idx) => (
                    <div key={item.label} className="rounded-xl border border-white/12 bg-slate-900/35 px-3 py-2.5">
                      <p className="text-[10px] text-slate-300">{item.label}</p>
                      <div className="mt-1.5 flex items-end justify-between">
                        <p className="text-[15px] font-semibold text-slate-100">{item.value}</p>
                        <motion.p
                          animate={{ opacity: [0.65, 1, 0.65] }}
                          transition={{ duration: 2.3, repeat: Infinity, delay: idx * 0.15, ease: 'easeInOut' }}
                          className="text-[10px] text-cyan-200"
                        >
                          {item.trend}
                        </motion.p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative h-[254px] overflow-hidden rounded-2xl border border-white/12 bg-slate-900/30 lg:col-span-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_52%,rgba(56,189,248,0.18),rgba(15,23,42,0.12)_42%,rgba(15,23,42,0.6))]" />
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]" />
                  <div className="absolute inset-[16%] rounded-[30%] border border-cyan-100/12" />
                  <div className="absolute inset-[25%] rounded-[26%] border border-cyan-100/12" />
                  {[
                    'left-[23%] top-[34%] w-[52%] h-px bg-cyan-200/25',
                    'left-[39%] top-[22%] w-px h-[56%] bg-cyan-200/22',
                    'left-[30%] top-[55%] w-[40%] h-px bg-cyan-200/18',
                    'left-[26%] top-[32%] w-[36%] h-px rotate-[32deg] origin-left bg-cyan-200/18',
                    'left-[44%] top-[34%] w-[32%] h-px -rotate-[28deg] origin-left bg-cyan-200/16',
                  ].map((item) => (
                    <div key={item} className={cn('absolute', item)} />
                  ))}
                  <motion.div
                    animate={{ scale: [1, 1.035, 1], opacity: [0.85, 1, 0.85] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-[48%] top-[49%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200/50 bg-cyan-300/10 backdrop-blur-sm"
                  >
                    <span className="text-[10px] font-semibold text-cyan-100">中关村AI北纬社区</span>
                  </motion.div>
                  {[
                    { pos: 'left-[20%] top-[20%]', color: 'bg-cyan-300', label: '算力池' },
                    { pos: 'left-[74%] top-[22%]', color: 'bg-emerald-300', label: '企业侧' },
                    { pos: 'left-[18%] top-[68%]', color: 'bg-sky-300', label: '数据域' },
                    { pos: 'left-[74%] top-[70%]', color: 'bg-violet-300', label: '服务层' },
                    { pos: 'left-[47%] top-[14%]', color: 'bg-amber-300', label: '调度层' },
                    { pos: 'left-[49%] top-[80%]', color: 'bg-teal-300', label: '接口层' },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      animate={{ opacity: [0.55, 1, 0.55], scale: [0.92, 1.08, 0.92] }}
                      transition={{ duration: 2.7, repeat: Infinity, delay: idx * 0.16, ease: 'easeInOut' }}
                      className={cn('absolute flex items-center gap-1.5', item.pos)}
                    >
                      <span className={cn('h-2.5 w-2.5 rounded-full shadow-[0_0_10px_rgba(125,211,252,0.45)]', item.color)} />
                      <span className="text-[9px] text-slate-200/90">{item.label}</span>
                    </motion.div>
                  ))}
                  <div className="absolute left-3 top-3 rounded-md border border-cyan-200/20 bg-slate-900/55 px-2 py-1 text-[9px] text-cyan-100">企业协同链路在线</div>
                  <div className="absolute right-3 bottom-3 rounded-md border border-emerald-200/20 bg-slate-900/55 px-2 py-1 text-[9px] text-emerald-100">任务调度延迟 32ms</div>
                </div>

                <div className="space-y-2.5 lg:col-span-4">
                  <div className="rounded-xl border border-white/12 bg-slate-900/35 px-3 py-2.5">
                    <p className="text-[10px] text-slate-300">企业与就业态势</p>
                    <div className="mt-1.5 flex items-end justify-between">
                      <p className="text-sm font-semibold text-slate-100">活跃企业 1,247</p>
                      <span className="text-[10px] text-emerald-200">新增 24</span>
                    </div>
                    <p className="mt-1 text-[10px] text-slate-300">岗位活跃指数 89.6 · 匹配效率 93%</p>
                  </div>
                  <div className="rounded-xl border border-white/12 bg-slate-900/35 px-3 py-2.5">
                    <p className="text-[10px] text-slate-300">实时趋势</p>
                    <div className="mt-2 flex h-10 items-end gap-1.5">
                      {[34, 46, 39, 58, 52, 63, 57].map((item, idx) => (
                        <motion.div
                          key={item}
                          animate={{ height: [item - 6, item, item - 3] }}
                          transition={{ duration: 2.6, repeat: Infinity, delay: idx * 0.14, ease: 'easeInOut' }}
                          className="w-2 rounded-sm bg-gradient-to-t from-blue-500/55 to-cyan-300/90"
                        />
                      ))}
                    </div>
                    <p className="mt-1.5 text-[10px] text-slate-300">模型调用峰值 16.8k/min</p>
                  </div>
                  <div className="rounded-xl border border-amber-200/25 bg-amber-200/10 px-3 py-2.5">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] text-amber-100">系统动态与告警</p>
                      <motion.span
                        animate={{ opacity: [0.45, 1, 0.45] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="h-1.5 w-1.5 rounded-full bg-amber-300"
                      />
                    </div>
                    <div className="mt-1.5 space-y-1 text-[10px] text-amber-50/95">
                      <p>10:24 API网关已完成弹性扩容</p>
                      <p>10:20 两个园区节点负载接近阈值</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {[
                  { label: '系统可用性', value: '99.97%' },
                  { label: '日调用总量', value: '92.6M' },
                  { label: '任务成功率', value: '98.4%' },
                  { label: '平均响应', value: '128ms' },
                  { label: '服务覆盖', value: '34 场景' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/12 bg-slate-900/35 px-2.5 py-2">
                    <p className="text-[9px] text-slate-300">{item.label}</p>
                    <p className="mt-1 text-[13px] font-semibold text-slate-100">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </Section>
);

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <SupportPlanSection />
      <OperationsCockpitPreview />
    </Layout>
  );
}
