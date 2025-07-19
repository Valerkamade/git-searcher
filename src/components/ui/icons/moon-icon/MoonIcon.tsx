import type { SVGProps } from "react";

export const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M28.243 19.813A12.632 12.632 0 1 1 12.185 3.76a1.404 1.404 0 0 1 1.84 1.726 10.267 10.267 0 0 0-.113 6.19 9.333 9.333 0 0 0 6.413 6.414c2.027.6 4.187.56 6.19-.112a1.404 1.404 0 0 1 1.728 1.839"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28.243 19.813A12.632 12.632 0 1 1 12.185 3.76a1.404 1.404 0 0 1 1.84 1.726 10.267 10.267 0 0 0-.113 6.19 9.333 9.333 0 0 0 6.413 6.414c2.027.6 4.187.56 6.19-.112a1.404 1.404 0 0 1 1.728 1.839"
    />
  </svg>
);
