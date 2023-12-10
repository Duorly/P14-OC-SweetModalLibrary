import React, { ReactNode } from "react";
interface ModalProps {
    title?: string;
    content?: ReactNode;
    show: boolean;
    close: () => void;
    children?: React.ReactNode;
}
export declare const Modal: React.FC<ModalProps>;
export {};
