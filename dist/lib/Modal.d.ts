import React, { ReactNode } from "react";
interface ModalProps {
    title?: string;
    content?: ReactNode;
    show: boolean;
    close: () => void;
    children?: React.ReactNode;
}
/**
 * Reusable Modal component.
 * @component
 * @example
 * // Using the Modal component
 * <Modal show={true} close={() => setIsModalOpen(false)} title="Custom Modal Title">
 *   Modal content
 * </Modal>
 *
 * @param {ModalProps} props - The properties for the Modal component.
 * @returns {JSX.Element} The Modal component.
 */
export declare const Modal: React.FC<ModalProps>;
export {};
