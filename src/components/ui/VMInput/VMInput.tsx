import { cn } from "@/lib/class-name";
import type { InputHTMLAttributes, PropsWithChildren } from "react";

import cls from "./VMInput.module.scss";

interface VMInputProps
  extends PropsWithChildren,
    InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const VMInput = ({
  className,
  children,
  id,
  ...restProps
}: VMInputProps) => {
  return (
    <label className={cn(cls.label, {}, [className])} htmlFor={id}>
      <input className={cls.input} id={id} {...restProps} />
      {children}
    </label>
  );
};
