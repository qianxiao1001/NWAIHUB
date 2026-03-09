import React, { useMemo, useState } from 'react';
import { Layout } from '@/components/layout';
import { Button, Badge } from '@/components/ui/common';
import {
  Bot,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  FileText,
  Flame,
  FolderOpen,
  Grid3X3,
  Heart,
  List,
  Megaphone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
  GraduationCap,
  BarChart3,
  Briefcase,
  BookOpen,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const MARKET_STATS = [
  { label: '智能体总量', value: '3200+' },
  { label: '场景分类', value: '86+' },
  { label: '累计调用', value: '950万+' },
  { label: '企业使用', value: '1200+' },
];

const PRIMARY_NAV = ['推荐', '最新', '热门', '企业精选', '官方推荐'] as const;

const CATEGORY_ITEMS = [
  { name: '全部分类', icon: Grid3X3 },
  { name: '办公协同', icon: Briefcase },
  { name: '政务服务', icon: Building2 },
  { name: '数据分析', icon: BarChart3 },
  { name: '金融风控', icon: ShieldCheck },
  { name: '营销创作', icon: Megaphone },
  { name: '客户服务', icon: Bot },
  { name: '行业工具', icon: Workflow },
  { name: '开发辅助', icon: Code2 },
];

const FEATURE_ZONES = ['行业标杆案例', '爆款智能体', '新品上线', '已验证可用', '企业私有化专区'] as const;

const TOOL_LINKS = ['发布智能体', '智能体管理', 'API 管理', '帮助中心'] as const;

const FILTER_TAGS = ['全部', '已认证', '免费', '企业可用', 'API接入', '私有部署', '多模态', '行业场景'] as const;

const SORT_ITEMS = ['推荐排序', '最新发布', '调用量最高', '企业评分', '最多收藏'] as const;

const FEATURED_STRIPS = [
  { title: '本周热门', desc: '调用增长最快', badge: '热门' },
  { title: '官方推荐', desc: '平台官方精选', badge: '官方' },
  { title: '企业高频', desc: '企业复购率高', badge: '企业精选' },
  { title: '新品上架', desc: '近7日新发布', badge: '新品' },
  { title: '可信应用', desc: '已完成安全审核', badge: '已认证' },
];

const MARKET_AGENTS = [
  {
    title: '会议纪要与决策 Agent',
    desc: '自动沉淀会议纪要、行动项与决策清单，支持多角色分发与追踪。',
    badge: '热门',
    category: '办公协同',
    tags: ['办公协同', '多模态', '企业可用'],
    usage: 268000,
    usageLabel: '26.8万次调用',
    favorites: 15640,
    likes: 8260,
    updated: '2026-03-09',
    author: 'OPC 智能协同组',
    rating: 4.9,
    channels: ['推荐', '热门', '企业精选'],
    filters: ['已认证', '企业可用', '多模态', 'API接入'],
  },
  {
    title: '企业知识问答助手',
    desc: '连接内部制度、流程与知识文档，支持高频业务问答与权限控制。',
    badge: '已认证',
    category: '办公协同',
    tags: ['知识库', 'RAG', '企业服务'],
    usage: 221000,
    usageLabel: '22.1万次调用',
    favorites: 12520,
    likes: 6340,
    updated: '2026-03-07',
    author: '北纬知识引擎',
    rating: 4.8,
    channels: ['推荐', '企业精选'],
    filters: ['已认证', '企业可用', '私有部署', 'API接入'],
  },
  {
    title: '合同审阅助手',
    desc: '快速识别合同风险条款与履约要点，生成标准化审阅意见。',
    badge: '企业精选',
    category: '办公协同',
    tags: ['法务', '风险识别', '文档处理'],
    usage: 147000,
    usageLabel: '14.7万次调用',
    favorites: 9050,
    likes: 4510,
    updated: '2026-03-04',
    author: '法务数智联合组',
    rating: 4.7,
    channels: ['推荐', '企业精选'],
    filters: ['已认证', '企业可用', '行业场景'],
  },
  {
    title: '政务公文写作助手',
    desc: '支持通知、请示、报告模板化写作与格式规范校验。',
    badge: '官方',
    category: '政务服务',
    tags: ['政务', '文书', '规范校验'],
    usage: 196000,
    usageLabel: '19.6万次调用',
    favorites: 11420,
    likes: 5420,
    updated: '2026-03-08',
    author: '北纬政务实验室',
    rating: 4.9,
    channels: ['推荐', '官方推荐', '热门'],
    filters: ['已认证', '免费', '企业可用'],
  },
  {
    title: '政策解读助手',
    desc: '自动解析政策条文，生成申报要点与企业适配建议。',
    badge: '热门',
    category: '政务服务',
    tags: ['政策解读', '知识图谱', '问答'],
    usage: 182000,
    usageLabel: '18.2万次调用',
    favorites: 10310,
    likes: 4980,
    updated: '2026-03-06',
    author: '产业政策中心',
    rating: 4.8,
    channels: ['推荐', '热门'],
    filters: ['已认证', '企业可用', '行业场景'],
  },
  {
    title: '园区招商问答助手',
    desc: '围绕园区政策、配套资源与招商流程提供智能问答服务。',
    badge: '新品',
    category: '政务服务',
    tags: ['招商', '园区服务', '知识库'],
    usage: 73000,
    usageLabel: '7.3万次调用',
    favorites: 3880,
    likes: 1720,
    updated: '2026-03-09',
    author: '园区服务中心',
    rating: 4.6,
    channels: ['推荐', '最新'],
    filters: ['免费', '企业可用', '行业场景'],
  },
  {
    title: '数据分析助手',
    desc: '支持业务数据清洗、洞察总结与多维分析结论输出。',
    badge: '热门',
    category: '数据分析',
    tags: ['数据分析', '自动洞察', 'BI'],
    usage: 244000,
    usageLabel: '24.4万次调用',
    favorites: 13640,
    likes: 7260,
    updated: '2026-03-05',
    author: 'OPC 数据智能中心',
    rating: 4.9,
    channels: ['推荐', '热门'],
    filters: ['已认证', '企业可用', 'API接入', '行业场景'],
  },
  {
    title: 'BI 报表洞察 Agent',
    desc: '自动解读企业 BI 报表，输出异常点与运营动作建议。',
    badge: '企业精选',
    category: '数据分析',
    tags: ['BI', '经营分析', '自动解读'],
    usage: 169000,
    usageLabel: '16.9万次调用',
    favorites: 9680,
    likes: 5020,
    updated: '2026-03-03',
    author: 'BI 应用团队',
    rating: 4.8,
    channels: ['推荐', '企业精选'],
    filters: ['已认证', '企业可用', 'API接入'],
  },
  {
    title: '经营指标预警助手',
    desc: '根据业务阈值与趋势变化自动告警，推送经营风险早知道。',
    badge: '新品',
    category: '数据分析',
    tags: ['预警', '指标监控', '企业服务'],
    usage: 92000,
    usageLabel: '9.2万次调用',
    favorites: 4320,
    likes: 1950,
    updated: '2026-03-09',
    author: '经营分析实验室',
    rating: 4.6,
    channels: ['推荐', '最新'],
    filters: ['企业可用', '行业场景', 'API接入'],
  },
  {
    title: '智能投研助手',
    desc: '聚合财报、公告与舆情数据，自动输出投资线索与风险提示。',
    badge: '热门',
    category: '金融风控',
    tags: ['投研', '风控', '行业情报'],
    usage: 214000,
    usageLabel: '21.4万次调用',
    favorites: 11980,
    likes: 6150,
    updated: '2026-03-06',
    author: '鲸智研究院',
    rating: 4.8,
    channels: ['推荐', '热门', '企业精选'],
    filters: ['已认证', '企业可用', '行业场景', 'API接入'],
  },
  {
    title: '企业信贷风控系统',
    desc: '融合多源征信与经营数据，给出授信风险评分与审批建议。',
    badge: '官方',
    category: '金融风控',
    tags: ['信贷', '评分卡', '企业金融'],
    usage: 156000,
    usageLabel: '15.6万次调用',
    favorites: 8740,
    likes: 4020,
    updated: '2026-03-02',
    author: 'OPC 金融科技组',
    rating: 4.8,
    channels: ['推荐', '官方推荐'],
    filters: ['已认证', '企业可用', '私有部署'],
  },
  {
    title: '风险舆情分析 Agent',
    desc: '实时监测舆情变化并识别潜在事件，支持企业风险应对决策。',
    badge: '已认证',
    category: '金融风控',
    tags: ['舆情', '风险识别', '预警'],
    usage: 125000,
    usageLabel: '12.5万次调用',
    favorites: 6320,
    likes: 2980,
    updated: '2026-03-01',
    author: '风控联合团队',
    rating: 4.7,
    channels: ['推荐', '热门'],
    filters: ['已认证', '企业可用', '行业场景'],
  },
  {
    title: '营销文案助手',
    desc: '面向活动投放、私域运营与品牌传播自动生成高质量营销文案。',
    badge: '热门',
    category: '营销创作',
    tags: ['营销', '文案', '内容生成'],
    usage: 207000,
    usageLabel: '20.7万次调用',
    favorites: 11480,
    likes: 6920,
    updated: '2026-03-07',
    author: '增长实验室',
    rating: 4.8,
    channels: ['推荐', '热门'],
    filters: ['免费', '多模态', '企业可用'],
  },
  {
    title: '短视频脚本助手',
    desc: '根据产品与场景自动生成短视频分镜与脚本，支持多平台风格。',
    badge: '新品',
    category: '营销创作',
    tags: ['脚本创作', '多模态', '品牌营销'],
    usage: 94000,
    usageLabel: '9.4万次调用',
    favorites: 5250,
    likes: 2810,
    updated: '2026-03-09',
    author: '创意内容工作室',
    rating: 4.6,
    channels: ['推荐', '最新'],
    filters: ['免费', '多模态', '行业场景'],
  },
  {
    title: '品牌内容创作助手',
    desc: '输出统一品牌语调的图文内容，支持活动海报与传播文案协同生成。',
    badge: '企业精选',
    category: '营销创作',
    tags: ['品牌', '图文生成', '运营提效'],
    usage: 136000,
    usageLabel: '13.6万次调用',
    favorites: 7620,
    likes: 3480,
    updated: '2026-03-04',
    author: '品牌创新中心',
    rating: 4.7,
    channels: ['推荐', '企业精选'],
    filters: ['企业可用', '多模态', 'API接入'],
  },
  {
    title: '客服接待 Agent',
    desc: '支持多轮对话、意图识别与服务分流，提升首问解决率。',
    badge: '已认证',
    category: '客户服务',
    tags: ['客服', '工单流转', '知识问答'],
    usage: 232000,
    usageLabel: '23.2万次调用',
    favorites: 12110,
    likes: 6480,
    updated: '2026-03-05',
    author: '北纬服务云',
    rating: 4.8,
    channels: ['推荐', '热门'],
    filters: ['已认证', '企业可用', '私有部署', 'API接入'],
  },
  {
    title: '售后工单助手',
    desc: '智能识别工单优先级并自动分派，缩短售后响应链路。',
    badge: '企业精选',
    category: '客户服务',
    tags: ['售后', '工单', '自动分流'],
    usage: 118000,
    usageLabel: '11.8万次调用',
    favorites: 6730,
    likes: 3160,
    updated: '2026-03-02',
    author: 'OPC 服务运营组',
    rating: 4.7,
    channels: ['推荐', '企业精选'],
    filters: ['已认证', '企业可用', 'API接入'],
  },
  {
    title: '客户满意度分析助手',
    desc: '自动聚类用户反馈并提炼改进项，形成服务质量闭环报告。',
    badge: '新品',
    category: '客户服务',
    tags: ['满意度', '文本分析', '服务优化'],
    usage: 78000,
    usageLabel: '7.8万次调用',
    favorites: 3950,
    likes: 1840,
    updated: '2026-03-09',
    author: '体验管理实验室',
    rating: 4.6,
    channels: ['推荐', '最新'],
    filters: ['企业可用', '行业场景'],
  },
  {
    title: '制造巡检助手',
    desc: '面向制造场景实现巡检记录、异常识别与工序问题闭环。',
    badge: '官方',
    category: '行业工具',
    tags: ['制造', '巡检', '异常识别'],
    usage: 129000,
    usageLabel: '12.9万次调用',
    favorites: 7050,
    likes: 3520,
    updated: '2026-03-03',
    author: '产业应用组',
    rating: 4.8,
    channels: ['推荐', '官方推荐'],
    filters: ['已认证', '企业可用', '行业场景'],
  },
  {
    title: '医疗问诊助手',
    desc: '支持初步问诊信息收集与分诊建议，提升医疗服务接待效率。',
    badge: '已认证',
    category: '行业工具',
    tags: ['医疗', '问诊', '分诊'],
    usage: 105000,
    usageLabel: '10.5万次调用',
    favorites: 5640,
    likes: 2670,
    updated: '2026-03-01',
    author: '医疗智能协作组',
    rating: 4.7,
    channels: ['推荐', '热门'],
    filters: ['已认证', '行业场景', '私有部署'],
  },
  {
    title: '教育备课助手',
    desc: '快速生成教案、课堂练习与分层教学建议，服务培训与教学场景。',
    badge: '企业精选',
    category: '行业工具',
    tags: ['教育', '教案', '课程设计'],
    usage: 93000,
    usageLabel: '9.3万次调用',
    favorites: 4980,
    likes: 2380,
    updated: '2026-03-06',
    author: '教育科技实验室',
    rating: 4.7,
    channels: ['推荐', '企业精选'],
    filters: ['免费', '行业场景', '企业可用'],
  },
  {
    title: 'API 调试助手',
    desc: '支持接口联调、参数示例生成与错误定位，提升开发联调效率。',
    badge: '官方',
    category: '开发辅助',
    tags: ['开发', 'API', '调试'],
    usage: 164000,
    usageLabel: '16.4万次调用',
    favorites: 8320,
    likes: 3890,
    updated: '2026-03-05',
    author: 'OPC 开发者中心',
    rating: 4.8,
    channels: ['推荐', '官方推荐'],
    filters: ['已认证', '企业可用', 'API接入'],
  },
  {
    title: '数据清洗 Agent',
    desc: '自动识别脏数据并提供清洗规则，支撑训练与分析数据质量治理。',
    badge: '热门',
    category: '开发辅助',
    tags: ['数据治理', 'ETL', '自动化'],
    usage: 146000,
    usageLabel: '14.6万次调用',
    favorites: 7680,
    likes: 3570,
    updated: '2026-03-04',
    author: '数据工程团队',
    rating: 4.8,
    channels: ['推荐', '热门', '企业精选'],
    filters: ['已认证', '企业可用', 'API接入'],
  },
  {
    title: 'RAG 知识库构建助手',
    desc: '面向企业知识场景快速完成切片、向量化与检索增强问答配置。',
    badge: '新品',
    category: '开发辅助',
    tags: ['RAG', '知识库', '开发效率'],
    usage: 89000,
    usageLabel: '8.9万次调用',
    favorites: 4820,
    likes: 2290,
    updated: '2026-03-09',
    author: '平台架构组',
    rating: 4.6,
    channels: ['推荐', '最新', '企业精选'],
    filters: ['企业可用', 'API接入', '私有部署'],
  },
];

const BADGE_STYLES: Record<string, string> = {
  热门: 'bg-rose-50 text-rose-700 border-rose-100',
  新品: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  官方: 'bg-blue-50 text-blue-700 border-blue-100',
  已认证: 'bg-slate-100 text-slate-700 border-slate-200',
  企业精选: 'bg-violet-50 text-violet-700 border-violet-100',
};

const AGENT_VISUAL_MAP: Record<string, { icon: React.ComponentType<{ className?: string }>; box: string; text: string }> = {
  办公协同: { icon: Briefcase, box: 'bg-blue-50 border-blue-100', text: 'text-blue-700' },
  政务服务: { icon: Building2, box: 'bg-cyan-50 border-cyan-100', text: 'text-cyan-700' },
  数据分析: { icon: BarChart3, box: 'bg-indigo-50 border-indigo-100', text: 'text-indigo-700' },
  金融风控: { icon: ShieldCheck, box: 'bg-amber-50 border-amber-100', text: 'text-amber-700' },
  营销创作: { icon: Sparkles, box: 'bg-fuchsia-50 border-fuchsia-100', text: 'text-fuchsia-700' },
  客户服务: { icon: Bot, box: 'bg-teal-50 border-teal-100', text: 'text-teal-700' },
  行业工具: { icon: Workflow, box: 'bg-sky-50 border-sky-100', text: 'text-sky-700' },
  开发辅助: { icon: Code2, box: 'bg-slate-100 border-slate-200', text: 'text-slate-700' },
};

const MarketHero = () => (
  <section className="relative bg-slate-50 border-b border-slate-200 py-5 overflow-hidden ui-reveal">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.18]" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl">
        <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-semibold">
          <Sparkles className="w-3 h-3" />
          智能体市场频道
        </div>
        <h1 className="mt-2 mobile-title-hero lg:text-2xl lg:md:text-3xl font-bold text-slate-900 tracking-tight leading-[1.15]">智能体市场</h1>
        <p className="mt-2 mobile-text-body lg:text-xs text-slate-600 leading-5 lg:max-w-3xl mobile-text-truncate-3">
          面向企业与园区提供高可用智能体应用广场，支持快速浏览、筛选、评估与即刻调用。
        </p>
        <div className="mt-3 flex flex-col sm:flex-row gap-2">
          <Button className="mobile-button bg-blue-600 hover:bg-blue-700 text-white shadow-sm">发布智能体</Button>
          <Button variant="secondary" className="mobile-button bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
            浏览热门
          </Button>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-1.5">
          {MARKET_STATS.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-slate-200 bg-white/85 backdrop-blur px-2 py-1 shadow-sm">
              <p className="text-sm font-bold text-slate-900">{stat.value}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AgentMarket = () => {
  const [activePrimary, setActivePrimary] = useState<(typeof PRIMARY_NAV)[number]>('推荐');
  const [activeCategory, setActiveCategory] = useState('全部分类');
  const [activeTag, setActiveTag] = useState<(typeof FILTER_TAGS)[number]>('全部');
  const [activeSort, setActiveSort] = useState<(typeof SORT_ITEMS)[number]>('推荐排序');
  const [searchText, setSearchText] = useState('');
  const [sidebarDrawerOpen, setSidebarDrawerOpen] = useState(false);

  const displayedAgents = useMemo(() => {
    const lowerKeyword = searchText.trim().toLowerCase();
    const list = MARKET_AGENTS.filter((agent) => {
      const matchPrimary = agent.channels.includes(activePrimary);
      const matchCategory = activeCategory === '全部分类' || agent.category === activeCategory;
      const matchTag = activeTag === '全部' || agent.filters.includes(activeTag);
      const matchSearch =
        !lowerKeyword ||
        agent.title.toLowerCase().includes(lowerKeyword) ||
        agent.desc.toLowerCase().includes(lowerKeyword) ||
        agent.tags.join(' ').toLowerCase().includes(lowerKeyword) ||
        agent.author.toLowerCase().includes(lowerKeyword);
      return matchPrimary && matchCategory && matchTag && matchSearch;
    });

    return [...list].sort((a, b) => {
      if (activeSort === '最新发布') return b.updated.localeCompare(a.updated);
      if (activeSort === '调用量最高') return b.usage - a.usage;
      if (activeSort === '企业评分') return b.rating - a.rating;
      if (activeSort === '最多收藏') return b.favorites - a.favorites;
      return b.usage + b.favorites - (a.usage + a.favorites);
    });
  }, [activeCategory, activePrimary, activeSort, activeTag, searchText]);

  return (
    <section className="bg-white py-4 ui-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-5">
          
          {/* Mobile Navigation Controls */}
          <div className="lg:hidden mb-4 flex gap-2">
            <button 
              onClick={() => setSidebarDrawerOpen(true)}
              className="flex items-center gap-2 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-slate-200 transition-colors mobile-touch-feedback"
            >
              <FolderOpen className="w-4 h-4" />
              分类
            </button>
            <select 
              value={activePrimary} 
              onChange={(e) => setActivePrimary(e.target.value as any)}
              className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            >
              {PRIMARY_NAV.map(item => (
                <option key={item} value={item}>{item}</option>
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
                <h3 className="font-semibold text-slate-900">分类导航</h3>
                <button 
                  onClick={() => setSidebarDrawerOpen(false)}
                  className="p-1 text-slate-600 hover:bg-slate-50 rounded"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 p-4 space-y-6 overflow-y-auto">
                {/* Navigation Groups */}
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">一级导航</h4>
                  <div className="space-y-1">
                    {PRIMARY_NAV.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setActivePrimary(item);
                          setSidebarDrawerOpen(false);
                        }}
                        className={cn(
                          'w-full flex items-center justify-between px-2.5 py-2 rounded-md text-sm font-medium transition-all duration-200',
                          activePrimary === item
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        )}
                      >
                        {item}
                        {activePrimary === item && <ChevronRight className="w-3 h-3 text-blue-500" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">分类筛选</h4>
                  <div className="space-y-1">
                    {CATEGORY_ITEMS.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          setActiveCategory(item.name);
                          setSidebarDrawerOpen(false);
                        }}
                        className={cn(
                          'w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm transition-all duration-200',
                          activeCategory === item.name
                            ? 'bg-slate-100 text-slate-900 font-medium'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        )}
                      >
                        <item.icon className={cn('w-3.5 h-3.5', activeCategory === item.name ? 'text-slate-900' : 'text-slate-400')} />
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">特色专区</h4>
                  <div className="space-y-1">
                    {FEATURE_ZONES.map((item) => (
                      <button
                        key={item}
                        className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all"
                      >
                        <Flame className="w-3 h-3 text-amber-500" />
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-slate-200 space-y-2">
                {TOOL_LINKS.map((item) => (
                  <button
                    key={item}
                    className="w-full text-left rounded-md px-2.5 py-2 text-sm text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <div className="space-y-3 lg:sticky lg:top-20">
              {/* Navigation Groups */}
              <div className="space-y-0.5">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-1">一级导航</h3>
                {PRIMARY_NAV.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActivePrimary(item)}
                    className={cn(
                      'w-full flex items-center justify-between px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200',
                      activePrimary === item
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    )}
                  >
                    {item}
                    {activePrimary === item && <ChevronRight className="w-3 h-3 text-blue-500" />}
                  </button>
                ))}
              </div>

              <div className="space-y-0.5">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-1">分类筛选</h3>
                {CATEGORY_ITEMS.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveCategory(item.name)}
                    className={cn(
                      'w-full flex items-center gap-2 px-2.5 py-1 rounded-md text-xs transition-all duration-200',
                      activeCategory === item.name
                        ? 'bg-slate-100 text-slate-900 font-medium'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    )}
                  >
                    <item.icon className={cn('w-3.5 h-3.5', activeCategory === item.name ? 'text-slate-900' : 'text-slate-400')} />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-0.5">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-1">特色专区</h3>
                {FEATURE_ZONES.map((item) => (
                  <button
                    key={item}
                    className="w-full flex items-center gap-2 px-2.5 py-1 rounded-md text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all"
                  >
                    <Flame className="w-3 h-3 text-amber-500" />
                    {item}
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100">
                <div className="space-y-0.5">
                  {TOOL_LINKS.map((item) => (
                    <button
                      key={item}
                      className="w-full text-left rounded-md px-2.5 py-1 text-[11px] text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9 xl:col-span-10">
            {/* Search & Filter Bar */}
            <div className="mb-2.5 space-y-2.5">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="搜索智能体..."
                    className="w-full h-8 rounded-md border border-slate-300 bg-white pl-8 pr-4 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 shadow-sm"
                  />
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  {SORT_ITEMS.map((item) => (
                    <button
                      key={item}
                      onClick={() => setActiveSort(item)}
                      className={cn(
                        'px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-all border',
                        activeSort === item
                          ? 'bg-slate-800 border-slate-800 text-white shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {FILTER_TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      className={cn(
                        'px-2 py-0.5 rounded-md text-[10px] font-medium border transition-all',
                        activeTag === tag
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : 'bg-transparent text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-700'
                      )}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="hidden sm:flex items-center rounded-md border border-slate-200 bg-white p-0.5">
                  <button className="h-5 px-1.5 rounded-[3px] bg-slate-100 text-slate-900 text-[10px] font-medium inline-flex items-center gap-1">
                    <Grid3X3 className="w-3 h-3" />
                    卡片
                  </button>
                  <button className="h-5 px-1.5 rounded-[3px] text-slate-500 text-[10px] font-medium inline-flex items-center gap-1 hover:text-slate-700">
                    <List className="w-3 h-3" />
                    列表
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 text-[10px] text-slate-400 mb-2">
              <span>共 {displayedAgents.length} 个智能体</span>
            </div>

            {/* Featured Strips - Horizontal Scroll */}
            <div className="mb-4 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 min-w-max pb-1">
                {FEATURED_STRIPS.map((item) => (
                  <div key={item.title} className="w-[150px] rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-2.5 py-2 shadow-sm">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-[11px] font-bold text-slate-800">{item.title}</p>
                      <span className={cn('text-[9px] px-1 py-0 rounded border font-medium', BADGE_STYLES[item.badge])}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[9px] text-slate-500 truncate">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
              {displayedAgents.map((agent) => (
                <article key={agent.title} className="card-enterprise group flex flex-col p-2.5 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200">
                  <div className="flex items-start justify-between mb-2">
                    <div className={cn('w-7 h-7 rounded-md border flex items-center justify-center', AGENT_VISUAL_MAP[agent.category]?.box || 'bg-slate-50 border-slate-200')}>
                      {React.createElement(AGENT_VISUAL_MAP[agent.category]?.icon || Bot, {
                        className: cn('w-3.5 h-3.5', AGENT_VISUAL_MAP[agent.category]?.text || 'text-slate-700'),
                      })}
                    </div>
                    {agent.badge && (
                      <span className={cn('text-[9px] px-1 py-0 rounded border font-medium', BADGE_STYLES[agent.badge] || 'bg-slate-100 text-slate-600 border-slate-200')}>
                        {agent.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-[13px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1 truncate">
                    {agent.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2 h-[30px] mb-2">{agent.desc}</p>

                  <div className="flex flex-wrap gap-1 mb-2">
                    {agent.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[9px] px-1 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500" />{agent.usageLabel}</span>
                      <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400" />{agent.rating}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <Button variant="outline" size="sm" className="h-6 text-[11px] border-slate-200 hover:bg-slate-50 hover:text-blue-600">
                        详情
                      </Button>
                      <Button size="sm" className="h-6 text-[11px] bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                        使用
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function AppsPage() {
  return (
    <Layout>
      <MarketHero />
      <AgentMarket />
    </Layout>
  );
}
