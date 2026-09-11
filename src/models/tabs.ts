import type { ReactNode } from "react";

export interface TabItem {
    name: string;
}

export interface TabsProps {
    tabs: TabItem[];
  content: Record<string, ReactNode>;
  variant: TabsVariant;
}
export type TabsVariant = 'services' | 'insights';