"use client";

import DashboardHeader from "@/components/DashboardHeading";
import { Img, Button, Text, Heading, SelectBox } from "../../components";
import DocumentOverview from "../../components/DocumentOverview";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import HomefilelistingColumnstorage from "./HomefilelistingColumnstorage";
import HomefilelistingRowlinethirteen from "./HomefilelistingRowlinethirteen";
import { createColumnHelper } from "@tanstack/react-table";
import React, { Suspense, useEffect,useState } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import axios from "axios"; 

const data = [
  {
    documentImage: "img_container_73.svg",
    documentTitle: "Documents",
    fileCount: "223 files",
    totalFileSize: "760 GB",
  },
  {
    documentImage: "img_warning.svg",
    documentTitle: "Videos",
    fileCount: "500 GB",
    totalFileSize: "46 files",
  },
  {
    documentImage: "img_container_75.svg",
    documentTitle: "Documents",
    fileCount: "223 files",
    totalFileSize: "760 GB",
  },
  {
    documentImage: "img_container_76.svg",
    documentTitle: "PDF",
    fileCount: "300 GB",
    totalFileSize: "96 files",
  },
  {
    documentImage: "img_inbox.svg",
    documentTitle: "Unknown files",
    fileCount: "240 GB",
    totalFileSize: "123 files",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];




const tableData = [
   

  {
    penone: "img_pen_blue_gray_800.svg",
    rowview: "Baltoro_glacier_from_air.jpg",
    rowsize: "1.4 MB",
    rowlast: "Nov 12, 2024",
    rowsharedto: "1 users",
  },

  {
    penone: "img_pen_blue_gray_800.svg",
    rowview: "Death.jpg",
    rowsize: "91.3 KB",
    rowlast: "Nov 12, 2024",
    rowsharedto: "1 users",
  },
   
];

export default function HomeFileListingPage() {
  // const [tableData, setTableData] = useState([]);

  var fetchFiles = () => {

    // let config = {
    //   method: 'get',
    //   maxBodyLength: Infinity,
    //   url: 'https://localhost:44367/api/Files/GetFiles?Tags=&Search=&SortColumn=&SortOrder=&IsStarredOnly=false',
    //   headers: {
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidmVrYWhlNzg2NEBvcGVyYWRlcy5jb20iLCJqdGkiOiIxZjcwOWYwNC1jZWIxLTQzZTItOTFhYi1iZDE2YzAwYjc5MzYiLCJVc2VySWQiOiIzY2Y5MDZkNC0wZmViLTQyMTUtODU2ZC1mNGFkMjg0NTljNDMiLCJleHAiOjE3MzM3ODYzNDUsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxMzUiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjcxMzUifQ.JOQea6knPOR-yxtyzdQ8xmrbR1vXdE9HCAIJ_3YFLik'
    //   }
    // };

    // axios.request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //     setTableData(response.data.map(file => ({
    //       penone: "img_pen_blue_gray_800.svg",
    //       rowview: file.name,
    //       rowsize: file.size,
    //       rowlast: file.modifiedDate,
    //       rowsharedto: "1 users",
    //     })));
    //   })
    //   .catch((error) => {
    //     console.log(error);
      // });

  }


  useEffect(() => {
    fetchFiles();
  }, []);



  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowview", {
        cell: (info) => (
          <div className="flex flex-1 justify-start">
            <div className="flex flex-col items-center  bg-white-a700 px-3.5 py-4">
              <Img
                src={info.row.original.penone}
                width={20}
                height={20}
                alt="Pen"
                className="h-[20px] w-[20px]"
              />
            </div>
            <Text
              as="p"
              className=" bg-white-a700 py-3.5 pl-3 pr-[34px] text-[14px] font-medium text-gray-900 sm:pr-5"
            >
              {info.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1">
            <div className="h-[46px] w-[48px]  bg-gray-50" />
            <Heading
              as="h1"
              className=" bg-gray-50 py-3 pl-3 pr-[34px] font-redhatdisplay text-[14px] font-semibold text-gray-700 sm:pr-5"
            >
              Name
            </Heading>
          </div>
        ),
        meta: { width: "284px" },
      }),
      tableColumnHelper.accessor("rowsize", {
        cell: (info) => (
          <div className="ml-12 flex">
            <Text
              as="p"
              className=" py-3.5 pl-3 pr-[34px] text-[14px] font-normal text-blue_gray-500 sm:pr-5"
            >
              {info.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="ml-12 flex">
            <Heading
              as="h2"
              className=" py-3 pl-3 pr-[34px] font-redhatdisplay text-[14px] font-semibold text-gray-700 sm:pr-5"
            >
              Size
            </Heading>
          </div>
        ),
        meta: { width: "110px" },
      }),
      tableColumnHelper.accessor("rowlast", {
        cell: (info) => (
          <div className="flex">
            <Text
              as="p"
              className=" py-3.5 pl-3 pr-[34px] text-[14px] font-normal text-blue_gray-500 sm:pr-5"
            >
              {info.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Heading
              as="h3"
              className=" py-3 pl-3 pr-[30px] font-redhatdisplay text-[14px] font-semibold text-gray-700 sm:pr-5"
            >
              Last modified
            </Heading>
          </div>
        ),
        meta: { width: "132px" },
      }),
      tableColumnHelper.accessor("rowsharedto", {
        cell: (info) => (
          <div className="flex justify-center">
            <div className="flex flex-1  bg-white-a700 p-3">
              <Button className="flex h-[28px] min-w-[56px] flex-row items-center justify-center rounded-[14px] bg-light_green-50 px-1.5 text-center text-[12px] text-light_green-900">
                {info.getValue()}
              </Button>
            </div>
            <div className="flex flex-col items-center  bg-white-a700 px-3 py-3.5">
              <Img
                src="img_create.svg"
                width={24}
                height={24}
                alt="Create"
                className="h-[24px] w-[24px]"
              />
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Heading
              as="h4"
              className=" bg-gray-50 py-3 pl-3 pr-[30px] font-redhatdisplay text-[14px] font-semibold text-gray-700 sm:pr-5"
            >
              Shared to
            </Heading>
            <div className="h-[46px] w-[48px]  bg-gray-50" />
          </div>
        ),
        meta: { width: "154px" },
      }),
    ];
  }, []);

  return (
    <div className="w-full bg-gray-50 shadow-sm">
      <div>
        <DashboardHeader />
        <div className="flex items-start gap-4">
          <Sidebar1 />
          <div className="mt-4 flex-1 self-start">
            <div className="flex flex-col gap-3.5">
              <div className="ml-5 mr-6 flex items-center justify-between gap-5 md:mx-0">
                <div className="flex flex-1 items-center gap-[21px]">
                  <h2 className="w-[26%] p-3 text-[24px] font-bold text-gray-900">
                    All Files
                  </h2>
                  {/* <SelectBox
                    name="myporta_two"
                    placeholder={`All Files`}
                    options={dropDownOptions}
                    className="w-[26%] p-3 text-[24px] font-bold text-gray-900"
                  /> */}
                  {/* <Img
                    src="img_arrow_down_gray_700.svg"
                    width={64}
                    height={64}
                    alt="Arrowdown"
                    className="h-[64px] w-[64px]"
                  /> */}
                </div>
                <div className="mb-3 flex gap-3 self-end">
                  <Img
                    src="img_megaphone.svg"
                    width={36}
                    height={36}
                    alt="Megaphone"
                    className="h-[36px] w-[36px] rounded-[50%]"
                  />
                  <Img
                    src="img_icon_button_17.svg"
                    width={36}
                    height={36}
                    alt="Iconbuttonseven"
                    className="h-[36px] w-[36px] rounded-[50%]"
                  />
                </div>
              </div>
              <div className="rounded-lg bg-white-a700 p-6 sm:p-5">
                <div className="flex items-center justify-center sm:flex-col">
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
                      className="flex w-[24%] gap-1.5 rounded-[16px] bg-blue-a700 py-1.5 pl-3 pr-1.5 text-[14px] text-white-a700"
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
                      className="ml-3 flex w-[26%] gap-1.5 rounded-[16px] bg-gray-100 py-1.5 pl-3 pr-1.5 text-[14px] text-gray-900"
                    />
                    <Img
                      src="img_icon_button_20.svg"
                      width={36}
                      height={36}
                      alt="Iconbuttontwent"
                      className="ml-3 h-[36px] w-[36px] rounded-[50%]"
                    />
                  </div>
                  <Button
                    leftIcon={
                      <Img
                        src="img_filter_list.svg"
                        width={14}
                        height={14}
                        alt="Filter List"
                        className="my-1 h-[14px] w-[14px]"
                      />
                    }
                    rightIcon={
                      <Img
                        src="img_lightbulb.svg"
                        width={14}
                        height={14}
                        alt="Light Bulb"
                        className="my-1 h-[14px] w-[14px]"
                      />
                    }
                    className="flex h-[34px] min-w-[184px] flex-row items-center justify-center gap-1.5 rounded-[16px] border-[0.5px] border-solid border-gray-100 px-2.5 text-center text-[14px] text-gray-900"
                  >
                    Sort: Last Modified
                  </Button>
                </div>
                <div className="mt-6 h-px bg-gray-300" />
                <ReactTable
                  className="table9 mb-[18px] mt-3.5 border-separate border-spacing-0 rounded-lg border-[0.5px] border-solid border-white-a700 sm:block sm:overflow-x-auto sm:whitespace-nowrap w-x-full"
                  bodyProps={{ className: "" }}
                  headerCellProps={{ className: "bg-gray-50" }}
                  headerProps={{
                    className: "border-gray-100 border border-solid",
                  }}
                  rowDataProps={{
                    className:
                      "border-gray-100 border border-solid bg-white-a700  ",
                  }}
                  columns={tableColumns}
                  data={tableData}
                />
              </div>
            </div>
          </div>
          <div className="w-[22%]">
            <Tabs
              className="bg-white-a700 py-6 shadow-xs sm:py-5"
              selectedTabClassName="!text-black-900 font-bold"
              selectedTabPanelClassName="mt-6 mb-[456px] mx-6 md:mx-0 !relative tab-panel--selected"
            >
              <HomefilelistingRowlinethirteen />
              <HomefilelistingColumnstorage />
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
                  className="absolute mx-6 mb-[456px] mt-6 items-center md:mx-0"
                >
                  <div className="w-full">
                    <div className="flex flex-col gap-4">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                          <DocumentOverview {...d} key={"homefile" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
