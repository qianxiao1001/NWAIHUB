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
  <div className="relative bg-slate-50 border-b border-slate-200 pt-12 pb-14 overflow-hidden ui-reveal">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.16]" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-4">
          <Scale className="w-3.5 h-3.5" />
          政策法规与行业标准
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-[1.15]">
          政策与标准中心
        </h1>
        
        <p className="text-base text-slate-600 mb-6 leading-relaxed max-w-2xl">
          汇聚人工智能产业最新政策法规、技术标准与合规指南，助力企业把握发展机遇，构建可信赖的人工智能应用。
        </p>
        
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="搜索政策文件、标准编号或关键词..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-lg shadow-[0_8px_20px_-18px_rgba(15,23,42,0.5)] focus:ring-2 focus:ring-blue-500/15 focus:border-blue-400 transition-all duration-200 text-sm"
          />
          <Button className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-700 text-white shadow-sm px-6">
            搜索
          </Button>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Content ---
const PolicyContent = () => {
  const [activeCategory, setActiveCategory] = useState('policy');

  const categories = [
    { id: 'policy', name: '产业政策', icon: Landmark },
    { id: 'standard', name: '技术标准', icon: Gavel },
    { id: 'compliance', name: '合规指南', icon: Shield },
    { id: 'report', name: '研究报告', icon: BookOpen },
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
    <div className="bg-white py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-7">
          
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-20 space-y-6">
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">文档分类</h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                        activeCategory === cat.id
                          ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      <cat.icon className={cn("w-4 h-4", activeCategory === cat.id ? "text-blue-600" : "text-slate-400")} />
                      {cat.name}
                      {activeCategory === cat.id && <ChevronRight className="w-4 h-4 ml-auto text-blue-400" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4.5 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-500" />
                  申报助手
                </h4>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  不知道您的企业符合哪些政策？使用智能申报助手快速匹配。
                </p>
                <Button size="sm" className="w-full bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 text-xs shadow-sm">
                  开始匹配
                </Button>
              </div>
            </div>
          </div>

          {/* Main List */}
          <div className="lg:col-span-9">
            <div className="flex justify-between items-end mb-5 border-b border-slate-100 pb-3.5">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {categories.find(c => c.id === activeCategory)?.name}
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  共找到 {documents[activeCategory as keyof typeof documents]?.length || 0} 份相关文档
                </p>
              </div>
              <div className="flex gap-2">
                <select className="text-sm border-slate-200 rounded-md text-slate-600 focus:ring-blue-500 focus:border-blue-500">
                  <option>按发布时间排序</option>
                  <option>按热度排序</option>
                </select>
              </div>
            </div>

            <div className="space-y-3.5">
              {/* @ts-ignore */}
              {documents[activeCategory as keyof typeof documents]?.map((doc, idx) => (
                <div key={idx} className="ui-list-item group bg-white rounded-xl border border-slate-200 p-5 hover:shadow-[0_14px_30px_-24px_rgba(37,99,235,0.4)] hover:border-blue-200 transition-all duration-200 hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className={cn(
                          "font-normal border",
                          doc.type.includes("标准") ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                          doc.type.includes("资金") ? "bg-amber-50 text-amber-700 border-amber-100" :
                          "bg-blue-50 text-blue-700 border-blue-100"
                        )}>
                          {doc.type}
                        </Badge>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {doc.date}
                        </span>
                        {/* @ts-ignore */}
                        {doc.id && <span className="text-xs font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">{doc.id}</span>}
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {doc.title}
                      </h3>
                      
                      <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                        {doc.desc}
                      </p>
                      
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded">
                          发布部门: {doc.dept}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 flex-shrink-0">
                      <Button variant="outline" size="sm" className="w-24 text-xs h-8">
                        在线预览
                      </Button>
                      <Button size="sm" className="w-24 text-xs h-8 bg-slate-900 text-white hover:bg-blue-600 border-0">
                        <Download className="w-3 h-3 mr-1.5" /> 下载
                      </Button>
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
