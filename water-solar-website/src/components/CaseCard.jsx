export default function CaseCard({ title, category, description, image, date }) {
  return (
    <div className="card-soft overflow-hidden group h-full flex flex-col">
      {/* 图片区域 */}
      <div className="relative h-52 bg-gradient-to-br from-primary-100 to-blue-50 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="image-placeholder w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-primary-200/60 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-xs text-primary-300 font-medium">项目图片</span>
          </div>
        )}

        {/* 悬停遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* 分类标签 */}
        <div className="absolute top-4 left-4">
          <span className="tag">{category}</span>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3">
          {description}
        </p>

        {date && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-300">{date}</span>
            <span className="text-accent-500 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
              查看详情 →
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
