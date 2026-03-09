import React from 'react';
import { 
  ChevronLeft, Settings, Database, Box, Workflow, 
  Plus, Play, Save, Share2, MoreHorizontal,
  LayoutTemplate, MessageSquare, Variable, Command,
  Search, Bell, HelpCircle, Code, Zap, Layers,
  PanelLeft, PanelRight, Monitor, Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/common';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function AgentIDEPage() {
  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* 1. Thin Announcement Bar */}
      <div className="h-8 bg-blue-50 border-b border-blue-100 flex items-center justify-center text-xs text-blue-700 px-4">
        <span className="font-medium">全新软积木引擎 2.0 已发布 — 性能提升 300%</span>
      </div>

      {/* 2. Main Top Toolbar */}
      <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 hover:bg-slate-100 rounded-md text-slate-500 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white">
              <Box className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-800">未命名应用</span>
            <span className="text-xs px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded border border-slate-200">草稿</span>
          </div>
        </div>

        {/* Center Tabs */}
        <div className="absolute left-1/2 -translate-x-1/2 flex bg-slate-100 p-1 rounded-lg">
          <button className="px-4 py-1.5 text-xs font-medium bg-white text-slate-900 shadow-sm rounded-md transition-all">
            业务逻辑
          </button>
          <button className="px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-all">
            用户界面
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-slate-400 mr-2">
            <button className="p-2 hover:bg-slate-100 rounded-md"><Play className="w-4 h-4" /></button>
            <button className="p-2 hover:bg-slate-100 rounded-md"><Monitor className="w-4 h-4" /></button>
            <button className="p-2 hover:bg-slate-100 rounded-md"><Smartphone className="w-4 h-4" /></button>
          </div>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white h-8 text-xs px-4">
            发布
          </Button>
          <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
            <span className="text-xs font-bold">U</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* 3. Left Fixed Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 z-10">
          <div className="flex-1 overflow-y-auto py-3 px-2 space-y-6">
            {/* Section: Workflow */}
            <div>
              <div className="flex items-center justify-between mb-2 px-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">工作流</span>
                <button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-blue-600">
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="border border-dashed border-slate-200 rounded-lg h-24 flex flex-col items-center justify-center text-slate-400 gap-2 hover:border-blue-300 hover:bg-blue-50/30 transition-colors cursor-pointer group">
                <Workflow className="w-5 h-5 group-hover:text-blue-500" />
                <span className="text-xs group-hover:text-blue-600">新建工作流</span>
              </div>
            </div>

            {/* Section: Plugins */}
            <div>
              <div className="flex items-center justify-between mb-2 px-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">插件</span>
                <button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-blue-600">
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 px-2 py-2 text-xs text-slate-600 hover:bg-slate-50 rounded-md cursor-pointer">
                   <div className="w-5 h-5 bg-orange-100 text-orange-600 rounded flex items-center justify-center"><Search className="w-3 h-3" /></div>
                   <span>Google Search</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-2 text-xs text-slate-600 hover:bg-slate-50 rounded-md cursor-pointer">
                   <div className="w-5 h-5 bg-green-100 text-green-600 rounded flex items-center justify-center"><Code className="w-3 h-3" /></div>
                   <span>Python Interpreter</span>
                </div>
              </div>
            </div>

            {/* Section: Data */}
            <div>
              <div className="flex items-center justify-between mb-2 px-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">数据</span>
                <button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-blue-600">
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="border border-dashed border-slate-200 rounded-lg h-16 flex flex-col items-center justify-center text-slate-400 gap-1 hover:border-blue-300 hover:bg-blue-50/30 transition-colors cursor-pointer group">
                <Database className="w-4 h-4 group-hover:text-blue-500" />
                <span className="text-[10px] group-hover:text-blue-600">添加知识库</span>
              </div>
            </div>
          </div>

          {/* Bottom Settings */}
          <div className="border-t border-slate-200 p-2 space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-xs text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
              <Variable className="w-4 h-4 text-slate-400" />
              <span>变量管理</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-xs text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
              <MessageSquare className="w-4 h-4 text-slate-400" />
              <span>会话管理</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-xs text-slate-600 hover:bg-slate-100 rounded-md transition-colors">
              <Settings className="w-4 h-4 text-slate-400" />
              <span>应用设置</span>
            </button>
          </div>
        </aside>

        {/* 4. Large Center Workspace */}
        <main className="flex-1 bg-slate-50/50 p-6 lg:p-10 flex flex-col items-center justify-center relative overflow-hidden">
           {/* Background Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />
           
           <div className="relative z-10 max-w-4xl w-full">
             <div className="text-center mb-10">
               <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Hi，欢迎来到软积木应用 IDE</h1>
               <p className="text-slate-500 text-sm">从这里开始，构建您的第一个 AI 智能体应用</p>
             </div>

             <div className="grid md:grid-cols-3 gap-5 mb-10">
               {/* Card 1 */}
               <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group">
                 <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                   <Workflow className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-slate-900 mb-2">搭建服务端</h3>
                 <p className="text-xs text-slate-500 leading-relaxed">通过可视化工作流编排业务逻辑，集成插件与大模型能力。</p>
               </div>

               {/* Card 2 */}
               <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-purple-300 transition-all cursor-pointer group">
                 <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                   <LayoutTemplate className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-slate-900 mb-2">UI Builder</h3>
                 <p className="text-xs text-slate-500 leading-relaxed">拖拽式快速搭建用户界面，所见即所得的交互设计体验。</p>
               </div>

               {/* Card 3 */}
               <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group">
                 <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                   <Database className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-slate-900 mb-2">数据配置</h3>
                 <p className="text-xs text-slate-500 leading-relaxed">配置向量数据库与知识库，为智能体注入专业领域知识。</p>
               </div>
             </div>

             {/* Shortcuts */}
             <div className="flex justify-center gap-8 text-xs text-slate-400">
               <div className="flex items-center gap-2">
                 <kbd className="px-2 py-1 bg-white border border-slate-200 rounded-md font-mono text-slate-500 shadow-[0_1px_0_rgba(0,0,0,0.05)]">⌘ K</kbd>
                 <span>唤起命令面板</span>
               </div>
               <div className="flex items-center gap-2">
                 <kbd className="px-2 py-1 bg-white border border-slate-200 rounded-md font-mono text-slate-500 shadow-[0_1px_0_rgba(0,0,0,0.05)]">⌘ S</kbd>
                 <span>保存应用</span>
               </div>
               <div className="flex items-center gap-2">
                 <kbd className="px-2 py-1 bg-white border border-slate-200 rounded-md font-mono text-slate-500 shadow-[0_1px_0_rgba(0,0,0,0.05)]">⌘ P</kbd>
                 <span>预览运行</span>
               </div>
             </div>
           </div>
        </main>
      </div>
    </div>
  );
}
