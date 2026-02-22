import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center py-24 bg-gradient-to-b from-white to-warm-50">
      <div className="text-center max-w-xl px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-600 text-white text-2xl font-bold shadow-lg mb-6">
          404
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          页面未找到
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          抱歉，您访问的页面不存在或已被移除。
        </p>
        <Link
          to="/"
          className="btn-primary btn-glow inline-flex items-center gap-2"
        >
          返回首页
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
