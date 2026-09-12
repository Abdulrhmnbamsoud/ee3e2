/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenType } from './types';
import { OnboardingScreen } from './components/OnboardingScreen';
import { HomeScreen } from './components/HomeScreen';
import { AiAnalysisScreen } from './components/AiAnalysisScreen';
import { TripDetailsScreen } from './components/TripDetailsScreen';
import { MapDiscoverScreen } from './components/MapDiscoverScreen';
import { PremiumScreen } from './components/PremiumScreen';
import { AppNavigation } from './components/AppNavigation';
import { DeviceContainer } from './components/DeviceContainer';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [isMobileFrame, setIsMobileFrame] = useState<boolean>(true);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <DeviceContainer
      currentScreen={currentScreen}
      onNavigate={handleNavigate}
      isMobileFrame={isMobileFrame}
      setIsMobileFrame={setIsMobileFrame}
    >
      {/* Screen Render */}
      {currentScreen === 'onboarding' && (
        <OnboardingScreen onNavigate={handleNavigate} />
      )}

      {currentScreen === 'home' && (
        <HomeScreen onNavigate={handleNavigate} />
      )}

      {currentScreen === 'analysis' && (
        <AiAnalysisScreen onNavigate={handleNavigate} />
      )}

      {currentScreen === 'trip-details' && (
        <TripDetailsScreen onNavigate={handleNavigate} />
      )}

      {currentScreen === 'map-discover' && (
        <MapDiscoverScreen onNavigate={handleNavigate} />
      )}

      {currentScreen === 'premium' && (
        <PremiumScreen onNavigate={handleNavigate} />
      )}

      {/* Floating Bottom Navigation */}
      <AppNavigation currentScreen={currentScreen} onNavigate={handleNavigate} />
    </DeviceContainer>
  );
}
