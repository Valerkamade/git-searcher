import { cn } from "@/lib/class-name";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import cls from "./VMButton.module.scss";

export type VMButtonTypes = "default" | "icon" | "cards";

interface VMButtonProps<T extends ElementType = "button">
  extends ComponentPropsWithoutRef<"button"> {
  typeButton?: VMButtonTypes;
  className?: string;
  as?: T;
}

export const VMButton = <T extends ElementType = "button">({
  className,
  children,
  typeButton = "default",
  as,
  ...restProps
}: VMButtonProps<T>) => {
  const Element = as || "button";

  return (
    <Element
      className={cn(cls.button, {}, [cls[typeButton], className])}
      {...restProps}
    >
      {children}
    </Element>
  );
};
