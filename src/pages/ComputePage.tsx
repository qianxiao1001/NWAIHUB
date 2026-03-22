import React, { useState } from 'react';
import { Layout } from '@/components/layout';
import { Section, SectionHeader, Button, Card, Badge } from '@/components/ui/common';
import { 
  Server, Cpu, HardDrive, CheckCircle2, Zap, BarChart3, 
  Shield, Clock, Calculator, Search, Filter, ArrowRight 
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Hero Section ---
const ComputeHero = () => (
  <div className="relative bg-slate-50 border-b border-slate-200 py-5 overflow-hidden ui-reveal">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.16]" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Mobile: Top text, Bottom card | Desktop: Left text, Right card */}
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:items-center lg:justify-between">
        {/* Left Content */}
        <div className="lg:flex-1 lg:max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-semibold mb-3">
            <Server className="w-3.5 h-3.5" />
            高可用算力资源池
          </div>
          
          <h1 className="mobile-title-hero lg:text-2xl lg:md:text-3xl font-bold text-slate-900 tracking-tight mb-3">
            弹性智算 <span className="text-indigo-700">云服务平台</span>
          </h1>
          
          <p className="mobile-text-body lg:text-xs text-slate-600 mb-5 leading-relaxed lg:max-w-xl mobile-text-truncate-3">
            提供高性能GPU裸金属与容器服务，专为大模型训练、微调与推理设计。秒级调度，按需计费，助您降本增效。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="sm" className="mobile-button lg:h-8 bg-indigo-700 hover:bg-indigo-800 text-white shadow-sm">
              开通资源
            </Button>
            <Button variant="secondary" size="sm" className="mobile-button lg:h-8 bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
              费用测算
            </Button>
          </div>
          
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>99.9% 可用性</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>万卡集群互联</span>
            </div>
          </div>
        </div>

        {/* Right Visual: Resource Dashboard - Full width on mobile */}
        <div className="lg:flex-1 w-full lg:max-w-lg mt-8 lg:mt-0">
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-sm font-bold text-slate-900">资源监控面板</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">Running</span>
            </div>
            
            {/* Mobile: 2x2 Grid | Desktop: 2 columns */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-slate-50 rounded-md p-3 border border-slate-100">
                <div className="text-[10px] text-slate-500 mb-1">GPU 利用率</div>
                <div className="text-xl font-bold text-slate-900">92%</div>
                <div className="w-full bg-slate-200 h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-indigo-500 h-full w-[92%]" />
                </div>
              </div>
              <div className="bg-slate-50 rounded-md p-3 border border-slate-100">
                <div className="text-[10px] text-slate-500 mb-1">显存占用</div>
                <div className="text-xl font-bold text-slate-900">64GB</div>
                <div className="w-full bg-slate-200 h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[80%]" />
                </div>
              </div>
            </div>
            
            {/* Node Status - Simplified for mobile */}
            <div className="space-y-2">
              {[
                { name: "Training-Node-01", status: "Running", type: "8x A100" },
                { name: "Inference-Node-04", status: "Running", type: "4x 4090" },
                { name: "Dev-Environment", status: "Stopped", type: "1x A10" },
              ].map((node, i) => (
                <div key={i} className="flex items-center justify-between text-xs p-2 hover:bg-indigo-50/50 rounded-md transition-all duration-200 border border-transparent hover:border-indigo-100 cursor-default mobile-touch-feedback">
                  <div className="flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-medium text-slate-700">{node.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-[10px] bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">{node.type}</span>
                    <span className={cn("text-[10px] font-medium", node.status === "Running" ? "text-green-600" : "text-slate-400")}>
                      {node.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Resource Market ---
const ComputeMarket = () => {
  const [activeTab, setActiveTab] = useState('all');

  const resources = [
    { type: "NVIDIA A800", memory: "80GB", cpu: "16 vCPU", ram: "64GB", disk: "100GB SSD", price: "15.0", unit: "时", tag: "训练首选" },
    { type: "NVIDIA A100", memory: "40GB", cpu: "12 vCPU", ram: "48GB", disk: "80GB SSD", price: "12.0", unit: "时", tag: "高性能" },
    { type: "NVIDIA RTX 4090", memory: "24GB", cpu: "8 vCPU", ram: "32GB", disk: "50GB SSD", price: "4.5", unit: "时", tag: "高性价比" },
    { type: "NVIDIA L20", memory: "48GB", cpu: "8 vCPU", ram: "32GB", disk: "50GB SSD", price: "3.0", unit: "时", tag: "推理优化" },
    { type: "NVIDIA V100", memory: "32GB", cpu: "8 vCPU", ram: "32GB", disk: "50GB SSD", price: "6.0", unit: "时", tag: "通用计算" },
  ];

  return (
    <Section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-5 gap-4">
          <div>
            <h2 className="mobile-title-section lg:text-xl font-bold text-slate-900">算力资源目录</h2>
            <p className="mobile-text-body lg:text-xs text-slate-500 mt-1">
              实时资源池监控，支持按量付费与包年包月
            </p>
          </div>
          
          {/* Horizontal scroll tabs on mobile */}
          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-md border border-slate-200 mobile-scroll-x">
            {['全部规格', '训练型', '推理型', '渲染型'].map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-3 py-1 text-xs font-medium rounded-[4px] transition-all duration-200 mobile-touch-feedback flex-shrink-0",
                  (i === 0 && activeTab === 'all') || activeTab === tab
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200/50" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* Resource Cards - Mobile optimized */}
        <div className="space-y-4">
          {resources.map((row, idx) => (
            <div key={idx} className="rounded-lg border border-slate-200 bg-white p-4 hover:bg-blue-50/30 transition-colors duration-150 group cursor-default mobile-touch-feedback">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Resource Info */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{row.type}</div>
                    {row.tag && <span className="text-[10px] text-indigo-600 bg-indigo-50 px-1.5 py-0 rounded border border-indigo-100 mt-0.5 inline-block">{row.tag}</span>}
                  </div>
                </div>
                
                {/* Resource Details - Grid on mobile */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-slate-500">显存</div>
                    <div className="text-slate-600 font-medium">{row.memory}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">CPU</div>
                    <div className="text-slate-700">{row.cpu}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">内存</div>
                    <div className="text-slate-700">{row.ram}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">存储</div>
                    <div className="text-slate-500">{row.disk}</div>
                  </div>
                </div>
                
                {/* Price and Action */}
                <div className="flex items-center justify-between sm:flex-col sm:items-end sm:gap-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-bold text-slate-900">{row.price}</span>
                    <span className="text-xs text-slate-500">/{row.unit}</span>
                  </div>
                  <Button size="sm" className="h-8 bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 shadow-sm text-xs px-3">
                    立即开通
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// --- Advantages ---
const Advantages = () => (
  <Section className="bg-slate-50 py-8 border-t border-slate-200 mobile-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="平台优势" subtitle="企业级基础设施，保障业务连续性" />
      
      {/* Mobile: 2 columns | Desktop: 4 columns */}
      <div className="ui-reveal-group grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {[
          { title: "弹性伸缩", desc: "秒级启动，按需扩容，支持大规模分布式训练", icon: Zap },
          { title: "灵活计费", desc: "支持按时、按周、按月计费，随用随停，成本可控", icon: Calculator },
          { title: "安全合规", desc: "数据加密存储，网络隔离，符合三级等保要求", icon: Shield },
          { title: "极速交付", desc: "预置主流AI框架镜像，开箱即用，无需繁琐配置", icon: Clock },
        ].map((item, idx) => (
          <div key={idx} className="ui-reveal-item bg-white p-4 rounded-xl border border-slate-200 hover:shadow-[0_12px_26px_-22px_rgba(79,70,229,0.45)] hover:border-indigo-200 transition-all duration-200 hover:-translate-y-0.5 mobile-touch-feedback">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
              <item.icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold mobile-title-section lg:text-base text-slate-900 mb-2">{item.title}</h3>
            <p className="mobile-text-body lg:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default function ComputePage() {
  return (
    <Layout>
      <ComputeHero />
      <ComputeMarket />
      <Advantages />
    </Layout>
  );
}
