"use client";

import { SelectBox, Img, Input } from "./..";
import Link from "next/link";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DashboardHeader({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex items-center p-8 sm:p-5 bg-white-a700 shadow-xs`}
    >
      <div className="  flex w-full  items-start justify-between gap-5 md:flex-col">
        <div className="flex w-[10%] justify-between gap-5 md:w-full">
          File Transfer Logo
          <Link href="#">
            <Img
              src="img_menu_8_10.svg"
              width={32}
              height={32}
              alt="Menu8ten"
              className="h-[32px] w-[32px]"
            />
          </Link>
          {/* <Img
            src="img_header_logo.svg"
            width={92}
            height={32}
            alt="Headerlogo"
            className="h-[32px] w-[92px] object-contain"
          /> */}
        </div>
        <div className="flex w-[78%] items-start justify-between gap-5 self-center md:w-full md:flex-col">
          <Input
            name="search"
            placeholder={`Search...`}
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e.target.value)}
            prefix={
              <Img
                src="img_rewind.svg"
                width={20}
                height={20}
                alt="Rewind"
                className="my-0.5 h-[20px] w-[20px] p-0"
              />
            }
            suffix={
              searchBarValue?.length > 0 ? (
                <Img
                  src="img_preferences.svg"
                  width={20}
                  height={20}
                  alt="Preferences"
                  onClick={() => setSearchBarValue("")}
                  className="my-0.5 h-[20px] w-[20px]"
                />
              ) : null
            }
            className="flex h-[42px] w-[58%] items-center justify-center gap-2 self-center rounded-[20px] bg-gray-100 px-4 text-[16px] text-blue_gray-200 md:w-full"
          />
          <div className="flex w-[14%] justify-center md:w-full">
            <Link href="#">
              <Img
                src="img_icon_button_140.svg"
                width={36}
                height={36}
                alt="Iconbutton140"
                className="h-[36px] w-[36px] rounded-[50%]"
              />
            </Link>
            <Link href="#">
              <Img
                src="img_icon_button_141.svg"
                width={36}
                height={36}
                alt="Iconbutton141"
                className="ml-2 h-[36px] w-[36px] rounded-[50%]"
              />
            </Link>
            <Link href="#">
              {/* <Img
                src="img_icon_button_141.svg"
                width={36}
                height={36}
                alt="Iconbutton141"
                className="ml-2 h-[36px] w-[36px] rounded-[50%]"
              /> */}
              <div className="ml-2 h-[36px] w-[36px] rounded-[50%] bg-[blue] ">
                U
              </div>
            </Link>
            {/* <SelectBox
              indicator={
                <Img
                  src="img_arrowdown_gray_500.svg"
                  width={16}
                  height={16}
                  alt="Arrow Down"
                  className="h-[16px] w-[16px]"
                />
              }
              name="arrowdown"
              options={dropDownOptions}
              className="ml-6 flex flex-grow gap-4 py-2.5 pl-3"
            /> */}
          </div>
        </div>
      </div>
    </header>
  );
}
