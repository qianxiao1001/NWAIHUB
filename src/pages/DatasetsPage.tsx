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
  <div className="relative bg-slate-50 border-b border-slate-200 pt-10 pb-12 overflow-hidden ui-reveal">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.16]" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-4">
          <Database className="w-3.5 h-3.5" />
          海量高质量数据资源
        </div>
        
        <h1 className="text-3xl md:text-[38px] font-bold text-slate-900 mb-4 tracking-tight">
          数据资源交易平台
        </h1>
        
        <p className="text-base text-slate-600 mb-7 max-w-2xl mx-auto">
          汇聚金融、医疗、政务等垂直领域高质量数据集，支持在线检索、预览与安全交易，赋能大模型训练与行业应用。
        </p>
        
        {/* Search Box */}
        <div className="relative max-w-2xl mx-auto mb-6">
          <div className="relative flex items-center bg-white rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-blue-500/15 focus-within:border-blue-400 transition-all duration-200 shadow-[0_8px_20px_-18px_rgba(15,23,42,0.5)]">
             <div className="pl-4 pr-3 text-slate-400">
               <Search className="w-5 h-5" />
             </div>
             <input 
               type="text" 
               placeholder="搜索数据集名称、ID、供应商..." 
               className="w-full py-3 bg-transparent border-none focus:outline-none text-slate-900 placeholder:text-slate-400 text-sm"
             />
             <div className="pr-2 flex items-center gap-2">
               <div className="h-6 w-px bg-slate-200 mx-1" />
               <select className="bg-transparent text-sm text-slate-600 font-medium focus:outline-none cursor-pointer hover:text-blue-600 transition-colors">
                 <option>全部类目</option>
                 <option>文本数据</option>
                 <option>图像数据</option>
                 <option>音频数据</option>
               </select>
               <Button className="rounded-md px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-sm ml-1">
                 搜索
               </Button>
             </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-blue-600" />
            <span><strong className="text-slate-900">5,000+</strong> 数据集</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span><strong className="text-slate-900">100%</strong> 官方认证</span>
          </div>
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-blue-600" />
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
    <div className="bg-white min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Sidebar Filters */}
          <div className="lg:col-span-3 space-y-6">
            {/* Categories */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                数据分类
              </h3>
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
                    <span className="text-xs text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4 text-blue-600" />
                筛选条件
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-2 block uppercase">数据格式</label>
                  <div className="space-y-2">
                    {['文本 (Text)', '图像 (Image)', '音频 (Audio)', '视频 (Video)', '表格 (Table)'].map((fmt, i) => (
                      <label key={i} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-slate-900">
                        <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                        {fmt}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <label className="text-xs font-semibold text-slate-500 mb-2 block uppercase">价格区间</label>
                  <div className="space-y-2">
                    {['免费', '¥1 - ¥1,000', '¥1,000 - ¥10,000', '¥10,000+'].map((price, i) => (
                      <label key={i} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-slate-900">
                        <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
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
            {/* Toolbar */}
            <div className="flex flex-wrap justify-between items-center mb-5 gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>排序：</span>
                <select className="bg-transparent border-none font-medium text-slate-900 focus:ring-0 cursor-pointer p-0">
                  <option>综合推荐</option>
                  <option>最新发布</option>
                  <option>下载量</option>
                  <option>价格</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-8 text-xs">
                  <Globe className="w-3.5 h-3.5 mr-1.5" />
                  API 接入文档
                </Button>
              </div>
            </div>

            {/* Dataset Cards */}
            <div className="space-y-3.5">
              {datasets.map((item, idx) => (
                <div key={idx} className="ui-list-item group bg-white rounded-lg border border-slate-200 p-4.5 hover:shadow-[0_14px_30px_-24px_rgba(37,99,235,0.45)] hover:border-blue-300 transition-all duration-200 hover:-translate-y-0.5">
                  <div className="flex flex-col md:flex-row gap-5">
                    {/* Left: Icon & Basic Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1.5">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                            {item.name}
                          </h3>
                          {item.certified && (
                            <div className="flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100" title="官方认证">
                              <ShieldCheck className="w-3 h-3" /> 官方认证
                            </div>
                          )}
                        </div>
                        <span className="text-lg font-bold text-slate-900 md:hidden">{item.price}</span>
                      </div>
                      
                      <p className="text-sm text-slate-500 mb-3 line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400">供应商:</span>
                          <span className="font-medium text-slate-700">{item.provider}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400">数据量:</span>
                          <span className="font-medium text-slate-700">{item.size}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400">格式:</span>
                          <span className="font-medium text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">{item.format}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400">下载:</span>
                          <span className="font-medium text-slate-700">{item.downloads}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Price & Action */}
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 md:pl-5 md:border-l md:border-slate-100 min-w-[136px]">
                      <div className="hidden md:block text-right">
                        <div className="text-xl font-bold text-slate-900">{item.price}</div>
                        <div className="text-xs text-slate-400 mt-1">含税价</div>
                      </div>
                      
                      <div className="flex gap-2 w-full md:w-auto">
                        <Button variant="outline" size="sm" className="flex-1 md:flex-none text-xs h-9 border-slate-300 hover:bg-slate-50">
                          <Eye className="w-3.5 h-3.5 md:mr-1.5" />
                          <span className="hidden md:inline">预览</span>
                        </Button>
                        <Button size="sm" className="flex-1 md:flex-none text-xs h-9 bg-blue-600 hover:bg-blue-700 shadow-sm">
                          <ShoppingCart className="w-3.5 h-3.5 md:mr-1.5" />
                          <span className="hidden md:inline">购买</span>
                          <span className="md:hidden">购买</span>
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
