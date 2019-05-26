import { ReactNode } from 'react';

export interface SlidePanelProps {
  opened: boolean;
  close: () => void;
  children: ReactNode;
}