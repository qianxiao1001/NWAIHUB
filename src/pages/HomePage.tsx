import React, { useEffect, useState } from 'react';
import { Layout } from '@/components/layout';
import { Section, Button, Badge } from '@/components/ui/common';
import {
  ArrowRight,
  Cpu,
  Database,
  Brain,
  Users,
  Rocket,
  Shield,
  Layers,
  Calendar,
  Building2,
  Network,
  BookOpenCheck,
  GraduationCap,
  Sparkles,
  Bot,
  Boxes
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const HERO_FEATURES = [
  { label: '官方认证平台', icon: Shield },
  { label: '政企场景对接', icon: Building2 },
  { label: '专家持续服务', icon: Users },
];

const HERO_CAPABILITIES = [
  { title: '算力资源', metric: 'GPU 节点 5,280', sub: '统一调度', icon: Cpu },
  { title: '模型服务', metric: '模型 API 126', sub: '稳定可用', icon: Brain },
  { title: '数据资产', metric: '数据集 8,960', sub: '安全合规', icon: Database },
  { title: '智能体应用', metric: '接入量 48,612', sub: '企业协同', icon: Bot },
];

const MODEL_FEATURED = [
  { name: '北纬通用语言模型', tag: '文本生成', desc: '面向政务问答、知识检索与办公辅助的高可用模型。', call: '日调用 320万+' },
  { name: '工业推理分析模型', tag: '推理模型', desc: '支持运维诊断、设备预测和规则联动的高稳定推理能力。', call: '日调用 190万+' },
  { name: '多模态业务识别模型', tag: '多模态', desc: '支持图文理解、票据识别与企业知识归档。', call: '日调用 86万+' },
];

const MODEL_CATEGORIES = ['文本生成', '推理模型', '多模态', '图像生成', '代码模型'];

const COMPUTE_ITEMS = [
  { model: 'A800 标准型', gpu: '80GB', cpu: '64C / 256GB', price: '¥22.0 / h', tag: '主流训练' },
  { model: 'H20 高性能型', gpu: '96GB', cpu: '96C / 384GB', price: '¥38.0 / h', tag: '复杂推理' },
  { model: 'L40S 图形型', gpu: '48GB', cpu: '48C / 192GB', price: '¥16.5 / h', tag: '视觉任务' },
  { model: 'A10 成本型', gpu: '24GB', cpu: '32C / 128GB', price: '¥8.8 / h', tag: '轻量部署' },
];

const DATASET_ITEMS = [
  { name: '政务知识结构化数据集', scale: '1.2B 条', type: '知识图谱', updated: '3天前更新' },
  { name: '园区产业运行时序集', scale: '820M 条', type: '时序分析', updated: '1天前更新' },
  { name: '企业文档语义对齐数据集', scale: '460M 条', type: '文本处理', updated: '7天前更新' },
];

const AGENT_ITEMS = [
  { title: '政策申报助手', scene: '政策服务', desc: '自动匹配可申报政策并生成材料建议。', metric: '调用量 12.8万', score: '4.9' },
  { title: '企业知识问答助手', scene: '办公协同', desc: '接入内部知识库，提供可信问答与追溯。', metric: '调用量 25.6万', score: '4.8' },
  { title: '算力调度助手', scene: '运维管理', desc: '智能分配训练任务并优化资源利用率。', metric: '调用量 8.4万', score: '4.7' },
  { title: '舆情研判助手', scene: '数据分析', desc: '多源信息聚合分析，辅助快速风险研判。', metric: '调用量 9.2万', score: '4.8' },
];

const POLICY_ITEMS = [
  '2026年度产业专项申报指南（精选）',
  '高质量模型应用示范项目扶持政策',
  '企业智能化升级专项补贴说明',
];

const TRAINING_ITEMS = [
  '企业AI落地实战营（第5期）',
  '智能体构建与编排认证课程',
  '模型接入与安全治理训练课程',
];

const COMMUNITY_ACTIVITIES = [
  { title: 'AI 产业路演专场', time: '03-22 14:00', mode: '线下活动' },
  { title: '企业智能化闭门研讨会', time: '03-28 09:30', mode: '闭门沙龙' },
  { title: '开发者实战训练营', time: '04-06 10:00', mode: '培训工作坊' },
];

const COMMUNITY_GROUPS = ['产业应用群', '开发者群', '政策对接群', '企业服务群'];

const COCKPIT_STATS = [
  { label: '活跃企业', value: 502, unit: '家' },
  { label: '在线智能体', value: 48612, unit: '' },
  { label: '模型API调用', value: 294, unit: '万/日' },
  { label: '数据吞吐', value: 126, unit: 'TB/h' },
];

const tokenPoints = [18, 14, 10, 8, 7, 9, 15, 28, 46, 72, 88, 94, 76, 82, 96, 101, 93, 86, 79, 68, 61, 55, 41, 27];

const useCountUp = (target: number, duration = 1200) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const startAt = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startAt) / duration, 1);
      setValue(Math.round(target * progress));
      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };
    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [target, duration]);

  return value;
};

