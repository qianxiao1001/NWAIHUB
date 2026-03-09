import React, { useState } from 'react';
import { Layout } from '@/components/layout';
import { Section, SectionHeader, Button, Card, Badge } from '@/components/ui/common';
import { 
  Sparkles, Zap, Image, Video, MessageSquare, Code, ArrowRight, 
  Cpu, Layers, PlayCircle, CheckCircle2, Star, Box, Server,
  Search, Filter, ChevronDown, Brain, Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const BASE_URL = import.meta.env.BASE_URL;

// --- Hero Section: Model Matrix ---
const HeroSection = () => (
  <div className="relative bg-white border-b border-slate-200 py-5 overflow-hidden ui-reveal">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Mobile: Top text, Bottom card | Desktop: Left text, Right card */}
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:items-center lg:justify-between">
        <div className="lg:flex-1 lg:max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            MaaS 模型即服务
          </div>
          <h1 className="mobile-title-hero lg:text-2xl lg:md:text-3xl font-bold text-slate-900 tracking-tight mb-3">
            全场景一站式 <span className="text-blue-700">大模型服务平台</span>
          </h1>
          <p className="mobile-text-body lg:text-xs text-slate-600 mb-5 leading-relaxed lg:max-w-xl mobile-text-truncate-3">
            聚合智谱 GLM、通义千问等主流基座模型，覆盖通用语言、多模态理解与行业场景能力，支持 API 调用与企业级部署。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="sm" className="mobile-button lg:h-8 bg-blue-700 hover:bg-blue-800 text-white shadow-sm">
              申请接入
            </Button>
            <Button variant="secondary" size="sm" className="mobile-button lg:h-8 bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
              查看文档
            </Button>
          </div>
        </div>
        
        <div className="lg:flex-1 w-full lg:max-w-lg lg:max-w-xl mt-8 lg:mt-0">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">模型服务矩阵</p>
                <p className="text-xs text-slate-500 mt-0.5">统一接入 · 统一编排 · 统一治理</p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                服务可用性 99.9%
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: '多模型调度', desc: '统一调用编排引擎', dot: 'bg-indigo-500' },
                { title: '行业场景适配', desc: '客服 / 办公 / 设计', dot: 'bg-blue-500' },
                { title: '企业级部署', desc: '私有化与混合云支持', dot: 'bg-slate-500' },
                { title: '安全合规治理', desc: '权限与审计策略可控', dot: 'bg-cyan-500' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-100 bg-slate-50/50 px-3 py-2.5 hover:border-blue-100 transition-colors mobile-touch-feedback">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={cn('w-1.5 h-1.5 rounded-full', item.dot)} />
                    <p className="text-xs font-semibold text-slate-800">{item.title}</p>
                  </div>
                  <p className="text-[10px] text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['API 接入', '私有部署', '向量检索', '国产算力集群'].map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Model Catalog ---
const ModelCatalog = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState<'精选模型' | '开源模型' | '企业模型' | '海外模型'>('精选模型');

  const featuredModels = [
    {
      name: 'GLM-4.7',
      subtitle: 'Thinking / 推理增强',
      desc: '面向复杂业务推理与流程决策的旗舰模型。',
      status: '推荐上新',
      gradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    },
    {
      name: 'Qwen-VL',
      subtitle: 'Video / 多模态',
      desc: '覆盖图文理解与视频生成链路，适配多媒体业务。',
      status: '企业首选',
      gradient: 'from-violet-600 via-fuchsia-600 to-blue-500',
    },
    {
      name: 'DeepSeek-V3',
      subtitle: 'Image generation / 图像生成',
      desc: '支持创意图像生成与产业视觉内容生产。',
      status: '热门模型',
      gradient: 'from-emerald-600 via-cyan-600 to-blue-600',
    },
  ];

  const modelGroups = [
    {
      name: '深度思考',
      desc: '采用先思考、再回答的输出模式，模型能力显著增强',
      items: [
        { name: 'GLM-4.7', provider: '智谱', info: '强推理链路，适配策略分析与复杂决策。', tag: '推理增强', scope: ['精选模型', '企业模型'] },
        { name: 'DeepSeek-R1', provider: 'DeepSeek', info: '主打推理能力，适合数学与逻辑任务。', tag: '开源', scope: ['精选模型', '开源模型'] },
        { name: 'Qwen-Max', provider: '阿里云', info: '企业级高性能通用模型，复杂任务表现稳定。', tag: '企业可用', scope: ['精选模型', '企业模型'] },
        { name: 'Claude Sonnet 4.6', provider: 'Anthropic', info: '高质量文本理解与推理，适合知识工作流。', tag: '推荐模型', scope: ['精选模型', '海外模型'] },
        { name: 'GPT-5.4', provider: 'OpenAI', info: '旗舰能力面向高复杂度分析与智能编排。', tag: '热门模型', scope: ['精选模型', '海外模型', '企业模型'] },
      ],
    },
    {
      name: '文本生成',
      desc: '支持文本自然语言理解、信息抽取与多轮对话',
      items: [
        { name: 'GLM-4-Air', provider: '智谱', info: '低成本高可用，适合高并发文本场景。', tag: '低延迟', scope: ['精选模型', '企业模型'] },
        { name: 'Qwen-Plus', provider: '阿里云', info: '平衡性能与成本，适配政企业务系统。', tag: '企业可用', scope: ['精选模型', '企业模型'] },
        { name: 'Doubao-Pro', provider: '字节跳动', info: '企业应用常用模型，稳定支持在线服务。', tag: '推荐模型', scope: ['精选模型', '企业模型'] },
        { name: 'ERNIE 4.x', provider: '百度', info: '中文语义理解强，适用于问答与摘要。', tag: '企业可用', scope: ['精选模型', '企业模型'] },
        { name: 'Gemini 2.5 Flash', provider: 'Google', info: '快速响应型文本模型，适合实时交互。', tag: '低延迟', scope: ['精选模型', '海外模型'] },
      ],
    },
    {
      name: '视频生成',
      desc: '基于文字与图片输入，生成高质量视频内容',
      items: [
        { name: 'Wanx 视频生成', provider: '阿里云', info: '支持文案转视频和多镜头片段生成。', tag: '推荐模型', scope: ['精选模型'] },
        { name: 'Seedance', provider: '字节跳动', info: '面向营销与短视频场景的生成能力。', tag: '模型上新', scope: ['精选模型'] },
        { name: 'Kling', provider: '快手', info: '高一致性视频生成，适合创意内容制作。', tag: '热门模型', scope: ['精选模型'] },
        { name: 'Runway Gen 系列', provider: 'Runway', info: '海外视频模型入口位，覆盖创作全流程。', tag: '海外模型', scope: ['精选模型', '海外模型'] },
      ],
    },
    {
      name: '图片生成',
      desc: '基于文字与图片条件，生成高质量图像',
      items: [
        { name: 'Seedream', provider: '字节跳动', info: '高质感图像生成，支持商业视觉生产。', tag: '推荐模型', scope: ['精选模型'] },
        { name: 'Wanx 图像生成', provider: '阿里云', info: '覆盖海报、电商与品牌素材创作。', tag: '企业可用', scope: ['精选模型', '企业模型'] },
        { name: 'Stable Diffusion', provider: 'Stability AI', info: '主流开源图像模型，支持私有微调。', tag: '开源', scope: ['精选模型', '开源模型', '海外模型'] },
        { name: 'Midjourney 服务入口', provider: 'Midjourney', info: '高质量创意图像服务入口位。', tag: '热门模型', scope: ['精选模型', '海外模型'] },
        { name: 'Doubao 图像模型', provider: '字节跳动', info: '面向营销设计场景的图片生成能力。', tag: '模型上新', scope: ['精选模型'] },
      ],
    },
    {
      name: '语音模型',
      desc: '具备语音识别、合成与实时语音交互能力',
      items: [
        { name: 'ASR Pro', provider: '平台语音中台', info: '高准确语音识别，支持会议与客服场景。', tag: '企业可用', scope: ['精选模型', '企业模型'] },
        { name: 'TTS Studio', provider: '平台语音中台', info: '多音色语音合成，支持情感表达控制。', tag: '推荐模型', scope: ['精选模型'] },
        { name: 'Interpreter Live', provider: '平台语音中台', info: '同声传译能力，适配跨语种实时沟通。', tag: '模型上新', scope: ['精选模型'] },
        { name: 'Realtime Voice Chat', provider: '平台语音中台', info: '低时延双工交互，适合语音助手接入。', tag: '低延迟', scope: ['精选模型', '企业模型'] },
        { name: 'Voice Clone', provider: '平台语音中台', info: '声纹复刻与定制音色能力，支持品牌播报。', tag: '企业可用', scope: ['精选模型', '企业模型'] },
      ],
    },
    {
      name: '向量模型',
      desc: '基于 embedding 实现语义分析、检索与召回',
      items: [
        { name: 'Embedding-Universal', provider: '平台向量中台', info: '通用向量编码，支持多语种语义检索。', tag: '企业可用', scope: ['精选模型', '企业模型'] },
        { name: 'Embedding-Vision', provider: '平台向量中台', info: '图文联合向量表达，适配跨模态检索。', tag: '多模态', scope: ['精选模型'] },
        { name: 'RAG Vector Pro', provider: '平台向量中台', info: '检索增强向量模型，优化知识库问答召回。', tag: '推荐模型', scope: ['精选模型', '企业模型'] },
      ],
    },
    {
      name: '多模态',
      desc: '支持图文、音视频等多模态输入与联合理解',
      items: [
        { name: 'Qwen-VL', provider: '阿里云', info: '视觉理解与图文问答能力成熟，适配企业文档场景。', tag: '多模态', scope: ['精选模型', '企业模型'] },
        { name: 'Gemini Multimodal', provider: 'Google', info: '支持跨模态推理与内容理解。', tag: '海外模型', scope: ['精选模型', '海外模型'] },
        { name: 'GLM 多模态', provider: '智谱', info: '国产多模态能力，支持图文解析与智能问答。', tag: '推荐模型', scope: ['精选模型'] },
        { name: 'Claude Multimodal', provider: 'Anthropic', info: '面向企业工作流的多模态理解能力。', tag: '企业可用', scope: ['精选模型', '海外模型', '企业模型'] },
        { name: 'DeepSeek 多模态', provider: 'DeepSeek', info: '开源路线下的图文协同处理能力。', tag: '开源', scope: ['精选模型', '开源模型'] },
      ],
    },
    {
      name: '代码模型',
      desc: '面向研发全流程，支持代码生成、理解与重构',
      items: [
        { name: 'CodeGeeX', provider: '智谱', info: '多语言代码生成与补全，适配企业开发场景。', tag: '推荐模型', scope: ['精选模型'] },
        { name: 'Claude Code', provider: 'Anthropic', info: '代码审阅与重构能力，支持复杂工程任务。', tag: '海外模型', scope: ['精选模型', '海外模型'] },
        { name: 'GPT Code', provider: 'OpenAI', info: '编程问答、单测生成与代码解释能力完整。', tag: '热门模型', scope: ['精选模型', '海外模型'] },
        { name: 'Qwen Code', provider: '阿里云', info: '国产代码模型，支持企业研发提效。', tag: '企业可用', scope: ['精选模型', '企业模型'] },
        { name: 'DeepSeek Code', provider: 'DeepSeek', info: '开源代码模型，适配私有化研发环境。', tag: '开源', scope: ['精选模型', '开源模型'] },
      ],
    },
  ] as const;

  const searchedGroups = modelGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        const query = searchValue.trim().toLowerCase();
        if (!query) return item.scope.includes(activeTab);
        const matched = `${item.name} ${item.provider} ${item.info} ${item.tag}`.toLowerCase().includes(query);
        return matched && item.scope.includes(activeTab);
      }),
    }))
    .filter((group) => group.items.length > 0);

  const tagStyle = {
    推荐模型: 'bg-blue-50 text-blue-700 border-blue-200',
    推荐上新: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    热门模型: 'bg-rose-50 text-rose-700 border-rose-200',
    企业首选: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    企业可用: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    开源: 'bg-violet-50 text-violet-700 border-violet-200',
    海外模型: 'bg-slate-100 text-slate-700 border-slate-200',
    模型上新: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    多模态: 'bg-amber-50 text-amber-700 border-amber-200',
    推理增强: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    长上下文: 'bg-slate-100 text-slate-700 border-slate-200',
    低延迟: 'bg-teal-50 text-teal-700 border-teal-200',
  } as const;

  return (
    <Section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Search full width, tabs horizontal scroll | Desktop: Search + tabs inline */}
        <div className="flex flex-col gap-4 mb-5">
          {/* Search - Full width on mobile */}
          <div className="relative flex-1 lg:max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="搜索模型名称、厂商、能力、关键词…"
              className="w-full h-9 rounded-md border border-slate-300 bg-white pl-9 pr-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors placeholder:text-slate-400 mobile-button"
            />
          </div>
          
          {/* Action Buttons - Horizontal scroll on mobile */}
          <div className="flex items-center gap-2 mobile-scroll-x">
            <div className="flex items-center gap-1 bg-slate-100 rounded-md p-0.5 border border-slate-200 flex-shrink-0">
              {(['精选模型', '开源模型', '企业模型', '海外模型'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'px-3 h-7 rounded-[4px] text-xs font-medium transition-all mobile-touch-feedback',
                    activeTab === tab
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="h-4 w-px bg-slate-200 mx-1 flex-shrink-0" />
            <Button variant="secondary" className="h-8 px-3 text-xs border-slate-200 text-slate-600 hover:bg-slate-50 flex-shrink-0">模型对比</Button>
            <Button variant="secondary" className="h-8 px-3 text-xs border-slate-200 text-slate-600 hover:bg-slate-50 flex-shrink-0">接入指南</Button>
          </div>
        </div>

        {/* Featured Models - Horizontal scroll on mobile */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="mobile-title-section lg:text-lg font-semibold text-slate-900">推荐模型</h3>
            <Link to="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">查看全部</Link>
          </div>
          <div className="mobile-scroll-x">
            <div className="mobile-scroll-content">
              {featuredModels.map((item) => (
                <div key={item.name} className="group rounded-lg border border-slate-200 bg-white p-3 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer mobile-card w-[280px] mobile-touch-feedback">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br text-white shadow-sm", item.gradient)}>
                        <Brain className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{item.name}</h3>
                        <p className="text-xs text-slate-500">{item.subtitle}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[10px] py-0 h-5 bg-slate-50 text-slate-600 border-slate-200 font-normal">
                      {item.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mobile-text-truncate-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Model Categories - Mobile optimized */}
        <div className="space-y-4">
          {searchedGroups.map((group) => (
            <section key={group.name} className="rounded-lg border border-slate-200 bg-white overflow-hidden">
              <div className="px-3 py-2 bg-slate-50/50 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-800">{group.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{group.desc}</p>
              </div>
              <div className="divide-y divide-slate-100">
                {group.items.map((item) => (
                  <div key={item.name} className="ui-list-item group flex items-center justify-between px-3 py-3 transition-colors cursor-pointer hover:bg-blue-50/30 mobile-touch-feedback">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-8 h-8 rounded-md bg-white border border-slate-200 text-slate-500 flex items-center justify-center shrink-0 shadow-sm group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                        <Box className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">{item.name}</h4>
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200">{item.provider}</span>
                          <span className={cn('text-[10px] px-2 py-0.5 rounded border', tagStyle[item.tag])}>{item.tag}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{item.info}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 ml-2">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Section>
  );
};

// --- Enterprise Solutions ---
const EnterpriseSolutions = () => (
  <Section className="bg-slate-50 py-10 border-t border-slate-200 mobile-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="mobile-title-section lg:text-xl font-bold text-slate-900">企业级解决方案</h2>
        <p className="mobile-text-body lg:text-sm text-slate-500 mt-2">针对不同业务规模与安全需求，提供灵活的交付模式</p>
      </div>
      
      {/* Mobile: Single column | Desktop: 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "公有云 API",
            desc: "标准接口调用，按量计费，弹性扩容，适合快速验证与轻量级应用。",
            features: ["即开即用", "弹性伸缩", "按Token计费"],
            icon: Globe
          },
          {
            title: "私有化部署",
            desc: "模型部署至企业本地服务器，数据不出域，保障核心资产安全。",
            features: ["数据隐私", "定制微调", "本地算力"],
            icon: Server
          },
          {
            title: "一体机交付",
            desc: "软硬一体化交付方案，开箱即用，降低企业AI基础设施建设门槛。",
            features: ["软硬一体", "开箱即用", "运维托管"],
            icon: Box
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-slate-200 p-5 hover:border-blue-300 hover:shadow-sm transition-all duration-200 group mobile-touch-feedback">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-50 rounded-md flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <item.icon className="w-4 h-4" />
              </div>
              <h3 className="mobile-title-section lg:text-base font-bold text-slate-900">{item.title}</h3>
            </div>
            <p className="mobile-text-body lg:text-xs text-slate-500 leading-relaxed mb-4 min-h-[40px]">
              {item.desc}
            </p>
            <ul className="space-y-1.5">
              {item.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default function ModelsPage() {
  return (
    <Layout>
      <HeroSection />
      <ModelCatalog />
      <EnterpriseSolutions />
    </Layout>
  );
}
