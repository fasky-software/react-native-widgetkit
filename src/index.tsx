import { NativeModules } from 'react-native';

type WidgetkitType = {
  reloadAllTimelines(): void;
  reloadTimelines(ofKind: string): void;
};

const { reloadAllTimelines, reloadTimelines } = NativeModules;

export default {
  reloadAllTimelines: reloadAllTimelines || (() => {}),
  reloadTimelines: reloadTimelines || (() => {}),
} as WidgetkitType;
