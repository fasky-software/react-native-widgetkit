import { NativeModules } from 'react-native';

type WidgetkitType = {
  multiply(a: number, b: number): Promise<number>;
  reloadAllTimelines(): void;
};

const { Widgetkit } = NativeModules;

export default Widgetkit as WidgetkitType;
