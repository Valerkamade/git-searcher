import { cn } from "@/lib/class-name";
import type { AnchorHTMLAttributes } from "react";
import cls from "./VMLink.module.scss";

interface VMLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

export const VMLink = ({ children, href = "#", className }: VMLinkProps) => {
  return (
    <a className={cn(cls.link, {}, [className])} href={href} target="_blank">
      {children}
    </a>
  );
};
