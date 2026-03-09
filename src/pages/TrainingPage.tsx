import React, { useState } from 'react';
import { Layout } from '@/components/layout';
import { Button, Card, Badge } from '@/components/ui/common';
import { 
  GraduationCap, BookOpen, Award, Calendar, 
  Users, CheckCircle2, ArrowRight, Search,
  Video, MonitorPlay, FileText, ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Hero Section ---
const TrainingHero = () => (
  <div className="relative bg-white border-b border-slate-200 py-6 ui-reveal">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Mobile: Top text, Bottom buttons | Desktop: Left text, Right buttons */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div className="lg:max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            人工智能人才培养基地
          </div>
          
          <h1 className="mobile-title-hero lg:text-2xl font-bold text-slate-900 mb-2 tracking-tight">
            人才与培训中心
          </h1>
          
          <p className="mobile-text-body lg:text-sm text-slate-600 leading-relaxed lg:max-w-xl mobile-text-truncate-3">
            构建多层次、高质量的人工智能人才培养体系，提供从基础理论到工程实践的全方位培训课程，助力企业打造数字化核心竞争力。
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="sm" className="mobile-button bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
            浏览课程目录
          </Button>
          <Button variant="secondary" size="sm" className="mobile-button bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
            查询证书
          </Button>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Content ---
const TrainingContent = () => {
  const [activeCategory, setActiveCategory] = useState('developer');
  const [sidebarDrawerOpen, setSidebarDrawerOpen] = useState(false);

  const categories = [
    { id: 'developer', name: '技术开发', icon: MonitorPlay, count: 3 },
    { id: 'management', name: '产业管理', icon: Users, count: 2 },
    { id: 'certification', name: '职业认证', icon: Award, count: 1 },
    { id: 'calendar', name: '培训日历', icon: Calendar, count: 0 },
  ];

  const courses = {
    developer: [
      {
        title: "大模型应用开发实战",
        level: "中级",
        duration: "3天 (24课时)",
        type: "线下实训",
        desc: "深入讲解 Prompt Engineering、RAG 应用开发、Agent 设计模式及 LangChain 框架实战。",
        tags: ["LLM", "RAG", "LangChain"],
        nextSession: "2026-04-15"
      },
      {
        title: "深度学习算法工程师特训营",
        level: "高级",
        duration: "5天 (40课时)",
        type: "封闭集训",
        desc: "涵盖 Transformer 架构解析、模型微调 (Fine-tuning)、模型量化部署及性能优化。",
        tags: ["PyTorch", "Transformer", "模型优化"],
        nextSession: "2026-05-10"
      },
      {
        title: "Python 人工智能编程基础",
        level: "初级",
        duration: "2天 (16课时)",
        type: "线上直播",
        desc: "零基础入门 Python 编程，掌握 NumPy、Pandas 数据处理及 Scikit-learn 机器学习基础。",
        tags: ["Python", "机器学习", "数据分析"],
        nextSession: "2026-04-01"
      }
    ],
    management: [
      {
        title: "企业数字化转型与AI战略",
        level: "高管研修",
        duration: "2天",
        type: "高端沙龙",
        desc: "面向企业决策层，解析 AI 产业趋势、商业模式创新及企业数字化转型路径。",
        tags: ["数字化转型", "AI战略", "商业模式"],
        nextSession: "2026-04-20"
      },
      {
        title: "人工智能项目管理 (AI PM)",
        level: "中级",
        duration: "2天",
        type: "工作坊",
        desc: "学习 AI 产品全生命周期管理，掌握需求分析、数据治理、模型评估及伦理合规。",
        tags: ["产品管理", "项目管理", "AI伦理"],
        nextSession: "2026-05-15"
      }
    ],
    certification: [
      {
        title: "OPC 认证人工智能应用工程师 (CAAE)",
        level: "初级/中级/高级",
        type: "职业资格认证",
        desc: "考核学员在人工智能领域的理论基础与工程实践能力，通过考试可获得行业认可的职业资格证书。",
        features: ["理论考试", "上机实操", "项目答辩"],
        nextExam: "2026-06-20"
      }
    ],
    calendar: [] // Placeholder for calendar view if needed
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
                <h3 className="font-semibold text-slate-900">培训分类</h3>
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
                      {cat.count > 0 && (
                        <span className={cn("text-xs py-0.5 px-1.5 rounded-full", activeCategory === cat.id ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500")}>
                          {cat.count}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg p-4 text-white shadow-md">
                  <h4 className="font-bold mb-2 text-sm flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-200" />
                    企业定制培训
                  </h4>
                  <p className="text-xs text-emerald-100 mb-3 leading-relaxed opacity-90">
                    根据企业业务需求，量身定制内训课程，提升团队技术实力。
                  </p>
                  <Button size="sm" className="w-full bg-white/10 hover:bg-white/20 text-white border-0 text-xs backdrop-blur-sm">
                    联系培训顾问
                  </Button>
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
                    {cat.count > 0 && (
                      <span className={cn("text-xs py-0.5 px-1.5 rounded-full", activeCategory === cat.id ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500")}>
                        {cat.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg p-4 text-white shadow-md">
                <h4 className="font-bold mb-2 text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-200" />
                  企业定制培训
                </h4>
                <p className="text-xs text-emerald-100 mb-3 leading-relaxed opacity-90">
                  根据企业业务需求，量身定制内训课程，提升团队技术实力。
                </p>
                <Button size="sm" className="w-full bg-white/10 hover:bg-white/20 text-white border-0 text-xs backdrop-blur-sm">
                  联系培训顾问
                </Button>
              </div>
            </div>
          </div>

          {/* Main List */}
          <div className="lg:col-span-9">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                {categories.find(c => c.id === activeCategory)?.name}
                {categories.find(c => c.id === activeCategory)?.count ? (
                  <span className="text-xs font-normal text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">
                    {categories.find(c => c.id === activeCategory)?.count}
                  </span>
                ) : null}
              </h2>
            </div>

            <div className="space-y-3">
              {/* @ts-ignore */}
              {courses[activeCategory as keyof typeof courses]?.map((course, idx) => (
                <article key={idx} className="card-enterprise group flex flex-col md:flex-row bg-white rounded-lg border border-slate-200 p-4 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary" className={cn(
                        "font-medium border px-1.5 py-0 text-[10px] h-5",
                        course.level === "初级" ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                        course.level === "中级" ? "bg-blue-50 text-blue-700 border-blue-100" :
                        course.level === "高级" ? "bg-purple-50 text-purple-700 border-purple-100" :
                        "bg-slate-100 text-slate-700 border-slate-200"
                      )}>
                        {course.level}
                      </Badge>
                      <span className="text-xs text-slate-500 flex items-center gap-1 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
                        <Video className="w-3 h-3" /> {course.type}
                      </span>
                      {/* @ts-ignore */}
                      {course.duration && (
                        <span className="text-xs text-slate-500 flex items-center gap-1 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
                          <Clock className="w-3 h-3" /> {course.duration}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2 max-w-3xl">
                      {course.desc}
                    </p>
                    
                    {/* @ts-ignore */}
                    {course.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {/* @ts-ignore */}
                        {course.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* @ts-ignore */}
                    {course.features && (
                      <div className="flex gap-4 mb-3">
                        {/* @ts-ignore */}
                        {course.features.map((feat, i) => (
                          <span key={i} className="flex items-center gap-1 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> {feat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-3 md:mt-0 md:ml-4 md:pl-4 md:border-l border-slate-100 flex flex-col justify-between min-w-[180px]">
                    <div>
                      <div className="text-xs text-slate-400 mb-1">下期开课</div>
                      {/* @ts-ignore */}
                      <div className="text-sm font-bold text-slate-900 flex items-center gap-2 bg-blue-50/50 px-2 py-1.5 rounded border border-blue-100/50 w-fit md:w-full">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        {/* @ts-ignore */}
                        {course.nextSession || course.nextExam}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" className="flex-1 border-slate-200 text-slate-600 hover:bg-slate-50 h-8 text-xs px-2">
                        大纲
                      </Button>
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-sm h-8 text-xs px-2">
                        报名
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
              
              {activeCategory === 'calendar' && (
                <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                  <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-slate-900 font-medium mb-1">培训日历功能开发中</h3>
                  <p className="text-slate-500 text-sm">请关注后续更新，或联系客服获取最新排期表。</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Clock } from 'lucide-react';

export default function TrainingPage() {
  return (
    <Layout>
      <TrainingHero />
      <TrainingContent />
    </Layout>
  );
}
