import { servicesData } from '../data/servicesData';

export default function Services() {
  return (
    <main className="flex-1">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white pt-28 pb-36 overflow-hidden">
        {/* 装饰 */}
        <div className="absolute inset-0">
          <div className="decorator-blob w-80 h-80 bg-accent-500/20 top-0 -right-20"></div>
          <div className="decorator-blob w-64 h-64 bg-primary-400/20 -bottom-10 -left-10"></div>
          <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20 animate-fade-in-up opacity-0-initial" style={{ animationFillMode: 'forwards' }}>
            专业服务
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up opacity-0-initial delay-100" style={{ animationFillMode: 'forwards' }}>
            我们的<span className="text-gradient">服务项目</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl animate-fade-in-up opacity-0-initial delay-200" style={{ animationFillMode: 'forwards' }}>
            提供全方位的水暖和太阳能系统解决方案，从设计到安装，从维保到升级
          </p>
        </div>
        
        {/* 波浪分隔 */}
        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className={`mb-28 ${idx !== 0 ? 'border-t border-gray-100 pt-28' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-3xl shadow-xl shadow-primary-500/25">
                      {service.icon}
                    </div>
                    <span className="tag">0{idx + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed whitespace-pre-line">
                    {service.longDescription}
                  </p>
                </div>

                {/* Advantages */}
                <div>
                  <div className="card-soft p-8 mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-400 rounded-lg flex items-center justify-center text-white text-sm shadow-md shadow-accent-500/30">✓</span>
                      主要优势
                    </h3>
                    <div className="space-y-3">
                      {service.advantages.map((adv, advIdx) => (
                        <div key={advIdx} className="flex items-start gap-4 p-4 bg-gray-50/80 rounded-xl hover:bg-blue-50/50 transition-colors duration-200">
                          <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-400 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5 shadow-sm shadow-accent-500/30">
                            {advIdx + 1}
                          </div>
                          <p className="text-gray-600 leading-relaxed text-sm">{adv}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Box */}
                  <div className="card-gradient-border p-8 bg-gradient-to-br from-orange-50/80 to-white">
                    <h4 className="font-bold text-xl mb-3 text-gray-900 tracking-tight">
                      对此服务感兴趣？
                    </h4>
                    <p className="text-gray-500 mb-6 text-sm">
                      联系我们获取免费的专业咨询和项目评估
                    </p>
                    <button className="btn-primary btn-glow w-full text-lg py-4 rounded-2xl">
                      咨询这项服务
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-5 border border-primary-100">
              工作流程
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              简单<span className="text-gradient">四步</span>完成项目
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: '免费咨询', desc: '了解您的需求和现状，提供专业建议' },
              { num: '02', title: '方案设计', desc: '制定最优解决方案，透明报价' },
              { num: '03', title: '专业安装', desc: '经验丰富的团队，高质量施工' },
              { num: '04', title: '维保跟进', desc: '完善的售后服务，终身质保' },
            ].map((step, idx) => (
              <div key={step.num} className="relative">
                <div className="card-soft p-8 text-center h-full">
                  <div className="stat-number mb-4">{step.num}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 h-6 items-center justify-center text-accent-400 text-xl font-bold z-10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
