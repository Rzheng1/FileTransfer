import { Button, Text, Img } from "./..";
import React from "react";

export default function UserProfile({
  userImage = "img_rectangle.png",
  userStatusText,
  detailsButtonText = "Details",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center flex-1`}
    >
      <div className="flex flex-col border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-2.5">
        <Img
          src={userImage}
          width={36}
          height={36}
          alt="Angel"
          className="h-[36px] rounded-[18px] object-cover"
        />
      </div>
      <div className="flex-1 border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 p-1">
        <Text
          as="p"
          className="self-end text-[14px] font-normal leading-[22px] text-blue_gray-900_01"
        >
          <span className="font-semibold text-blue_gray-900_01">
            <>
              Angel Gomez
              <br />
            </>
          </span>
          <span className="text-[12px] text-green-a700">Active</span>
        </Text>
      </div>
      <Button className="flex h-[56px] min-w-[70px] flex-row items-center justify-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 px-3.5 text-center text-[12px] text-blue-400">
        {detailsButtonText}
      </Button>
    </div>
  );
}
