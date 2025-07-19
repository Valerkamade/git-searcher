import { cn } from "@/lib/class-name";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import cls from "./VMButton.module.scss";

export type VMButtonTypes = "default" | "icon" | "cards";
interface VMButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton: VMButtonTypes;
  className?: string;
}

export const VMButton = ({
  className,
  children,
  typeButton = "default",
  ...restProps
}: VMButtonProps) => {
  return (
    <button
      {...restProps}
      className={cn(cls.button, {}, [cls[typeButton], className])}
    >
      {children}
    </button>
  );
};
