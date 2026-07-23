import type { ReactNode } from "react";

export interface TabItem {
    name: string;
}

export interface TabsProps {
    content: Record<string, ReactNode>; 
    tabs: TabItem[];
}