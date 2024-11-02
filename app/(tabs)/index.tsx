import TldrawCanvas from '@/components/TldrawCanvas';
import { StatusBar } from 'react-native';
import { useTldrawUserContext } from '@/components/TldrawUser';

export default function HomeScreen() {
  const { userId, userName } = useTldrawUserContext();

  return (
    <TldrawCanvas
      userId={userId}
      userName={userName}
      dom={{
        contentInsetAdjustmentBehavior: 'automatic',
        automaticallyAdjustsScrollIndicatorInsets: true,
        containerStyle: {
          // On Android, add a margin equal to the status bar height
          marginTop: process.env.EXPO_OS === 'android' ? StatusBar.currentHeight : 0,
        },
      }}
    />
  );
}
