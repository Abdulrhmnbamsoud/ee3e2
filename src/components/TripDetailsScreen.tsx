import React, { useState } from 'react';
import { ASSETS, TIMELINE_DAY_1 } from '../data/mockData';
import { ScreenType } from '../types';

interface Props {
  onNavigate: (screen: ScreenType) => void;
}

export const TripDetailsScreen: React.FC<Props> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'plan' | 'map' | 'places' | 'expenses'>('plan');
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [savedStatus, setSavedStatus] = useState<boolean>(false);

  const handleSaveTrip = () => {
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 2500);
  };

  return (
    <div className="flex flex-col w-full pb-24 space-y-5 select-none" dir="rtl">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface hover:text-primary transition-colors border border-white/5 cursor-pointer"
            aria-label="العودة"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_forward_ios</span>
          </button>
          <h1 className="text-xl text-on-surface font-bold tracking-tight">تفاصيل الرحلة</h1>
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

      {/* Hero Section */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-surface-container-low border border-white/5">
        <div
          className="w-full h-56 bg-cover bg-center relative"
          style={{ backgroundImage: `url('${ASSETS.tripDetailsHero}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent" />

          {/* AI Status Badge Floating Top */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-white/10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-semibold text-primary">تم التوليد بواسطة الذكاء الاصطناعي</span>
          </div>

          {/* Hero Details Overlaid at Bottom */}
          <div className="absolute bottom-3 right-3 left-3 flex flex-col space-y-1.5">
            <h2 className="text-2xl text-on-surface font-bold tracking-tight drop-shadow-md">
              رحلتك لشمال إيطاليا ✨
            </h2>

            {/* Meta badges row */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-1 bg-surface-container-high/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/5">
                <span className="material-symbols-outlined text-secondary text-xs">calendar_month</span>
                <span className="text-xs text-on-surface font-medium">5 أيام</span>
              </div>
              <div className="flex items-center gap-1 bg-surface-container-high/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/5">
                <span className="material-symbols-outlined text-secondary text-xs">pin_drop</span>
                <span className="text-xs text-on-surface font-medium">14 مكان</span>
              </div>
              <div className="flex items-center gap-1 bg-surface-container-high/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/5">
                <span className="material-symbols-outlined text-secondary text-xs">location_city</span>
                <span className="text-xs text-on-surface font-medium">4 مدن</span>
              </div>
              <div className="flex items-center gap-1 bg-primary/20 backdrop-blur-sm px-2.5 py-1 rounded-full border border-primary/30">
                <span className="material-symbols-outlined text-primary text-xs">auto_awesome</span>
                <span className="text-xs text-primary font-bold">مسار مُحسّن ذكياً</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Navigation Tabs */}
      <div className="flex items-center bg-surface-container-low p-1 rounded-full shadow-sm border border-white/5">
        <button
          onClick={() => setActiveTab('plan')}
          className={`flex-1 py-2 rounded-full text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
            activeTab === 'plan'
              ? 'bg-primary text-on-primary shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          الخطة (نشط)
        </button>
        <button
          onClick={() => {
            setActiveTab('map');
            onNavigate('map-discover');
          }}
          className={`flex-1 py-2 rounded-full text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
            activeTab === 'map'
              ? 'bg-primary text-on-primary shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          الخريطة
        </button>
        <button
          onClick={() => setActiveTab('places')}
          className={`flex-1 py-2 rounded-full text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
            activeTab === 'places'
              ? 'bg-primary text-on-primary shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          الأماكن
        </button>
        <button
          onClick={() => setActiveTab('expenses')}
          className={`flex-1 py-2 rounded-full text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
            activeTab === 'expenses'
              ? 'bg-primary text-on-primary shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          الملخص والمصاريف
        </button>
      </div>

      {/* Day Selector Carousel */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs text-on-surface-variant font-medium">اختر اليوم لاستعراض الجدول</span>
          <span className="text-xs text-primary font-semibold">المسار اليومي جاهز</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {[1, 2, 3, 4, 5].map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shrink-0 transition-all cursor-pointer border ${
                selectedDay === day
                  ? 'bg-primary text-on-primary border-primary shadow-md'
                  : 'bg-surface-container-high text-on-surface border-white/5 hover:bg-surface-variant'
              }`}
            >
              {selectedDay === day && <span className="w-1.5 h-1.5 rounded-full bg-on-primary" />}
              <span>{`اليوم ${day} ${selectedDay === day ? '(نشط)' : ''}`}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Day Summary Header Card */}
      <div className="flex items-center justify-between p-3.5 bg-surface-container rounded-2xl shadow-md border border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
            <span className="material-symbols-outlined text-[22px]">explore</span>
          </div>
          <div>
            <h3 className="text-sm sm:text-base text-on-surface font-bold">
              {selectedDay === 1
                ? 'اليوم الأول: بحيرة كومو وقرى الساحل'
                : `اليوم ${selectedDay}: جولات استكشافية ومسارات جبلية`}
            </h3>
            <p className="text-xs text-on-surface-variant font-medium mt-0.5">
              5 محطات رئيسية · تنقل سلس بالقارب والسيارة
            </p>
          </div>
        </div>
        <button
          aria-label="تصفية"
          className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">tune</span>
        </button>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative flex flex-col pr-1">
        {/* Continuous glowing timeline spine */}
        <div className="absolute top-6 bottom-6 right-5 w-0.5 bg-gradient-to-b from-primary via-secondary to-tertiary" />

        {TIMELINE_DAY_1.map((act) => (
          <React.Fragment key={act.id}>
            {/* Activity Card */}
            <div className="relative flex items-start gap-3.5 pb-6">
              <div className="relative z-10 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shadow-md shrink-0 border border-white/10">
                <span className="material-symbols-outlined text-[20px]">{act.icon}</span>
              </div>

              <div className="flex flex-col flex-1 bg-surface-container rounded-2xl p-4 shadow-md space-y-2 border border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-md">
                    {act.time}
                  </span>
                  {act.rating && (
                    <div className="flex items-center gap-1 text-tertiary">
                      <span className="material-symbols-outlined text-xs">star</span>
                      <span className="text-xs font-bold">{act.rating}</span>
                    </div>
                  )}
                  {act.isBooked && (
                    <div className="flex items-center gap-1 text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      <span className="material-symbols-outlined text-xs">verified</span>
                      <span className="text-xs font-bold">محجوز مسبقاً</span>
                    </div>
                  )}
                  {act.tagType === 'nature' && (
                    <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full font-medium">
                      {act.tag}
                    </span>
                  )}
                  {act.tagType === 'tip' && (
                    <span className="text-xs text-on-surface-variant bg-surface-container-highest px-2 py-0.5 rounded-md font-medium">
                      المحطة الختامية
                    </span>
                  )}
                </div>

                <h4 className="text-base text-on-surface font-bold">{act.title}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{act.description}</p>

                <div className="flex items-center gap-3 pt-1">
                  <span className="flex items-center gap-1 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-xs">schedule</span>
                    {act.duration}
                  </span>
                  {act.tagType === 'water' && (
                    <span className="flex items-center gap-1 text-xs text-secondary font-medium">
                      <span className="material-symbols-outlined text-xs">water_drop</span>
                      {act.tag}
                    </span>
                  )}
                  {act.tagType === 'food' && (
                    <span className="flex items-center gap-1 text-xs text-tertiary font-medium">
                      <span className="material-symbols-outlined text-xs">local_dining</span>
                      {act.tag}
                    </span>
                  )}
                  {act.tagType === 'vip' && (
                    <span className="flex items-center gap-1 text-xs text-tertiary font-semibold">
                      <span className="material-symbols-outlined text-xs">military_tech</span>
                      {act.tag}
                    </span>
                  )}
                </div>

                {/* Smart AI Callout Card if present */}
                {act.aiSuggestion && (
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-surface-container-high shadow-sm mt-2 border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">
                      lightbulb
                    </span>
                    <p className="text-xs text-primary-fixed leading-relaxed">
                      <span className="font-bold">روحة يقترح: </span>
                      {act.aiSuggestion.replace('روحة يقترح: ', '')}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Distance Divider */}
            {act.distanceDivider && (
              <div className="relative flex items-center gap-3 pb-6 pr-2">
                <div className="w-6 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-sm text-outline">
                    {act.distanceDivider.icon}
                  </span>
                </div>
                <div
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm border border-white/5 ${
                    act.distanceDivider.type === 'sunset'
                      ? 'bg-surface-container-high text-tertiary font-bold'
                      : 'bg-surface-container-lowest text-on-surface-variant'
                  }`}
                >
                  <span className="text-xs font-medium">{act.distanceDivider.text}</span>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom Floating Actions Deck */}
      <div className="sticky bottom-4 inset-x-0 z-30 flex items-center gap-2.5 bg-surface-container-lowest/90 backdrop-blur-xl p-2 rounded-2xl shadow-2xl border border-white/10">
        <button
          onClick={() => onNavigate('analysis')}
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-variant transition-all text-xs sm:text-sm font-semibold border border-white/5 cursor-pointer"
        >
          <span className="material-symbols-outlined text-primary text-lg">auto_fix_high</span>
          <span>تعديل بالمساعد الذكي 🪄</span>
        </button>

        <button
          onClick={handleSaveTrip}
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-on-primary hover:brightness-105 active:scale-95 transition-all text-xs sm:text-sm font-bold shadow-md cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">
            {savedStatus ? 'check_circle' : 'sync_saved_locally'}
          </span>
          <span>{savedStatus ? 'تم الحفظ والمزامنة!' : 'حفظ ومزامنة الرحلة'}</span>
        </button>
      </div>
    </div>
  );
};
