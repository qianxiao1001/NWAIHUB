import React, { useState } from 'react';
import { Layout } from '@/components/layout';
import { Button, Badge, Card } from '@/components/ui/common';
import { 
  Search, Database, Download, FileText, Tag, ChevronRight, 
  Filter, ShoppingCart, Eye, CheckCircle2, ShieldCheck, 
  BarChart, Layers, Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Hero Section ---
const DatasetHero = () => (
  <div className="relative bg-slate-50 border-b border-slate-200 py-5 overflow-hidden ui-reveal">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.16]" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-semibold mb-3">
          <Database className="w-3 h-3" />
          海量高质量数据资源
        </div>
        
        <h1 className="mobile-title-hero lg:text-2xl font-bold text-slate-900 mb-2 tracking-tight">
          数据资源交易平台
        </h1>
        
        <p className="mobile-text-body lg:text-xs text-slate-600 mb-4 lg:max-w-2xl mx-auto mobile-text-truncate-3">
          汇聚金融、医疗、政务等垂直领域高质量数据集，支持在线检索、预览与安全交易，赋能大模型训练与行业应用。
        </p>
        
        {/* Search Box - Full width on mobile */}
        <div className="relative max-w-xl mx-auto mb-3">
          <div className="relative flex items-center bg-white rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-blue-500/15 focus-within:border-blue-400 transition-all duration-200 shadow-sm">
             <div className="pl-3 pr-2 text-slate-400">
               <Search className="w-3.5 h-3.5" />
             </div>
             <input 
               type="text" 
               placeholder="搜索数据集名称、ID、供应商..." 
               className="w-full py-2 bg-transparent border-none focus:outline-none text-slate-900 placeholder:text-slate-400 mobile-text-body"
             />
             <div className="pr-1 flex items-center gap-2">
               <div className="h-4 w-px bg-slate-200 mx-1" />
               <select className="bg-transparent text-[11px] text-slate-600 font-medium focus:outline-none cursor-pointer hover:text-blue-600 transition-colors">
                 <option>全部类目</option>
                 <option>文本数据</option>
                 <option>图像数据</option>
                 <option>音频数据</option>
               </select>
               <Button className="rounded-md px-3 h-7 bg-blue-600 hover:bg-blue-700 text-white shadow-sm text-[11px]">
                 搜索
               </Button>
             </div>
          </div>
        </div>

        {/* Quick Stats - Horizontal scroll on mobile */}
        <div className="flex justify-center gap-5 text-[11px] text-slate-500 mobile-scroll-x">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Database className="w-3 h-3 text-blue-600" />
            <span><strong className="text-slate-900">5,000+</strong> 数据集</span>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <ShieldCheck className="w-3 h-3 text-blue-600" />
            <span><strong className="text-slate-900">100%</strong> 官方认证</span>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Download className="w-3 h-3 text-blue-600" />
            <span><strong className="text-slate-900">10PB+</strong> 累计下载</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Content ---
const DatasetList = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const categories = [
    { id: 'all', name: '全部数据', count: 1204 },
    { id: 'finance', name: '金融/财经', count: 328 },
    { id: 'medical', name: '医疗健康', count: 215 },
    { id: 'gov', name: '政务公开', count: 186 },
    { id: 'transport', name: '交通出行', count: 142 },
    { id: 'education', name: '教育科研', count: 98 },
    { id: 'media', name: '媒体娱乐', count: 235 },
  ];

  const datasets = [
    { 
      id: "DS-2024-001",
      name: "中文金融研报精选语料库", 
      provider: "财联社",
      size: "50GB", 
      format: "JSONL",
      price: "¥ 5,000",
      downloads: "1.2k",
      tags: ["金融", "NLP", "预训练"],
      certified: true,
      desc: "包含2020-2023年A股上市公司研报、公告及新闻资讯，经过清洗去重，适用于金融大模型预训练与微调。" 
    },
    { 
      id: "DS-2024-002",
      name: "三甲医院脱敏电子病历数据集", 
      provider: "协和医院",
      size: "120GB", 
      format: "CSV",
      price: "询价",
      downloads: "856",
      tags: ["医疗", "知识图谱", "敏感数据"],
      certified: true,
      desc: "包含50万份脱敏电子病历，涵盖内科、外科、儿科等主要科室，支持医疗诊断辅助系统研发。" 
    },
    { 
      id: "DS-2024-003",
      name: "全球高分辨率遥感影像数据集", 
      provider: "航天宏图",
      size: "2TB", 
      format: "TIFF",
      price: "¥ 12,000",
      downloads: "342",
      tags: ["遥感", "CV", "目标检测"],
      certified: true,
      desc: "覆盖全球主要城市的高分辨率卫星遥感影像，包含道路、建筑、植被等标注信息，适用于智慧城市应用。" 
    },
    { 
      id: "DS-2024-004",
      name: "大规模多轮对话指令微调集", 
      provider: "智谱AI",
      size: "5GB", 
      format: "JSON",
      price: "免费",
      downloads: "5.6k",
      tags: ["对话", "SFT", "开源"],
      certified: true,
      desc: "包含100万条高质量多轮对话数据，覆盖日常闲聊、知识问答、代码生成等场景，支持模型指令微调。" 
    },
    { 
      id: "DS-2024-005",
      name: "自动驾驶路测场景视频库", 
      provider: "百度Apollo",
      size: "5TB", 
      format: "MP4",
      price: "询价",
      downloads: "210",
      tags: ["自动驾驶", "视频", "感知"],
      certified: true,
      desc: "包含各种天气（雨、雪、雾）和路况下的自动驾驶路测视频，附带激光雷达点云数据，用于感知算法训练。" 
    },
  ];

  return (
    <div className="bg-white min-h-screen py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Filter buttons and drawer | Desktop: Sidebar */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-5">
          
          {/* Mobile Filter Controls */}
          <div className="lg:hidden mb-4 flex gap-2">
            <button 
              onClick={() => setFilterDrawerOpen(true)}
              className="flex items-center gap-2 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-slate-200 transition-colors mobile-touch-feedback"
            >
              <Filter className="w-4 h-4" />
              筛选
            </button>
            <select className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500">
              <option>综合推荐</option>
              <option>最新发布</option>
              <option>下载量</option>
              <option>价格</option>
            </select>
          </div>

          {/* Filter Drawer Overlay */}
          {filterDrawerOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden mobile-fade-in"
              onClick={() => setFilterDrawerOpen(false)}
            />
          )}

          {/* Filter Drawer */}
          <div className={cn(
            "fixed top-0 left-0 h-full w-[300px] bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300",
            filterDrawerOpen ? "translate-x-0" : "-translate-x-full"
          )}>
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <h3 className="font-semibold text-slate-900">筛选条件</h3>
                <button 
                  onClick={() => setFilterDrawerOpen(false)}
                  className="p-1 text-slate-600 hover:bg-slate-50 rounded"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 p-4 space-y-6 overflow-y-auto">
                {/* Categories */}
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-sm">
                    <Layers className="w-4 h-4 text-blue-600" />
                    数据分类
                  </h4>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-all duration-200",
                          activeCategory === cat.id
                            ? "bg-blue-50 text-blue-700 font-medium"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        )}
                      >
                        <span>{cat.name}</span>
                        <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{cat.count}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filters */}
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-sm">
                    <Filter className="w-4 h-4 text-blue-600" />
                    筛选条件
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-slate-500 mb-2 block">数据格式</label>
                      <div className="space-y-2">
                        {['文本 (Text)', '图像 (Image)', '音频 (Audio)', '视频 (Video)', '表格 (Table)'].map((fmt, i) => (
                          <label key={i} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-slate-900">
                            <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4" />
                            {fmt}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-slate-500 mb-2 block">价格区间</label>
                      <div className="space-y-2">
                        {['免费', '¥1 - ¥1,000', '¥1,000 - ¥10,000', '¥10,000+'].map((price, i) => (
                          <label key={i} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-slate-900">
                            <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4" />
                            {price}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-slate-200 space-y-2">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setFilterDrawerOpen(false)}
                >
                  应用筛选
                </Button>
                <Button 
                  variant="secondary" 
                  className="w-full border-slate-200 text-slate-600 hover:bg-slate-50"
                  onClick={() => setFilterDrawerOpen(false)}
                >
                  重置
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-3 space-y-2.5">
            {/* Categories */}
            <div>
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-[13px]">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                数据分类
              </h3>
              <div className="space-y-0.5">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-2.5 py-1 text-[13px] rounded-md transition-all duration-200",
                      activeCategory === cat.id
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div>
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-[13px]">
                <Filter className="w-3.5 h-3.5 text-blue-600" />
                筛选条件
              </h3>
              <div className="space-y-2.5">
                <div>
                  <label className="text-[11px] font-semibold text-slate-500 mb-1 block uppercase">数据格式</label>
                  <div className="space-y-1">
                    {['文本 (Text)', '图像 (Image)', '音频 (Audio)', '视频 (Video)', '表格 (Table)'].map((fmt, i) => (
                      <label key={i} className="flex items-center gap-2 text-[13px] text-slate-600 cursor-pointer hover:text-slate-900">
                        <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3 h-3" />
                        {fmt}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <label className="text-[11px] font-semibold text-slate-500 mb-1 block uppercase">价格区间</label>
                  <div className="space-y-1">
                    {['免费', '¥1 - ¥1,000', '¥1,000 - ¥10,000', '¥10,000+'].map((price, i) => (
                      <label key={i} className="flex items-center gap-2 text-[13px] text-slate-600 cursor-pointer hover:text-slate-900">
                        <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3 h-3" />
                        {price}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main List */}
          <div className="lg:col-span-9">
            {/* Toolbar - Simplified on mobile */}
            <div className="flex flex-wrap justify-between items-center mb-2.5 gap-3">
              <div className="hidden lg:flex items-center gap-2 text-[13px] text-slate-500">
                <span>排序：</span>
                <select className="bg-transparent border-none font-medium text-slate-900 focus:ring-0 cursor-pointer p-0 text-[13px]">
                  <option>综合推荐</option>
                  <option>最新发布</option>
                  <option>下载量</option>
                  <option>价格</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-7 text-[11px]">
                  <Globe className="w-3 h-3 mr-1.5" />
                  API 接入文档
                </Button>
              </div>
            </div>

            {/* Dataset Cards - Mobile optimized */}
            <div className="space-y-3">
              {datasets.map((item, idx) => (
                <div key={idx} className="card-enterprise group p-3 hover:shadow-md hover:border-blue-300 transition-all duration-200 mobile-touch-feedback">
                  <div className="flex flex-col gap-3">
                    {/* Top: Title and Certification */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {item.name}
                      </h3>
                      {item.certified && (
                        <div className="flex items-center gap-0.5 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 shrink-0" title="官方认证">
                          <ShieldCheck className="w-3 h-3" /> 官方认证
                        </div>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed mobile-text-truncate-3">
                      {item.desc}
                    </p>
                    
                    {/* Tags - Horizontal scroll on mobile */}
                    <div className="mobile-scroll-x">
                      <div className="mobile-scroll-content">
                        {item.tags?.map((tag) => (
                          <span key={tag} className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded flex-shrink-0">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Metadata */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] text-slate-500">
                      <div>
                        <div className="text-slate-400">供应商</div>
                        <div className="font-medium text-slate-700">{item.provider}</div>
                      </div>
                      <div>
                        <div className="text-slate-400">数据量</div>
                        <div className="font-medium text-slate-700">{item.size}</div>
                      </div>
                      <div>
                        <div className="text-slate-400">格式</div>
                        <div className="font-medium text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">{item.format}</div>
                      </div>
                      <div>
                        <div className="text-slate-400">下载</div>
                        <div className="font-medium text-slate-700">{item.downloads}</div>
                      </div>
                    </div>
                    
                    {/* Bottom: Price and Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <div>
                        <div className="text-base font-bold text-slate-900">{item.price}</div>
                        <div className="text-[10px] text-slate-400">含税价</div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-7 text-xs border-slate-300 hover:bg-slate-50 px-3">
                          <Eye className="w-3 h-3 mr-1" />
                          预览
                        </Button>
                        <Button size="sm" className="h-7 text-xs bg-blue-600 hover:bg-blue-700 shadow-sm px-3">
                          <ShoppingCart className="w-3 h-3 mr-1" />
                          购买
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-6 flex justify-center">
              <div className="flex gap-1">
                <Button variant="outline" size="sm" disabled className="w-9 h-9 p-0">
                  &lt;
                </Button>
                <Button variant="default" size="sm" className="w-9 h-9 p-0 bg-blue-600 hover:bg-blue-700">1</Button>
                <Button variant="outline" size="sm" className="w-9 h-9 p-0 hover:bg-slate-50">2</Button>
                <Button variant="outline" size="sm" className="w-9 h-9 p-0 hover:bg-slate-50">3</Button>
                <span className="flex items-center justify-center w-9 h-9 text-slate-400">...</span>
                <Button variant="outline" size="sm" className="w-9 h-9 p-0 hover:bg-slate-50">12</Button>
                <Button variant="outline" size="sm" className="w-9 h-9 p-0 hover:bg-slate-50">
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DatasetsPage() {
  return (
    <Layout>
      <DatasetHero />
      <DatasetList />
    </Layout>
  );
}
