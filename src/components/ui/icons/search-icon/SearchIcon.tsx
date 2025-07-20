import { memo, SVGProps } from "react";

export const SearchIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.68 11.74a6 6 0 1 1 1.06-1.06l3.04 3.04a.747.747 0 0 1-.326 1.275.748.748 0 0 1-.734-.215l-3.04-3.04ZM11.5 7a4.5 4.5 0 1 0-9-.134 4.5 4.5 0 0 0 9 .134Z"
    />
  </svg>
));
