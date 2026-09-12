export type ScreenType = 'onboarding' | 'home' | 'analysis' | 'trip-details' | 'map-discover' | 'premium';

export interface TimelineActivity {
  id: string;
  time: string;
  title: string;
  description: string;
  duration: string;
  tag: string;
  tagType?: 'water' | 'nature' | 'food' | 'vip' | 'sunset' | 'tip';
  icon: string;
  iconBgColor?: string;
  iconColor?: string;
  rating?: number;
  isBooked?: boolean;
  distanceDivider?: {
    type: 'car' | 'ferry' | 'walk' | 'sunset';
    text: string;
    icon: string;
  };
  aiSuggestion?: string;
}

export interface DestinationCard {
  id: string;
  title: string;
  subtitle: string;
  country: string;
  duration: string;
  badge: string;
  badgeColor: string;
  badgeIcon: string;
  image: string;
  alt: string;
  actionText: string;
}

export interface MapPin {
  id: number;
  name: string;
  top: string;
  left?: string;
  right?: string;
  isActive?: boolean;
}
