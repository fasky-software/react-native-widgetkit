import { NativeModules } from 'react-native';

type WidgetkitType = {
  reloadAllTimelines(): void;
  reloadTimelines(ofKind: string): void;
};

const { Widgetkit } = NativeModules;
const { reloadAllTimelines, reloadTimelines } = Widgetkit || {};

export default {
  reloadAllTimelines: reloadAllTimelines || (() => {}),
  reloadTimelines: reloadTimelines || (() => {}),
} as WidgetkitType;
