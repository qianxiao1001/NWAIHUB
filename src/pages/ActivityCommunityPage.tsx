import React from 'react';
import { Layout } from '@/components/layout';
import { Button, Badge } from '@/components/ui/common';
import { Calendar, Users, Megaphone, Handshake, MapPin, ArrowRight, Clock3, ChevronLeft, ChevronRight } from 'lucide-react';

const ACTIVITY_ITEMS = [
  {
    title: '人工智能产业路演专场',
    type: '线下活动',
    time: '2026-03-22 14:00',
    place: '氪星创服创新中心',
    desc: '聚焦大模型应用与行业实践，邀请项目方、投资机构与企业用户进行路演及深度对接。',
    status: '报名中',
  },
  {
    title: '企业智能化闭门研讨会',
    type: '闭门沙龙',
    time: '2026-03-28 09:30',
    place: '氪星创服会议中心',
    desc: '围绕数据治理、模型接入与安全合规，开展案例复盘与执行策略讨论。',
    status: '名额紧张',
  },
  {
    title: '开发者实战训练营',
    type: '培训工作坊',
    time: '2026-04-06 10:00',
    place: '线上直播 + 线下实训',
    desc: '提供智能体构建、检索增强生成流程设计与业务编排实践，帮助团队加速落地。',
    status: '即将开始',
  },
];

const COMMUNITY_SERVICES = [
  { icon: Megaphone, title: '活动发布', desc: '统一发布活动信息与报名入口，覆盖多类产业活动场景。' },
  { icon: Handshake, title: '供需对接', desc: '提供项目需求、技术方案与服务资源的协同匹配通道。' },
  { icon: Users, title: '社群运营', desc: '建立行业社群分层运营机制，沉淀持续交流与合作关系。' },
];

const HeroVisual = () => (
  <div className="rounded-xl bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800 h-[180px] md:h-[200px] relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.24),transparent_45%)]" />
    <div className="absolute bottom-4 left-4 text-white">
      <p className="text-xl md:text-2xl leading-tight font-bold">{ACTIVITY_ITEMS[0].title}</p>
      <p className="text-xs opacity-80 mt-1.5 tracking-[0.12em] uppercase">重点活动</p>
    </div>
  </div>
);

const ActivityCard = ({ item }: { item: (typeof ACTIVITY_ITEMS)[number] }) => (
  <article className="bg-white rounded-xl border border-slate-200/30 shadow-sm p-4 transition-all hover:shadow-[0_18px_36px_-26px_rgba(17,28,45,0.55)]">
    <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 mb-4" />
    <div className="flex items-center justify-between gap-2 mb-2.5">
      <Badge variant="secondary" className="bg-blue-50 text-blue-700 border border-blue-100 text-xs">{item.type}</Badge>
      <span className="text-xs text-slate-500">{item.status}</span>
    </div>
    <h3 className="text-xl leading-tight font-bold text-slate-900 mb-2">{item.title}</h3>
    <p className="text-base text-slate-600 leading-relaxed mb-3">{item.desc}</p>
    <div className="space-y-1.5 text-sm text-slate-500 mb-4">
      <div className="inline-flex items-center gap-1.5"><Clock3 className="w-4 h-4 text-blue-500" />{item.time}</div>
      <div className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-500" />{item.place}</div>
    </div>
    <Button variant="outline" className="w-full h-10 text-sm">查看详情</Button>
  </article>
);

const CommunityContent = () => (
  <div className="bg-white py-6 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            产业活动与社群协同
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900 mb-4">活动与协作中心</h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed mb-6">
            聚合路演、沙龙、训练营与供需对接活动，连接企业、技术团队与生态伙伴，持续推动项目落地与产业协作。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="mobile-button bg-blue-600 hover:bg-blue-700 text-white shadow-sm text-sm">活动排期总览</Button>
            <Button variant="secondary" className="mobile-button bg-white border-slate-300 text-slate-700 hover:bg-slate-50 text-sm">
              加入协作网络
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3 space-y-4">
          <div className="space-y-2">
            {COMMUNITY_SERVICES.map((service) => (
              <button key={service.title} className="w-full flex items-center justify-between rounded-lg bg-[#e9efff] px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-[#dfe8ff] transition-colors">
                <span>{service.title}</span>
                <service.icon className="w-4 h-4 text-blue-600" />
              </button>
            ))}
          </div>

          <div className="rounded-lg bg-[#e9efff] p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-slate-900">2026年3月</h3>
              <div className="flex gap-1">
                <button className="p-1.5 rounded-md hover:bg-white/80"><ChevronLeft className="w-4 h-4" /></button>
                <button className="p-1.5 rounded-md hover:bg-white/80"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-500 mb-2">
              {['日', '一', '二', '三', '四', '五', '六'].map((d) => <span key={d}>{d}</span>)}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-base text-slate-700">
              {['28', '29', '30', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'].map((d) => (
                <span key={d} className={d === '2' ? 'rounded-lg bg-blue-600 text-white font-semibold py-1' : 'py-1'}>{d}</span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200/30 bg-white p-4 shadow-sm">
            <div className="inline-flex items-center gap-1.5 text-sm text-blue-700 font-medium mb-3">
              <Calendar className="w-3.5 h-3.5" />
              本月重点事项
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm h-10">
              提交活动申请
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </aside>

        <section className="lg:col-span-9 space-y-6">
          <div className="flex items-end justify-between border-b border-slate-200/50 pb-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">近期活动安排</h2>
            <div className="flex gap-4 text-base">
              <span className="text-blue-700 font-semibold border-b-2 border-blue-600 pb-2">全部活动</span>
              <span className="text-slate-500">路演活动</span>
              <span className="text-slate-500">训练营</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ACTIVITY_ITEMS.map((item) => (
              <ActivityCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default function ActivityCommunityPage() {
  return (
    <Layout>
      <CommunityContent />
    </Layout>
  );
}
