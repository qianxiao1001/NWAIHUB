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
  <div className="relative bg-slate-50 border-b border-slate-200 pt-12 pb-14 overflow-hidden ui-reveal">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.16]" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-4">
          <GraduationCap className="w-3.5 h-3.5" />
          人工智能人才培养基地
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-[1.15]">
          人才与培训中心
        </h1>
        
        <p className="text-base text-slate-600 mb-6 leading-relaxed max-w-2xl">
          构建多层次、高质量的人工智能人才培养体系，提供从基础理论到工程实践的全方位培训课程，助力企业打造数字化核心竞争力。
        </p>
        
        <div className="flex flex-wrap gap-3">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm px-8">
            浏览课程目录
          </Button>
          <Button variant="secondary" size="lg" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
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

  const categories = [
    { id: 'developer', name: '技术开发', icon: MonitorPlay },
    { id: 'management', name: '产业管理', icon: Users },
    { id: 'certification', name: '职业认证', icon: Award },
    { id: 'calendar', name: '培训日历', icon: Calendar },
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
    <div className="bg-white py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-7">
          
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-20 space-y-6">
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">培训体系</h3>
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
                  <Users className="w-4 h-4 text-emerald-500" />
                  企业定制培训
                </h4>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  根据企业业务需求，量身定制内训课程，提升团队技术实力。
                </p>
                <Button size="sm" className="w-full bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 text-xs shadow-sm">
                  联系培训顾问
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
                  {activeCategory === 'calendar' ? '查看近期培训计划' : `精选 ${courses[activeCategory as keyof typeof courses]?.length || 0} 门优质课程`}
                </p>
              </div>
            </div>

            <div className="space-y-4.5">
              {/* @ts-ignore */}
              {courses[activeCategory as keyof typeof courses]?.map((course, idx) => (
                <div key={idx} className="ui-list-item group bg-white rounded-xl border border-slate-200 p-5 hover:shadow-[0_14px_30px_-24px_rgba(37,99,235,0.4)] hover:border-blue-200 transition-all duration-200 hover:-translate-y-0.5">
                  <div className="flex flex-col md:flex-row gap-5">
                    {/* Course Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className={cn(
                          "font-normal border",
                          course.level === "初级" ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                          course.level === "中级" ? "bg-blue-50 text-blue-700 border-blue-100" :
                          course.level === "高级" ? "bg-purple-50 text-purple-700 border-purple-100" :
                          "bg-slate-100 text-slate-700 border-slate-200"
                        )}>
                          {course.level}
                        </Badge>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Video className="w-3.5 h-3.5" /> {course.type}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {course.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {course.title}
                      </h3>
                      
                      <p className="text-sm text-slate-500 leading-relaxed mb-4">
                        {course.desc}
                      </p>
                      
                      {/* @ts-ignore */}
                      {course.tags && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {/* @ts-ignore */}
                          {course.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] px-2 py-1 rounded bg-slate-50 text-slate-500 border border-slate-100">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* @ts-ignore */}
                      {course.features && (
                        <div className="flex gap-4 mb-4">
                          {/* @ts-ignore */}
                          {course.features.map((feat, i) => (
                            <span key={i} className="flex items-center gap-1 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> {feat}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Side */}
                    <div className="md:w-48 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 flex-shrink-0">
                      <div>
                        <div className="text-xs text-slate-400 mb-1">下期开课</div>
                        {/* @ts-ignore */}
                        <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          {/* @ts-ignore */}
                          {course.nextSession || course.nextExam}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 mt-4 md:mt-0">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm h-9 text-xs">
                          立即报名
                        </Button>
                        <Button variant="outline" className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 h-9 text-xs">
                          <FileText className="w-3.5 h-3.5 mr-1.5" /> 查看大纲
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
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
