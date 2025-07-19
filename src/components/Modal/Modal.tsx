import { VMButton } from "@/components/ui/VMButton/VMButton";
import { cn } from "@/lib/class-name";
import { type PropsWithChildren, useState } from "react";
import { createPortal } from "react-dom";
import cls from "./Modal.module.scss";

interface ModalProps extends PropsWithChildren {
  // isOpen: boolean;
  // onClose: () => void;
}

export const Modal = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  if (!isOpen) return null;

  const onClose = () => {
    setIsOpen(false);
  };

  return createPortal(
    <div
      className={cn(cls.modal, { [cls.visible]: isOpen })}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={cls.modalContent}>
        <VMButton
          className={cls.close}
          type="button"
          onClick={onClose}
          typeButton="icon"
        >
          x
        </VMButton>
        {children}
      </div>
    </div>,
    document.body,
  );
};
