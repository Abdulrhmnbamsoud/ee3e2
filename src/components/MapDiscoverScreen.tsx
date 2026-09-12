import React, { useState } from 'react';
import { ASSETS, MAP_PINS } from '../data/mockData';
import { ScreenType } from '../types';

interface Props {
  onNavigate: (screen: ScreenType) => void;
}

export const MapDiscoverScreen: React.FC<Props> = ({ onNavigate }) => {
  const [selectedTransit, setSelectedTransit] = useState<'car' | 'ferry' | 'walk'>('car');
  const [activePin, setActivePin] = useState<number>(3);
  const [isAdded, setIsAdded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleAdd = () => {
    setIsAdded(!isAdded);
  };

  const handleOpenMaps = () => {
    window.open('https://maps.apple.com/?q=Bellagio+Lake+Como+Italy', '_blank');
  };

  return (
    <div className="flex flex-col w-full relative pb-10 select-none" dir="rtl">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface hover:text-primary transition-colors border border-white/5 cursor-pointer"
            aria-label="العودة"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_forward_ios</span>
          </button>
          <h1 className="text-xl text-on-surface font-bold tracking-tight">استكشاف الخريطة</h1>
        </div>

        <div
          onClick={() => onNavigate('premium')}
          className="w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <img
            alt="الملف الشخصي"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-primary/40"
            src={ASSETS.userAvatar}
          />
        </div>
      </div>

      {/* Search & Transit Mode Floating Capsule */}
      <div className="w-full flex flex-col gap-2 mb-4">
        {/* Search Row */}
        <div className="w-full bg-surface-container-high rounded-2xl p-2 flex items-center gap-2 shadow-md border border-white/5">
          <span className="material-symbols-outlined text-primary text-[22px] pr-2">search</span>
          <input
            className="bg-transparent text-on-surface text-xs sm:text-sm w-full focus:outline-none placeholder-on-surface-variant truncate"
            placeholder="ابحث عن وجهة أو معلم سياحي..."
            type="text"
            defaultValue="بحيرة كومو، إيطاليا — المسار الساحلي"
          />
          <button
            aria-label="تصفية"
            className="w-9 h-9 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface transition-transform active:scale-95 cursor-pointer border border-white/5 shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
          </button>
        </div>

        {/* Mobility Switcher (Car / Ferry / Walk) */}
        <div className="flex items-center justify-between bg-surface-container-lowest rounded-2xl p-1 gap-1 shadow-sm border border-white/5">
          <button
            onClick={() => setSelectedTransit('car')}
            className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all text-xs font-semibold cursor-pointer ${
              selectedTransit === 'car'
                ? 'bg-surface-container-high text-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">directions_car</span>
            <span>سيارة</span>
          </button>

          <button
            onClick={() => setSelectedTransit('ferry')}
            className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all text-xs font-semibold cursor-pointer ${
              selectedTransit === 'ferry'
                ? 'bg-surface-container-high text-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">directions_boat</span>
            <span>عبّارة</span>
          </button>

          <button
            onClick={() => setSelectedTransit('walk')}
            className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all text-xs font-semibold cursor-pointer ${
              selectedTransit === 'walk'
                ? 'bg-surface-container-high text-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">directions_walk</span>
            <span>مشي</span>
          </button>
        </div>
      </div>

      {/* Interactive Map Canvas Card */}
      <div className="relative w-full h-80 rounded-3xl overflow-hidden bg-surface-container-lowest shadow-xl flex items-center justify-center border border-white/5">
        {/* Subtle nocturnal terrain grid effect */}
        <div className="absolute inset-0 bg-[radial-gradient(#1c2a38_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        {/* Lake Stylized Vector Articulations & Route Ribbon */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          viewBox="0 0 380 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Water body simplified contour (Lake Como inverted Y shape) */}
          <path
            d="M190 20 C185 80, 160 130, 140 180 C110 230, 80 270, 50 310"
            opacity="0.55"
            stroke="#00424e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="30"
          />
          <path
            d="M140 180 C170 210, 220 250, 290 300"
            opacity="0.55"
            stroke="#00424e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="26"
          />
          {/* Ferry route dashed line */}
          <path
            d="M190 20 C185 80, 160 130, 140 180 C110 230, 80 270, 50 310"
            opacity="0.6"
            stroke="#4cd7f6"
            strokeDasharray="5 7"
            strokeLinecap="round"
            strokeWidth="4"
          />
          {/* Glowing Route Ribbon (Emerald to Cyan) */}
          <path
            d="M80 70 L130 115 L190 160 L245 125 L310 210"
            stroke="url(#routeGlowMap)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <defs>
            <linearGradient id="routeGlowMap" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#4edea3" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
              <stop offset="100%" stopColor="#4cd7f6" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>

        {/* Map Markers (Pins 1 - 5) */}
        {MAP_PINS.map((pin) => {
          const isCurrentActive = activePin === pin.id;
          return (
            <div
              key={pin.id}
              onClick={() => setActivePin(pin.id)}
              className="absolute flex flex-col items-center cursor-pointer transition-transform hover:scale-110 z-20"
              style={{
                top: pin.top,
                left: pin.left,
                right: pin.right,
              }}
            >
              {isCurrentActive ? (
                <>
                  {/* Pulsing Aura */}
                  <div className="absolute -top-1 w-10 h-10 bg-primary/30 rounded-full animate-ping pointer-events-none" />
                  <div className="relative w-9 h-9 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center shadow-xl shadow-primary/40 border border-white/20">
                    <span className="text-sm">{pin.id}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1 bg-surface-container-lowest/90 backdrop-blur-md px-2 py-0.5 rounded-full shadow-lg border border-primary/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-[11px] text-primary font-bold">{pin.name}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-7 h-7 rounded-full bg-surface-container-high text-on-surface text-xs font-semibold flex items-center justify-center shadow-md border border-white/10 hover:bg-surface-container-highest">
                    {pin.id}
                  </div>
                  <span className="text-[10px] text-on-surface-variant mt-1 bg-surface-container-lowest/80 px-1.5 py-0.5 rounded-md border border-white/5">
                    {pin.name}
                  </span>
                </>
              )}
            </div>
          );
        })}

        {/* Current User Location Indicator Pin */}
        <div className="absolute bottom-5 left-8 flex items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full shadow-lg border border-white/10">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
            <span className="absolute w-4 h-4 rounded-full bg-secondary/40 animate-pulse" />
          </div>
          <span className="text-[11px] text-on-surface font-medium">موقعك الحالي</span>
        </div>

        {/* Compass & Layer Map Tools */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <button
            aria-label="بوصلة"
            className="w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-white/5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">explore</span>
          </button>
          <button
            aria-label="طبقات الخريطة"
            className="w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-white/5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">layers</span>
          </button>
        </div>
      </div>

      {/* Draggable Bottom Sheet / Place Details Card */}
      <div className="w-full bg-surface-container rounded-3xl p-4 mt-4 shadow-2xl flex flex-col relative transition-all border border-white/5">
        {/* Top Grab Handle */}
        <div className="w-full flex justify-center mb-2">
          <div className="w-10 h-1 rounded-full bg-surface-variant" />
        </div>

        {/* Place Identity Header */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h2 className="text-xl text-on-surface font-bold">قرية بيلاجيو — Bellagio</h2>
            <p className="text-xs text-on-surface-variant mt-0.5">
              قرية تاريخية ووجهة ساحلية فاخرة · بحيرة كومو
            </p>
          </div>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            aria-label="حفظ في المفضلة"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-white/5 cursor-pointer ${
              isBookmarked
                ? 'bg-primary/20 text-primary border-primary/30'
                : 'bg-surface-container-high text-on-surface hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              {isBookmarked ? 'bookmark_added' : 'bookmark'}
            </span>
          </button>
        </div>

        {/* Rating & Live Distance */}
        <div className="flex flex-wrap items-center gap-2 mb-3.5">
          <div className="flex items-center gap-1 bg-surface-container-lowest px-2.5 py-1 rounded-full border border-white/5">
            <span className="material-symbols-outlined text-tertiary text-xs">star</span>
            <span className="text-xs text-on-surface font-bold">4.9</span>
            <span className="text-[11px] text-on-surface-variant">(2,410 تقييم)</span>
          </div>
          <div className="flex items-center gap-1 bg-surface-container-lowest px-2.5 py-1 rounded-full text-secondary border border-white/5">
            <span className="material-symbols-outlined text-xs">near_me</span>
            <span className="text-[11px] font-medium">15 دقيقة من موقعك الحالي</span>
          </div>
        </div>

        {/* Gallery Strip Preview */}
        <div className="grid grid-cols-3 gap-2 mb-3.5 w-full">
          <div className="h-24 rounded-xl overflow-hidden relative shadow-sm border border-white/5">
            <img
              className="w-full h-full object-cover"
              alt="Bellagio stone stairs"
              src={ASSETS.bellagioPhoto1}
            />
          </div>
          <div className="h-24 rounded-xl overflow-hidden relative shadow-sm border border-white/5">
            <img
              className="w-full h-full object-cover"
              alt="Bellagio wooden boat"
              src={ASSETS.bellagioPhoto2}
            />
          </div>
          <div className="h-24 rounded-xl overflow-hidden relative shadow-sm border border-white/5">
            <img
              className="w-full h-full object-cover"
              alt="Bellagio panoramic promontory"
              src={ASSETS.bellagioPhoto3}
            />
            <div className="absolute inset-0 bg-surface-container-lowest/60 backdrop-blur-xs flex items-center justify-center">
              <span className="text-xs text-on-surface font-bold">+18 صورة</span>
            </div>
          </div>
        </div>

        {/* Quick Specs Row */}
        <div className="grid grid-cols-3 gap-2 bg-surface-container-lowest rounded-2xl p-3 mb-3.5 border border-white/5">
          {/* Duration */}
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary text-lg mb-0.5">schedule</span>
            <span className="text-[11px] text-on-surface-variant">المدة المقترحة</span>
            <span className="text-xs text-on-surface font-bold mt-0.5">ساعتان</span>
          </div>

          {/* Best Time */}
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-tertiary text-lg mb-0.5">wb_twilight</span>
            <span className="text-[11px] text-on-surface-variant">أفضل وقت</span>
            <span className="text-xs text-on-surface font-bold mt-0.5">02:00 م - 05:30 م</span>
          </div>

          {/* Cost */}
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-secondary text-lg mb-0.5">payments</span>
            <span className="text-[11px] text-on-surface-variant">التكلفة</span>
            <span className="text-xs text-on-surface font-bold mt-0.5">مجاني للتجول</span>
          </div>
        </div>

        {/* AI Smart Recommendation Callout */}
        <div className="bg-surface-container-high rounded-2xl p-3.5 mb-4 shadow-sm flex items-start gap-2.5 border border-primary/20">
          <div className="w-8 h-8 rounded-xl bg-primary/20 shrink-0 flex items-center justify-center text-primary mt-0.5">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-primary font-bold">توصية روحة الذكية</span>
              <span className="text-[10px] text-on-surface-variant bg-surface-container-lowest px-2 py-0.5 rounded-full">
                توقيت مثالي
              </span>
            </div>
            <p className="text-xs text-on-surface leading-relaxed mt-0.5">
              روحة يقترح: تزور ممر <span className="text-secondary font-medium">Salita Serbelloni</span> قبل الغروب بـ 45 دقيقة لالتقاط صورة خيالية خالية من حشود السياح مع هدوء مياه البحيرة.
            </p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col gap-2">
          {/* Primary Action */}
          <button
            onClick={toggleAdd}
            className={`w-full h-12 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98] cursor-pointer ${
              isAdded
                ? 'bg-secondary-container text-on-secondary-container'
                : 'bg-primary text-on-primary shadow-primary/20 hover:brightness-105'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              {isAdded ? 'check_circle' : 'add_circle'}
            </span>
            <span className="text-sm">
              {isAdded ? 'تمت الإضافة إلى رحلتك' : 'إضافة للجدول اليومي'}
            </span>
          </button>

          {/* Secondary Action */}
          <button
            onClick={handleOpenMaps}
            className="w-full h-11 py-2.5 rounded-xl bg-surface-container-high text-on-surface hover:text-secondary text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors active:scale-[0.98] border border-white/5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">map</span>
            <span>فتح في Apple Maps</span>
          </button>
        </div>
      </div>
    </div>
  );
};
