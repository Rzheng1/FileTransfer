import { Button, Text } from "./..";
import React from "react";

export default function UserActionPanel({
  actionButtonLabel = "+82",
  notificationText = "new files uploaded",
  detailsButtonLabel = "Details",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center flex-1`}
    >
      <div className="w-[16%] border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-3">
        <Button className="flex h-[36px] flex-row items-center justify-center self-stretch rounded-[18px] bg-gray-100_03 px-3 text-center text-[14px] text-blue-a700">
          {actionButtonLabel}
        </Button>
      </div>
      <Text
        as="p"
        className="border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 py-[18px] pl-3 pr-8 text-[14px] font-normal text-blue_gray-900_01 sm:pr-5"
      >
        {notificationText}
      </Text>
      <Button className="flex h-[60px] min-w-[70px] flex-row items-center justify-center border-b-[0.5px] border-t-[0.5px] border-solid border-gray-300 bg-white-a700 px-3.5 text-center text-[12px] text-blue-400">
        {detailsButtonLabel}
      </Button>
    </div>
  );
}
