import { useState } from 'react';
import CaseCard from '../components/CaseCard';
import { casesData, categories } from '../data/casesData';

export default function Cases() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCases =
    selectedCategory === 'all'
      ? casesData
      : casesData.filter((c) => c.category === selectedCategory);

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
            成功案例
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up opacity-0-initial delay-100" style={{ animationFillMode: 'forwards' }}>
            项目<span className="text-gradient">案例展示</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl animate-fade-in-up opacity-0-initial delay-200" style={{ animationFillMode: 'forwards' }}>
            我们已为数百个项目提供了专业服务，每一个都是我们实力的见证
          </p>
        </div>
        
        {/* 波浪分隔 */}
        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 bg-white border-b border-gray-100/80 sticky top-16 z-40 shadow-sm shadow-gray-100/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-7 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-gradient-to-r from-accent-500 to-accent-400 text-white shadow-lg shadow-accent-500/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-sm'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4">
          {filteredCases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredCases.map((caseItem, idx) => (
                <div
                  key={caseItem.id}
                  className="animate-fade-in-up opacity-0-initial"
                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <CaseCard
                    title={caseItem.title}
                    category={caseItem.category}
                    description={caseItem.description}
                    image={caseItem.image}
                    date={caseItem.date}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-lg text-gray-500">
                暂无此分类的案例
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        {/* 装饰 */}
        <div className="absolute inset-0">
          <div className="decorator-blob w-80 h-80 bg-accent-500/15 top-10 right-10"></div>
          <div className="decorator-blob w-64 h-64 bg-accent-400/10 bottom-10 left-10"></div>
          <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              用<span className="text-gradient">数据</span>说话
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: `${casesData.length}+`, label: '完成项目' },
              { value: '500+', label: '满意客户' },
              { value: '15年', label: '行业经验' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/8 hover:bg-white/8 hover:border-white/15 transition-all duration-300"
              >
                <div className="stat-number mb-3">{stat.value}</div>
                <p className="text-lg text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
