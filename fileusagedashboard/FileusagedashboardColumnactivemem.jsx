import { Text, Img, Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const data = [
  {
    userImage: "img_rectangle.png",
    userStatusText: (
      <>
        Angel Gomez
        <br />
        Active
      </>
    ),
    detailsButtonText: "Details",
  },
  {
    userImage: "img_rectangle_2.png",
    userStatusText: (
      <>
        Angel Gomez
        <br />
        Active
      </>
    ),
    detailsButtonText: "Details",
  },
  {
    userImage: "img_rectangle_36x36.png",
    userStatusText: (
      <>
        Angel Gomez
        <br />
        Active
      </>
    ),
    detailsButtonText: "Details",
  },
  {
    userImage: "img_rectangle_1.png",
    userStatusText: (
      <>
        Angel Gomez
        <br />
        Active
      </>
    ),
    detailsButtonText: "Details",
  },
  {
    userImage: "img_rectangle_3.png",
    userStatusText: (
      <>
        Angel Gomez
        <br />
        Active
      </>
    ),
    detailsButtonText: "Details",
  },
  {
    userImage: "img_rectangle_4.png",
    userStatusText: (
      <>
        Angel Gomez
        <br />
        Active
      </>
    ),
    detailsButtonText: "Details",
  },
];

export default function FileusagedashboardColumnactivemem() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-[30px] rounded-md border border-solid border-gray-300 bg-white-a700 p-[22px] sm:p-5">
        <div className="flex items-center justify-between gap-5">
          <Heading as="h6" className="text-[18px] font-semibold text-gray-900">
            Active members
          </Heading>
          <Img
            src="img_icon_button_142.svg"
            width={32}
            height={32}
            alt="Iconbutton144"
            className="h-[32px] w-[32px] rounded-[50%]"
          />
        </div>
        <div className="flex flex-col rounded">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile {...d} key={"table16" + index} />
            ))}
          </Suspense>
        </div>
      </div>
      <div className="flex flex-col items-start rounded-md border border-solid border-gray-300 bg-white-a700 px-6 py-[22px] sm:p-5">
        <div className="flex items-center justify-between gap-5 self-stretch">
          <Heading as="h6" className="text-[18px] font-semibold text-gray-900">
            External sharing
          </Heading>
          <Img
            src="img_icon_button_142.svg"
            width={32}
            height={32}
            alt="Iconbutton146"
            className="h-[32px] w-[32px] rounded-[50%]"
          />
        </div>
        <Text
          as="p"
          className="mt-2.5 w-full text-[14px] font-normal leading-[22px] text-gray-500"
        >
          Create a report of sharing activities, who shared them and more.
        </Text>
        <div className="mt-6 self-stretch">
          <div className="flex">
            <div className="flex">
              <Img
                src="img_frame.svg"
                width={48}
                height={48}
                alt="Circleimage"
                className="h-[48px] w-[48px] rounded-[50%]"
              />
              <Img
                src="img_frame_red_50.svg"
                width={48}
                height={48}
                alt="Circleimage"
                className="relative ml-[-6px] h-[48px] w-[48px] rounded-[50%]"
              />
            </div>
            <Img
              src="img_frame_gray_100_01.svg"
              width={48}
              height={48}
              alt="Circleimage"
              className="relative ml-[-6px] h-[48px] w-[48px] rounded-[50%]"
            />
          </div>
        </div>
        <Text
          as="p"
          className="mb-[68px] mt-8 text-[14px] font-medium text-blue_gray-900_01 underline"
        >
          Export Report
        </Text>
      </div>
    </div>
  );
}
