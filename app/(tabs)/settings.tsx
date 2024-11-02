import { StyleSheet, Text, TextInput, View } from 'react-native';

import { useTldrawUserContext } from '@/components/TldrawUser';

export default function TabTwoScreen() {
  const { userName, setUserName } = useTldrawUserContext();

  return (
    <View style={styles.container}>
      <Text>Show as user:</Text>
      <TextInput style={styles.input} value={userName} onChangeText={setUserName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    gap: 8,
  },
  input: {
    width: '100%',
    borderRadius: 8,
    borderColor: '#b4bbbb',
    borderWidth: 2,
    padding: 8,
    maxWidth: 640,
  }
});
