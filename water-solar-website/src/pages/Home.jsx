import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { servicesData } from '../data/servicesData';
import { casesData } from '../data/casesData';

export default function Home() {
  const caseHighlights = casesData.slice(0, 3);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white pt-32 pb-44 overflow-hidden">
        {/* 装饰性背景元素 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="decorator-blob w-[500px] h-[500px] bg-accent-500/25 -top-20 -right-32 animate-blob"></div>
          <div className="decorator-blob w-96 h-96 bg-accent-400/15 -bottom-24 -left-24 animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="decorator-blob w-72 h-72 bg-primary-400/20 top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 animate-blob" style={{ animationDelay: '4s' }}></div>
          {/* 网格图案 */}
          <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
          {/* 光晕效果 */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up opacity-0-initial" style={{ animationFillMode: 'forwards' }}>
            <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20 shadow-lg shadow-black/10">
              🏆 15年专业经验 · 500+成功案例
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 animate-fade-in-up opacity-0-initial delay-100" style={{ animationFillMode: 'forwards', letterSpacing: '-0.02em' }}>
            <span className="block text-white/95">水暖太阳能</span>
            <span className="block mt-3 text-gradient">专业安装服务</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-14 text-white/75 max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-0-initial delay-200" style={{ animationFillMode: 'forwards' }}>
            为您提供一站式水暖采暖、太阳能热水系统安装与维保服务<br/>
            <span className="text-white/50 text-base mt-1 block">专业团队 · 优质材料 · 贴心售后</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0-initial delay-300" style={{ animationFillMode: 'forwards' }}>
            <Link
              to="/services"
              className="btn-primary btn-glow text-lg px-12 py-4 rounded-2xl"
            >
              了解我们的服务
            </Link>
            <Link
              to="/cases"
              className="btn-outline text-lg px-12 py-4 rounded-2xl"
            >
              查看成功案例
            </Link>
          </div>

          {/* 统计数据条 */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in-up opacity-0-initial delay-500" style={{ animationFillMode: 'forwards' }}>
            {[
              { value: '15+', label: '年行业经验' },
              { value: '500+', label: '成功案例' },
              { value: '98%', label: '客户满意度' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center px-4 py-3 bg-white/8 backdrop-blur-sm rounded-2xl border border-white/12">
                <div className="text-2xl font-extrabold text-accent-400 leading-none mb-1">{stat.value}</div>
                <div className="text-xs text-white/55 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* 底部特性 */}
          <div className="mt-20 flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0-initial delay-400" style={{ animationFillMode: 'forwards' }}>
            {[
              { icon: '⚡', text: '快速响应' },
              { icon: '🛡️', text: '质保承诺' },
              { icon: '💰', text: '透明报价' },
              { icon: '🔧', text: '终身维保' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 px-6 py-3 bg-white/8 backdrop-blur-sm rounded-full border border-white/15 hover:bg-white/15 transition-all duration-300">
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium text-sm tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* 波浪分隔 */}
        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-5 border border-primary-100">
              我们的服务
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              全方位<span className="text-gradient">专业服务</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              从方案设计到安装维保，提供一站式专业解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <div 
                key={service.id} 
                className="animate-fade-in-up opacity-0-initial"
                style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}
              >
                <ProductCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        {/* 装饰 */}
        <div className="absolute inset-0">
          <div className="decorator-blob w-80 h-80 bg-accent-500/15 top-10 right-10"></div>
          <div className="decorator-blob w-64 h-64 bg-accent-400/10 bottom-10 left-10"></div>
          <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-5 border border-white/20">
              为什么选择我们
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              值得信赖的<span className="text-gradient">专业团队</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '👷', title: '专业团队', desc: '拥有10年以上从业经验的专业技术人员' },
              { icon: '⭐', title: '优质材料', desc: '严选国际知名品牌，确保系统稳定耐用' },
              { icon: '🛡️', title: '售后保障', desc: '提供完善的维修维保服务，终身质保' },
              { icon: '🌱', title: '环保节能', desc: '专注绿色能源解决方案，助力碳中和' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/8 hover:bg-white/10 hover:border-white/15 transition-all duration-500 group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-500 to-accent-400 rounded-2xl flex items-center justify-center text-4xl shadow-xl shadow-accent-500/30 group-hover:scale-110 group-hover:shadow-accent-500/50 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-28 bg-gray-50/80 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-5 border border-primary-100">
              成功案例
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
              精选<span className="text-gradient">项目案例</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              每一个项目都是我们专业与责任的见证
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {caseHighlights.map((caseItem, idx) => (
              <div
                key={caseItem.id}
                className="card-soft p-8 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/25">
                    {idx + 1}
                  </div>
                  <span className="tag">{caseItem.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">{caseItem.title}</h3>
                <p className="text-gray-400 leading-relaxed line-clamp-3 text-sm">{caseItem.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/cases"
              className="btn-primary btn-glow inline-flex items-center gap-2 text-lg rounded-2xl"
            >
              查看全部案例
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        {/* 装饰 */}
        <div className="absolute inset-0">
          <div className="decorator-blob w-[500px] h-[500px] bg-accent-500/15 -top-24 -right-24"></div>
          <div className="decorator-blob w-96 h-96 bg-primary-400/15 -bottom-24 -left-24"></div>
          <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            准备开始您的<span className="text-gradient">项目</span>？
          </h2>
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            联系我们获取免费咨询和专业项目评估<br/>
            <span className="text-white/50 text-base">我们的专家团队随时为您服务</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary btn-glow text-lg px-14 py-4 rounded-2xl animate-glow">
              立即咨询
            </button>
            <a href="tel:400-xxx-xxxx" className="btn-outline text-lg px-14 py-4 rounded-2xl flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              400-xxx-xxxx
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
