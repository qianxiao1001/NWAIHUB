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
  <div className="relative bg-slate-50 border-b border-slate-200 pt-12 pb-14 overflow-hidden ui-reveal">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.16]" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-4">
            <Server className="w-3.5 h-3.5" />
            高性能算力集群
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-[1.15]">
            弹性智算<br />
            <span className="text-indigo-700">云服务平台</span>
          </h1>
          
          <p className="text-base text-slate-600 mb-6 leading-relaxed">
            提供高性能GPU裸金属与容器服务，专为大模型训练、微调与推理设计。秒级调度，按需计费，助您降本增效。
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-indigo-700 hover:bg-indigo-800 text-white shadow-sm px-8">
              立即开通
            </Button>
            <Button variant="secondary" size="lg" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
              价格计算器
            </Button>
          </div>
          
          <div className="mt-6 flex items-center gap-5 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>99.9% 可用性</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              <span>万卡集群互联</span>
            </div>
          </div>
        </div>

        {/* Right Visual: Resource Dashboard Abstract */}
        <div className="flex-1 w-full max-w-lg">
          <div className="bg-white rounded-xl border border-slate-200 shadow-[0_20px_44px_-36px_rgba(15,23,42,0.36)] p-5 relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm font-bold text-slate-900">资源监控面板</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">Running</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="text-xs text-slate-500 mb-1">GPU 利用率</div>
                <div className="text-2xl font-bold text-slate-900">92%</div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-indigo-500 h-full w-[92%]" />
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="text-xs text-slate-500 mb-1">显存占用</div>
                <div className="text-2xl font-bold text-slate-900">64GB</div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[80%]" />
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              {[
                { name: "Training-Node-01", status: "Running", type: "8x A100" },
                { name: "Inference-Node-04", status: "Running", type: "4x 4090" },
                { name: "Dev-Environment", status: "Stopped", type: "1x A10" },
              ].map((node, i) => (
                <div key={i} className="ui-list-item flex items-center justify-between text-sm p-2.5 hover:bg-blue-50/45 rounded-md transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <Server className="w-4 h-4 text-slate-400" />
                    <span className="font-medium text-slate-700">{node.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-500 text-xs bg-slate-100 px-2 py-0.5 rounded">{node.type}</span>
                    <span className={cn("text-xs font-medium", node.status === "Running" ? "text-green-600" : "text-slate-400")}>
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
    <Section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">算力资源市场</h2>
            <p className="text-slate-500 text-sm mt-1">
              实时资源池监控，支持按量付费与包年包月
            </p>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-md border border-slate-200">
            {['全部资源', '训练型', '推理型', '渲染型'].map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200",
                  (i === 0 && activeTab === 'all') || activeTab === tab
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-[0_12px_24px_-24px_rgba(15,23,42,0.55)]">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="p-3.5 font-semibold">资源规格</th>
                <th className="p-3.5 font-semibold">显存</th>
                <th className="p-3.5 font-semibold">CPU/内存</th>
                <th className="p-3.5 font-semibold">系统盘</th>
                <th className="p-3.5 font-semibold">价格 (元)</th>
                <th className="p-3.5 font-semibold text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {resources.map((row, idx) => (
                <tr key={idx} className="ui-list-item hover:bg-blue-50/45 transition-colors duration-200 group">
                  <td className="p-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{row.type}</div>
                        {row.tag && <span className="text-[10px] text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100">{row.tag}</span>}
                      </div>
                    </div>
                  </td>
                  <td className="p-3.5 text-sm text-slate-600 font-medium">{row.memory}</td>
                  <td className="p-3.5 text-sm text-slate-500">
                    <div className="flex flex-col">
                      <span>{row.cpu}</span>
                      <span className="text-xs text-slate-400">{row.ram}</span>
                    </div>
                  </td>
                  <td className="p-3.5 text-sm text-slate-500">{row.disk}</td>
                  <td className="p-3.5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-slate-900">{row.price}</span>
                      <span className="text-xs text-slate-500">/{row.unit}</span>
                    </div>
                  </td>
                  <td className="p-3.5 text-right">
                    <Button size="sm" className="bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 shadow-sm">
                      立即租用
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

// --- Advantages ---
const Advantages = () => (
  <Section className="bg-slate-50 py-12 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="服务优势" subtitle="企业级基础设施，保障业务连续性" />
      <div className="ui-reveal-group grid md:grid-cols-4 gap-5">
        {[
          { title: "弹性伸缩", desc: "秒级启动，按需扩容，支持大规模分布式训练", icon: Zap },
          { title: "灵活计费", desc: "支持按时、按周、按月计费，随用随停，成本可控", icon: Calculator },
          { title: "安全合规", desc: "数据加密存储，网络隔离，符合三级等保要求", icon: Shield },
          { title: "极速交付", desc: "预置主流AI框架镜像，开箱即用，无需繁琐配置", icon: Clock },
        ].map((item, idx) => (
          <div key={idx} className="ui-reveal-item bg-white p-5 rounded-xl border border-slate-200 hover:shadow-[0_12px_26px_-22px_rgba(79,70,229,0.45)] hover:border-indigo-200 transition-all duration-200 hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
              <item.icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
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
