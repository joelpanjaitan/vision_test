"use client";
import { SidebarMainProps } from "@/app/dto/sidebar.dto";
import { SidebarList } from "./sidebarList";
import classNames from "classnames";

export function Sidebar({
  isSidebarOpen,
  handleShowSidebar,
}: SidebarMainProps) {
  return (
    <aside
      className={`${
        isSidebarOpen ? "w-64" : "w-[88px] rounded-tr-2xl"
      } hidden md:block md:sticky h-[calc(100vh-3.625rem)] bg-white left-0 top-[56px] shadow border-r text-base duration-500 transition-all ease-out max-w-sm z-20`}
      aria-label="Sidebar"
    >
      <div className="relative">
        <button
          className="text-base leading-4 absolute p-1.5 border bg-white rounded-lg -right-3.5 top-14 z-20 font-semibold"
          onClick={handleShowSidebar}
        >
          <i className="ri-expand-left-right-line"></i>
        </button>
      </div>
      <div className="relative py-6">
        <SidebarList isMobile={false} isSidebarOpen={isSidebarOpen} />
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-white shadow-border-md-l-none">
        <button
          className={classNames(
            "text-primary-action flex text-sm leading-5 items-center p-4 w-full font-semibold hover:bg-brand-surface",
            isSidebarOpen ? "justify-between" : "justify-center"
          )}
          onClick={() => {}}
        >
          {isSidebarOpen && <span className="block">Sign out</span>}
          <i className="ri-logout-box-r-line text-base leading-4 text-critical"></i>
        </button>
      </div>
    </aside>
  );
}
