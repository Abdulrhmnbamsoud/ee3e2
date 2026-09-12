import React, { useState } from 'react';
import { ASSETS, VIP_PERKS } from '../data/mockData';
import { ScreenType } from '../types';

interface Props {
  onNavigate: (screen: ScreenType) => void;
}

export const PremiumScreen: React.FC<Props> = ({ onNavigate }) => {
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>('annual');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    setTimeout(() => {
      onNavigate('home');
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full relative pb-10 select-none" dir="rtl">
      {/* Top Dismiss Bar */}
      <div className="flex items-center justify-between w-full mb-4">
        <button
          onClick={() => onNavigate('home')}
          aria-label="إغلاق"
          className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-all active:scale-95 border border-white/5 cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
        <div className="flex items-center gap-1.5 text-tertiary text-xs font-semibold bg-tertiary-container/10 px-3 py-1 rounded-full border border-tertiary/20">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          <span>عضوية النخبة</span>
        </div>
      </div>

      {/* Hero Emblem Section with Ambient Glow */}
      <div className="relative flex flex-col items-center justify-center text-center my-2">
        {/* Ambient Radial Aura */}
        <div className="absolute w-48 h-48 rounded-full bg-gradient-to-b from-tertiary/25 via-primary/10 to-transparent blur-3xl pointer-events-none -top-6" />

        <div className="relative mb-3">
          <div className="w-24 h-24 rounded-2xl bg-surface-container-high p-3.5 shadow-2xl flex items-center justify-center border border-white/10">
            <img
              alt="شعار تطبيق روحة"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(255,185,95,0.4)]"
              src={ASSETS.logo}
            />
          </div>
          <span className="absolute -bottom-2 -left-2 bg-tertiary text-on-tertiary text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider">
            PRO
          </span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-surface-container-high mb-2 shadow-sm border border-white/5">
          <span className="text-tertiary text-xs font-bold tracking-wider">روحة PREMIUM</span>
          <span className="material-symbols-outlined text-tertiary text-[14px]">arrow_back_ios_new</span>
        </div>

        {/* Headline & Subtitle */}
        <h1 className="text-2xl text-on-surface font-bold mb-2 leading-tight px-2">
          خل التخطيط علينا… وأنت استمتع بالرحلة.
        </h1>
        <p className="text-xs text-on-surface-variant max-w-xs leading-relaxed">
          ترقية مصممة للمسافر الذكي الذي يبحث عن راحة البال وأفضل المسارات العالمية بدقة فائقة.
        </p>
      </div>

      {/* Feature Value Breakdown */}
      <div className="flex flex-col gap-2.5 my-4">
        {VIP_PERKS.map((perk, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-3 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors border border-white/5"
          >
            <div className={`w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center ${perk.iconColor} shrink-0 shadow-sm border border-white/5`}>
              <span className="material-symbols-outlined text-[20px]">{perk.icon}</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-sm text-on-surface font-semibold">{perk.title}</span>
              <span className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed mt-0.5">
                {perk.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Subscription Period Selector (Cards) */}
      <div className="flex flex-col gap-3 my-2">
        {/* Annual Plan (Recommended) */}
        <div
          onClick={() => setSelectedPlan('annual')}
          className={`relative flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all border ${
            selectedPlan === 'annual'
              ? 'bg-surface-container-high border-tertiary/40 shadow-lg'
              : 'bg-surface-container-low border-white/5'
          }`}
        >
          {/* Top Saver Tag */}
          <span className="absolute -top-2.5 right-4 bg-tertiary text-on-tertiary text-[11px] px-2.5 py-0.5 rounded-full font-bold shadow-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px]">star</span>
            وفر 45% (فقط 16 ر.س شهرياً)
          </span>

          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                selectedPlan === 'annual'
                  ? 'bg-tertiary text-on-tertiary'
                  : 'bg-surface-container-highest border border-white/10'
              }`}
            >
              {selectedPlan === 'annual' && <div className="w-2 h-2 rounded-full bg-on-tertiary" />}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-on-surface">الخطة السنوية</span>
              <span className="text-xs text-on-surface-variant">الخيار المفضل للمسافرين</span>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-base font-bold text-tertiary">199 ر.س</span>
            <span className="text-[11px] text-on-surface-variant">/ سنة كاملة</span>
          </div>
        </div>

        {/* Monthly Plan */}
        <div
          onClick={() => setSelectedPlan('monthly')}
          className={`relative flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all border ${
            selectedPlan === 'monthly'
              ? 'bg-surface-container-high border-tertiary/40 shadow-lg'
              : 'bg-surface-container-low border-white/5'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                selectedPlan === 'monthly'
                  ? 'bg-tertiary text-on-tertiary'
                  : 'bg-surface-container-highest border border-white/10'
              }`}
            >
              {selectedPlan === 'monthly' && <div className="w-2 h-2 rounded-full bg-on-tertiary" />}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-on-surface">الخطة الشهرية</span>
              <span className="text-xs text-on-surface-variant">مرونة تامة، إلغاء بأي وقت</span>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-base font-bold text-on-surface">29 ر.س</span>
            <span className="text-[11px] text-on-surface-variant">/ شهر</span>
          </div>
        </div>
      </div>

      {/* Primary Call To Action Area */}
      <div className="flex flex-col items-center gap-2.5 mt-3">
        <button
          onClick={handleSubscribe}
          className="w-full h-14 rounded-2xl bg-tertiary text-on-tertiary text-base font-bold flex items-center justify-center gap-2 shadow-[0_8px_24px_-4px_rgba(255,185,95,0.4)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]">hotel_class</span>
          <span>
            {isSubscribed
              ? 'تم تفعيل العضوية بنجاح! 🎉'
              : selectedPlan === 'annual'
              ? 'ابدأ تجربة روحة Premium المجانية'
              : 'ترقية للاشتراك الشهري (29 ر.س)'}
          </span>
        </button>

        {/* Reassurance Microcopy */}
        <div className="flex items-center gap-1 text-on-surface-variant text-xs">
          <span className="material-symbols-outlined text-[15px] text-primary">lock_reset</span>
          <span>تجربة مجانية لمدة 7 أيام، بدون أي التزام أو خصم مسبق.</span>
        </div>

        {/* Gentle Dismissal */}
        <button
          onClick={() => onNavigate('home')}
          className="text-on-surface-variant hover:text-on-surface text-xs py-1 transition-colors cursor-pointer"
          type="button"
        >
          أو الاستمرار بالنسخة الأساسية مجاناً
        </button>
      </div>

      {/* Trust & Policy Footer */}
      <div className="mt-4 flex flex-col items-center gap-1.5">
        <div className="flex items-center justify-center gap-2 text-on-surface-variant text-[11px]">
          <a className="hover:underline" href="#terms">شروط الخدمة</a>
          <span>·</span>
          <a className="hover:underline" href="#privacy">سياسة الخصوصية</a>
          <span>·</span>
          <button className="hover:underline text-on-surface-variant cursor-pointer" type="button">
            استعادة المشتريات
          </button>
        </div>
        <span className="text-[10px] text-on-surface-variant/60 text-center max-w-xs leading-normal">
          يتم التجديد تلقائياً ما لم يتم الإلغاء قبل 24 ساعة على الأقل من نهاية الفترة الحالية عبر إعدادات حسابك.
        </span>
      </div>
    </div>
  );
};
