export default function ProductCard({ title, description, icon }) {
  return (
    <div className="card-soft p-8 h-full group relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent-500/8 to-primary-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>

      {/* 图标 */}
      <div className="relative mb-7">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-3xl shadow-xl shadow-primary-500/25 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-primary-500/40 transition-all duration-500">
          {icon}
        </div>
      </div>

      {/* 标题 */}
      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 tracking-tight">
        {title}
      </h3>

      {/* 描述 */}
      <p className="text-gray-400 leading-relaxed mb-6 text-sm">
        {description}
      </p>

      {/* 悬停显示的链接 */}
      <div className="flex items-center gap-2 text-accent-500 font-semibold text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <span>了解详情</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
}