const formatKpiValue = (n: number) => n.toLocaleString('zh-CN');

const ModuleHeader = ({ label, title, subtitle }: { label: string; title: string; subtitle: string }) => (
  <div className="mb-4 md:mb-5">
    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-blue-100 bg-blue-50 text-[11px] font-semibold text-blue-700">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
      {label}
    </div>
    <h2 className="mt-2 text-[22px] leading-[30px] md:text-[26px] md:leading-[34px] font-bold tracking-tight text-slate-900">{title}</h2>
    <p className="mt-2 text-[14px] leading-6 text-slate-500 max-w-3xl">{subtitle}</p>
  </div>
);

const Hero = () => (
  <div className="relative overflow-hidden border-b border-slate-200 ui-reveal">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_-10%,rgba(59,130,246,0.08),transparent_42%),radial-gradient(circle_at_90%_4%,rgba(30,64,175,0.04),transparent_36%)]" />
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-7 md:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-9 items-center min-h-[480px] lg:min-h-[560px]">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-100 text-blue-700 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            中关村AI北纬社区 · OPC技术服务平台
          </div>
          <h1 className="mt-4 text-[31px] leading-[1.16] md:text-[42px] md:leading-[1.14] font-bold tracking-tight text-slate-900">
            OPC技术服务平台
          </h1>
          <p className="mt-4 text-[15px] leading-7 text-slate-600 max-w-xl">
            面向政府与企业打造统一AI服务门户，整合算力供给、模型服务、数据资产与智能体应用，
            提供从接入、部署到运营的全周期能力支撑。
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button className="mobile-button-large lg:h-10 lg:px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm group">
              立即咨询 / 申请接入
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <Link to="/models" className="w-full sm:w-auto">
              <Button variant="secondary" className="mobile-button-large lg:h-10 lg:px-6 bg-white border-slate-300 text-slate-700 hover:bg-slate-50 w-full group">
                浏览服务 / 查看能力
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-slate-500">
            {HERO_FEATURES.map((item) => (
              <div key={item.label} className="inline-flex items-center gap-1.5">
                <item.icon className="w-3.5 h-3.5 text-blue-600" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-slate-200 bg-white/95 shadow-sm p-4 md:p-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <div className="text-xs text-slate-500">平台能力总览面板</div>
                <div className="text-sm font-semibold text-slate-800 mt-0.5">Platform Capability Overview</div>
              </div>
              <Badge variant="blue" className="text-[10px]">实时更新</Badge>
            </div>
            <div className="relative mt-4 rounded-lg border border-slate-100 bg-slate-50 p-3 md:p-4 overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
              <div className="absolute top-[50%] left-[20%] right-[20%] h-px bg-blue-100 home-scan-line" />
              <div className="absolute left-1/2 top-[18%] bottom-[18%] w-px bg-blue-100 -translate-x-1/2" />
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-3 items-center">
                {HERO_CAPABILITIES.slice(0, 2).map((card) => (
                  <div key={card.title} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 shadow-sm ui-list-item">
                    <div className="inline-flex items-center gap-1.5 text-blue-600 text-[11px]">
                      <card.icon className="w-3.5 h-3.5" />
                      {card.title}
                    </div>
                    <div className="mt-1 text-[13px] font-bold text-slate-800">{card.metric}</div>
                    <div className="text-[11px] text-slate-500">{card.sub}</div>
                  </div>
                ))}
                <div className="hidden md:flex col-start-2 row-span-2 items-center justify-center">
                  <div className="w-[138px] h-[138px] rounded-full border border-blue-200 bg-white shadow-sm flex items-center justify-center home-pulse-node">
                    <div className="text-center">
                      <div className="mx-auto w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                        <Network className="w-5 h-5" />
                      </div>
                      <div className="mt-2 text-sm font-bold text-slate-800">统一能力中枢</div>
                      <div className="text-[10px] text-slate-500">OPC Hub Core</div>
                    </div>
                  </div>
                </div>
                {HERO_CAPABILITIES.slice(2).map((card) => (
                  <div key={card.title} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 shadow-sm ui-list-item">
                    <div className="inline-flex items-center gap-1.5 text-blue-600 text-[11px]">
                      <card.icon className="w-3.5 h-3.5" />
                      {card.title}
                    </div>
                    <div className="mt-1 text-[13px] font-bold text-slate-800">{card.metric}</div>
                    <div className="text-[11px] text-slate-500">{card.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const OperationsCockpitPreview = () => {
  const navigate = useNavigate();
  const roll0 = useCountUp(COCKPIT_STATS[0].value);
  const roll1 = useCountUp(COCKPIT_STATS[1].value);
  const roll2 = useCountUp(COCKPIT_STATS[2].value);
  const roll3 = useCountUp(COCKPIT_STATS[3].value);
  const rollingValues = [roll0, roll1, roll2, roll3];

  return (
    <Section className="bg-slate-50 border-t border-slate-200/60 py-6 md:py-8 ui-reveal">
      <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
        <ModuleHeader
          label="首页亮点模块"
          title="园区 AI 运营总控中心"
          subtitle="以首页预览版驾驶舱方式呈现核心运行指标与趋势，让管理者快速掌握算力、模型、数据与智能体运营状态。"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7">
          <div className="lg:col-span-5">
            <div className="space-y-2.5">
              {[
                { title: '实时算力监控', desc: '聚焦集群负载、队列状态与任务效率', icon: Cpu },
                { title: '模型调用态势', desc: '追踪API调用规模与热点模型变化', icon: Brain },
                { title: '数据流转治理', desc: '统一管理多源数据并保障合规流转', icon: Database },
                { title: '智能体运行健康', desc: '监测智能体活跃度与服务质量', icon: Bot },
              ].map((item) => (
                <div key={item.title} className="ui-list-item rounded-lg border border-slate-200 bg-white px-3.5 py-3 hover:border-blue-200">
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-slate-800">{item.title}</div>
                      <div className="text-[12px] text-slate-500 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Button
                className="mobile-button bg-blue-600 hover:bg-blue-700 text-white group"
                onClick={() => navigate('/dashboard')}
              >
                查看总控大屏
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button variant="secondary" className="mobile-button bg-white border-slate-300 text-slate-700 group">
                预约演示
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 md:p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.09]" />
              <div className="relative z-10 space-y-3">
                <div className="rounded-lg border border-slate-200 bg-white p-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">首页预览版驾驶舱</div>
                    <div className="text-sm font-semibold text-slate-800">中关村AI北纬社区 · 统一运营面板</div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-emerald-600 text-[11px] font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 home-pulse-node" />
                    系统在线
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 ui-reveal-group is-visible">
                  {COCKPIT_STATS.map((item, idx) => (
                    <div key={item.label} className="ui-reveal-item rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                      <div className="text-[10px] text-slate-500">{item.label}</div>
                      <div className="mt-1 text-[20px] font-bold text-slate-800 tracking-tight">{formatKpiValue(rollingValues[idx])}</div>
                      <div className="text-[10px] text-blue-600">{item.unit || '实时更新'}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                    <span className="font-semibold text-slate-700">过去24小时Token消耗量趋势</span>
                    <span>24H总消耗：1274万 Tokens</span>
                  </div>
                  <div className="h-[148px]">
                    <svg className="w-full h-full" viewBox="0 0 288 120" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="tokenGradientHero" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.04" />
                        </linearGradient>
                      </defs>
                      {[0, 25, 50, 75, 100].map((y) => (
                        <line key={y} x1="0" y1={120 - y * 1.1} x2="288" y2={120 - y * 1.1} stroke="#e2e8f0" strokeWidth="0.5" />
                      ))}
                      <path
                        d="M 0,108 L 12,103 L 24,107 L 36,109 L 48,110 L 60,108 L 72,102 L 84,95 L 96,82 L 108,66 L 120,50 L 132,44 L 144,62 L 156,56 L 168,42 L 180,37 L 192,43 L 204,50 L 216,57 L 228,64 L 240,71 L 252,77 L 264,89 L 276,103 L 288,108 L 288,120 L 0,120 Z"
                        fill="url(#tokenGradientHero)"
                      />
                      <path
                        d="M 0,108 L 12,103 L 24,107 L 36,109 L 48,110 L 60,108 L 72,102 L 84,95 L 96,82 L 108,66 L 120,50 L 132,44 L 144,62 L 156,56 L 168,42 L 180,37 L 192,43 L 204,50 L 216,57 L 228,64 L 240,71 L 252,77 L 264,89 L 276,103 L 288,108"
                        stroke="#2563eb"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {tokenPoints.map((point, index) => (
                        <circle key={index} cx={index * 12} cy={120 - point * 0.83} r="1.7" fill="#2563eb" />
                      ))}
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

const ModelSection = () => (
  <Section className="bg-white border-t border-slate-200/60 py-6 md:py-8 ui-reveal">
    <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
      <ModuleHeader
        label="模型广场推荐"
        title="精选模型能力与分类入口"
        subtitle="聚焦高频可落地模型，提供按场景快速进入模型目录的入口。"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 ui-reveal-group is-visible">
        {MODEL_FEATURED.map((item) => (
          <div key={item.name} className="ui-reveal-item ui-list-item rounded-lg border border-slate-200 bg-white p-4">
            <Badge variant="blue">{item.tag}</Badge>
            <div className="mt-2 text-[15px] font-semibold text-slate-800">{item.name}</div>
            <p className="mt-1.5 text-[13px] leading-6 text-slate-500">{item.desc}</p>
            <div className="mt-3 text-[12px] text-blue-600 font-medium">{item.call}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {MODEL_CATEGORIES.map((category) => (
          <Badge key={category} variant="gray" interactive className="text-[11px] px-2.5 py-1 hover:bg-blue-50 hover:text-blue-700">
            {category}
          </Badge>
        ))}
      </div>
    </div>
  </Section>
);

const ComputeSection = () => (
  <Section className="bg-slate-50 border-t border-slate-200/60 py-6 md:py-8 ui-reveal">
    <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
      <ModuleHeader
        label="算力资源精选"
        title="精选规格横向对比"
        subtitle="首页展示常用规格，快速完成型号、配置、价格的直观对比。"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3.5">
        {COMPUTE_ITEMS.map((item) => (
          <div key={item.model} className="rounded-lg border border-slate-200 bg-white p-4 ui-list-item">
            <div className="flex items-center justify-between">
              <div className="text-[15px] font-semibold text-slate-800">{item.model}</div>
              <Badge variant="outline">{item.tag}</Badge>
            </div>
            <div className="mt-3 space-y-1.5 text-[12px] text-slate-600">
              <div>显存：{item.gpu}</div>
              <div>CPU/内存：{item.cpu}</div>
            </div>
            <div className="mt-3 text-[16px] font-bold text-blue-700">{item.price}</div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/compute" className="text-sm text-blue-700 font-medium inline-flex items-center group">
          查看全部算力资源
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  </Section>
);

const DatasetSection = () => (
  <Section className="bg-white border-t border-slate-200/60 py-6 md:py-8 ui-reveal">
    <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
      <ModuleHeader
        label="数据资源精选"
        title="代表性数据集目录"
        subtitle="保留市场入口的同时，首页优先展示可快速落地的数据资产。"
      />
      <div className="flex flex-wrap gap-2 mb-4">
        {['政务数据', '产业分析', '知识图谱', '多模态数据', '合规语料'].map((tag) => (
          <Badge key={tag} variant="gray" interactive className="hover:bg-blue-50 hover:text-blue-700">{tag}</Badge>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {DATASET_ITEMS.map((item) => (
          <div key={item.name} className="rounded-lg border border-slate-200 bg-white p-4 ui-list-item">
            <div className="text-[15px] font-semibold text-slate-800">{item.name}</div>
            <div className="mt-3 space-y-1.5 text-[12px] text-slate-600">
              <div>规模：{item.scale}</div>
              <div>类型：{item.type}</div>
              <div className="text-slate-500">{item.updated}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const AgentSection = () => (
  <Section className="bg-slate-50 border-t border-slate-200/60 py-6 md:py-8 ui-reveal">
    <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
      <ModuleHeader
        label="智能体市场精选"
        title="场景化智能体快速接入"
        subtitle="聚焦企业常见业务场景，精选可直接试用的智能体服务。"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {AGENT_ITEMS.map((item) => (
          <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-4 ui-list-item">
            <div className="flex items-center justify-between">
              <div className="text-[14px] font-semibold text-slate-800">{item.title}</div>
              <Badge variant="blue">{item.scene}</Badge>
            </div>
            <p className="mt-2 text-[12px] text-slate-500 leading-6">{item.desc}</p>
            <div className="mt-3 flex items-center justify-between text-[11px]">
              <span className="text-blue-700 font-medium">{item.metric}</span>
              <span className="text-amber-600">评分 {item.score}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/apps" className="text-sm text-blue-700 font-medium inline-flex items-center group">
          查看更多智能体
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  </Section>
);

const PolicyTrainingSection = () => (
  <Section className="bg-white border-t border-slate-200/60 py-6 md:py-8 ui-reveal">
    <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
      <ModuleHeader
        label="政策与培训入口"
        title="申报支持、课程报名、认证服务"
        subtitle="政策与培训双栏编排，帮助企业快速获取扶持与能力建设路径。"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-slate-800 font-semibold">
              <BookOpenCheck className="w-4 h-4 text-blue-600" />
              政策中心
            </div>
            <Link to="/policy" className="text-xs text-blue-700">查看全部</Link>
          </div>
          <div className="mt-3 space-y-2.5">
            {POLICY_ITEMS.map((item) => (
              <div key={item} className="ui-list-item rounded-md border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-slate-800 font-semibold">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              培训认证
            </div>
            <Link to="/training" className="text-xs text-blue-700">查看全部</Link>
          </div>
          <div className="mt-3 space-y-2.5">
            {TRAINING_ITEMS.map((item) => (
              <div key={item} className="ui-list-item rounded-md border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const CommunitySection = () => (
  <Section className="bg-slate-50 border-t border-slate-200/60 py-6 md:py-8 ui-reveal">
    <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
      <ModuleHeader
        label="活动社群"
        title="近期活动与社群矩阵"
        subtitle="展示近期活动安排与社群入口，构建园区生态协同连接。"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-3">
          {COMMUNITY_ACTIVITIES.map((activity) => (
            <div key={activity.title} className="rounded-lg border border-slate-200 bg-white p-3.5 ui-list-item">
              <Badge variant="outline">{activity.mode}</Badge>
              <div className="mt-2 text-[14px] font-semibold text-slate-800">{activity.title}</div>
              <div className="mt-1 text-[12px] text-slate-500">{activity.time}</div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <div className="inline-flex items-center gap-2 text-slate-800 font-semibold">
            <Sparkles className="w-4 h-4 text-blue-600" />
            社群矩阵
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {COMMUNITY_GROUPS.map((group) => (
              <Badge key={group} variant="gray" interactive className="hover:bg-blue-50 hover:text-blue-700">{group}</Badge>
            ))}
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <Button className="mobile-button bg-blue-600 hover:bg-blue-700 text-white">加入社群</Button>
            <Button variant="secondary" className="mobile-button bg-white border-slate-300 text-slate-700">查看活动日历</Button>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const PlatformSupportSection = () => (
  <Section className="bg-white border-t border-slate-200/60 py-6 md:py-8 ui-reveal">
    <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50/70 to-white p-4 md:p-5 shadow-sm">
      <ModuleHeader
        label="服务保障"
        title="OPC 算力配套支持计划"
        subtitle="通过算力优先保障、模型接入支持、专家陪跑与政策协同，帮助项目快速落地。"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {[
          { title: '算力优先保障', icon: Layers, desc: '关键任务优先调度，保证高峰期稳定运行。' },
          { title: '模型适配支持', icon: Brain, desc: '提供接入评测、调优建议与场景化落地支持。' },
          { title: '专家运营陪跑', icon: Users, desc: '技术与运营双顾问跟进业务阶段目标。' },
          { title: '申报协同服务', icon: Calendar, desc: '政策解读、申报准备与活动对接一体推进。' },
        ].map((item) => (
          <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-4 ui-list-item">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
              <item.icon className="w-4 h-4" />
            </div>
            <div className="mt-3 text-[14px] font-semibold text-slate-800">{item.title}</div>
            <p className="mt-1.5 text-[12px] text-slate-500 leading-6">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Button className="mobile-button bg-blue-600 hover:bg-blue-700 text-white group">
          申请支持计划
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Button>
      </div>
    </div>
  </Section>
);

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <OperationsCockpitPreview />
      <ModelSection />
      <ComputeSection />
      <DatasetSection />
      <AgentSection />
      <PolicyTrainingSection />
      <CommunitySection />
      <PlatformSupportSection />
    </Layout>
  );
}
