import * as React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import {
  reloadAllTimelines,
  reloadTimelines,
  getItem,
  setItem,
} from 'react-native-widgetkit';

export default function App() {
  React.useEffect(() => {
    setTimeout(async () => {
      reloadAllTimelines();
      reloadTimelines('test2');
      await setItem('test', 'Hello World', 'group.com.fasky');
      const item = await getItem('test', 'group.com.fasky');

      Alert.alert('checks passed: ' + item);
    }, 0);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
