import { NativeModules } from 'react-native';

const { Widgetkit } = NativeModules;
const {
  reloadAllTimelines: reloadAllTimelinesNative,
  reloadTimelines: reloadTimelinesNative,
} = Widgetkit || {};

/**
 * Reloads the timelines for all widgets of a particular kind.
 *
 */
export const reloadAllTimelines = (reloadAllTimelinesNative ||
  (() => {})) as () => void;

/**
 * Reloads the timelines for all configured widgets belonging to the containing app.
 *
 * @param ofKind - Widget Name
 *
 */
export const reloadTimelines = (reloadTimelinesNative || (() => {})) as (
  ofKind: string
) => void;
