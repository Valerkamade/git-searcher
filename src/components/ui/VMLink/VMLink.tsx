import { cn } from "@/lib/class-name";
import type { AnchorHTMLAttributes } from "react";
import cls from "./VMLink.module.scss";

interface VMLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const VMLink = ({ children, href = "#" }: VMLinkProps) => {
  return (
    <a className={cn(cls.link, {}, [])} href={href} target="_blank">
      {children}
    </a>
  );
};
