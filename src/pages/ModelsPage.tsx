import React from 'react';
import { Layout } from '@/components/layout';
import { Button, Badge } from '@/components/ui/common';
import {
  Layers,
  Search,
  ChevronDown,
  Cpu,
  Boxes,
  Server,
  Calendar,
  ArrowDownToLine,
  Star,
  Building2,
  CheckCircle2,
  Globe,
  Box,
} from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;

const HERO_BANNER = `${BASE_URL}banners/baiduqianfan.png?v=20260318a`;

const SIDEBAR_CATEGORIES = [
  {
    title: '热门任务',
    items: ['文本生成', '文本生成图片', '文本生成视频', '视觉多模态理解', '语音合成', '统一多模态'],
  },
  {
    title: '多模态',
    items: ['视觉多模态理解', '文本生成图片', '图像描述', '视觉定位', '视觉问答', '视频问答', '图文检索'],
  },
  {
    title: '自然语言处理',
    items: ['文本生成', '文本分类', '分词', '命名实体识别', '翻译', '文本摘要', '句子相似度', '预训练'],
  },
];

const MODEL_LIST_ITEMS = [
  { name: 'GLM-5', tag: '文本生成', provider: '智谱 AI', date: '2026-03-13', downloads: 753868, likes: 245, size: '137.1k', params: '753.86B' },
  { name: 'MiniMax/MiniMax-M2.5', tag: '文本生成', provider: 'MiniMax', date: '2026-03-11', downloads: 228708, likes: 143, size: '184.5k', params: '228.70B' },
  { name: 'NVIDIA-Nemotron-3-Super-120B-A12B-FP8', tag: '文本生成', provider: 'NVIDIA', date: '2026-03-17', downloads: 123618, likes: 6, size: '2.5k', params: '123.61B', badge: 'NEW' },
  { name: 'nanbeige/Nanbeige4.1-3B', tag: '文本生成', provider: '南北湖实验室', date: '2026-02-26', downloads: 3938, likes: 35, size: '38.6k', params: '3.93B' },
  { name: 'LocoreMind/LocoOperator-4B', tag: '文本生成', provider: 'LocoreMind', date: '2026-02-25', downloads: 4028, likes: 11, size: '4.0k', params: '4.02B', badge: 'NEW' },
  { name: 'TeichAI/Qwen3-14B-Claude-4.5-Opus-High-Reasoning-Distill', tag: '文本生成', provider: 'TeichAI', date: '2026-02-24', downloads: 14778, likes: 17, size: '4.0k', params: '14.77B' },
  { name: 'inclusionAI/Ling-2.5-1T', tag: '文本生成', provider: 'InclusionAI', date: '2026-02-16', downloads: 1012238, likes: 12, size: '3.3k', params: '1012.23B' },
  { name: 'jd-opensource/JoyAI-LLM-Flash', tag: '文本生成', provider: '京东开源', date: '2026-03-11', downloads: 49298, likes: 6, size: '837', params: '49.29B', badge: 'NEW' },
  { name: 'inclusionAI/Ring-2.5-1T', tag: '文本生成', provider: 'InclusionAI', date: '2026-02-15', downloads: 1012475, likes: 13, size: '1.5k', params: '1012.47B' },
  { name: 'GLM-4.7-Flash', tag: '文本生成', provider: '智谱 AI', date: '2026-01-29', downloads: 31229, likes: 123, size: '613.0k', params: '31.22B' },
  { name: 'meituan-longcat/LongCat-Flash-Lite', tag: '文本生成', provider: '美团 - 龙猫', date: '2026-02-07', downloads: 69075, likes: 11, size: '1.4k', params: '69.07B' },
  { name: 'ZhipuAI/GLM-4.7', tag: '文本生成', provider: '智谱 AI', date: '2026-01-29', downloads: 358348, likes: 186, size: '163.7k', params: '358.34B' },
];

const HeroSection = () => (
  <section className="mb-6 rounded-xl border border-slate-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 relative overflow-hidden">
    <div className="w-full lg:w-2/3 relative z-10">
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-4">
        <Layers className="w-3.5 h-3.5" />
        MaaS 模型即服务
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">全场景一站式 <span className="text-blue-700">大模型服务平台</span></h1>
      <p className="text-slate-600 text-sm mb-6 max-w-2xl">
        聚合智谱 GLM、通义千问等主流基座模型，覆盖通用语言、多模态理解与行业场景能力，支持 API 调用与企业级部署。
      </p>
      <div className="flex flex-wrap gap-3">
        <Button className="h-9 px-5">申请接入</Button>
        <Button variant="secondary" className="h-9 px-5">查看文档</Button>
      </div>
    </div>
    <div className="hidden lg:block absolute right-0 top-0 h-full w-[34%] opacity-85">
      <img src={HERO_BANNER} alt="模型广场装饰图" className="h-full w-full object-cover mix-blend-multiply" />
    </div>
  </section>
);

