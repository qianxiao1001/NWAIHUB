import React from 'react';
import { Layout } from '@/components/layout';
import { Button, Badge } from '@/components/ui/common';
import { Calendar, Users, Megaphone, Handshake, MapPin, ArrowRight, Clock3 } from 'lucide-react';

const CommunityHero = () => (
  <div className="relative bg-slate-50 border-b border-slate-200 py-8 overflow-hidden ui-reveal">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.16]" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
          <Users className="w-3.5 h-3.5" />
          产业活动与社群协同
        </div>
        <h1 className="mobile-title-hero lg:text-3xl lg:md:text-4xl font-bold text-slate-900 mb-3 tracking-tight leading-[1.15]">
          活动与协作中心
        </h1>
        <p className="mobile-text-body lg:text-base text-slate-600 mb-5 leading-relaxed lg:max-w-2xl mobile-text-truncate-3">
          聚合路演、沙龙、训练营与供需对接活动，连接企业、技术团队与生态伙伴，持续推动项目落地与产业协作。
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="mobile-button bg-blue-600 hover:bg-blue-700 text-white shadow-sm">活动排期总览</Button>
          <Button variant="secondary" className="mobile-button bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
            加入协作网络
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const ACTIVITY_ITEMS = [
  {
    title: 'AI 产业路演专场',
    type: '线下活动',
    time: '2026-03-22 14:00',
    place: '上地街道创新中心',
    desc: '聚焦大模型应用与行业实践，邀请项目方、投资机构与企业用户进行路演及深度对接。',
    status: '报名中',
  },
  {
    title: '企业智能化闭门研讨会',
    type: '闭门沙龙',
    time: '2026-03-28 09:30',
    place: '上地街道会议中心',
    desc: '围绕数据治理、模型接入与安全合规，开展案例复盘与执行策略讨论。',
    status: '名额紧张',
  },
  {
    title: '开发者实战训练营',
    type: '培训工作坊',
    time: '2026-04-06 10:00',
    place: '线上直播 + 线下实训',
    desc: '提供 Agent 构建、RAG 流程设计与业务编排实践，帮助团队加速落地。',
    status: '即将开始',
  },
];

const COMMUNITY_SERVICES = [
  { icon: Megaphone, title: '活动发布', desc: '统一发布活动信息与报名入口，覆盖多类产业活动场景。' },
  { icon: Handshake, title: '供需对接', desc: '提供项目需求、技术方案与服务资源的协同匹配通道。' },
  { icon: Users, title: '社群运营', desc: '建立行业社群分层运营机制，沉淀持续交流与合作关系。' },
];

const CommunityContent = () => (
  <div className="bg-white py-6 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Mobile: Single column | Desktop: Two columns */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-6">
        {/* Activity List - Full width on mobile */}
        <div className="lg:col-span-8 space-y-4 lg:space-y-3">
          {ACTIVITY_ITEMS.map((item) => (
            <article key={item.title} className="ui-list-item card-enterprise p-4 hover:border-blue-300 transition-all duration-200 hover:-translate-y-0.5 mobile-touch-feedback">
              <div className="flex items-center justify-between gap-3 mb-3 lg:mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border border-blue-100">{item.type}</Badge>
                  <span className="text-xs text-slate-500">{item.status}</span>
                </div>
                <Button variant="outline" size="sm" className="h-7 text-xs px-2.5">查看详情</Button>
              </div>
              <h3 className="mobile-title-section lg:text-lg font-bold text-slate-900 mb-3 lg:mb-2">{item.title}</h3>
              <p className="mobile-text-body lg:text-sm text-slate-500 leading-relaxed mb-4 lg:mb-3">{item.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:flex lg:flex-wrap lg:items-center lg:gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5"><Clock3 className="w-3.5 h-3.5 text-blue-500" />{item.time}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-500" />{item.place}</span>
              </div>
            </article>
          ))}
        </div>
        
        {/* Sidebar - Full width on mobile */}
        <aside className="lg:col-span-4 mt-8 lg:mt-0">
          <div className="space-y-4 lg:sticky lg:top-20">
            {COMMUNITY_SERVICES.map((service) => (
              <div key={service.title} className="bg-slate-50 rounded-lg border border-slate-200 p-4">
                <div className="w-8 h-8 rounded-lg bg-white border border-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <service.icon className="w-4 h-4" />
                </div>
                <h4 className="mobile-title-section lg:text-sm font-semibold text-slate-900 mb-1">{service.title}</h4>
                <p className="mobile-text-body lg:text-xs text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="inline-flex items-center gap-1.5 text-xs text-blue-700 font-medium mb-2">
                <Calendar className="w-3.5 h-3.5" />
                本月重点事项
              </div>
              <p className="mobile-text-body lg:text-sm text-slate-600 leading-relaxed mb-3">
                重点围绕企业智能化升级与应用实战，持续组织产业对接活动。
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs h-9">
                提交活动申请
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
);

export default function ActivityCommunityPage() {
  return (
    <Layout>
      <CommunityHero />
      <CommunityContent />
    </Layout>
  );
}
