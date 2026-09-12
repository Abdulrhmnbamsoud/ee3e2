import { TimelineActivity, DestinationCard, MapPin } from '../types';

export const ASSETS = {
  // App brand logo
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1Vg74K2axJyTFBKOq2mwWluZUv2JopulL8uPVGRjCQM7PyXVXullY8yqh4uJb5m8ITxfXSIORSonR6Jcr_unh_83436vBrPuEhtzOBP7o-TTnrrG5xmAEjsB9KQzo7MKqagcx35k5zf378AGYXQThADtmz--sadBZnFs_X2QKfJsXM3hY_a3xeo5de4068Oj_6tjvYKSsa5zRzhLwUH6kN9VJA60g-A5djaA0JRYFCdTnf-W2e2xs9cRyM',
  
  // User profile: Abdulrahman
  userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUeg1p3nc8YKTfZ0yb9HC-Z497ozqIDnic94jR1v0WGQ-WCCxHyJZQUEizjxe6qDFBiilv_iGcxCQshitAEwY568rS5vO4K43xbpTFxwSMhNGBGDiGNz6KgURX89UxKR8w3EmKbEUG1SZIJCXok5xW-D88XtD8ymumBe7DQJoiavirVxmj35dmsNhOC6Cb-uoWztIvbqSFLGl8ozWPV6bGVYFV39MNOuBLfentFnAb2KtjyBjK4fRARA',
  
  // Welcome backdrop: Lake Como alpine panorama
  onboardingBackdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBua8JzpjEbusFbwgjXt5p0kkgvI3yWFe-tU0R1mIx-DzUBSt8vMYlNn6XOUyVYVEfU-WmQYWjoRg5Oo8aWZqVpnLW0fLnBP99gvdM6Zs9puijKWeY8xU84OwxZ74rdgQ8Z0L0MPAgxlLXjGh2ghhKVHP-il54D4Z1Wpsc6p52-ZCJMoxjHPNGdRLokNyI2xxiICTkZjvIqm9_DqzImq0Q6_TXHa3hL30697J_ClPfkQ4u_l_jdDJ-Yow',

  // Social proof user avatars
  traveler1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBzLuCmuBnF6ZqW1NRYy8Gv9xhM_mTXbgd7ennTDeQZjYOUrgC2Z190u395qI3He0lErke9FqF29geb-nylwZp0ofaL0zlig8z3Kh0r0cKq5XUk04Mr-fTW2IzfHxiYEsO0RpwgCRnr6J1c56ZZDkzUew4RGYp-y5eunyCbUrA8XA2p2Toc-ofq6WmRaEVLWma-HsDtx9Z7LnT6rOn6wWA_BBPhkd_mjwR8FLCz1cwcwZemFaNVXSy8A',
  traveler2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwnfLa04h5h02m2i-sjbk3Jlec7vHHAZ9yGc2xCLby59u0KgPyEsZJGVEAzaPGlhJmgw4JVxj6Jg8RBJdaTjxsv7fAdZyy63aEujyiGsWWnIbTcAU4XIH0abJeL4RIel_XwGHcT_-LQZTLtgOVB-m7U6pMHJjmZ7gwI7NZrMjoFRJaS4hO_Mubgy3lFxaU32rUviHZtysilFsPYRVDtW63prGJAdly0QkjVU2A11F_1OY4GVlJZsCMYQ',
  traveler3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDfWW1oPgK6sSJI0b3uY0U3PfpikbAmoZG43PK4hYVGLFe1ct2mUtWIHwBZAT7jpIeYWUc6J-NWHSRkV2OxQbdNfLroumc0FZOnlmUy4I3KzTV5hE0etGeRj_DE79PjjDZgBN45z59J3rcqXlwy7-Ziw73tavfUSOcS_x0qXiNmMNNnOBzh2aGcxWM1LH9wIFr5dTZZbQ4tZ9NH6JwbaWCmJzLXBDwlRvTo-X6bJ_wBWZULvwzuPP8sA',

  // Active Trip Banner: Lake Como
  activeTripBanner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvMagbAuSnvPebTq8Pce472w5xAV7FY7W6ksoXDT-gb3fGdLe8lUrJiF6JLf3SXxGKPjcyzxISzlM4BQViCPBBpy0A3D4wSt2bTKaC80Pdbymf5tOrP1tagb29sNWc_iMO2npRL6jxo2Orhi4T1KmABAEkoomwq5vD49iaCiMjh_aXGGaE-NTZ-cy22XEbSEY3miBLHfTMtpIC_p8XyycmgnM19lrLjSzKD6M7FGLF7ZZZYiMJ3NjcEA',

  // TikTok Scanning Preview
  tiktokVideoPreview: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlxJMDJdBdZvsbvRGV6OOHQjtkP8ENf8sSOs1rm2LNKzCKZklSfB8Jb5PMDWxC8iejyu3C1TK8mvAqdm5g7zm6zpBUq5_XIOAPa-374H8iFnBlWrSri3MfmJSxDpefbiwIR2sZX3H003oqRuVXa14EkjFj5S37w3t601F2K0MX_YyQzdqFEkyVtseQ6pPab4WaRvBL-ZMbEU2FXFLh2U5PzAVDtnMXUPAgXGJZEh7T0rI7GvmrQLHjkw',

  // Trip Details Hero
  tripDetailsHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuwYTh0A-2BV6Zu8ScaPe0Lb_v0EdmVHoJYTr6VSPzNbeNSKatzTktqcHFHTkefngE35pq3gZul0qdVpcTuHGaQnQkNl1Uhr60Op4q3xFFGj4QO3Qu92xEoupybDt0pRMbEE1NTT4cTBckrr6dlfkn_7ydGHx6_MaYky0s6qEIJqmzl_NZpqpkAGi3k8yBSM8v6hP85m-QrvXUA6r0u4RCkjV7w-jweF0h-yW2MU01fMnDKRxlxZGxkQ',

  // Bellagio Place Photos
  bellagioPhoto1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChFZ6ZWTryqsQK2xlYFOwUmxvvk9UrIx6qIcs6QDD5-UG9tYgykJqT18w9lmebtHCSQ4l5HaJ4Cwfz6T8SRQAKv52h3aJz0oMzH7phXoqd6FUiiDIjXjr7oeITVHdCUD1qPdWqg1t_7km5vcaZRAxtsg4XL2iklPOckMHVVcb2Pdy2t4FNaQghtjJebnJqM1l2WEn6XZQRnGEQWh-LfrFDKYDHM4GxkLT8pY-KeMu2sTWTdavU1SDmOw',
  bellagioPhoto2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUMWl0n3kXh-CxEerxXasOJ5o3GmpuUrIPRN9vwUmLUIjLSNb0HPfQ_is-HWg5JwWOGj6zj33bFySUQhfK1Dfz-dI-k-a2wvErZjg-pRxFrjH8jI93Q6h7pFTMZqXA-8C91Ery-1bx-gNtI8-Atu5QUVCnkahuamYI611DapX4wDLtD9G2Izh64oFPkkf25HYMcReDeJtBVopxXGCzGU_FHyKXH5_oxQkgavKxDFDeDnXv7RxxJtXPQQ',
  bellagioPhoto3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9ckoy4iDbDffQ07anvtmSebFExsqMx7axCiwYAqot1lGSzSub_W2FWeZ-Nzm4hagVoSRDvXU6x562uxs4ePjSRfhHtaVc0vTuvkilsZlSZ3vjLIgsWoRH6iLO4nbaKIf0w7kvyWhZN2-IhQ8zRn13PGrHqxbly9YSS71o1h7p2F_5mrDCihIRHgm3PrNUn8CrjoNLHjIMwcu9hytXj5bxbt_GFb47m_tzh5SbYsT_1Kb39rE_mVsL-Q',
};

