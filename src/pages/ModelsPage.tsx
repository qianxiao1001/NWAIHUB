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
  { name: 'MiniMax-M2.5', tag: '文本生成', provider: 'MiniMax', date: '2026-03-02', downloads: 1701, desc: '适用于企业助手、知识问答与流程自动化场景。' },
  { name: 'Qwen3.5-27B', tag: '图文/文本', provider: 'Qwen', date: '2026-03-03', downloads: 988, desc: '高性能通用模型，支持复杂指令理解与推理。' },
  { name: 'Sarvam-30B', tag: '文本生成', provider: 'Sarvam', date: '2026-01-17', downloads: 970, desc: '面向多语言企业场景，适配客服与文档处理流程。' },
  { name: 'GLM-5', tag: '文本生成', provider: '智谱', date: '2026-03-03', downloads: 1394, desc: '兼顾推理与长上下文，适合企业知识服务。' },
  { name: 'Kimi-K2.5', tag: '图文/文本', provider: 'Moonshot', date: '2026-02-09', downloads: 1610, desc: '支持多轮交互与工具调用，面向业务编排任务。' },
  { name: 'MiniMax-M2.1', tag: '文本生成', provider: 'MiniMax', date: '2026-01-07', downloads: 1427, desc: '轻量高效，适用于办公自动化与低延迟问答。' },
  { name: 'DeepSeek-OCR', tag: '图文/文本', provider: 'DeepSeek', date: '2025-10-23', downloads: 1303, desc: '高精度文档识别能力，适配票据与档案数字化。' },
  { name: 'GLM-4.6V-Flash', tag: '图文/文本', provider: '智谱', date: '2025-12-11', downloads: 921, desc: '视觉理解与文本推理融合，适配复杂图文任务。' },
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
                            {item.name.includes('3.5') && <Badge variant="blue" className="text-[10px] h-4 px-1.5">NEW</Badge>}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        <Cpu className="w-3 h-3" />
                        <span>{item.name.includes('7B') ? '7B' : item.name.includes('30B') ? '30B' : '175B'}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        <Boxes className="w-3 h-3" />
                        <span>Safetensors</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-[9px] text-slate-600 font-bold">
                          {item.provider[0]}
                        </div>
                        <span className="text-[12px] text-slate-500">{item.provider}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.date.substring(5)}
                        </div>
                        <div className="flex items-center gap-1">
                          <ArrowRight className="w-3 h-3 rotate-90" />
                          {item.downloads > 1000 ? (item.downloads / 1000).toFixed(1) + 'k' : item.downloads}
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
