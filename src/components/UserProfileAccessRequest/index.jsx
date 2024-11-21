import { Img, Text, Heading } from "./..";
import React from "react";

export default function UserProfileAccessRequest({
  userImage = "img_rectangle.png",
  userName = "Angel Gomez",
  accessRequestText = "requested access for",
  keyVisualText = "Key Visual Opt.02",
  statusText = "Pending",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-center flex-1`}
    >
      <div className="flex w-[24%] items-center gap-2 border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-2">
        <Img
          src={userImage}
          width={36}
          height={36}
          alt="Angel Gomez"
          className="h-[36px] w-[36px] rounded-[18px] object-cover"
        />
        <Heading
          size="headingxs"
          as="p"
          className="text-[14px] font-semibold text-gray-900"
        >
          {userName}
        </Heading>
      </div>
      <Text
        as="p"
        className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-3.5 pl-1 pr-2 text-[14px] font-normal text-gray-900"
      >
        {accessRequestText}
      </Text>
      <Heading
        size="headingxs"
        as="p"
        className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-3.5 pl-1 pr-[34px] text-[14px] font-bold text-blue-700 sm:pr-5"
      >
        {keyVisualText}
      </Heading>
      <div className="flex border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 px-2 py-3.5">
        <Text
          size="textxs"
          as="p"
          className="flex items-center justify-center rounded-[12px] bg-yellow-50 px-2 py-0.5 text-[11px] font-normal text-lime-900"
        >
          {statusText}
        </Text>
      </div>
      <div className="flex border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 px-2 py-2.5">
        <Img
          src="img_button.svg"
          width={70}
          height={32}
          alt="Angel Gomez"
          className="h-[32px] w-full rounded-[3px] sm:h-auto"
        />
      </div>
    </div>
  );
}
