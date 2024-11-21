"use client";

import { Heading, Text, Img, SelectBox } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function UploadNewFilesPage() {
  return (
    <div className="w-full bg-gray-50 shadow-sm">
      <div>
        <Header />
        <div className="flex items-start gap-4">
          <Sidebar1 />
          <div className="flex flex-1 flex-col gap-1">
            <div className="mr-6 flex items-center justify-center md:mr-0 sm:flex-col">
              <div className="flex flex-1 items-center px-5 sm:flex-col sm:self-stretch sm:px-5">
                <Heading
                  size="headings"
                  as="h1"
                  className="text-[24px] font-bold text-gray-900 md:text-[22px]"
                >
                  My porta
                </Heading>
                <Img
                  src="img_arrow_right_gray_700.svg"
                  width={64}
                  height={64}
                  alt="Arrowright"
                  className="ml-5 h-[64px] w-[64px] sm:ml-0 sm:w-full"
                />
                <SelectBox
                  name="brandguideline"
                  placeholder={`Brand Guideline`}
                  options={dropDownOptions}
                  className="ml-5 w-[36%] p-3 text-[24px] text-gray-700 sm:ml-0 sm:w-full"
                />
                <Img
                  src="img_arrow_down_gray_700_64x64.svg"
                  width={64}
                  height={64}
                  alt="Arrowdown"
                  className="ml-5 h-[64px] w-[64px] sm:ml-0 sm:w-full"
                />
              </div>
              <div className="mb-3 flex gap-3 self-end sm:self-auto sm:px-5">
                <Img
                  src="img_icon_button_46.svg"
                  width={36}
                  height={36}
                  alt="Iconbuttonforty"
                  className="h-[36px] w-[36px] rounded-[50%]"
                />
                <Img
                  src="img_icon_button_47.svg"
                  width={36}
                  height={36}
                  alt="Iconbuttonforty"
                  className="h-[36px] w-[36px] rounded-[50%]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[70px] rounded-lg bg-white-a700 p-6 md:gap-[52px] sm:gap-[35px] sm:p-5">
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center sm:flex-col">
                    <div className="flex flex-1 items-center sm:self-stretch">
                      <SelectBox
                        indicator={
                          <Img
                            src="img_arrowdown_white_a700.svg"
                            width={14}
                            height={14}
                            alt="Arrow Down"
                            className="h-[14px] w-[14px]"
                          />
                        }
                        getOptionLabel={(e) => (
                          <>
                            <div className="flex items-center">
                              <Img
                                src="img_twitter.svg"
                                width={14}
                                height={14}
                                alt="Twitter"
                                className="h-[14px] w-[14px]"
                              />
                              <span>{e.label}</span>
                            </div>
                          </>
                        )}
                        name="dropdownbutton"
                        placeholder={`Upload`}
                        options={dropDownOptions}
                        className="flex w-[24%] gap-1.5 rounded-[16px] bg-blue-a700 px-2.5 py-1.5 text-[14px] text-white-a700"
                      />
                      <SelectBox
                        indicator={
                          <Img
                            src="img_arrowdown_gray_900.svg"
                            width={14}
                            height={14}
                            alt="Arrow Down"
                            className="h-[14px] w-[14px]"
                          />
                        }
                        getOptionLabel={(e) => (
                          <>
                            <div className="flex items-center">
                              <Img
                                src="img_e_add.svg"
                                width={14}
                                height={14}
                                alt="E Add"
                                className="h-[14px] w-[14px]"
                              />
                              <span>{e.label}</span>
                            </div>
                          </>
                        )}
                        name="dropdownbutton"
                        placeholder={`Create new`}
                        options={dropDownOptions}
                        className="ml-3 flex w-[26%] gap-1.5 rounded-[16px] bg-gray-100 px-2.5 py-1.5 text-[14px] text-gray-900"
                      />
                      <Img
                        src="img_icon_button_45.svg"
                        width={36}
                        height={36}
                        alt="Iconbuttonforty"
                        className="ml-3 h-[36px] w-[36px] rounded-[50%]"
                      />
                    </div>
                    <SelectBox
                      indicator={
                        <Img
                          src="img_lightbulb.svg"
                          width={14}
                          height={14}
                          alt="Light Bulb"
                          className="h-[14px] w-[14px]"
                        />
                      }
                      getOptionLabel={(e) => (
                        <>
                          <div className="flex items-center">
                            <Img
                              src="img_filter_list.svg"
                              width={14}
                              height={14}
                              alt="Filter List"
                              className="h-[14px] w-[14px]"
                            />
                            <span>{e.label}</span>
                          </div>
                        </>
                      )}
                      name="dropdownbutton"
                      placeholder={`Sort: Last Modified`}
                      options={dropDownOptions}
                      className="flex w-[24%] gap-1.5 rounded-[16px] border-[0.5px] border-solid border-gray-100 px-2.5 py-1.5 text-[14px] text-gray-900 sm:w-full"
                    />
                  </div>
                  <div className="h-px bg-gray-300" />
                </div>
                <div className="flex flex-col items-center rounded border border-dashed border-blue-700 bg-gray-100_99 p-6 shadow-xs sm:p-5">
                  <Img
                    src="img_close_blue_50.svg"
                    width={48}
                    height={48}
                    alt="Close"
                    className="mt-1.5 h-[48px] w-[48px] rounded-[50%]"
                  />
                  <Text
                    as="p"
                    className="mt-6 text-[14px] font-normal text-blue_gray-800"
                  >
                    Drag and drop here to upload.
                  </Text>
                  <Heading
                    as="h2"
                    className="text-[14px] font-semibold text-blue_gray-900_01 underline"
                  >
                    Choose files or folders from your computer.
                  </Heading>
                  <Text
                    size="textxs"
                    as="p"
                    className="mt-3.5 font-notosans text-[12px] font-normal italic text-blue_gray-500"
                  >
                    Support .zip and .rar files
                  </Text>
                </div>
              </div>
              {/* <div className="mx-[120px] mb-[104px] rounded bg-white-a700 p-3 shadow-md md:mx-0">
                <div className="mb-[22px] flex flex-col gap-7">
                  <div className="flex items-center justify-between gap-5">
                    <Text
                      size="textxs"
                      as="p"
                      className="self-end font-redhatdisplay text-[12px] font-medium uppercase text-blue_gray-500"
                    >
                      More of what you can do:
                    </Text>
                    <Img
                      src="img_button_28.svg"
                      width={32}
                      height={32}
                      alt="Buttontwentyeig"
                      className="h-[32px] w-[32px] rounded-[3px]"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-center">
                      <Img
                        src="img_phone_button_1.svg"
                        width={16}
                        height={16}
                        alt="Phonebuttonone"
                        className="h-[16px] w-[16px]"
                      />
                      <div className="flex flex-1 flex-wrap px-3">
                        <Heading as="h3" className="text-[14px] font-semibold text-gray-900 underline">
                          Get the mobile app
                        </Heading>
                        <Text as="p" className="text-[14px] font-normal text-gray-900">
                          to upload from your phone.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center sm:flex-col">
                      <Img
                        src="img_pc_1.svg"
                        width={16}
                        height={16}
                        alt="Pcone"
                        className="h-[16px] w-[16px] sm:w-full"
                      />
                      <Heading as="h4" className="ml-3 text-[14px] font-semibold text-gray-900 underline sm:ml-0">
                        Get the desktop app
                      </Heading>
                      <Text as="p" className="text-[14px] font-normal text-gray-900">
                        to upload files larger than 50 GB.{" "}
                      </Text>
                    </div>
                    <div className="flex items-center justify-center">
                      <Img src="img_lock.svg" width={16} height={16} alt="Lock" className="h-[16px] w-[16px]" />
                      <div className="flex flex-1 flex-wrap px-3">
                        <Heading as="h5" className="text-[14px] font-semibold text-gray-900 underline">
                          Request files
                        </Heading>
                        <Text as="p" className="text-[14px] font-normal text-gray-900">
                          to be added to this folder by other users.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="w-[22%]">
            <div className="flex flex-col gap-[22px] bg-white-a700 py-6 shadow-xs sm:py-5">
              <div className="flex flex-col gap-6">
                <div className="ml-6 mr-8 flex justify-between gap-5 md:mx-0">
                  <div className="flex">
                    <Img
                      src="img_refresh.svg"
                      width={36}
                      height={36}
                      alt="Refresh"
                      className="h-[36px] w-[36px] rounded"
                    />
                    <Img
                      src="img_icon_button_49.svg"
                      width={36}
                      height={36}
                      alt="Iconbuttonforty"
                      className="h-[36px] w-[36px] rounded"
                    />
                  </div>
                  <div className="flex flex-1 justify-end">
                    <Img
                      src="img_icon_button_50.svg"
                      width={36}
                      height={36}
                      alt="Iconbuttonfifty"
                      className="h-[36px] w-[36px] rounded"
                    />
                    <Img
                      src="img_icon_button_51.svg"
                      width={36}
                      height={36}
                      alt="Iconbuttonfifty"
                      className="h-[36px] w-[36px] rounded"
                    />
                    <Img
                      src="img_icon_button_52.svg"
                      width={36}
                      height={36}
                      alt="Iconbuttonfifty"
                      className="h-[36px] w-[36px] rounded"
                    />
                  </div>
                </div>
                <div className="h-px bg-gray-300" />
              </div>
              <div className="mx-6 md:mx-0">
                <div className="flex flex-col items-center">
                  <div className="flex items-center self-stretch">
                    <Img
                      src="img_icon_button_53.svg"
                      width={36}
                      height={36}
                      alt="Iconbuttonfifty"
                      className="h-[36px] w-[36px] rounded"
                    />
                    <Heading
                      size="textmd"
                      as="h6"
                      className="text-[16px] font-medium text-gray-900"
                    >
                      Brand Guideline
                    </Heading>
                  </div>
                  <Img
                    src="img_folder_10.svg"
                    width={64}
                    height={64}
                    alt="Folderten"
                    className="mt-[42px] h-[64px] w-[64px]"
                  />
                  <div className="mt-12 flex flex-col items-start gap-3 self-stretch">
                    <Heading
                      as="p"
                      className="font-redhatdisplay text-[14px] font-semibold text-gray-700"
                    >
                      Shared to
                    </Heading>
                    <div className="self-stretch">
                      <div className="flex">
                        <div className="flex w-[42%]">
                          <div className="flex w-full">
                            <Img
                              src="img_avatar_23.svg"
                              width={36}
                              height={36}
                              alt="Avatartwentythr"
                              className="h-[36px] w-[36px] rounded-[50%]"
                            />
                            <Img
                              src="img_avatar_24.svg"
                              width={36}
                              height={36}
                              alt="Avatartwentyfou"
                              className="relative ml-[-8px] h-[36px] w-[36px] rounded-[50%]"
                            />
                          </div>
                          <div className="relative ml-[-8px] flex w-full">
                            <Img
                              src="img_avatar_25.svg"
                              width={36}
                              height={36}
                              alt="Avatartwentyfiv"
                              className="h-[36px] w-[36px] rounded-[50%]"
                            />
                            <Img
                              src="img_avatar_26.svg"
                              width={36}
                              height={36}
                              alt="Avatartwentysix"
                              className="relative ml-[-8px] h-[36px] w-[36px] rounded-[50%]"
                            />
                          </div>
                        </div>
                        <Text
                          size="textlg"
                          as="p"
                          className="relative ml-[-8px] flex h-[36px] w-[36px] items-center justify-center rounded-[18px] bg-blue-a700 text-center text-[18px] font-normal text-white-a700"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Heading
                    as="p"
                    className="mt-6 self-start font-redhatdisplay text-[14px] font-semibold text-gray-700"
                  >
                    Owned by
                  </Heading>
                  <div className="mt-2.5 flex items-center gap-4 self-stretch">
                    <Img
                      src="img_avatar_28.svg"
                      width={36}
                      height={36}
                      alt="Avatartwentyeig"
                      className="h-[36px] w-[36px] rounded-[50%]"
                    />
                    <Text
                      as="p"
                      className="text-[14px] font-normal text-gray-700"
                    >
                      You
                    </Text>
                  </div>
                </div>
              </div>
              <Tabs
                className="mb-[38px]"
                selectedTabClassName="!text-black-900 font-bold"
                selectedTabPanelClassName="mt-6 mx-6 md:mx-0 !relative tab-panel--selected"
              >
                <div className="h-px bg-gray-300" />
                <TabList className="mx-6 mt-2.5 flex flex-wrap gap-4 px-2 py-3 md:mx-0">
                  <Tab className="text-[12px] font-normal text-gray-700">
                    Details
                  </Tab>
                  <Tab className="text-[12px] font-normal text-gray-700">
                    Activities
                  </Tab>
                </TabList>
                {[...Array(2)].map((_, index) => (
                  <TabPanel
                    key={`tab-panel${index}`}
                    className="absolute mx-6 mt-6 justify-center md:mx-0"
                  >
                    <div className="w-full">
                      <div className="flex flex-col gap-2.5">
                        <div className="flex flex-wrap justify-between gap-5">
                          <Text
                            as="p"
                            className="font-redhatdisplay text-[14px] font-normal text-gray-700"
                          >
                            File type
                          </Text>
                          <Heading
                            as="p"
                            className="font-redhatdisplay text-[14px] font-semibold text-gray-900"
                          >
                            Folder
                          </Heading>
                        </div>
                        <div className="flex flex-wrap justify-between gap-5">
                          <Text
                            as="p"
                            className="font-redhatdisplay text-[14px] font-normal text-gray-700"
                          >
                            Size
                          </Text>
                          <Heading
                            as="p"
                            className="font-redhatdisplay text-[14px] font-semibold text-gray-900"
                          >
                            --
                          </Heading>
                        </div>
                        <div className="flex flex-wrap justify-between gap-5">
                          <Text
                            as="p"
                            className="font-redhatdisplay text-[14px] font-normal text-gray-700"
                          >
                            Last Modified
                          </Text>
                          <Heading
                            as="p"
                            className="font-redhatdisplay text-[14px] font-semibold text-gray-900"
                          >
                            Jan 18, 2023
                          </Heading>
                        </div>
                        <div className="flex flex-wrap justify-between gap-5">
                          <Text
                            as="p"
                            className="font-redhatdisplay text-[14px] font-normal text-gray-700"
                          >
                            Date Created
                          </Text>
                          <Heading
                            as="p"
                            className="font-redhatdisplay text-[14px] font-semibold text-gray-900"
                          >
                            Jan 17, 2023
                          </Heading>
                        </div>
                        <div className="flex flex-wrap justify-between gap-5">
                          <Text
                            as="p"
                            className="font-redhatdisplay text-[14px] font-normal text-gray-700"
                          >
                            Permission
                          </Text>
                          <Heading
                            as="p"
                            className="font-redhatdisplay text-[14px] font-semibold text-gray-900"
                          >
                            Private
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
