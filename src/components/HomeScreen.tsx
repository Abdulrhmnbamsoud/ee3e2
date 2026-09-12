import React, { useState } from 'react';
import { ASSETS, DESTINATIONS } from '../data/mockData';
import { ScreenType } from '../types';

interface Props {
  onNavigate: (screen: ScreenType) => void;
  onAnalyzeLink?: (link: string) => void;
}

export const HomeScreen: React.FC<Props> = ({ onNavigate, onAnalyzeLink }) => {
  const [inputUrl, setInputUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      if (onAnalyzeLink) {
        onAnalyzeLink(inputUrl || 'https://www.tiktok.com/@travel_explorer/video/73918239');
      }
      onNavigate('analysis');
    }, 450);
  };

  const handleQuickPrompt = (type: string) => {
    let sample = '';
    if (type === 'tiktok') sample = 'https://www.tiktok.com/@italy_vibes/lake-como-guide';
    else if (type === 'web') sample = 'https://travelblog.com/best-places-lake-como';
    else if (type === 'photo') sample = 'صورة: شرفة فيلا بالبيانيلو كومو';
    else sample = 'شمال إيطاليا، بحيرة كومو والدولوميت';
    setInputUrl(sample);
  };

  return (
    <div className="flex flex-col w-full space-y-5 select-none" dir="rtl">
      {/* Personalized User Header Section */}
      <div className="flex items-center justify-between pt-1">
        <div
          onClick={() => onNavigate('premium')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface-container-high shadow-md border border-white/10 group-hover:border-primary/40 transition-colors">
            <img
              alt="عبدالرحمن"
              className="w-full h-full object-cover"
              src={ASSETS.userAvatar}
            />
            <div className="absolute bottom-0 left-0 w-3.5 h-3.5 bg-primary rounded-full ring-2 ring-surface" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-base text-on-surface font-bold truncate group-hover:text-primary transition-colors">
                مساء الخير عبدالرحمن
              </span>
              <span className="text-base">👋</span>
            </div>
            <p className="text-xs text-on-surface-variant font-medium">وين ودك تروح اليوم؟</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('premium')}
            className="px-2.5 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-semibold flex items-center gap-1 border border-tertiary/20 hover:bg-tertiary/20 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[14px]">star</span>
            <span>PRO</span>
          </button>
          <button
            aria-label="التنبيهات"
            className="relative w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface active:scale-95 transition-all shadow-sm border border-white/5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-secondary" />
          </button>
        </div>
      </div>

      {/* Primary AI Inspiration Card */}
      <div className="relative rounded-2xl bg-surface-container-low p-4 shadow-xl overflow-hidden border border-white/5">
        {/* Ambient atmospheric highlights */}
        <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-secondary/10 blur-2xl pointer-events-none" />

        <div className="relative flex flex-col space-y-3 z-10">
          <div className="flex flex-col space-y-1">
            <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded-full bg-surface-container text-primary text-xs font-semibold border border-primary/20 shadow-sm">
              <span className="material-symbols-outlined text-[15px]">auto_awesome</span>
              <span>المساعد الذكي روحة</span>
            </div>
            <h2 className="text-xl text-on-surface font-bold pt-1">أنشئ رحلة ذكية من أي فكرة</h2>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              ضع رابط فيديو، صورة، أو مجرد اسم وجهة… وروحة يخطط لك التجربة بالكامل في ثوانٍ.
            </p>
          </div>

          {/* Interactive Search & AI Extraction Field */}
          <div className="flex flex-col space-y-2 pt-1">
            <div className="relative flex items-center bg-surface-container-high rounded-xl p-1.5 shadow-md border border-white/5 focus-within:border-primary/50 transition-colors">
              <div className="flex items-center justify-center w-9 h-9 text-on-surface-variant">
                <span className="material-symbols-outlined text-[20px]">link</span>
              </div>
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                className="flex-1 bg-transparent border-0 outline-none text-on-surface placeholder:text-on-surface-variant/60 text-xs sm:text-sm px-1 min-w-0"
                placeholder="ألصق رابط تيك توك، يوتيوب أو انستقرام..."
                type="text"
              />
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="flex items-center justify-center gap-1 bg-primary text-on-primary text-xs font-bold px-3.5 h-9 rounded-lg shadow-md active:scale-95 transition-transform cursor-pointer shrink-0"
                id="analyze-btn"
              >
                {isAnalyzing ? (
                  <>
                    <span className="material-symbols-outlined text-[16px] animate-spin">sync</span>
                    <span>تحليل...</span>
                  </>
                ) : (
                  <>
                    <span>تحليل</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_back_ios_new</span>
                  </>
                )}
              </button>
            </div>

            {/* 4 Quick Inspiration Trigger Pills */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => handleQuickPrompt('tiktok')}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high active:scale-98 transition-all text-right group border border-white/5 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[18px]">play_circle</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-on-surface truncate">فيديو TikTok</span>
                  <span className="text-[11px] text-on-surface-variant truncate">استخراج الأماكن</span>
                </div>
              </button>

              <button
                onClick={() => handleQuickPrompt('web')}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high active:scale-98 transition-all text-right group border border-white/5 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[18px]">link</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-on-surface truncate">رابط من الويب</span>
                  <span className="text-[11px] text-on-surface-variant truncate">مقال أو تدوينة</span>
                </div>
              </button>

              <button
                onClick={() => handleQuickPrompt('photo')}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high active:scale-98 transition-all text-right group border border-white/5 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-on-surface truncate">صورة أو لقطة</span>
                  <span className="text-[11px] text-on-surface-variant truncate">تحليل المعالم</span>
                </div>
              </button>

              <button
                onClick={() => handleQuickPrompt('custom')}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high active:scale-98 transition-all text-right group border border-white/5 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-fixed group-hover:bg-primary-fixed group-hover:text-on-primary-fixed transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[18px]">edit_location_alt</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-on-surface truncate">اكتب وجهتك</span>
                  <span className="text-[11px] text-on-surface-variant truncate">خطة مخصصة</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Trip Card Section */}
      <div className="flex flex-col space-y-2.5">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg text-on-surface font-bold">رحلتك الحالية</h3>
            <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold">
              نشطة
            </span>
          </div>
          <span className="text-xs text-primary font-semibold">متبقي 3 أيام</span>
        </div>

        <div className="relative rounded-2xl bg-surface-container-low overflow-hidden shadow-lg flex flex-col border border-white/5">
          {/* Top visual area with destination backdrop and badges */}
          <div
            className="relative w-full h-44 bg-cover bg-center cursor-pointer"
            onClick={() => onNavigate('trip-details')}
            style={{ backgroundImage: `url('${ASSETS.activeTripBanner}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-black/30" />
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
              <span className="px-2.5 py-1 rounded-full bg-primary text-on-primary text-xs font-bold shadow-md flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-surface animate-pulse" />
                اليوم 2 من 5
              </span>
              <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/70 backdrop-blur-md text-on-surface text-xs font-medium border border-white/10">
                شمال إيطاليا 🇮🇹
              </span>
            </div>
            <div className="absolute bottom-2.5 right-3 left-3">
              <h4 className="text-xl text-on-surface font-bold drop-shadow-sm">شمال إيطاليا — 5 أيام</h4>
              <p className="text-xs text-on-surface-variant font-medium mt-0.5">ميلان · كومو · الدولوميت</p>
            </div>
          </div>

          {/* Next upcoming activity node */}
          <div className="p-3.5 flex flex-col space-y-2.5 bg-surface-container-low">
            <div
              onClick={() => onNavigate('map-discover')}
              className="flex items-start gap-3 p-3 rounded-xl bg-surface-container shadow-sm border border-white/5 cursor-pointer hover:border-secondary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">directions_boat</span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-secondary font-bold">النشاط القادم</span>
                  <span className="text-xs text-tertiary font-semibold">بعد ساعتين</span>
                </div>
                <p className="text-sm text-on-surface font-semibold truncate pt-0.5">
                  جولة خاصة بالقارب في بحيرة كومو
                </p>
                <span className="text-xs text-on-surface-variant font-medium">16:00 · مرفأ بيلاجيو التاريخي</span>
              </div>
            </div>

            {/* Action link to interactive itinerary */}
            <button
              onClick={() => onNavigate('trip-details')}
              className="w-full h-11 rounded-xl bg-surface-container-high hover:bg-surface-bright active:scale-98 transition-all flex items-center justify-between px-4 text-on-surface shadow-sm cursor-pointer border border-white/5"
            >
              <span className="text-xs sm:text-sm font-semibold">فتح الجدول التفاعلي الكامل</span>
              <div className="flex items-center gap-1 text-primary">
                <span className="text-xs font-semibold">عرض التفاصيل</span>
                <span className="material-symbols-outlined text-[18px]">arrow_left</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Destination Teasers / Inspiration Section (قد يعجبك) */}
      <div className="flex flex-col space-y-2.5 pb-1">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg text-on-surface font-bold">قد يعجبك</h3>
            <span className="text-xs text-on-surface-variant">مقترحات مصممة لذائقتك</span>
          </div>
          <button
            onClick={() => onNavigate('map-discover')}
            className="text-xs text-primary font-semibold hover:underline cursor-pointer"
          >
            استكشف الكل
          </button>
        </div>

        {/* Horizontal scrollable card carousel */}
        <div className="flex overflow-x-auto gap-3.5 pb-2 pt-0.5 -mx-4 px-4 no-scrollbar">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onNavigate('map-discover')}
              className="shrink-0 w-64 rounded-2xl bg-surface-container-low overflow-hidden shadow-lg flex flex-col group cursor-pointer active:scale-98 transition-transform border border-white/5"
            >
              <div
                className="relative w-full h-36 bg-cover bg-center"
                style={{ backgroundImage: `url('${dest.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-black/20" />
                <span
                  className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-xs font-semibold flex items-center gap-1 border border-white/10 ${dest.badgeColor}`}
                >
                  <span className="material-symbols-outlined text-[13px]">{dest.badgeIcon}</span>
                  {dest.badge}
                </span>
                <span className="absolute bottom-2 right-3 text-xs text-on-surface-variant font-medium">
                  {dest.country} · {dest.duration}
                </span>
              </div>
              <div className="p-3.5 flex flex-col space-y-2 bg-surface-container-low">
                <h4 className="text-sm text-on-surface font-bold truncate">{dest.title}</h4>
                <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                  {dest.subtitle}
                </p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-primary font-semibold">{dest.actionText}</span>
                  <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[15px]">arrow_left</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Concierge Quick Prompt Bar */}
      <div
        onClick={() => onNavigate('premium')}
        className="p-3.5 rounded-2xl bg-surface-container flex items-center justify-between shadow-sm border border-white/5 cursor-pointer hover:border-primary/20 transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[20px]">tips_and_updates</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-on-surface font-bold">تحتاج مساعدة فورية؟</span>
            <span className="text-[11px] text-on-surface-variant">اسأل روحة عن مطاعم قريبة، طقس أو تأشيرات</span>
          </div>
        </div>
        <button
          className="px-3 h-8 rounded-lg bg-surface-container-high text-on-surface text-xs font-semibold hover:bg-surface-bright transition-colors cursor-pointer"
        >
          محادثة
        </button>
      </div>
    </div>
  );
};
