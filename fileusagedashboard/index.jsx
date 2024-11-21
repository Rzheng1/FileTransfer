"use client";

import { SelectBox, Img, Heading, Text, Button } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import UserActionPanel from "../../components/UserActionPanel";
import UserProfileAccessRequest from "../../components/UserProfileAccessRequest";
import FileusagedashboardColumnactivemem from "./FileusagedashboardColumnactivemem";
import FileusagedashboardRowlicenseslet from "./FileusagedashboardRowlicenseslet";
import React, { Suspense } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const data = [
  {
    actionButtonLabel: "+82",
    notificationText: "new files uploaded",
    detailsButtonLabel: "Details",
  },
  {
    actionButtonLabel: "+7",
    notificationText: "active members",
    detailsButtonLabel: "Details",
  },
  {
    actionButtonLabel: "39",
    notificationText: "external views",
    detailsButtonLabel: "Details",
  },
  {
    actionButtonLabel: "+72",
    notificationText: "new comments",
    detailsButtonLabel: "Details",
  },
  {
    actionButtonLabel: "+28",
    notificationText: "file resquests",
    detailsButtonLabel: "Details",
  },
  {
    actionButtonLabel: "4",
    notificationText: "invite pending",
    detailsButtonLabel: "Details",
  },
];
const data1 = [
  {
    userImage: "img_rectangle.png",
    userName: "Angel Gomez",
    accessRequestText: "requested access for",
    keyVisualText: "Key Visual Opt.02",
    statusText: "Pending",
  },
  {
    userImage: "img_rectangle_36x36.png",
    userName: "Brian Baker",
    accessRequestText: "requested access for",
    keyVisualText: "Key Visual Opt.02",
    statusText: "Pending",
  },
  {
    userImage: "img_rectangle_36x36.png",
    userName: "Brian Baker",
    accessRequestText: "commented on",
    keyVisualText: "Key Visual",
    statusText: "Unread",
  },
  {
    userImage: "img_rectangle_1.png",
    userName: "Ryan Browm",
    accessRequestText: "commented on",
    keyVisualText: "Key Visual",
    statusText: "Read",
  },
  {
    userImage: "img_rectangle_2.png",
    userName: "Sarah Green",
    accessRequestText: "commented on",
    keyVisualText: "TVC Creative Idea",
    statusText: "Replied",
  },
  {
    userImage: "img_rectangle_3.png",
    userName: "Thomas Johnson",
    accessRequestText: "was invited to",
    keyVisualText: "Brand Guideline",
    statusText: "Pending",
  },
  {
    userImage: "img_rectangle.png",
    userName: "Angel Gomez",
    accessRequestText: "replied to you on",
    keyVisualText: "Key Visual",
    statusText: "Replied",
  },
  {
    userImage: "img_rectangle.png",
    userName: "Angel Gomez",
    accessRequestText: "requested access for",
    keyVisualText: "Key Visual Opt.02",
    statusText: "Pending",
  },
  {
    userImage: "img_rectangle_1.png",
    userName: "Ryan Brown",
    accessRequestText: "was invited to",
    keyVisualText: "Brand Guideline",
    statusText: "Done",
  },
  {
    userImage: "img_rectangle_36x36.png",
    userName: "Brian Baker",
    accessRequestText: "was invited to",
    keyVisualText: "Brand Guideline",
    statusText: "Done",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function FileUsageDashboardPage() {
  return (
    <div className="w-full bg-gray-50 shadow-sm">
      <div className="mb-1.5">
        <Header />
        <div className="mr-6 flex items-start gap-6 md:mr-0">
          <Sidebar1 />
          <div className="flex flex-1 items-center gap-6 md:flex-col">
            <div className="flex flex-1 flex-col items-start gap-6 md:self-stretch md:px-5">
              <Heading
                size="headingmd"
                as="h1"
                className="font-redhatdisplay text-[32px] font-bold text-blue_gray-900_01 md:text-[30px] sm:text-[28px]"
              >
                Insights
              </Heading>
              <div className="self-stretch">
                <div className="flex items-center rounded border border-solid border-gray-300 bg-white-a700 p-6 md:flex-col sm:p-5">
                  <div className="mb-2 flex w-[46%] justify-center md:w-full">
                    <div className="flex w-full flex-col items-start">
                      <Heading
                        as="h2"
                        className="text-[18px] font-semibold text-gray-900"
                      >
                        Storage
                      </Heading>
                      <Heading
                        size="headinglg"
                        as="h3"
                        className="mt-8 font-redhatdisplay text-[40px] font-semibold text-gray-900 md:text-[38px] sm:text-[36px]"
                      >
                        2160 MB
                      </Heading>
                      <Text
                        size="textlg"
                        as="p"
                        className="font-redhatdisplay text-[18px] font-normal text-blue_gray-900_cc"
                      >
                        of 3000 GB used
                      </Text>
                      <div className="mt-8 flex items-center justify-center gap-[21px] self-stretch">
                        <Button
                          leftIcon={
                            <Img
                              src="img_f_add.svg"
                              width={16}
                              height={16}
                              alt="F Add"
                              className="my-0.5 h-[16px] w-[16px]"
                            />
                          }
                          className="flex h-[36px] min-w-[158px] flex-row items-center justify-center gap-1.5 rounded-[18px] border border-solid border-blue-a700 px-[11px] text-center text-[14px] text-blue-a700"
                        >
                          Get more storage
                        </Button>
                        <Text
                          as="p"
                          className="text-[14px] font-normal text-blue-a700"
                        >
                          Clean up space
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center gap-7 md:self-stretch">
                    <div className="relative h-[158px] flex-1">
                      <CircularProgressbar
                        strokeWidth={15}
                        value={35}
                        styles={{
                          trail: { stroke: "#2d66f5" },
                          path: {
                            strokeLinecap: "square",
                            transformOrigin: "center",
                            transform: "rotate(-190deg)",
                          },
                        }}
                        className="absolute bottom-0 right-[-0.50px] top-0 my-auto h-[158px] flex-1"
                      />
                      <CircularProgressbar
                        strokeWidth={15}
                        value={6}
                        styles={{
                          trail: { stroke: "#2d66f5" },
                          path: { strokeLinecap: "square" },
                        }}
                        className="absolute bottom-0 right-[-0.50px] top-0 my-auto h-[158px] flex-1"
                      />
                      <CircularProgressbar
                        strokeWidth={15}
                        value={4}
                        styles={{
                          trail: { stroke: "#2d66f5" },
                          path: { strokeLinecap: "square" },
                        }}
                        className="absolute bottom-0 right-[-0.50px] top-0 my-auto h-[158px] flex-1"
                      />
                    </div>
                    <div className="flex w-[34%] flex-col gap-4">
                      <div className="flex items-center justify-center gap-6">
                        <div className="h-[12px] w-[12px] rounded-md bg-blue-a700" />
                        <Text
                          as="p"
                          className="text-[14px] font-normal text-gray-700"
                        >
                          Documents
                        </Text>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="h-[12px] w-[12px] rounded-md bg-amber-a400" />
                        <Text
                          as="p"
                          className="text-[14px] font-normal text-gray-700"
                        >
                          Media
                        </Text>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="h-[12px] w-[12px] rounded-md bg-pink-600" />
                        <Text
                          as="p"
                          className="text-[14px] font-normal text-gray-700"
                        >
                          Others
                        </Text>
                      </div>
                      <div className="flex items-center justify-center gap-6">
                        <div className="h-[12px] w-[12px] rounded-md bg-gray-300" />
                        <Text
                          as="p"
                          className="text-[14px] font-normal text-gray-700"
                        >
                          Available
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch">
                <div className="flex flex-col gap-8 rounded border border-solid border-gray-300 bg-white-a700 p-6 sm:p-5">
                  <div className="flex flex-col gap-8">
                    <div>
                      <div className="flex flex-col items-start gap-1">
                        <div className="flex items-center self-stretch sm:flex-col">
                          <Heading
                            as="h4"
                            className="text-[18px] font-semibold text-gray-900"
                          >
                            How files are used?
                          </Heading>
                          <div className="flex flex-1 items-center justify-end gap-3.5 sm:self-stretch">
                            <SelectBox
                              indicator={
                                <Img
                                  src="img_arrowdown_gray_900.svg"
                                  width={12}
                                  height={12}
                                  alt="Arrow Down"
                                  className="h-[12px] w-[12px]"
                                />
                              }
                              name="duration"
                              placeholder={`Last 7 days`}
                              options={dropDownOptions}
                              className="flex w-[32%] gap-4 rounded-lg border-[0.5px] border-solid border-gray-300 bg-white-a700 p-1.5 text-[12px] text-gray-900"
                            />
                            <Img
                              src="img_icon_button_142.svg"
                              width={32}
                              height={32}
                              alt="Iconbutton142"
                              className="h-[32px] w-[32px] rounded-[50%]"
                            />
                          </div>
                        </div>
                        <Text
                          as="p"
                          className="text-[14px] font-normal text-gray-500"
                        >
                          How has your Porta been used for personal and
                          collaboration?
                        </Text>
                      </div>
                    </div>
                    <div className="rounded bg-white-a700 px-[18px] py-7 shadow-xs sm:py-5">
                      <div className="flex items-center justify-center gap-2.5 md:flex-col">
                        <div className="flex flex-col items-center gap-7">
                          <Text
                            as="p"
                            className="text-[14px] font-normal text-gray-500"
                          >
                            500 GB
                          </Text>
                          <Text
                            as="p"
                            className="text-[14px] font-normal text-gray-500"
                          >
                            400 GB
                          </Text>
                          <Text
                            as="p"
                            className="text-[14px] font-normal text-gray-500"
                          >
                            300 GB
                          </Text>
                          <Text
                            as="p"
                            className="text-[14px] font-normal text-gray-500"
                          >
                            200 GB
                          </Text>
                          <Text
                            as="p"
                            className="text-[14px] font-normal text-gray-500"
                          >
                            100 GB
                          </Text>
                          <Text
                            as="p"
                            className="self-start text-[14px] font-normal text-gray-500"
                          >
                            0
                          </Text>
                        </div>
                        <div className="relative h-[250px] flex-1 bg-[url(/images/img_group_1.svg)] bg-cover bg-no-repeat md:w-full md:flex-none md:self-stretch">
                          <Img
                            src="img_image_78.svg"
                            width={572}
                            height={250}
                            alt="Imageseventyeig"
                            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[250px] flex-1"
                          />
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[240px] flex-1 bg-[url(/images/img_group_2.svg)] bg-cover bg-no-repeat md:h-auto">
                            <Img
                              src="img_image_80.svg"
                              width={572}
                              height={168}
                              alt="Imageeighty"
                              className="mt-[70px] h-[168px] w-full md:h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-center gap-[18px] sm:flex-col">
                    <div className="flex items-center gap-2">
                      <Img
                        src="img_checkmark.svg"
                        width={16}
                        height={16}
                        alt="Checkmark"
                        className="h-[16px] w-[16px]"
                      />
                      <Text
                        as="p"
                        className="text-[14px] font-normal text-gray-900"
                      >
                        All
                      </Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <Img
                        src="img_checkmark_lime_800.svg"
                        width={16}
                        height={16}
                        alt="Checkmark"
                        className="h-[16px] w-[16px]"
                      />
                      <Text
                        as="p"
                        className="text-[14px] font-normal text-gray-900"
                      >
                        Upload
                      </Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <Img
                        src="img_checkmark_blue_900.svg"
                        width={16}
                        height={16}
                        alt="Checkmark"
                        className="h-[16px] w-[16px]"
                      />
                      <Text
                        as="p"
                        className="text-[14px] font-normal text-gray-900"
                      >
                        Comment & Edit
                      </Text>
                    </div>
                    <div className="flex flex-1 items-center gap-2 px-[18px] sm:self-stretch">
                      <Img
                        src="img_checkmark_pink_a700.svg"
                        width={16}
                        height={16}
                        alt="Checkmark"
                        className="h-[16px] w-[16px]"
                      />
                      <Text
                        as="p"
                        className="text-[14px] font-normal text-gray-900"
                      >
                        Download
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch">
                <div className="rounded border border-solid border-gray-300 bg-white-a700 p-[18px]">
                  <div className="mt-1.5 flex flex-col gap-[18px]">
                    <div className="flex items-center gap-3 md:flex-col">
                      <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch">
                        <Heading
                          as="h5"
                          className="text-[18px] font-semibold text-gray-900"
                        >
                          Activity
                        </Heading>
                        <SelectBox
                          indicator={
                            <Img
                              src="img_arrowdown_gray_900.svg"
                              width={12}
                              height={12}
                              alt="Arrow Down"
                              className="h-[12px] w-[12px]"
                            />
                          }
                          name="duration"
                          placeholder={`Last 24 hours`}
                          options={dropDownOptions}
                          className="flex w-[26%] gap-4 rounded-lg border-[0.5px] border-solid border-gray-300 bg-white-a700 p-1.5 text-[12px] text-gray-900"
                        />
                      </div>
                      <Img
                        src="img_icon_button_142.svg"
                        width={32}
                        height={32}
                        alt="Iconbutton145"
                        className="h-[32px] w-[32px] rounded-[50%]"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap px-3 py-3.5">
                        <Heading
                          size="headingxs"
                          as="h6"
                          className="text-[14px] font-bold text-blue-a700"
                        >
                          All
                        </Heading>
                        <Text
                          as="p"
                          className="ml-6 text-[14px] font-normal text-gray-700"
                        >
                          File Requests
                        </Text>
                        <Text
                          as="p"
                          className="ml-6 text-[14px] font-normal text-gray-700"
                        >
                          Comments
                        </Text>
                        <Text
                          as="p"
                          className="ml-6 text-[14px] font-normal text-gray-700"
                        >
                          Invitation
                        </Text>
                        <Text
                          as="p"
                          className="ml-6 text-[14px] font-normal text-gray-700"
                        >
                          Upload
                        </Text>
                        <Text
                          as="p"
                          className="ml-6 text-[14px] font-normal text-gray-700"
                        >
                          Download
                        </Text>
                      </div>
                      <div className="flex flex-col rounded">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {data1.map((d, index) => (
                            <UserProfileAccessRequest
                              {...d}
                              key={"table17" + index}
                            />
                          ))}
                        </Suspense>
                      </div>
                    </div>
                    <div className="flex gap-2 md:flex-col">
                      <div className="flex flex-1 items-center justify-center md:self-stretch">
                        <Text
                          as="p"
                          className="mb-1.5 self-end text-[14px] font-normal text-gray-900"
                        >
                          <span>Show&nbsp;</span>
                          <span className="font-semibold">1</span>
                          <span>&nbsp;to&nbsp;</span>
                          <span className="font-semibold">10</span>
                          <span>&nbsp;of&nbsp;</span>
                          <span className="font-semibold">25</span>
                        </Text>
                        <div className="flex flex-1 justify-end">
                          <Img
                            src="img_arrow_left.svg"
                            width={36}
                            height={36}
                            alt="Arrowleft"
                            className="h-[36px] w-[36px] rounded-[50%]"
                          />
                          <Button className="ml-2 flex h-[36px] min-w-[28px] flex-row items-center justify-center rounded-[14px] bg-gray-300 px-3 text-center text-[14px] text-gray-500">
                            1
                          </Button>
                          <div className="ml-2 flex w-[32px] flex-col items-center justify-center rounded-[16px]">
                            <Text
                              as="p"
                              className="text-[14px] font-normal text-gray-500"
                            >
                              2
                            </Text>
                          </div>
                          <div className="ml-2 flex w-[32px] flex-col items-center justify-center rounded-[16px]">
                            <Text
                              as="p"
                              className="text-[14px] font-normal text-gray-500"
                            >
                              3
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="img_arrow_right_gray_500.svg"
                        width={36}
                        height={36}
                        alt="Arrowright"
                        className="h-[36px] w-[36px] rounded-[50%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[30%] flex-col gap-6 md:w-full md:px-5">
              <div className="flex flex-col gap-[30px] rounded-md border border-solid border-gray-300 bg-white-a700 p-[22px] sm:p-5">
                <div className="flex items-center justify-between gap-5">
                  <Heading
                    as="h6"
                    className="text-[18px] font-semibold text-gray-900"
                  >
                    Stats
                  </Heading>
                  <SelectBox
                    indicator={
                      <Img
                        src="img_arrowdown_gray_900.svg"
                        width={12}
                        height={12}
                        alt="Arrow Down"
                        className="h-[12px] w-[12px]"
                      />
                    }
                    name="duration"
                    placeholder={`Last 7 days`}
                    options={dropDownOptions}
                    className="flex w-[44%] gap-4 rounded-lg border-[0.5px] border-solid border-gray-300 bg-white-a700 p-1.5 text-[12px] text-gray-900"
                  />
                </div>
                <div className="flex flex-col rounded">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                      <UserActionPanel {...d} key={"table15" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
              <FileusagedashboardRowlicenseslet />
              <FileusagedashboardColumnactivemem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
