import React, { useState } from 'react';
import { Layout } from '@/components/layout';
import { Section, SectionHeader, Button, Card, Badge } from '@/components/ui/common';
import { 
  Sparkles, Zap, Image, Video, MessageSquare, Code, ArrowRight, 
  Cpu, Layers, PlayCircle, CheckCircle2, Star, Box, Boxes, Calendar, Server,
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

const SIDEBAR_CATEGORIES = [
  {
    title: '热门任务',
    items: ['文本生成', '文本生成图片', '文本生成视频', '视觉多模态理解', '语音合成', '统一多模态']
  },
  {
    title: '多模态',
    items: ['视觉多模态理解', '文本生成图片', '图像描述', '视觉定位', '视觉问答', '视频问答', '图文检索']
  },
  {
    title: '自然语言处理',
    items: ['文本生成', '文本分类', '分词', '命名实体识别', '翻译', '文本摘要', '句子相似度', '预训练']
  }
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
  { name: 'Youtu-LLM-2B', tag: '文本生成', provider: '腾讯优图实验室', date: '2026-02-24', downloads: 1968, likes: 25, size: '3.2k', params: '1.96B' },
  { name: 'deepseek-ai/DeepSeek-V3.2', tag: '文本生成', provider: 'DeepSeek', date: '2025-12-01', downloads: 695405, likes: 377, size: '240.3k', params: '695.40B' },
  { name: '千问 3-8B', tag: '文本生成', provider: '通义千问', date: '2025-07-27', downloads: 8195, likes: 259, size: '5.5m', params: '8.19B' },
  { name: '千问 3-32B', tag: '文本生成', provider: '通义千问', date: '2025-07-27', downloads: 32765, likes: 301, size: '3.4m', params: '32.76B' },
  { name: '千问 3-Coder-Next', tag: '文本生成', provider: '通义千问', date: '2026-02-04', downloads: 79678, likes: 67, size: '35.5k', params: '79.67B' },
  { name: '千问 2.5-7B-Instruct', tag: '文本生成', provider: '通义千问', date: '2025-03-07', downloads: 7625, likes: 431, size: '6.0m', params: '7.62B' },
  { name: '千问 3-235B-A22B-Instruct-2507', tag: '文本生成', provider: '通义千问', date: '2025-09-17', downloads: 235095, likes: 222, size: '280.3k', params: '235.09B' },
  { name: '千问 3-0.6B', tag: '文本生成', provider: '通义千问', date: '2025-07-27', downloads: 751633, likes: 198, size: '4.2m', params: '751.63M' },
  { name: '千问 3-4B', tag: '文本生成', provider: '通义千问', date: '2025-07-27', downloads: 4025, likes: 115, size: '2.9m', params: '4.02B' },
  { name: 'Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distill', tag: '文本生成', provider: 'Jackrong', date: '2026-03-16', downloads: 26905, likes: 10, size: '5.1k', params: '26.90B', badge: 'NEW' },
  { name: '千问 3-Coder-480B-A35B-Instruct', tag: '文本生成', provider: '通义千问', date: '2025-08-22', downloads: 480155, likes: 117, size: '127.1k', params: '480.15B' },
  { name: '千问 3-30B-A3B-Instruct-2507', tag: '文本生成', provider: '通义千问', date: '2025-09-17', downloads: 30535, likes: 117, size: '1.6m', params: '30.53B' },
];

// --- Model Catalog ---
const ModelCatalog = () => {
  return (
    <Section className="bg-slate-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
          <div className="flex flex-col md:flex-row min-h-[600px]">
            {/* Sidebar */}
            <div className="w-full md:w-[240px] lg:w-[260px] border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50/50 p-4 shrink-0">
              <div className="space-y-6">
                {SIDEBAR_CATEGORIES.map((category) => (
                  <div key={category.title}>
                    <div className="text-[13px] font-bold text-slate-900 mb-2.5 px-2">{category.title}</div>
                    <div className="space-y-1">
                      {category.items.map((item) => (
                        <div
                          key={item}
                          className="px-2 py-1.5 rounded-md text-[13px] text-slate-600 hover:text-blue-700 hover:bg-blue-50 cursor-pointer transition-colors"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 p-4 md:p-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
                <div className="relative w-full sm:w-[320px]">
                  <input
                    type="text"
                    placeholder="输入关键词搜索您想要的模型..."
                    className="w-full h-10 pl-10 pr-3 rounded-lg border border-slate-200 bg-slate-50 text-[13px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
                <div className="flex items-center gap-4 text-[12px] text-slate-500">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-slate-700">
                    支持体验
                    <ChevronDown className="w-3 h-3" />
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-slate-700">
                    支持训练
                    <ChevronDown className="w-3 h-3" />
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-slate-700">
                    支持部署
                    <ChevronDown className="w-3 h-3" />
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-slate-700">
                    综合排序
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {MODEL_LIST_ITEMS.map((item) => (
                  <div key={item.name} className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-200 cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                          {item.name.substring(0, 2)}
                        </div>
                        <div>
                          <div className="text-[14px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{item.name}</div>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <Badge variant="gray" className="text-[10px] h-4 px-1.5">{item.tag}</Badge>
                            {item.badge && <Badge variant="blue" className="text-[10px] h-4 px-1.5">{item.badge}</Badge>}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        <Cpu className="w-3 h-3" />
                        <span>{item.params}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        <Boxes className="w-3 h-3" />
                        <span>Safetensors</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        <Server className="w-3 h-3" />
                        <span>PyTorch</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-[9px] text-slate-600 font-bold">
                          {item.provider[0]}
                        </div>
                        <span className="text-[12px] text-slate-500 truncate max-w-[120px]">{item.provider}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.date.substring(5)}
                        </div>
                        <div className="flex items-center gap-1">
                          <ArrowRight className="w-3 h-3 rotate-90" />
                          {item.size}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {item.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
