import { MoonIcon } from "@/components/lib/icons/moon-icon/MoonIcon";
import { SearchIcon } from "@/components/lib/icons/search-icon/SearchIcon";
import { SunIcon } from "@/components/lib/icons/sun-icon/SunIcon";

import type { SVGProps } from "react";

export type TypeIcons = "search" | "moon" | "sun";

interface IconsProps extends SVGProps<SVGSVGElement> {
  type: TypeIcons;
}

export const Icons = (props: IconsProps) => {
  const fill = props.fill ? props.fill : "none";
  const stroke = props.stroke ? props.stroke : "currentColor";

  props = { fill, stroke, ...props };

  let icon;
  switch (props.type) {
    case "search":
      icon = <SearchIcon {...props} />;
      break;
    case "moon":
      icon = <MoonIcon {...props} />;
      break;
    case "sun":
      icon = <SunIcon {...props} />;
      break;
    default:
      icon = null;
  }
  return icon;
};
