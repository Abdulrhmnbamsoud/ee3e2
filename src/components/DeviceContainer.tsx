import React from 'react';
import { ScreenType } from '../types';

interface Props {
  children: React.ReactNode;
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  isMobileFrame: boolean;
  setIsMobileFrame: (val: boolean) => void;
}

export const DeviceContainer: React.FC<Props> = ({
  children,
  currentScreen,
  onNavigate,
  isMobileFrame,
  setIsMobileFrame,
}) => {
  const screens: { id: ScreenType; label: string; icon: string }[] = [
    { id: 'onboarding', label: 'الترحيب', icon: 'auto_awesome' },
    { id: 'home', label: 'الرئيسية', icon: 'travel_explore' },
    { id: 'analysis', label: 'تحليل AI', icon: 'neurology' },
    { id: 'trip-details', label: 'تفاصيل الرحلة', icon: 'luggage' },
    { id: 'map-discover', label: 'الخريطة', icon: 'map' },
    { id: 'premium', label: 'العضوية المميزة', icon: 'hotel_class' },
  ];

  return (
    <div className="min-h-screen bg-[#070a12] text-on-surface flex flex-col items-center">
      {/* Top Workspace Toolbar (Allows rapid screen switching and responsive toggle) */}
      <header className="w-full bg-surface-container-lowest/95 backdrop-blur-xl border-b border-white/10 px-4 py-2.5 sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-surface-container-high p-1.5 flex items-center justify-center border border-white/10">
            <span className="material-symbols-outlined text-primary text-[20px]">explore</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-on-surface">تطبيق روحة السياحي</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary font-bold">
                Rawha Concierge
              </span>
            </div>
          </div>
        </div>

        {/* Screen Switcher Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {screens.map((s) => (
            <button
              key={s.id}
              onClick={() => onNavigate(s.id)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer border ${
                currentScreen === s.id
                  ? 'bg-primary text-on-primary border-primary shadow-sm shadow-primary/20'
                  : 'bg-surface-container text-on-surface-variant border-white/5 hover:bg-surface-container-high hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{s.icon}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* View Mode Toggle (Mobile Simulator vs Responsive Full View) */}
        <div className="flex items-center gap-1 bg-surface-container p-1 rounded-xl border border-white/5">
          <button
            onClick={() => setIsMobileFrame(true)}
            title="وضع إطار الجوال"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              isMobileFrame
                ? 'bg-surface-container-high text-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">smartphone</span>
            <span className="hidden sm:inline">إطار الجوال</span>
          </button>
          <button
            onClick={() => setIsMobileFrame(false)}
            title="عرض كامل الشاشة"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              !isMobileFrame
                ? 'bg-surface-container-high text-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">devices</span>
            <span className="hidden sm:inline">عرض كامل</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full flex-1 flex justify-center py-4 px-2 sm:px-4">
        {isMobileFrame ? (
          /* Realistic High-End Smartphone Frame */
          <div className="relative w-full max-w-[420px] bg-[#000000] rounded-[52px] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9),0_0_0_12px_#181b24,0_0_0_14px_#272a33] overflow-hidden flex flex-col border border-white/10 my-2">
            {/* Phone Screen Top Header with Dynamic Island */}
            <div className="w-full h-11 bg-surface-container-lowest/90 backdrop-blur-md px-7 flex items-center justify-between text-xs text-on-surface-variant z-40 select-none">
              <span className="font-semibold text-on-surface font-mono">09:41</span>
              {/* Dynamic Island */}
              <div className="w-28 h-5 rounded-full bg-black flex items-center justify-end px-2 gap-1.5 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e293b]" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">signal_cellular_alt</span>
                <span className="material-symbols-outlined text-[14px]">wifi</span>
                <span className="material-symbols-outlined text-[16px]">battery_full</span>
              </div>
            </div>

            {/* Scrollable Viewport */}
            <div className="w-full overflow-y-auto max-h-[85vh] min-h-[760px] bg-surface relative no-scrollbar flex flex-col px-4 pt-3 pb-24">
              {children}
            </div>

            {/* iOS Bottom Indicator Bar */}
            <div className="absolute bottom-1 inset-x-0 h-4 flex items-center justify-center pointer-events-none z-50">
              <div className="w-32 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
        ) : (
          /* Full Responsive Viewport */
          <div className="w-full max-w-2xl bg-surface rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/5 relative min-h-[820px] pb-28">
            {children}
          </div>
        )}
      </main>
    </div>
  );
};
