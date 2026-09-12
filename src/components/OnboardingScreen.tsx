import React from 'react';
import { ASSETS } from '../data/mockData';
import { ScreenType } from '../types';

interface Props {
  onNavigate: (screen: ScreenType) => void;
}

export const OnboardingScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full relative select-none overflow-hidden bg-surface min-h-full pb-6" dir="rtl">
      {/* Immersive Cinematic Scenic Backdrop with Atmospheric Depth Scrim */}
      <div className="relative w-full h-[54vh] min-h-[400px] overflow-hidden">
        <div
          className="bg-cover bg-center absolute inset-0 w-full h-full transform scale-105 transition-transform duration-1000 ease-out"
          style={{ backgroundImage: `url('${ASSETS.onboardingBackdrop}')` }}
        />
        {/* Multi-tier Smooth Scrim & Nocturne Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-surface/20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface via-surface to-transparent pointer-events-none" />

        {/* Top Ambient Star & Latitude Coordinate Accent */}
        <div className="absolute top-5 inset-x-0 px-6 flex items-center justify-between text-on-surface-variant/70 z-10">
          <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider">
            <span className="material-symbols-outlined text-[16px] text-primary">explore</span>
            <span className="font-mono">45.993° N, 9.261° E</span>
          </div>
          <div className="flex items-center gap-1.5 bg-surface-container-high/70 backdrop-blur-md px-3 py-1 rounded-full text-on-surface text-xs font-medium border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>الذكاء السياحي</span>
          </div>
        </div>

        {/* Centered Luminous Brand Badge */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-6 pointer-events-none">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-28 h-28 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
            <div className="relative w-20 h-20 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-xl p-2.5 shadow-2xl flex items-center justify-center border border-white/10">
              <img
                alt="شعار تطبيق روحة"
                className="w-full h-full object-contain rounded-lg drop-shadow-md"
                src={ASSETS.logo}
              />
            </div>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-wide text-on-surface drop-shadow-sm">
            روحة
          </h1>
          <p className="text-[11px] text-primary font-semibold tracking-widest uppercase mt-0.5">
            RAWHA CONCIERGE
          </p>
        </div>
      </div>

      {/* Narrative Content & AI Capability Section */}
      <div className="relative -mt-8 px-5 flex flex-col items-center text-center z-10 flex-1">
        {/* Main Headline & Subtitle */}
        <h2 className="text-2xl text-on-surface font-bold leading-tight max-w-xs">
          رحلتك تبدأ من فكرة.
        </h2>
        <p className="mt-2 text-sm text-on-surface-variant max-w-sm leading-relaxed">
          فيديو، صورة أو وجهة… وروحة يكمل الباقي.
        </p>

        {/* Visual Interactive Feature Teaser Card (TikTok / Reels Import Prompt) */}
        <div
          onClick={() => onNavigate('analysis')}
          className="mt-5 w-full bg-surface-container-low/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3.5 text-right border border-white/5 cursor-pointer hover:border-primary/30 active:scale-[0.98] transition-all group"
        >
          <div className="relative shrink-0 w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[24px]">auto_videocam</span>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
            </span>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-secondary font-semibold">ميزة حصرية</span>
              <span className="w-1 h-1 rounded-full bg-outline" />
              <span className="text-xs text-on-surface-variant">نقرة واحدة</span>
            </div>
            <p className="mt-0.5 text-xs text-on-surface line-clamp-2 leading-snug">
              حوّل فيديو تيك توك أو ريلز إلى مسار رحلة متكامل بضغطة زر
            </p>
          </div>
          <div className="shrink-0 pl-1">
            <span className="material-symbols-outlined text-outline-variant text-[20px] group-hover:text-primary transition-colors">
              arrow_back_ios_new
            </span>
          </div>
        </div>

        {/* Micro-Social Validation Proof */}
        <div className="mt-5 flex items-center justify-center gap-3 w-full py-1">
          <div className="flex -space-x-2 space-x-reverse overflow-hidden items-center">
            <div
              className="inline-block h-7 w-7 rounded-full bg-cover bg-center ring-2 ring-surface"
              style={{ backgroundImage: `url('${ASSETS.traveler1}')` }}
            />
            <div
              className="inline-block h-7 w-7 rounded-full bg-cover bg-center ring-2 ring-surface"
              style={{ backgroundImage: `url('${ASSETS.traveler2}')` }}
            />
            <div
              className="inline-block h-7 w-7 rounded-full bg-cover bg-center ring-2 ring-surface"
              style={{ backgroundImage: `url('${ASSETS.traveler3}')` }}
            />
          </div>
          <p className="text-xs text-on-surface-variant">
            أكثر من <span className="text-on-surface font-semibold">+18,000</span> رحلة خُططت هذا الشهر
          </p>
        </div>

        {/* Action Stack */}
        <div className="mt-6 w-full flex flex-col gap-3">
          {/* Primary Action CTA */}
          <button
            onClick={() => onNavigate('home')}
            className="w-full h-14 bg-primary text-on-primary text-lg font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
            type="button"
            id="start-journey-btn"
          >
            <span>ابدأ رحلتك</span>
            <span className="material-symbols-outlined text-[20px]">
              arrow_back
            </span>
          </button>

          {/* Secondary Action (Sign In) */}
          <button
            onClick={() => onNavigate('home')}
            className="w-full h-12 bg-surface-container text-on-surface text-sm font-semibold rounded-2xl flex items-center justify-center hover:bg-surface-container-high transition-colors cursor-pointer border border-white/5"
            type="button"
          >
            <span>تسجيل الدخول</span>
          </button>

          {/* Guest Access Link */}
          <button
            onClick={() => onNavigate('home')}
            className="mt-1 py-1.5 text-on-surface-variant text-xs hover:text-on-surface transition-colors flex items-center justify-center gap-1 cursor-pointer"
            type="button"
          >
            <span>أو استكشف كضيف</span>
            <span className="material-symbols-outlined text-[16px]">chevron_left</span>
          </button>
        </div>
      </div>
    </div>
  );
};
