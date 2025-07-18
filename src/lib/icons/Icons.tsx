import { DndIcon } from "@/lib/icons/dnd-icon/DndIcon";
import { ForkIcon } from "@/lib/icons/fork-icon/ForkIcon";
import { MoonIcon } from "@/lib/icons/moon-icon/MoonIcon";
import { SearchIcon } from "@/lib/icons/search-icon/SearchIcon";
import { StarIcon } from "@/lib/icons/star-icon/StarIcon";
import { SunIcon } from "@/lib/icons/sun-icon/SunIcon";

import type { SVGProps } from "react";

export type TypeIcons = "search" | "moon" | "sun" | "star" | "dnd" | "fork";

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
    case "star":
      icon = <StarIcon {...props} />;
      break;
    case "dnd":
      icon = <DndIcon {...props} />;
      break;
    case "fork":
      icon = <ForkIcon {...props} />;
      break;
    default:
      icon = null;
  }
  return icon;
};
