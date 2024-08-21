"use client";
import { MobileSidebarMenu, SidebarMenu } from "../../../enum/sideBar";
import { SidebarMenuProps } from "../../../dto/sidebar.dto";
import { GetRoute } from "../utils/getRoute";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

const useSidebar = (isMobile: boolean) => {
  const currentRouter = GetRoute();
  const [sidebarContent, setSidebarContent] = useState<SidebarMenuProps[]>(
    Array.from(SidebarMenu)
  );
  const [mobileSidebarContent, setMobileSidebarContent] = useState<
    SidebarMenuProps[]
  >(Array.from(MobileSidebarMenu));
  const [role, setRole] = useState<string | null>();
  const [sidebarList, setSidebarList] = useState<SidebarMenuProps[]>(
    Array.from(isMobile ? mobileSidebarContent : sidebarContent)
  );

  const [hoverState, setHoverState] = useState<string>();

  const handleClickSubmenu = (index: number, openState: boolean) => {
    if (isMobile) {
      mobileSidebarContent[index].isSubmenuOpen = openState;
      setMobileSidebarContent([...mobileSidebarContent]);
    } else {
      sidebarContent[index].isSubmenuOpen = openState;
      setSidebarContent([...sidebarContent]);
    }
  };

  const getMatchRoute = (menu: SidebarMenuProps, route?: string) => {
    if (menu.submenu && menu.submenu.length && route) {
      return menu.submenu.some(
        (sub) =>
          sub.path &&
          (`/${sub.path}` === route || route.includes(`/${sub.path}/`))
      );
    }
    if (menu.href && route) {
      return menu.href === route || route.includes(`${menu.href}/`);
    }
    return false;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      const role = window.localStorage.getItem("role")
        ? window.localStorage.getItem("role")
        : undefined;
      setRole(role);
    }
  }, []);

  return {
    setSidebarList,
    sidebarList,
    hoverState,
    setHoverState,
    mobileSidebarContent,
    handleClickSubmenu,
    sidebarContent,
    getMatchRoute,
    currentRouter,
    role,
  };
};

export default useSidebar;
