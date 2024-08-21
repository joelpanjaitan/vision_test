"use client";
import { SidebarProps, SidebarMenuProps } from "@/app/dto/sidebar.dto";
import useSidebar from "./hooks/useSidebar";
import { useState, Fragment } from "react";
import SubmenuArrow from "./subMenuArrow";
import SidebarLink from "./sidebarLink";
import classNames from "classnames";
import Link from "next/link";
export function SidebarList({ isMobile, isSidebarOpen }: SidebarProps) {
  const {
    handleClickSubmenu,
    currentRouter,
    sidebarList,
    hoverState,
    setHoverState,
  } = useSidebar(isMobile);
  const { getMatchRoute } = useSidebar(isMobile);

  const handleMouseEnter = (title: string) => {
    setHoverState(title);
  };

  const handleMouseLeave = (title: string) => {
    setHoverState(undefined);
  };

  return (
    <ul
      className={classNames(
        "ms:max-h-[calc(100vh-9rem)] xs:max-h-[calc(100vh-8rem)] max-h-[calc(100vh-7rem)] xxs:text-sm leading-5 relative",
        isSidebarOpen && "overflow-y-auto"
      )}
    >
      {sidebarList.map((menu, index) => (
        <li
          className="relative max-[400px]:max-w-[50vw]"
          key={index}
          onMouseEnter={() => handleMouseEnter(menu.title)}
          onMouseLeave={() => handleMouseLeave(menu.title)}
        >
          <div
            className={classNames(
              "flex justify-center items-center px-6 py-2 max-[767px]:px-1 overflow-hidden group hover:text-text-highlight",
              isSidebarOpen &&
                "hover:bg-surface-highlight-default justify-between",
              "text-ellipsis whitespace-nowrap rounded transition duration-150 ease-in-out cursor-pointer shrink-0"
            )}
            onClick={() =>
              isSidebarOpen && handleClickSubmenu(index, !menu.isSubmenuOpen)
            }
            onMouseEnter={() => handleMouseEnter(menu.title)}
          >
            {menu.href ? (
              <Link legacyBehavior href={menu.href}>
                <SidebarLink
                  menu={menu}
                  isSidebarOpen={isSidebarOpen}
                  currentRouter={currentRouter}
                  getMatchRoute={getMatchRoute}
                  handleClickSubmenu={() =>
                    !isSidebarOpen && handleClickSubmenu(index, true)
                  }
                />
              </Link>
            ) : (
              <SidebarLink
                menu={menu}
                isSidebarOpen={isSidebarOpen}
                currentRouter={currentRouter}
                getMatchRoute={getMatchRoute}
                handleClickSubmenu={() =>
                  !isSidebarOpen && handleClickSubmenu(index, true)
                }
                onClick={(e) => e.preventDefault()}
              />
            )}

            {isSidebarOpen && menu.submenu && (
              <SubmenuArrow isOpen={menu.isSubmenuOpen} />
            )}
          </div>
          <div
            className={`s:pl-14 ms:pl-10 pl-5 transition-all duration-500 ease-in-out h-fit ${
              menu.isSubmenuOpen && isSidebarOpen ? "max-h-96" : "max-h-0"
            } overflow-hidden`}
          >
            <ul className="border-l-2 border-[#D9D9D9] px-2">
              {menu &&
                menu.submenu &&
                menu.submenu?.map((sub) => (
                  <li key={sub.text}>
                    {sub.path && (
                      <Link href={`/${sub.path}`} legacyBehavior>
                        <a
                          className={`flex items-center py-2 ms:px-4 overflow-hidden ${
                            `/${sub.path}` === currentRouter ||
                            currentRouter.includes(`/${sub.path}/`)
                              ? "text-text-highlight font-semibold"
                              : "text-gray-900 font-light"
                          } hover:text-text-highlight hover:font-semibold text-ellipsis whitespace-nowrap hover:bg-surface-highlight-default transition duration-150 ease-in-out cursor-pointer xxs:text-sm leading-5 rounded`}
                        >
                          {Number(sub.text?.split(" ")?.length) > 2
                            ? sub.text?.split(" ").map((data, index, row) => (
                                <Fragment key={index}>
                                  {data}
                                  {index + 1 !== row.length &&
                                    index % 2 === 0 && <>&nbsp;</>}
                                  {index % 2 === 1 &&
                                    index + 1 !== row.length && <br />}
                                </Fragment>
                              ))
                            : sub.text}
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
          </div>
          <div
            className={`${
              hoverState === menu.title && !isSidebarOpen && menu.submenu
                ? "absolute"
                : "hidden"
            } z-30 ml-[64px] pt-10 bg-transparent top-0 min-w-fit max-w-fit divide-y divide-gray-100`}
            onClick={(event) => event.stopPropagation()}
            onMouseEnter={() => handleMouseEnter(menu.title)}
          >
            <ul className="bg-[#fcfcfc] shadow-lg py-2 rounded-2xl w-52 break-words">
              {menu &&
                menu.submenu &&
                menu.submenu.map((sub, index, arr) => (
                  <li
                    key={sub.text}
                    className={classNames(
                      "hover:text-text-highlight hover:font-semibold font-light",
                      `/${sub.path}` === currentRouter ||
                        currentRouter.includes(`/${sub.path}/`)
                        ? "text-text-highlight bg-surface-highlight-default font-semibold"
                        : "text-gray-900 hover:bg-surface-highlight-default",
                      index === 0 && "rounded-t",
                      arr.length - 1 === index && "rounded-b"
                    )}
                  >
                    <Link href={`/${sub.path}`} legacyBehavior>
                      <a className="px-4 py-2 flex items-center duration-150 overflow-hidden transition ease-in-out cursor-pointer leading-5">
                        {sub.text}
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
