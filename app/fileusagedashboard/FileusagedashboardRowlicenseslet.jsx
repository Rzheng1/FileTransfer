import { Text, Img, Heading, Button } from "../../components";
import Link from "next/link";
import React from "react";

export default function FileusagedashboardRowlicenseslet() {
  return (
    <div>
      <div className="flex flex-col items-start justify-center rounded-md border border-solid border-gray-300 bg-white-a700 px-6 py-5 sm:px-5">
        <div className="flex items-center justify-between gap-5 self-stretch">
          <Heading
            as="h6"
            className="self-end text-[18px] font-semibold text-gray-900"
          >
            Licenses used
          </Heading>
          <Button className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-gray-100 px-2">
            <Img src="img_profile.svg" width={8} height={14} />
          </Button>
        </div>
        <Text
          as="p"
          className="mt-3 w-full text-[14px] font-normal leading-[22px] text-gray-500"
        >
          Licenses let your team members access to your Porta.
        </Text>
        <div className="mt-8 flex items-center self-stretch">
          <div className="flex flex-1 flex-wrap items-center gap-1.5">
            <Heading
              size="headinglg"
              as="h1"
              className="font-redhatdisplay text-[40px] font-semibold text-gray-900 md:text-[38px] sm:text-[36px]"
            >
              18
            </Heading>
            <Text
              size="textlg"
              as="p"
              className="mb-3 self-end font-redhatdisplay text-[18px] font-normal text-blue_gray-900_cc"
            >
              /25
            </Text>
          </div>
          <Link href="#" className="self-end rounded-[3px]">
            <Text
              size="texts"
              as="p"
              className="p-1.5 text-[12px] font-normal text-blue-400"
            >
              See all
            </Text>
          </Link>
        </div>
        <Img
          src="img_slider_3.svg"
          width={284}
          height={28}
          alt="Sliderthree"
          className="h-[28px] w-full md:h-auto"
        />
        <Text
          as="p"
          className="mt-6 text-[14px] font-medium text-blue_gray-900_01 underline"
        >
          Request licenses
        </Text>
      </div>
    </div>
  );
}
