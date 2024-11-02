import React from 'react';

import { withLayoutContext } from "expo-router";
import { createNativeBottomTabNavigator } from "react-native-bottom-tabs/react-navigation";
import { Platform } from 'react-native';

export const Tabs = withLayoutContext(
  createNativeBottomTabNavigator().Navigator
);

export default function TabLayout() {
  return (
    <Tabs 
      ignoresTopSafeArea
      hapticFeedbackEnabled
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Draw',
          tabBarIcon: () => Platform.OS === 'ios' ? ({sfSymbol: 'hand.draw.fill'}) : require('../../assets/images/brush.png')
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: () => Platform.OS === 'ios' ? ({sfSymbol: 'gearshape.fill'}) : require('../../assets/images/settings.png')
        }}
      />
    </Tabs>
  );
}
