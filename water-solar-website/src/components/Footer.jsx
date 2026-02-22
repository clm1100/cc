import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-primary-950 to-gray-950 text-white relative">
      {/* 顶部装饰线 */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent"></div>
      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mt-px"></div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 品牌信息 */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <span className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-400 rounded-xl flex items-center justify-center text-white text-sm shadow-lg shadow-accent-500/30 group-hover:shadow-accent-500/50 group-hover:scale-105 transition-all duration-300">
                暖
              </span>
              <span className="text-xl font-bold tracking-tight">水暖太阳能</span>
            </Link>
            <p className="text-gray-500 leading-relaxed mb-6 text-sm">
              专业的水暖和太阳能系统服务商，为您提供一站式安装与维保解决方案。
            </p>
            <div className="flex gap-2">
              {['微', '博', '音'].map((social, idx) => (
                <div
                  key={idx}
                  className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-sm text-gray-500 hover:bg-accent-500/20 hover:text-accent-400 transition-all duration-300 cursor-pointer border border-white/5 hover:border-accent-500/30"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-gray-300 uppercase tracking-widest">快速链接</h4>
            <div className="space-y-3">
              {[
                { to: '/', label: '首页' },
                { to: '/services', label: '服务项目' },
                { to: '/cases', label: '成功案例' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-gray-500 hover:text-white transition-colors duration-300 text-sm group flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-accent-500/50 rounded-full group-hover:bg-accent-400 transition-colors"></span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 服务项目 */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-gray-300 uppercase tracking-widest">服务项目</h4>
            <div className="space-y-3 text-gray-500 text-sm">
              {['水暖安装', '太阳能系统', '采暖工程', '维保服务'].map((s) => (
                <p key={s} className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer">
                  <span className="w-1 h-1 bg-accent-500/50 rounded-full"></span>
                  {s}
                </p>
              ))}
            </div>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-gray-300 uppercase tracking-widest">联系我们</h4>
            <div className="space-y-4">
              {[
                { icon: '📞', label: '服务热线', value: '400-xxx-xxxx' },
                { icon: '✉️', label: '电子邮箱', value: 'info@company.com' },
                { icon: '📍', label: '公司地址', value: '中国某市某区XXX街道' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-0.5">{item.label}</p>
                    <p className="text-gray-300 text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2024 水暖太阳能安装公司. 保留所有权利.
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-gray-400 transition-colors">服务条款</a>
            <a href="#" className="hover:text-gray-400 transition-colors">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
