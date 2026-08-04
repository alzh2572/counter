import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>

      <View style={styles.buttons}>
        <Pressable
          style={({ pressed }) => [styles.button, styles.primary, pressed && styles.pressed]}
          onPress={() => setCount((value) => value + 1)}
        >
          <Text style={styles.primaryLabel}>+</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.button, styles.secondary, pressed && styles.pressed]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.secondaryLabel}>Сброс</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  count: {
    fontSize: 96,
    fontWeight: '700',
    color: '#111',
    marginBottom: 48,
  },
  buttons: {
    width: '100%',
    maxWidth: 280,
    gap: 12,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 16,
  },
  primary: {
    backgroundColor: '#111',
  },
  secondary: {
    backgroundColor: '#f2f2f2',
  },
  pressed: {
    opacity: 0.75,
  },
  primaryLabel: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 36,
  },
  secondaryLabel: {
    color: '#111',
    fontSize: 18,
    fontWeight: '600',
  },
});
