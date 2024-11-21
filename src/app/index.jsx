"use client";

import { Button, Img, Input, Heading, Text } from "../components";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingpageRowOne from "./LandingpageRowOne";
import LandingpageRowcontainerone from "./LandingpageRowcontainerone";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { convertBytesToMB } from "../utility.js";
import Loader from "@/components/Loader";

const Modal = ({ isOpen, onClose, data, deleteFile }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center  m-auto  h-[500px]  w-[500px] bg-opacity-100 ${isOpen ? "" : "hidden"
        }`}
    >
      <div
        className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg p-4 md:p-6 "
        style={{ background: "#fff" }}
      >
        <div className="flex justify-between items-center  pb-3">
          <h3 className="text-lg font-semibold"> Uploaded Files</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            ✕
          </button>
        </div>
        {data.map((item, index) => {
          return (
            <div
              className={`${index == 0 ? "mt-1" : "mt-3"
                } flex w-[100%] items-start justify-center rounded bg-gray-100_01 p-3 shadow-4xl sm:ml-0 sm:w-full`}
              key={index}
            >
              <Img
                src="file-folders-svgrepo-com.svg"
                width={24}
                height={24}
                alt="Btnplayone"
                className="h-[24px] w-[24px] self-center"
              />
              <div className="flex-1 self-end px-4">
                <div className="flex flex-col items-start">
                  <Heading
                    size="headings"
                    as="h4"
                    className="text-[16px] font-semibold text-gray-900  "
                  >
                    {item.name}
                  </Heading>
                  <div className="flex items-center self-stretch">
                    <Text
                      as="p"
                      className="text-[14px] font-normal text-blue_gray-800"
                    >
                      {convertBytesToMB(item.size)}
                    </Text>
                    <div className="h-[4px] w-[4px] rounded-sm bg-gray-300" />
                    <Text
                      as="p"
                      className="ml-1.5 text-[14px] font-normal text-blue_gray-800"
                    >
                      {item.format}
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                onClick={() => deleteFile(item.id)}
                src="img_close_1.svg"
                width={12}
                height={12}
                alt="Closeone"
                className="ml-[18px] h-[12px] w-[12px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function LandingPagePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isUploadingFile, setIsUploadingFile] = useState(false);

  const [UploadedFiles, setUploadedFiles] = useState([]);

  const deleteFile = (id) => {
    console.log(id);
    if (id === -1) {
      setUploadedFiles([]);
    } else {
      setUploadedFiles((prevList) => prevList.filter((item) => item.id !== id));
    }
  };

  const handleFileUpload = async (files) => {
    setIsUploadingFile(true);
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("files", files[i]);
    }
    const token = localStorage.getItem("token");
    console.log("asd");
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://localhost:44367/api/Files/UploadFiles",
      headers: { 
        'Authorization': "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidmVrYWhlNzg2NEBvcGVyYWRlcy5jb20iLCJqdGkiOiIwYzk3YmRmNy00YjFhLTRhMzItYTMxMS0xMTFjZDhjZTY0ZTUiLCJVc2VySWQiOiIzY2Y5MDZkNC0wZmViLTQyMTUtODU2ZC1mNGFkMjg0NTljNDMiLCJleHAiOjE3MzM3ODgwNzcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxMzUiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjcxMzUifQ.jgaEP7L5ihvTo-B2gbI6ddCo47w_Xg2VhSi7IAOwq6I"
      },
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setUploadedFiles([...UploadedFiles, ...response.data.payload]);
        setIsUploadingFile(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const SendFile = () => {

    console.log("Send File" , UploadedFiles.map(file => file.id)); 

    let data = JSON.stringify({
      "title": "Files",
      "fileIds":UploadedFiles.map(file => file.id),
      "senderEmail": "user@gmail.com",
      "receiptEmail": "siwevet565@digopm.com",
      "message": "test for demo",
      "isSendEmail": true
    });

    
    // const token = localStorage.getItem("token");
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://localhost:44367/api/Files/StoreTransferRecord',
      // headers: { 
      //   'Authorization': "bearer" + token
      // },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      alert("File Sent Successfully");

  }
  return (
    <div className="relative h-[1472px] w-full content-end bg-white-a700 shadow-xs md:h-auto">
      {/* <LandingpageRowcontainerone /> */}
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center">
        <Header />
        <LandingpageRowOne />
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          data={UploadedFiles}
          deleteFile={deleteFile}
        />
        <div className="container-xs mt-[98px] flex flex-col gap-8 md:px-5">
          <div className="flex items-center justify-between gap-5 sm:flex-col">
            <Text
              size="textlg"
              as="p"
              className="ml-[314px] font-redhatdisplay text-[32px] font-normal text-gray-900 md:text-[30px] sm:ml-0 sm:text-[28px]"
            >
              Need to Share Files Fast & Secure?
            </Text>
            <Img
              src="img_icon_button_4.svg"
              width={36}
              height={36}
              alt="Iconbuttonfour"
              className="h-[36px] w-[36px] rounded-[50%]"
            />
          </div>
          <div className="flex flex-col items-center gap-[62px] rounded bg-white-a700 p-8 shadow-sm sm:gap-[31px] sm:p-5">
            <div className="self-stretch">
              <div className="flex flex-col gap-12">
                <div className="flex items-start md:flex-col">
                  {/* <div className="mt-1.5 flex w-[26%] items-center justify-center gap-3 md:w-full">
                    <Button className="flex h-[48px] w-[48px] items-center justify-center px-1">
                      <Img src="img_add_circle_outline.svg" width={40} height={40} />
                    </Button>
                    <div className="flex flex-1 flex-col items-start">
                      <Heading
                        size="headingmd"
                        as="h2"
                        className="font-redhatdisplay text-[20px] font-bold text-gray-900"
                      >
                        Select Files to Share
                      </Heading>
                      <Heading as="h3" className="text-[18px] font-normal text-gray-500  ">
                      Securely
                      </Heading>
                    </div>
                  </div> */}
                  <label className="mt-1.5 flex w-[26%] items-center justify-center gap-3 md:w-full cursor-pointer">
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      onChange={(e) => handleFileUpload(e.target.files)}
                    />
                    <Button className="flex h-[48px] w-[48px] items-center justify-center px-1">
                      <Img
                        src="img_add_circle_outline.svg"
                        width={40}
                        height={40}
                      />
                    </Button>
                    <div className="flex flex-1 flex-col items-start">
                      <Heading
                        size="headingmd"
                        as="h2"
                        className="font-redhatdisplay text-[20px] font-bold text-gray-900"
                      >
                        Select Files to Share
                      </Heading>
                      <Heading
                        as="h3"
                        className="text-[18px] font-normal text-gray-500"
                      >
                        Securely
                      </Heading>
                    </div>
                  </label>

                  <div className="flex flex-1 items-center justify-between gap-5 self-center md:self-stretch sm:flex-col">
                    {UploadedFiles.length == 1 ? (
                      <div className="ml-[46px] flex w-[42%] items-start justify-center rounded bg-gray-100_01 p-3 shadow-4xl sm:ml-0 sm:w-full">
                        <Img
                          src="file-folders-svgrepo-com.svg"
                          width={24}
                          height={24}
                          alt="Btnplayone"
                          className="h-[24px] w-[24px] self-center"
                        />
                        <div className="flex-1 self-end px-4">
                          <div className="flex flex-col items-start">
                            <Heading
                              size="headings"
                              as="h4"
                              className="text-[16px] font-semibold text-gray-900  "
                            >
                              {UploadedFiles[0].name}
                            </Heading>
                            <div className="flex items-center self-stretch">
                              <Text
                                as="p"
                                className="text-[14px] font-normal text-blue_gray-800"
                              >
                                {convertBytesToMB(UploadedFiles[0].size)}
                              </Text>
                              <div className="h-[4px] w-[4px] rounded-sm bg-gray-300" />
                              <Text
                                as="p"
                                className="ml-1.5 text-[14px] font-normal text-blue_gray-800"
                              >
                                {UploadedFiles[0].format}
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          onClick={() => deleteFile(UploadedFiles[0].id)}
                          src="img_close_1.svg"
                          width={12}
                          height={12}
                          alt="Closeone"
                          className="ml-[18px] h-[12px] w-[12px]"
                        />
                      </div>
                    ) : UploadedFiles.length > 1 ? (
                      <div className="  ml-[46px] flex w-[42%] items-start justify-center rounded bg-gray-100_01 p-3 shadow-4xl sm:ml-0 sm:w-full">
                        <Img
                          src="arsay-say-khai-nhi.svg"
                          width={24}
                          height={24}
                          alt="Btnplayone"
                          className="h-[24px] w-[24px] self-center"
                        />
                        <div className="flex-1 self-end px-4">
                          <div
                            className="flex flex-col items-start"
                            onClick={openModal}
                          >
                            <Heading
                              size="headings"
                              as="h4"
                              className="text-[16px] font-semibold text-gray-900  "
                            >
                              View All Uploaded Files
                            </Heading>
                            <div className="flex items-center self-stretch">
                              <Text
                                as="p"
                                className="text-[14px] font-normal text-blue_gray-800"
                              >
                                {UploadedFiles.length} Files Ready for Your
                                Review
                              </Text>
                              <div className="h-[4px] w-[4px] rounded-sm bg-gray-300" />
                            </div>
                          </div>
                        </div>
                        {/* <Img
                        src="img_close_1.svg"
                        width={12}
                        height={12}
                        alt="Closeone"
                        className="ml-[18px] h-[12px] w-[12px]"
                      /> */}
                      </div>
                    ) : (
                      <div></div>
                    )}

                    {isUploadingFile ? (
                      <Loader />
                    ) : (
                      <Link
                        href="#"
                        className="mb-4 self-end rounded sm:self-auto"
                      >
                        <Text
                          as="p"
                          onClick={() => deleteFile(-1)}
                          className={`px-2.5 py-1.5 text-[14px] font-normal text-gray-500 ${UploadedFiles.length < 1 && "hidden"
                            } `}
                        >
                          Remove All Files
                        </Text>
                      </Link>
                    )}
                    {/*  */}
                  </div>
                </div>
                <div className="flex gap-8 md:flex-col">
                  <div className="flex w-[30%] flex-col items-start gap-1.5 md:w-full">
                    <Heading
                      size="headingxs"
                      as="h5"
                      className="text-[14px] font-bold text-blue_gray-800"
                    >
                      Share to
                    </Heading>
                    <Input
                      type="email"
                      name="email"
                      placeholder={`Recipient’s Email Address`}
                      className="flex h-[30px] items-center justify-center self-stretch border-b border-solid border-gray-300 px-3 text-[20px] text-blue_gray-200 p-0"
                    />
                  </div>
                  <div className="flex w-[30%] flex-col items-start gap-1.5 md:w-full">
                    <Heading
                      size="headingxs"
                      as="h6"
                      className="text-[14px] font-bold text-blue_gray-800"
                    >
                      Your email
                    </Heading>

                    <Input
                      name="message"
                      placeholder={`Your Email Address (optional)`}
                      className="flex h-[30px] items-center justify-center self-stretch border-b border-solid border-gray-300 px-3 text-[20px] text-blue_gray-200  "
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start gap-1.5 md:self-stretch">
                    <Heading
                      size="headingxs"
                      as="p"
                      className="text-[14px] font-bold text-blue_gray-800"
                    >
                      Message
                    </Heading>
                    <Input
                      name="message"
                      placeholder={`Add an optional message`}
                      className="flex h-[30px] items-center justify-center self-stretch border-b border-solid border-gray-300 px-3 text-[20px] text-blue_gray-200  "
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button
              onClick={() =>SendFile()}
              rightIcon={
                <Img
                  src="img_arrow_right_alt.svg"
                  width={16}
                  height={16}
                  alt="Arrow Right Alt"
                  className="my-0.5 h-[16px] w-[16px]"
                />
              }
              className="flex h-[36px] min-w-[160px] flex-row items-center justify-center gap-1.5 rounded bg-[#008080] px-[34px] text-center text-[14px] text-white-a700 sm:px-5"
            >
              Send Securely
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
