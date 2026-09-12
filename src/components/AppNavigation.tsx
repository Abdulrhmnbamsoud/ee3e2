import React from 'react';
import { ScreenType } from '../types';

interface Props {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

export const AppNavigation: React.FC<Props> = ({ currentScreen, onNavigate }) => {
  // Don't display bottom navigation on full-screen onboarding
  if (currentScreen === 'onboarding') {
    return null;
  }

  const navItems: { screen: ScreenType; label: string; icon: string }[] = [
    { screen: 'home', label: 'الرئيسية', icon: 'travel_explore' },
    { screen: 'trip-details', label: 'رحلاتي', icon: 'luggage' },
    { screen: 'map-discover', label: 'اكتشف', icon: 'auto_awesome' },
    { screen: 'analysis', label: 'المساعد', icon: 'forum' },
    { screen: 'premium', label: 'الحساب', icon: 'account_circle' },
  ];

  return (
    <nav className="fixed bottom-3 inset-x-0 z-50 pointer-events-none flex justify-center px-4">
      <div className="pointer-events-auto w-full max-w-md h-16 rounded-full bg-surface-container-low/90 backdrop-blur-xl px-2 flex items-center justify-around shadow-[0_12px_40px_rgba(0,0,0,0.6)] border border-white/10">
        {navItems.map((item) => {
          const isActive = currentScreen === item.screen;
          return (
            <button
              key={item.screen}
              onClick={() => onNavigate(item.screen)}
              className={`flex flex-col items-center justify-center min-w-[52px] min-h-[44px] gap-0.5 transition-all cursor-pointer ${
                isActive
                  ? 'text-primary font-bold scale-105'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className="text-[11px] leading-none">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