const Toolbar = () => (
  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
    <div className="relative w-full sm:w-96">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <input
        className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 text-sm"
        placeholder="输入关键词搜索您想要的模型..."
        type="text"
      />
    </div>
    <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
      {['支持体验', '支持训练', '支持部署', '综合排序'].map((label) => (
        <button key={label} className="inline-flex items-center gap-1.5 pl-3 pr-2.5 py-2 text-sm border border-slate-300 rounded-md bg-white text-slate-700 shadow-sm hover:bg-slate-50">
          {label}
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      ))}
    </div>
  </div>
);

const ModelCard = ({ item }: { item: (typeof MODEL_LIST_ITEMS)[number] }) => {
  const initial = item.name.replace(/[^A-Za-z0-9\u4e00-\u9fa5]/g, '').slice(0, 2).toUpperCase();
  const downloads = item.downloads >= 1000 ? `${(item.downloads / 1000).toFixed(1)}k` : `${item.downloads}`;

  return (
    <article className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow flex flex-col h-full cursor-pointer group">
      <div className="flex items-start mb-3">
        <div className="h-10 w-10 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">
          {initial || 'AI'}
        </div>
        <div className="ml-3 flex-grow min-w-0">
          <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">{item.name}</h3>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600">{item.tag}</span>
            {item.badge && <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold text-red-600 bg-red-100 uppercase">{item.badge}</span>}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4 text-xs text-slate-500">
        <span className="flex items-center gap-1"><Cpu className="w-3.5 h-3.5" />{item.params}</span>
        <span className="flex items-center gap-1"><Server className="w-3.5 h-3.5" />PyTorch</span>
        <span className="flex items-center gap-1"><Boxes className="w-3.5 h-3.5" />Safetensors</span>
      </div>

      <div className="mt-auto pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
        <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5" />{item.provider}</span>
        <div className="flex space-x-3">
          <span className="flex items-center gap-1"><ArrowDownToLine className="w-3.5 h-3.5" />{downloads}</span>
          <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-yellow-500" />{item.likes}</span>
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{item.date.slice(5)}</span>
        </div>
      </div>
    </article>
  );
};

const ModelCatalog = () => (
  <section className="py-6 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="w-full lg:w-[260px] rounded-lg border border-slate-200 bg-white p-4 shrink-0">
          <div className="space-y-6">
            {SIDEBAR_CATEGORIES.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">{category.title}</h3>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item} className="block py-1.5 text-sm text-slate-600 hover:text-blue-700 transition-colors cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        <div className="flex-grow w-full">
          <HeroSection />
          <Toolbar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {MODEL_LIST_ITEMS.map((item) => (
              <ModelCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EnterpriseSolutions = () => (
  <section className="bg-slate-50 py-10 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-slate-900">交付方案中心</h2>
        <p className="text-sm text-slate-500 mt-2">针对不同业务规模与安全需求，提供灵活的交付模式</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: '公有云 API',
            desc: '标准接口调用，按量计费，弹性扩容，适合快速验证与轻量级应用。',
            features: ['即开即用', '弹性伸缩', '按Token计费'],
            icon: Globe,
          },
          {
            title: '私有化部署',
            desc: '模型部署至企业本地服务器，数据不出域，保障核心资产安全。',
            features: ['数据隐私', '定制微调', '本地算力'],
            icon: Server,
          },
          {
            title: '一体机交付',
            desc: '软硬一体化交付方案，开箱即用，降低企业AI基础设施建设门槛。',
            features: ['软硬一体', '开箱即用', '运维托管'],
            icon: Box,
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg border border-slate-200 p-5 hover:border-blue-300 hover:shadow-sm transition-all duration-200 group">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-50 rounded-md flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <item.icon className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-4 min-h-[40px]">{item.desc}</p>
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
  </section>
);

export default function ModelsPage() {
  return (
    <Layout>
      <ModelCatalog />
      <EnterpriseSolutions />
    </Layout>
  );
}
