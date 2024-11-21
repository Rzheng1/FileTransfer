"use client"

import { Button, Img, Text } from "./..";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header({ ...props }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {

    // Check if the token exists in localStorage
    const token = localStorage.getItem('token');

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col self-stretch justify-between items-center gap-5 px-[30px] py-[22px] sm:p-5 bg-white-a700`}
    >
      {/* <h1 className="font-bolder text-[24px] bg-[#008080] ">
        FileTransfer logo
      </h1> */}
      <Img
        src="logo1.png"
        width={240}
        height={52}
        alt="Headerlogo"
        className="h-[60px] w-[190px] object-contain"
      />
      {/* <ul className="flex flex-wrap gap-7">
        <li>
          <Link href="#">
            <Text as="p" className="text-[14px] font-normal text-black-900">
              Contact
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Text as="p" className="text-[14px] font-normal text-black-900">
              Plans
            </Text>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Text as="p" className="text-[14px] font-normal text-black-900">
              Community
            </Text>
          </Link>
        </li>
      </ul> */}
      <Link
        href={isAuthenticated ? "/Dashboard" : "/GetStarted"}
        rightIcon={
          <Img
            src="img_arrow_right_alt.svg"
            width={16}
            height={16}
            alt="Arrow Right Alt"
            className="my-0.5 h-[16px] w-[16px]"
          />
        }
        className="mr-6 flex h-[36px]   flex-row items-center justify-center gap-1.5 rounded bg-[#008080] pl-[18px] pr-[34px] text-center text-[14px] text-white-a700 sm:mr-0 sm:pr-5"
      >
        {isAuthenticated ? "Dashboard" : "Get Started"}
      </Link>
    </header>
  );
}
