import { NativeModules } from 'react-native';

const { Widgetkit } = NativeModules;
const {
  reloadAllTimelines: reloadAllTimelinesNative,
  reloadTimelines: reloadTimelinesNative,
  getItem: getItemNative,
  setItem: setItemNative,
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

/**
 * Reads Value from UserDefaults database.
 *
 * @param key - Key
 * @param appGroup - App Group
 *
 */
export const getItem = (getItemNative || (() => {})) as (
  key: string,
  appGroup: string
) => Promise<void>;

/**
 * Writes Key-Value to UserDefaults database.
 *
 * @param key - Key
 * @param value - Value
 * @param appGroup - App Group
 *
 */
export const setItem = (setItemNative || (() => {})) as (
  key: string,
  value: string,
  appGroup: string
) => Promise<String>;