export const DESTINATIONS: DestinationCard[] = [
  {
    id: 'amalfi',
    title: 'أمالفي والساحل الجنوبي',
    subtitle: 'دروب ساحلية ملهمة، شواطئ صخرية منعزلة ومطاعم ليمون عائلية عريقة.',
    country: 'إيطاليا',
    duration: '4 أيام',
    badge: '11 مكان رائج',
    badgeColor: 'text-[#ffddb8]',
    badgeIcon: 'local_fire_department',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLc-hN6_gPXFD7UojGd7-npPRjzffQgQmOynPkRz3y_ceDS4YIJjHF0HhehAkK2FgVXbd1uB6zQQCYAt6M4qFmkIcTJpCLjbo8RmdMRUdEA2prjjNj_LnShTxocManOZw06-Sb29zmmhhG2-0MrfOdhFMPsG-8mZFy-DXE0HT0e1UDMFWuU9ELc0J6vEkNxadOIzJ7nyFJlb2cBSYWKjhzJFpkgq5Q_-QFqClhp8reolJAg2iYSwnKMA',
    alt: 'Amalfi coast panoramic view',
    actionText: 'جاهز بنقرة واحدة'
  },
  {
    id: 'tokyo',
    title: 'طوكيو ومحيطها بالقطار',
    subtitle: 'تجربة القطار فائق السرعة، أزقة شينجوكو السرية، وينابيع هاكوني الطبيعية.',
    country: 'اليابان',
    duration: '7 أيام',
    badge: '19 مكان مميز',
    badgeColor: 'text-[#4cd7f6]',
    badgeIcon: 'train',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiLMe7hRBaSz4F7BtqTF82JONmWjUOmX6nGo-oFN7n3FEnzDIa5zgaLfLm0RBd-pIxywDbK0Nhne18MVXpKri6XOTM2K3CK3qzxBcKWfVWGS7oxtmp1HariUTtHs9gpN-7-12mdT_0-JyqAUb88LoS0M4QnTj8MtiAzLG-vY1F6V0NCoP_osIJeQtjtsdpRcCMlShEn2GpUa4U0MmHBb0R6R1QXuw-BXvMzhLzBvSNpxSye8MaWI_LZw',
    alt: 'Tokyo Shinkansen futuristic landscape',
    actionText: 'الأكثر طلباً'
  },
  {
    id: 'alula',
    title: 'العلا وأسرار الصحراء',
    subtitle: 'مخيمات واحات النخيل، طيران الهليكوبتر فوق الحجر، وسهرات فلكية ملهمة.',
    country: 'السعودية',
    duration: '3 أيام',
    badge: '8 تجارب فاخرة',
    badgeColor: 'text-[#ffb95f]',
    badgeIcon: 'hotel_class',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXIr4vNqHJKypbxjrcPp2-AEI9w2ByyezppuOMooGh4lIFch-GB-QDGYVt0LoE3A-_tBqCLvnTCjKnEDQeuRWND9vnOXLbhd0CXyl3cj_WA17l5wWTBZZbGE6I-N2mfzR7o3fW3VrhPXU8hsdMO6kKgs_-CUz9FuTKoeKRr-ImPTBid4VKUeP0aAC9jjrCo9ldKgBigY34ZUp2zdzf91NxTS1UbleKP90rurQoEfd5-tX-HtCfll2z9Q',
    alt: 'AlUla desert night luxury landscape',
    actionText: 'إقامة استثنائية'
  }
];

