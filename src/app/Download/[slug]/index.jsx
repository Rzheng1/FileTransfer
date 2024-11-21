"use client"; 
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DownloadHeroPage from "./DownloadHeroPage"; 
import React from "react"; 
export default function DownloadPage({ slug }) { 

  return (
    <div className="relative h-[1000px] w-full content-end bg-white-a700 shadow-xs md:h-auto">
      {/* <LandingpageRowcontainerone /> */}
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center">
        <Header />
        <DownloadHeroPage slug={slug} />
        {/* <Modal isOpen={isModalOpen} onClose={closeModal}   /> */}
        <Footer />
      </div>
    </div>
  );
}
