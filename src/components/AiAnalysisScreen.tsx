import React, { useState, useEffect } from 'react';
import { ASSETS } from '../data/mockData';
import { ScreenType } from '../types';

interface Props {
  onNavigate: (screen: ScreenType) => void;
}

export const AiAnalysisScreen: React.FC<Props> = ({ onNavigate }) => {
  const [progress, setProgress] = useState(85);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
      setIsCompleted(true);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full space-y-5 select-none" dir="rtl">
      {/* Interactive Top Action Status Bar */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary-container/20">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping absolute" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary relative" />
          </div>
          <div className="flex flex-col">
            <span className="text-base text-on-surface font-bold">جاري تحليل الإلهام</span>
            <span className="text-xs text-on-surface-variant font-medium">
              الذكاء الاصطناعي يستخرج خط سيرك
            </span>
          </div>
        </div>
        <button
          onClick={() => onNavigate('home')}
          className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface text-xs font-semibold transition-all active:scale-95 border border-white/5 cursor-pointer"
          type="button"
        >
          إلغاء
        </button>
      </div>

      {/* Video Source Card with Scanning Beam & Hologram Effect */}
      <div className="relative overflow-hidden rounded-2xl bg-surface-container-low shadow-xl p-3.5 space-y-3 border border-white/5">
        {/* Ambient Background Radial Glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        {/* Media Source Badge & Link Identity */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-surface-container-highest text-secondary">
              <span className="material-symbols-outlined text-[18px]">play_circle</span>
            </span>
            <span className="text-xs text-on-surface font-bold">محتوى مستورد من TikTok</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-[11px] font-semibold flex items-center gap-1 border border-white/5">
            <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
            فيديو موثق
          </span>
        </div>

        {/* Video Snapshot Box with Scanning Laser Effect */}
        <div className="relative w-full h-44 rounded-xl overflow-hidden bg-surface-container shadow-inner">
          <img
            className="w-full h-full object-cover"
            alt="Cinematic drone view of Lake Como Italy"
            src={ASSETS.tiktokVideoPreview}
          />
          {/* Ambient Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/35 to-transparent" />

          {/* Animated Scanning Line Beam */}
          <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_14px_#4edea3] animate-scan-laser pointer-events-none" />

          {/* Bottom Audio Wave Overlay & Destination Meta */}
          <div className="absolute bottom-2.5 inset-x-3 flex items-end justify-between text-on-surface">
            <div className="flex flex-col max-w-[70%]">
              <span className="text-xs text-primary font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]">location_on</span>
                بحيرة كومو وأجمل قرى إيطاليا 🇮🇹
              </span>
              <span className="text-xs text-on-surface truncate font-medium mt-0.5">
                رحلة الـ 4 أيام بين فارينّا، بيلاجيو، وميلانو
              </span>
            </div>

            {/* Simulated Visualizer Waves */}
            <div className="flex items-end gap-1 h-5 px-2 py-1 rounded-lg bg-surface-container-lowest/80 backdrop-blur-md border border-white/10">
              <span className="w-1 bg-primary rounded-full animate-[pulse_1s_ease-in-out_infinite] h-2" />
              <span className="w-1 bg-primary rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-4" />
              <span className="w-1 bg-secondary rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-5" />
              <span className="w-1 bg-primary rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-3" />
              <span className="w-1 bg-secondary rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-1.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Live Progress Status Bar Container */}
      <div className="p-3.5 rounded-2xl bg-surface-container-low shadow-sm space-y-2 border border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-primary">neurology</span>
            <span className="text-xs sm:text-sm text-on-surface font-bold">
              {isCompleted ? 'اكتمل التحليل 100%' : `نسبة الاكتمال ${progress}%`}
            </span>
          </div>
          <span className="text-xs text-primary font-semibold animate-pulse">
            {isCompleted ? 'جاهز للعرض!' : 'باقي ثواني بسيطة...'}
          </span>
        </div>

        {/* Smooth Track */}
        <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
          <div
            className="h-full bg-gradient-to-l from-secondary to-primary rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(78,222,163,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* AI Intelligence Breakdown Timeline Section */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between px-1">
          <span className="text-sm text-on-surface font-bold">خطوات استخراج المعالم</span>
          <span className="text-xs text-on-surface-variant font-medium">
            {isCompleted ? '4 من 4 مكتملة' : '3 من 4 معالجة'}
          </span>
        </div>

        <div className="space-y-2.5">
          {/* Step 1: Completed */}
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-container-low shadow-sm border border-white/5">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-container text-on-primary-container shrink-0 mt-0.5 shadow-sm">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-on-surface font-bold">تحليل الفيديو والمشاهد</span>
                <span className="text-xs text-primary font-semibold">تم بنجاح</span>
              </div>
              <span className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                تعرفنا على الموقع الجغرافي: إقليم لومبارديا، شمال إيطاليا بدقة عالية.
              </span>
            </div>
          </div>

          {/* Step 2: Completed with Extracted Chips Preview */}
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-container-low shadow-sm border border-white/5">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-container text-on-primary-container shrink-0 mt-0.5 shadow-sm">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
            </div>
            <div className="flex flex-col min-w-0 flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-on-surface font-bold">مطابقة المواقع والإحداثيات</span>
                <span className="text-xs text-primary font-semibold">14 معلماً</span>
              </div>
              <span className="text-xs text-on-surface-variant leading-relaxed">
                تم التعرف على الأماكن المذكورة بالاسم والمطاعم ذات التقييم المرتفع.
              </span>
              {/* Discovered POI tags */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                <span className="px-2.5 py-1 rounded-lg bg-surface-container text-secondary text-xs font-semibold flex items-center gap-1 border border-secondary/20">
                  <span className="material-symbols-outlined text-[13px]">villa</span>
                  فيلا بالبيانيلو
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-surface-container text-secondary text-xs font-semibold flex items-center gap-1 border border-secondary/20">
                  <span className="material-symbols-outlined text-[13px]">restaurant</span>
                  مطعم لا بونتا
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant text-xs font-medium border border-white/5">
                  +12 موقعاً إضافياً
                </span>
              </div>
            </div>
          </div>

          {/* Step 3: Active Pulsing Node */}
          <div className="relative overflow-hidden flex items-start gap-3 p-3.5 rounded-2xl bg-surface-container shadow-md border border-primary/20">
            {/* Intelligent Pulse Gradient Backing */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent pointer-events-none" />
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary text-on-primary shrink-0 mt-0.5 shadow-[0_0_12px_rgba(78,222,163,0.5)] animate-pulse">
              <span className="material-symbols-outlined text-[20px]">route</span>
            </div>
            <div className="relative flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm text-primary font-bold">ترتيب المسارات وتفادي الزحمة</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                </div>
                <span className="text-xs text-secondary font-semibold">
                  {isCompleted ? 'تم بنجاح' : 'جاري المعالجة'}
                </span>
              </div>
              <span className="text-xs text-on-surface mt-1 leading-relaxed">
                نبني أفضل تسلسل زمني، حساب رحلات العبّارات بين القرى ومسافات القيادة المثالية...
              </span>
              {/* Dynamic Micro-Ticker */}
              <div className="mt-2.5 flex items-center gap-2 p-2 rounded-xl bg-surface-container-high/70 backdrop-blur-sm border border-white/5">
                <span className="material-symbols-outlined text-secondary text-[16px] animate-spin">sync</span>
                <span className="text-xs text-on-surface-variant">
                  يتم الآن ربط أوقات العبّارة العامة مع أوقات غروب الشمس
                </span>
              </div>
            </div>
          </div>

          {/* Step 4: Pending / Completed Next Step */}
          <div
            className={`flex items-start gap-3 p-3.5 rounded-2xl transition-all border border-white/5 ${
              isCompleted
                ? 'bg-surface-container-low shadow-sm'
                : 'bg-surface-container-low/60 opacity-60'
            }`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 mt-0.5 ${
                isCompleted
                  ? 'bg-primary-container text-on-primary-container shadow-sm'
                  : 'bg-surface-container-highest text-outline'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {isCompleted ? 'check_circle' : 'schedule'}
              </span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-on-surface font-semibold">
                  إتمام أدق التفاصيل وتوصيات التوقيت
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  {isCompleted ? 'جاهز' : 'في الانتظار'}
                </span>
              </div>
              <span className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                تجهيز ملخص التكاليف التقديرية، أفضل ساعات الزيارة لتجنب الطوابير.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time AI Micro-Insights Toast Card */}
      <div className="p-3.5 rounded-2xl bg-surface-container-high flex items-center gap-3 shadow-md border border-white/5">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary-container/20 text-secondary shrink-0">
          <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-xs text-on-surface font-bold">ملاحظة ذكية مستخرجة</span>
          <span className="text-xs text-on-surface-variant truncate mt-0.5">
            تم رصد توصية صانع المحتوى بحجز قارب تاكسي مائي مسبقاً في قرية "بيلاجيو".
          </span>
        </div>
      </div>

      {/* Primary CTA to open itinerary */}
      <div className="pt-1">
        <button
          onClick={() => onNavigate('trip-details')}
          className="w-full h-14 bg-primary text-on-primary text-base font-bold rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">explore</span>
          <span>استعراض خطة الرحلة المكتملة ✨</span>
        </button>
      </div>
    </div>
  );
};
