import type { ReactNode } from "react";

export interface ButtonProps {
    variant: ButtonVariant;
    children: ReactNode;
    onClick?: () => void;
}
export type ButtonVariant = 'main' | 'capa';