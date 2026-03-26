import React, { useState } from 'react';
import { Layout } from '@/components/layout';
import { Button, Badge } from '@/components/ui/common';
import { cn } from '@/lib/utils';

// Material Symbols icon wrapper
const Icon = ({ name, className = '' }: { name: string; className?: string }) => (
  <span className={cn('material-symbols-outlined', className)}>{name}</span>
);

// --- Hero Section (matches reference design) ---
const PolicyHero = () => (
  <section className="mb-10 ui-reveal">
    <div className="relative overflow-hidden rounded-none border border-white/10 shadow-[0_22px_50px_-28px_rgba(0,35,117,0.75)] bg-gradient-to-br from-[#003da6] via-[#0049c8] to-[#0052d9] p-10 md:p-16 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/46 via-black/22 to-black/12" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="policy-hero-glow absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(255,255,255,0.16),transparent_32%),radial-gradient(circle_at_85%_8%,rgba(255,255,255,0.12),transparent_30%)]" />
      <div className="relative z-10 max-w-3xl">
        <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-6 text-white">
          政策与支持中心
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight leading-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.35)]">
          政策法规与行业标准
        </h1>
        <div className="mb-8 max-w-2xl rounded-xl border border-white/20 bg-black/18 backdrop-blur-sm px-5 py-4">
          <p className="text-base md:text-lg leading-relaxed text-white !text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.3)]">
            汇聚人工智能产业最新政策法规、技术标准及扶持措施，为您提供精准的合规指引与发展支持。
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-[#434654] text-lg" />
            <input
              type="text"
              placeholder="搜索政策文件、标准编号或关键词..."
              className="w-full pl-12 pr-6 py-3.5 bg-white text-[#181c1e] rounded-2xl border-none focus:ring-4 focus:ring-white/25 shadow-xl text-sm"
            />
          </div>
          <Button className="h-[52px] px-8 bg-white text-[#003da6] hover:bg-slate-50 shadow-xl font-bold rounded-2xl text-sm active:scale-95 border-0">
            检索
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// --- Main Content ---
const PolicyContent = () => {
  const [activeCategory, setActiveCategory] = useState('policy');
  const [sidebarDrawerOpen, setSidebarDrawerOpen] = useState(false);

  const categories = [
    { id: 'policy', name: '产业政策', icon: 'account_balance', count: 12 },
    { id: 'standard', name: '技术标准', icon: 'verified', count: 8 },
    { id: 'compliance', name: '合规指南', icon: 'shield', count: 5 },
    { id: 'report', name: '研究报告', icon: 'menu_book', count: 3 },
  ];

  const documents: Record<string, Array<{
    title: string; dept: string; date: string; type: string; id?: string; desc: string;
  }>> = {
    policy: [
      {
        title: '关于支持人工智能产业发展的若干措施',
        dept: '中关村管委会',
        date: '2025-12-10',
        type: '资金扶持',
        desc: '为进一步发挥人工智能赋能实体经济作用，支持关键技术研发与公共算力平台建设。最高给予1000万元资金支持。',
      },
      {
        title: '北京市通用人工智能产业创新伙伴计划',
        dept: '北京市经济和信息化局',
        date: '2025-11-25',
        type: '产业规划',
        desc: '旨在通过算力券、数据开放及典型应用场景开放，构建通用人工智能产业协同生态体系，加速大模型迭代升级。',
      },
      {
        title: '人工智能高新技术企业认定管理办法',
        dept: '科技部',
        date: '2025-10-15',
        type: '资质认定',
        desc: '规范人工智能领域高新技术企业认定标准，明确研发投入比例、核心自主知识产权及关键技术指标要求。',
      },
    ],
    standard: [
      {
        title: '人工智能 大模型基准测试方法',
        dept: '国家标准委',
        date: '2026-01-01',
        type: '国家标准',
        id: 'GB/T 12345-2026',
        desc: '规定了通用大模型在语言理解、逻辑推理、代码生成等方面的测试指标与评估方法。',
      },
      {
        title: '生成式人工智能服务安全基本要求',
        dept: 'TC260',
        date: '2025-12-01',
        type: '行业标准',
        id: 'TC260-003',
        desc: '提出了生成式人工智能服务在语料安全、模型安全、安全措施等方面的基本要求。',
      },
      {
        title: '人工智能 深度学习算法评估规范',
        dept: 'IEEE',
        date: '2025-09-30',
        type: '国际标准',
        id: 'IEEE P2841',
        desc: 'International standard for evaluating deep learning algorithms, focusing on performance, robustness, and explainability.',
      },
    ],
    compliance: [
      {
        title: '企业数据出境安全评估申报指南',
        dept: '网信办',
        date: '2026-02-10',
        type: '合规指引',
        desc: '指导企业开展数据出境安全自评估，明确申报材料要求与流程，保障数据跨境安全。',
      },
      {
        title: '人工智能伦理治理白皮书',
        dept: '人工智能产业联盟',
        date: '2025-11-05',
        type: '伦理规范',
        desc: '阐述人工智能发展应遵循的伦理原则，提出企业伦理治理架构与实践建议。',
      },
    ],
    report: [
      {
        title: '2025-2026 中国人工智能产业发展蓝皮书',
        dept: '中国信通院',
        date: '2026-03-01',
        type: '行业报告',
        desc: '全面分析中国人工智能产业发展现状、技术趋势、应用场景及未来展望。',
      },
    ],
  };

  const getBadgeColor = (type: string) => {
    if (type.includes('资金')) return 'bg-amber-50 text-amber-700 border-amber-200';
    if (type.includes('标准')) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (type.includes('资质') || type.includes('认定')) return 'bg-[#ffdbd0] text-[#832700] border-[#ffb59c]';
    if (type.includes('规划')) return 'bg-secondary/10 text-secondary border-secondary/20';
    if (type.includes('合规') || type.includes('伦理')) return 'bg-violet-50 text-violet-700 border-violet-200';
    return 'bg-[#dbe1ff] text-[#003ea8] border-[#b4c5ff]';
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Sidebar */}
        <aside className="w-full lg:w-72 shrink-0 space-y-6">
          {/* Category Nav */}
          <div className="bg-[var(--color-surface-container-lowest)] rounded-2xl p-5 shadow-sm border border-[var(--color-outline-variant)]/20">
            <h3 className="text-xs font-bold text-[var(--color-on-surface-variant)] uppercase tracking-wider mb-5">
              分类检索
            </h3>
            <nav className="space-y-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'w-full flex justify-between items-center px-4 py-3 rounded-xl text-sm font-medium transition-all',
                    activeCategory === cat.id
                      ? 'bg-[var(--color-primary)]/8 text-[var(--color-primary)] font-bold'
                      : 'text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-low)]'
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon name={cat.icon} className={cn(
                      'text-base',
                      activeCategory === cat.id ? 'text-[var(--color-primary)]' : 'text-[var(--color-outline)]'
                    )} />
                    {cat.name}
                  </span>
                  <span className={cn(
                    'text-xs px-2 py-0.5 rounded-full',
                    activeCategory === cat.id
                      ? 'bg-[var(--color-primary)]/12 text-[var(--color-primary)]'
                      : 'bg-[var(--color-surface-container-high)] text-[var(--color-outline)]'
                  )}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Featured Match Card */}
          <div className="bg-gradient-to-br from-[#003da6] to-[#0052d9] rounded-2xl p-6 shadow-xl relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 opacity-10 transition-transform duration-500 group-hover:scale-110">
              <Icon name="corporate_fare" className="text-[140px] text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-3 leading-tight text-white">北京市专精特新企业服务站</h3>
              <p className="text-sm text-white/80 mb-5 leading-relaxed">
                快速评估您的企业资质，一键匹配专属扶持政策与专项资金。
              </p>
              <button className="w-full py-3 bg-white text-[#003da6] rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 text-sm shadow-md">
                开始匹配
              </button>
            </div>
          </div>

          {/* Expert Support */}
          <div className="bg-[var(--color-surface-container-low)] rounded-2xl p-5 text-center border border-[var(--color-outline-variant)]/20">
            <Icon name="support_agent" className="text-[#003da6] mb-3 text-3xl" />
            <h4 className="font-bold text-[#181c1e] mb-1.5 text-sm">政策咨询专家</h4>
            <p className="text-xs text-[#434654] mb-4">
              工作日 9:00 - 18:00 提供一对一专业咨询服务
            </p>
            <button className="text-sm font-bold text-[#003da6] hover:underline">
              立即咨询
            </button>
          </div>
        </aside>

        {/* Main List */}
        <div className="flex-1 min-w-0">
          {/* List header */}
          <div className="flex justify-between items-center mb-5 px-1">
            <h2 className="text-xl font-bold text-[var(--color-on-surface)] flex items-center gap-2">
              <Icon name="feed" className="text-[var(--color-primary)] text-2xl" />
              最新政策动态
            </h2>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[var(--color-on-surface-variant)]">排序:</span>
              <select className="bg-transparent border-none focus:ring-0 text-[var(--color-primary)] font-bold cursor-pointer text-sm">
                <option>发布日期</option>
                <option>热度最高</option>
              </select>
            </div>
          </div>

          {/* Policy Items */}
          <div className="space-y-5">
            {(documents[activeCategory] || []).map((doc, idx) => (
              <article
                key={idx}
                className="bg-[var(--color-surface-container-lowest)] rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl border border-[var(--color-outline-variant)]/10 group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="flex-1 min-w-0">
                    {/* Tags row */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={cn(
                        'text-xs font-bold px-3 py-1 rounded-full border',
                        getBadgeColor(doc.type)
                      )}>
                        {doc.type}
                      </span>
                      <span className="text-xs text-[var(--color-on-surface-variant)] flex items-center gap-1">
                        <Icon name="apartment" className="text-sm" />
                        {doc.dept}
                      </span>
                      <span className="text-xs text-[var(--color-on-surface-variant)] flex items-center gap-1">
                        <Icon name="calendar_today" className="text-sm" />
                        {doc.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[var(--color-on-surface)] mb-3 group-hover:text-[var(--color-primary)] transition-colors cursor-pointer leading-snug">
                      {doc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[var(--color-on-surface-variant)] line-clamp-2 leading-relaxed mb-5">
                      {doc.desc}
                    </p>

                    {/* Meta row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-[var(--color-surface-container-low)]">
                      <div className="flex items-center gap-4 text-xs text-[var(--color-on-surface-variant)]">
                        {doc.id && (
                          <span className="font-mono bg-[var(--color-surface-container-low)] px-2 py-0.5 rounded border border-[var(--color-outline-variant)]/30 text-[var(--color-outline)]">
                            {doc.id}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2.5">
                        <button className="flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl border border-[var(--color-outline-variant)] text-xs font-bold hover:bg-[var(--color-surface-container-low)] transition-all active:scale-95 text-[var(--color-on-surface-variant)]">
                          <Icon name="visibility" className="text-sm" />
                          预览
                        </button>
                        <button className="flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold shadow-lg shadow-[var(--color-primary)]/20 transition-all active:scale-95">
                          <Icon name="download" className="text-sm" />
                          下载
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center pt-10">
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-low)] transition-all">
                <Icon name="chevron_left" className="text-lg" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--color-primary)] text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-low)] transition-all text-sm font-medium">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-low)] transition-all text-sm font-medium">3</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-low)] transition-all">
                <Icon name="chevron_right" className="text-lg" />
              </button>
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
