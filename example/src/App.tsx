import * as React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Widgetkit from 'react-native-widgetkit';

export default function App() {
  React.useEffect(() => {
    Widgetkit.reloadAllTimelines();
    Widgetkit.reloadTimelines('test');
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
