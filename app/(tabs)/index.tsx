import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import TldrawCanvas from '@/components/TldrawCanvas';
import { StatusBar } from 'react-native';
import { useTldrawUserContext } from '@/components/TldrawUser';

export default function HomeScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const { userId, userName } = useTldrawUserContext();

  return (
    <TldrawCanvas
      userId={userId}
      userName={userName}
      // On web, add a margin equal to the tabs height
      style={process.env.EXPO_OS === 'web' ? { marginBottom: tabBarHeight } : undefined}
      dom={{
        contentInsetAdjustmentBehavior: 'automatic',
        automaticallyAdjustsScrollIndicatorInsets: true,
        containerStyle: {
          // On Android, add a margin equal to the status bar height
          marginTop: process.env.EXPO_OS === 'android' ? StatusBar.currentHeight : 0,
          // On iOS, add a margin equal to the tabs height
          marginBottom: process.env.EXPO_OS === 'ios' ? tabBarHeight : 0,
        },
      }}
    />
  );
}
