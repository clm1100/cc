import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const el = document.documentElement;
      const progress = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menu = [
    { path: '/', label: '首页', icon: '🏠' },
    { path: '/services', label: '服务', icon: '⚡' },
    { path: '/cases', label: '案例', icon: '🏆' },
  ];

  return (
    <>
      {/* 滚动进度条 */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-gray-950/95 backdrop-blur-2xl shadow-2xl shadow-black/30 border-b border-white/5'
            : 'bg-gradient-to-r from-primary-900/90 via-primary-800/90 to-primary-900/90 backdrop-blur-xl border-b border-white/8'
        }`}
      >
        {/* 顶部细线装饰 */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-22">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 via-accent-400 to-orange-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-accent-500/40 group-hover:shadow-accent-500/60 group-hover:scale-105 transition-all duration-300">
                  暖
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-md flex items-center justify-center shadow-sm">
                  <div className="w-2 h-2 bg-accent-500 rounded-sm"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">
                  水暖太阳能
                </span>
                <span className="text-[10px] text-white/40 tracking-[0.15em] uppercase">Professional Service</span>
              </div>
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-1">
              {menu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-white/55 hover:text-white/90'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent-400 rounded-full"></span>
                  )}
                </Link>
              ))}

              <div className="w-px h-6 bg-white/10 mx-4"></div>

              <a
                href="tel:400-xxx-xxxx"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent-500 hover:bg-accent-400 text-white text-sm font-semibold rounded-xl shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                立即咨询
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              aria-expanded={open}
              aria-label="Toggle menu"
              className="md:hidden w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex flex-col items-center justify-center gap-1.5 hover:bg-white/15 transition-all duration-300"
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`w-5 h-0.5 bg-white/80 rounded-full transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white/80 rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white/80 rounded-full transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Mobile menu panel */}
      <div
        className={`fixed top-[81px] left-0 right-0 bg-gray-950/98 backdrop-blur-2xl z-40 md:hidden border-t border-white/8 transition-all duration-400 ${
          open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 space-y-1">
          {menu.map((item, idx) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl font-medium transition-all duration-300 ${
                isActive(item.path)
                  ? 'text-white bg-white/8 border border-white/10'
                  : 'text-white/55 hover:text-white hover:bg-white/5'
              }`}
              style={{ transitionDelay: open ? `${idx * 40}ms` : '0ms' }}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-base">{item.label}</span>
              {isActive(item.path) && (
                <span className="ml-auto w-1.5 h-1.5 bg-accent-400 rounded-full"></span>
              )}
            </Link>
          ))}

          <div className="pt-4 mt-2 border-t border-white/8">
            <a
              href="tel:400-xxx-xxxx"
              className="flex items-center justify-center gap-2 w-full py-4 bg-accent-500 text-white rounded-2xl font-semibold text-base shadow-xl shadow-accent-500/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              400-xxx-xxxx
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
