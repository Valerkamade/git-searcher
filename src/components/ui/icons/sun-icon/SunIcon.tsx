import type { SVGProps } from "react";

export const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={props.width ?? 32}
    height={props.height ?? 32}
    fill="none"
    {...props}
  >
    <path
      fill="transparent"
      d="M16 23.847a7.847 7.847 0 1 0 0-15.695 7.847 7.847 0 0 0 0 15.695ZM3.625 16.008H2Zm26.375 0h-1.61ZM16.008 3.625V2Zm0 26.375v-1.61ZM7.247 7.247 6.1 6.1Zm18.652 18.652-1.147-1.147ZM24.753 7.247 25.897 6.1ZM6.101 25.899l1.147-1.147Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.625 16.008H2m28 0h-1.61M16.009 3.625V2m0 28v-1.61M7.247 7.248 6.1 6.1M25.9 25.9l-1.147-1.147m.001-17.505L25.897 6.1M6.101 25.9l1.147-1.147M16 23.847a7.847 7.847 0 1 0 0-15.695 7.847 7.847 0 0 0 0 15.695Z"
    />
  </svg>
);
