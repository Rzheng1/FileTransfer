"use client";

import { Button, Img, Input, Heading, Text } from "../../components";
// import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingpageRowOne from "./LandingpageRowOne";
// import LandingpageRowcontainerone from "./LandingpageRowcontainerone";
import Link from "next/link";
import React from "react";
// import axios from "axios";
import { convertBytesToMB } from "../../utility.js";
import Loader from "@/components/Loader";

 

export default function LandingPagePage() {
  
  return (
    <div className="relative h-[972px] w-full content-end bg-white-a700 shadow-xs md:h-auto">
      {/* <LandingpageRowcontainerone /> */}
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center">
        <Header />
         <LandingpageRowOne /> 
        {/* <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          data={UploadedFiles}
          deleteFile={deleteFile}
        /> */}
         
        <Footer />
      </div>
    </div>
  );
}
