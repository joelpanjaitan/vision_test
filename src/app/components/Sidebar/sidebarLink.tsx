"use client";
import { SidebarLinkProps } from "@/app/dto/sidebar.dto";
import { forwardRef } from "react";

const SidebarLink = forwardRef<HTMLAnchorElement, SidebarLinkProps>(
  (
    {
      menu,
      isSidebarOpen,
      currentRouter,
      getMatchRoute,
      handleClickSubmenu,
      onClick,
    },
    ref
  ) => (
    <>
      <a
        ref={ref}
        onClick={onClick}
        className={`flex items-center gap-x-2 group-hover:text-icon-highlight ${
          getMatchRoute(menu, currentRouter)
            ? "text-icon-highlight"
            : "text-text-default"
        }`}
      >
        <span
          className="flex items-center text-2xl leading-6 sm:p-2"
          onClick={handleClickSubmenu}
        >
          <i className={menu.icon}></i>
        </span>

        {isSidebarOpen && <span className="font-medium">{menu.title}</span>}
      </a>
    </>
  )
);

SidebarLink.displayName = "SidebarLink";

export default SidebarLink;