export const TIMELINE_DAY_1: TimelineActivity[] = [
  {
    id: 'act-1',
    time: '09:00 ص',
    title: 'الإفطار في كافيه Bar Il Molo',
    description: 'إفطار فاخر ومطل مباشرة على مياه البحيرة الهادئة مع قهوة إيطالية طازجة ومخبوزات تقليدية.',
    duration: '45 دقيقة',
    tag: 'إطلالة مائية',
    tagType: 'water',
    icon: 'restaurant',
    rating: 4.8,
    distanceDivider: {
      type: 'car',
      text: '🚗 15 دقيقة بالسيارة (7.2 كم)',
      icon: 'directions_car'
    }
  },
  {
    id: 'act-2',
    time: '10:30 ص',
    title: 'زيارة بحيرة كومو التاريخية والحدائق الملكية',
    description: 'جولة صباحية بين أشجار السرو العتيقة والتماثيل النيوكلاسيكية لتفادي ذروة الزوار والتمتع بنسيم الجبل.',
    duration: '2 ساعة ونصف',
    tag: 'موصى به صباحاً',
    tagType: 'nature',
    icon: 'park',
    distanceDivider: {
      type: 'ferry',
      text: '⛴️ 20 دقيقة عبّارة سريعة',
      icon: 'directions_boat'
    }
  },
  {
    id: 'act-3',
    time: '01:30 م',
    title: 'استكشاف أزقة قرية بيلاجيو (Bellagio)',
    description: 'تناول غداء إيطالي أصيل بأحد مطاعم الدرج الحجري، يليه تجول حر في المحلات الحرفية وصناع الحرير التاريخيين.',
    duration: 'ساعة ونصف',
    tag: 'باستا طازجة',
    tagType: 'food',
    icon: 'holiday_village',
    distanceDivider: {
      type: 'walk',
      text: '🚶‍♂️ 8 دقائق مشياً إلى رصيف الميناء',
      icon: 'directions_walk'
    }
  },
  {
    id: 'act-4',
    time: '04:00 م',
    title: 'جولة خاصة بقارب خشبي تقليدي (Riva)',
    description: 'تجربة VIP حصرية بالقارب الكلاسيكي المصنوع يدوياً، مروراً بأفخم القصور المعلقة ومواقع تصوير السينما العالمية.',
    duration: 'ساعة كاملة',
    tag: 'خدمة كونسيرج خاصة',
    tagType: 'vip',
    icon: 'sailing',
    isBooked: true,
    distanceDivider: {
      type: 'sunset',
      text: '🌅 18:40 وقت الغروب الذهبي',
      icon: 'wb_twilight'
    }
  },
  {
    id: 'act-5',
    time: '06:40 م',
    title: 'مشاهدة الغروب في فيلا ديل بالبيانيلو',
    description: 'تأمل انكسار أشعة الشمس على قمم الألب الشاهقة وانعكاسها على شرفة الفيلا الأيقونية.',
    duration: 'المحطة الختامية',
    tag: 'توصية روحة الذكية',
    tagType: 'tip',
    icon: 'landscape',
    aiSuggestion: 'روحة يقترح: الوصول قبل الغروب بـ 35 دقيقة لالتقاط أفضل زاوية إضاءة وتفادي طوابير الشرفة الرئيسية.'
  }
];

