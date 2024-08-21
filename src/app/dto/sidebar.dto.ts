export interface SidebarMenuProps {
  title: string;
  icon: string;
  isSubmenuOpen: boolean;
  href?: string;
  submenu?: {
    text?: string;
    path?: string;
  }[];
}

export interface SidebarProps {
  isMobile: boolean;
  isSidebarOpen: boolean;
  handleShowSidebar?: () => void;
}

export interface SidebarMainProps {
  isSidebarOpen: boolean;
  handleShowSidebar?: () => void;
}

export interface SidebarLinkProps {
  menu: SidebarMenuProps;
  isSidebarOpen: boolean;
  currentRouter: string;
  getMatchRoute: (menu: SidebarMenuProps, currentRouter: string) => boolean;
  handleClickSubmenu: () => void;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface SidebarMenuProps {
  title: string;
  icon: string;
  isSubmenuOpen: boolean;
  href?: string;
  submenu?: {
    text?: string;
    path?: string;
  }[];
}

export interface SubmenuArrowProps {
  isOpen: boolean;
}
