export type PropsWithDom<T extends object = {}> = T & {
  /** The DOM component configuration options, when rendering on Android or iOS */
  dom?: import('expo/dom').DOMProps;
};
