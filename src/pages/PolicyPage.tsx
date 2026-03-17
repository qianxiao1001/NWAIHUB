import React, { useState } from 'react';
import { Layout } from '@/components/layout';
import { Button, Card, Badge } from '@/components/ui/common';
import { 
  FileText, CheckCircle2, Download, Search, 
  Scale, Shield, BookOpen, ChevronRight, 
  Landmark, Gavel, FileCheck, ArrowRight, Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Hero Section ---
const PolicyHero = () => (
  <div className="relative bg-white border-b border-slate-200 py-6 ui-reveal">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Mobile: Top text, Bottom search | Desktop: Left text, Right search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div className="lg:max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
            <Scale className="w-3.5 h-3.5" />
            政策法规与行业标准
          </div>
          
          <h1 className="mobile-title-hero lg:text-2xl font-bold text-slate-900 mb-2 tracking-tight">
            政策与支持中心
          </h1>
          
          <p className="mobile-text-body lg:text-sm text-slate-600 leading-relaxed lg:max-w-xl mobile-text-truncate-3">
            汇聚人工智能产业最新政策法规、技术标准与合规指南，助力企业把握发展机遇，构建可信赖的人工智能应用。
          </p>
        </div>
        
        <div className="w-full lg:max-w-xl">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="搜索政策文件、标准编号或关键词..." 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/15 focus:border-blue-400 transition-all duration-200 mobile-text-body"
              />
            </div>
            <Button size="sm" className="h-10 px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
              搜索
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Content ---
const PolicyContent = () => {
  const [activeCategory, setActiveCategory] = useState('policy');
  const [sidebarDrawerOpen, setSidebarDrawerOpen] = useState(false);

  const categories = [
    { id: 'policy', name: '产业政策', icon: Landmark, count: 12 },
    { id: 'standard', name: '技术标准', icon: Gavel, count: 8 },
    { id: 'compliance', name: '合规指南', icon: Shield, count: 5 },
    { id: 'report', name: '研究报告', icon: BookOpen, count: 3 },
  ];

  const documents = {
    policy: [
      {
        title: "关于支持人工智能产业发展的若干措施",
        dept: "中关村管委会",
        date: "2025-12-10",
        type: "资金扶持",
        desc: "支持企业开展大模型研发与应用，最高给予 1000 万元资金支持；对购买算力服务的企业给予 30% 补贴。"
      },
      {
        title: "北京市通用人工智能产业创新伙伴计划",
        dept: "北京市经信局",
        date: "2025-11-20",
        type: "产业规划",
        desc: "搭建人工智能产业创新合作平台，促进算力、数据、模型、应用等产业链上下游协同发展。"
      },
      {
        title: "人工智能高新技术企业认定管理办法",
        dept: "科技部",
        date: "2025-10-15",
        type: "资质认定",
        desc: "明确人工智能领域高新技术企业的认定标准、申报流程及优惠政策，鼓励企业加大研发投入。"
      }
    ],
    standard: [
      {
        title: "人工智能 大模型基准测试方法",
        dept: "国家标准委",
        date: "2026-01-01",
        type: "国家标准",
        id: "GB/T 12345-2026",
        desc: "规定了通用大模型在语言理解、逻辑推理、代码生成等方面的测试指标与评估方法。"
      },
      {
        title: "生成式人工智能服务安全基本要求",
        dept: "TC260",
        date: "2025-12-01",
        type: "行业标准",
        id: "TC260-003",
        desc: "提出了生成式人工智能服务在语料安全、模型安全、安全措施等方面的基本要求。"
      },
      {
        title: "人工智能 深度学习算法评估规范",
        dept: "IEEE",
        date: "2025-09-30",
        type: "国际标准",
        id: "IEEE P2841",
        desc: "International standard for evaluating deep learning algorithms, focusing on performance, robustness, and explainability."
      }
    ],
    compliance: [
      {
        title: "企业数据出境安全评估申报指南",
        dept: "网信办",
        date: "2026-02-10",
        type: "合规指引",
        desc: "指导企业开展数据出境安全自评估，明确申报材料要求与流程，保障数据跨境安全。"
      },
      {
        title: "人工智能伦理治理白皮书",
        dept: "人工智能产业联盟",
        date: "2025-11-05",
        type: "伦理规范",
        desc: "阐述人工智能发展应遵循的伦理原则，提出企业伦理治理架构与实践建议。"
      }
    ],
    report: [
      {
        title: "2025-2026 中国人工智能产业发展蓝皮书",
        dept: "中国信通院",
        date: "2026-03-01",
        type: "行业报告",
        desc: "全面分析中国人工智能产业发展现状、技术趋势、应用场景及未来展望。"
      }
    ]
  };

  return (
    <div className="bg-slate-50/50 py-6 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Filter button and drawer | Desktop: Sidebar */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          
          {/* Mobile Filter Controls */}
          <div className="lg:hidden mb-4 flex gap-2">
            <button 
              onClick={() => setSidebarDrawerOpen(true)}
              className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm hover:bg-slate-50 transition-colors mobile-touch-feedback"
            >
              <BookOpen className="w-4 h-4" />
              分类
            </button>
            <select 
              value={activeCategory} 
              onChange={(e) => setActiveCategory(e.target.value)}
              className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* Sidebar Drawer Overlay */}
          {sidebarDrawerOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden mobile-fade-in"
              onClick={() => setSidebarDrawerOpen(false)}
            />
          )}

          {/* Sidebar Drawer */}
          <div className={cn(
            "fixed top-0 left-0 h-full w-[300px] bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300",
            sidebarDrawerOpen ? "translate-x-0" : "-translate-x-full"
          )}>
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <h3 className="font-semibold text-slate-900">中关村AI北纬社区专项支持计划</h3>
                <button 
                  onClick={() => setSidebarDrawerOpen(false)}
                  className="p-1 text-slate-600 hover:bg-slate-50 rounded"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setSidebarDrawerOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-all duration-200",
                        activeCategory === cat.id
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        <cat.icon className={cn("w-4 h-4", activeCategory === cat.id ? "text-blue-600" : "text-slate-400")} />
                        {cat.name}
                      </div>
                      <span className={cn("text-xs py-0.5 px-1.5 rounded-full", activeCategory === cat.id ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500")}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20 space-y-5">
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-sm transition-all duration-200 mb-0.5 last:mb-0",
                      activeCategory === cat.id
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <cat.icon className={cn("w-4 h-4", activeCategory === cat.id ? "text-blue-600" : "text-slate-400")} />
                      {cat.name}
                    </div>
                    <span className={cn("text-xs py-0.5 px-1.5 rounded-full", activeCategory === cat.id ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500")}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-4 text-white shadow-md">
                <h4 className="font-bold mb-2 text-sm flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-blue-200" />
                  北京市专精特新企业服务站
                </h4>
                <p className="text-xs text-blue-100 mb-3 leading-relaxed opacity-90">
                  为专精特新企业提供政策申报、资质认定等一站式服务支持。
                </p>
                <Button size="sm" className="w-full bg-white/10 hover:bg-white/20 text-white border-0 text-xs backdrop-blur-sm">
                  开始匹配
                </Button>
              </div>
            </div>
          </div>

          {/* Main List */}
          <div className="lg:col-span-9">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
              <h2 className="mobile-title-section lg:text-lg font-bold text-slate-900 flex items-center gap-2">
                {categories.find(c => c.id === activeCategory)?.name}
                <span className="text-xs font-normal text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">
                  {documents[activeCategory as keyof typeof documents]?.length || 0}
                </span>
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500">排序:</span>
                <select className="text-xs border-none bg-transparent p-0 text-slate-700 font-medium focus:ring-0 cursor-pointer hover:text-blue-600">
                  <option>最新发布</option>
                  <option>热度最高</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {/* @ts-ignore */}
              {documents[activeCategory as keyof typeof documents]?.map((doc, idx) => (
                <div key={idx} className="card-enterprise group relative bg-white rounded-lg border border-slate-200 p-4 hover:border-blue-300 hover:shadow-md transition-all duration-200 mobile-touch-feedback">
                  <div className="flex flex-col gap-3">
                    {/* Top: Badge and Title */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary" className={cn(
                          "font-medium border px-1.5 py-0 text-[10px] h-5",
                          doc.type.includes("标准") ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                          doc.type.includes("资金") ? "bg-amber-50 text-amber-700 border-amber-100" :
                          "bg-blue-50 text-blue-700 border-blue-100"
                        )}>
                          {doc.type}
                        </Badge>
                        <h3 className="text-base font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors cursor-pointer">
                          {doc.title}
                        </h3>
                      </div>
                      <span className="text-xs text-slate-400 flex-shrink-0 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {doc.date}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed mobile-text-truncate-3">
                      {doc.desc}
                    </p>
                    
                    {/* Bottom: Metadata and Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                          {doc.dept}
                        </span>
                        {/* @ts-ignore */}
                        {doc.id && (
                          <span className="font-mono bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100 text-slate-500">
                            {doc.id}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button className="text-xs text-slate-500 hover:text-blue-600 font-medium px-2 py-1">
                          预览
                        </button>
                        <button className="text-xs flex items-center gap-1 text-blue-600 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-md font-medium transition-colors">
                          <Download className="w-3 h-3" /> 下载
                        </button>
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
  );
};

export default function PolicyPage() {
  return (
    <Layout>
      <PolicyHero />
      <PolicyContent />
    </Layout>
  );
}
