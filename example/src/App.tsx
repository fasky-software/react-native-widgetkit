import * as React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { reloadAllTimelines, reloadTimelines } from 'react-native-widgetkit';

export default function App() {
  React.useEffect(() => {
    reloadAllTimelines();
    reloadTimelines('test');
    Alert.alert('checks passed');
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
