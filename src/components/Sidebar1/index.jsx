"use client";

import { Img, Text } from "./..";
import React from "react";
import {
  MenuItem,
  SubMenu,
  Menu,
  Sidebar,
  sidebarClasses,
} from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  return (
    <Sidebar
      {...props}
      width="310px !important"
      className={`${props.className} flex flex-col h-screen pt-8 top-0 sm:pt-5 bg-white-a700 !sticky overflow-auto`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "8px 8px 8px 16px",
            gap: "8px",
            color: "#565e6c",
            fontWeight: 400,
            fontSize: "14px",
            [`&:hover, &.ps-active`]: {
              color: "#2d66f5",
              fontWeight: "700 !important",
              backgroundColor: "#f0f4fe !important",
            },
          },
        }}
        className="w-full self-stretch pb-4"
      >
        <div className="ml-8 mr-10">
          {/* <SubMenu
            icon={<Img src="img_close.svg" width={20} height={20} alt="Close" className="h-[20px] w-[20px]" />}
            label="File Transfer"
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu> */}
          <MenuItem
            icon={
              <Img
                src="img_file_chart_bar.svg"
                width={24}
                height={24}
                alt="Filechartbar"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Dashboard
          </MenuItem>
          <SubMenu
            icon={
              <Img
                src="img_folder.svg"
                width={24}
                height={24}
                alt="Folder"
                className="h-[24px] w-[24px]"
              />
            }
            label="All files"
          >
            <div>
              <MenuItem
                icon={
                  <Img
                    src="img_arrow_right.svg"
                    width={24}
                    height={24}
                    alt="Arrowright"
                    className="h-[24px] w-[24px]"
                  />
                }
              >
                Personal
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="img_arrow_right.svg"
                    width={24}
                    height={24}
                    alt="Arrowright"
                    className="h-[24px] w-[24px]"
                  />
                }
              >
               Work
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="img_arrow_right.svg"
                    width={24}
                    height={24}
                    alt="Arrowright"
                    className="h-[24px] w-[24px]"
                  />
                }
              >
             Media
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="img_arrow_right.svg"
                    width={24}
                    height={24}
                    alt="Arrowright"
                    className="h-[24px] w-[24px]"
                  />
                }
              >
             Projects
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="img_arrow_right.svg"
                    width={24}
                    height={24}
                    alt="Arrowright"
                    className="h-[24px] w-[24px]"
                  />
                }
              >
              Documents
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    src="img_arrow_right.svg"
                    width={24}
                    height={24}
                    alt="Arrowright"
                    className="h-[24px] w-[24px]"
                  />
                }
              >
             Archived
              </MenuItem>
            </div>
          </SubMenu>
          <MenuItem
            icon={
              <Img
                src="img_meeting.svg"
                width={24}
                height={24}
                alt="Meeting"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Shared with me
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_clock.svg"
                width={24}
                height={24}
                alt="Clock"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Recents
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_star.svg"
                width={24}
                height={24}
                alt="Image"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Starred
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_trash.svg"
                width={24}
                height={24}
                alt="Trash"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Bin
          </MenuItem>
        </div>
        <div className="mt-5 h-px bg-gray-300" />
        <div className="ml-8 mr-10 mt-[22px] flex px-4 py-1.5">
          <Text
            size="textxs"
            as="p"
            className="text-[12px] font-normal text-gray-700"
          >
            ADMIN
          </Text>
        </div>
        <div className="ml-8 mr-10">
          <MenuItem
            icon={
              <Img
                src="img_file_chart_bar.svg"
                width={24}
                height={24}
                alt="Filechartbar"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Insights
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_search.svg"
                width={24}
                height={24}
                alt="Search"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Setting
          </MenuItem>
        </div>
        <div className="mt-7 h-px bg-gray-300" />
        <div className="ml-8 mr-10">
          <MenuItem
            icon={
              <Img
                src="img_arrow_down.svg"
                width={24}
                height={24}
                alt="Arrowdown"
                className="h-[24px] w-[24px]"
              />
            }
          >
            Log out
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}
