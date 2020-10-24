import { NativeModules } from 'react-native';

const { Widgetkit } = NativeModules;
const {
  reloadAllTimelines: reloadAllTimelinesNative,
  reloadTimelines: reloadTimelinesNative,
} = Widgetkit || {};

export const reloadAllTimelines = (reloadAllTimelinesNative ||
  (() => {})) as () => void;
export const reloadTimelines = (reloadTimelinesNative || (() => {})) as (
  ofKind: string
) => void;
