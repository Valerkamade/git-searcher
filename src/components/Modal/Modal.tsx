import { cn } from "@/lib/class-name";
import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import cls from "./Modal.module.scss";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className={cn(cls.modal, { [cls.visible]: isOpen })}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={cls.modalContent}>
        <button className={cls.button} type="button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};
