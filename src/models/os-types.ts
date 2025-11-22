import { Type } from '@angular/core';

export type WindowsTheme = 'win95' | 'winXP' | 'win7' | 'win10' | 'win11';

export interface AppMetadata {
  id: string;
  name: string;
  icon: string; // Base64 or URL
  component: Type<any>;
  isMobileFriendly?: boolean;
  defaultSize?: { width: number; height: number };
}

export interface Process {
  processId: string; // unique GUID
  appId: string;
  title: string;
  icon: string;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  component: Type<any>;
}
