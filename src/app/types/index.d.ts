declare module '*.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  import { type SVGProps, type VFC } from 'react';
  const SVG: VFC<SVGProps<SVGSVGElement>>;
  export default SVG;
}
