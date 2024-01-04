import React from "react";

interface Children {
  title: string;
  icon: React.FC | string;
  url: string;
}

interface ContextMenu {
  title: string;
  url?: string;
  icon?: React.FC;
  showTip?: boolean;
  action: "see-to-website" | "see-to-desc" | "open-setting" | "other";
}

export type NavigationItem = {
  title: string;
  smallTitle: string;
  url: string;
  icon: React.FC | string;
  children?: Children[];
  contextMenu?: ContextMenu[];
};

export type Navigations = NavigationItem[];