export const MAP_PINS: MapPin[] = [
  { id: 1, name: 'كومو', top: '14%', left: '16%' },
  { id: 2, name: 'تشرنوبيو', top: '26%', left: '34%' },
  { id: 3, name: 'بيلاجيو', top: '44%', right: '44%', isActive: true },
  { id: 4, name: 'فارينا', top: '24%', right: '20%' },
  { id: 5, name: 'ميناجيو', top: '68%', right: '12%' },
];

export const VIP_PERKS = [
  {
    icon: 'bolt',
    iconColor: 'text-[#4edea3]',
    title: 'رحلات ذكاء اصطناعي غير محدودة',
    description: 'توليد فوري وشامل لخطط السفر بمجرد إدراج أي رابط أو فيديو.'
  },
  {
    icon: 'explore',
    iconColor: 'text-[#4cd7f6]',
    title: 'خوارزمية المسار الذكي Smart Route',
    description: 'ترتيب ذكي للمحطات لتجنب الازدحام وتوفير ما يصل إلى 40% من وقت التنقل.'
  },
  {
    icon: 'auto_fix_high',
    iconColor: 'text-[#ffb95f]',
    title: 'المساعد الشخصي الميداني الحصري',
    description: 'إعادة جدولة فورية عند تغير الظروف أو الطقس حتى بدون اتصال إنترنت.'
  },
  {
    icon: 'map',
    iconColor: 'text-[#4edea3]',
    title: 'خرائط تفاعلية متقدمة ومزامنة',
    description: 'تصدير سلس بلمسة واحدة إلى Apple Maps و Google Maps مع نقاط الاهتمام.'
  },
  {
    icon: 'groups',
    iconColor: 'text-[#4cd7f6]',
    title: 'مشاركة جماعية في الوقت الفعلي',
    description: 'تعديل مشترك وتصويت بين أفراد الرحلة على الأنشطة والمطاعم مباشرة.'
  }
];
