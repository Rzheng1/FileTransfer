import { Text, Heading } from "../../components";
import React from "react";

export default function HomefilelistingColumnstorage() {
  return (
    <div className="mt-[30px] flex flex-col items-center gap-[26px]">
      <Heading
        size="headings"
        as="h5"
        className="ml-6 self-start text-[16px] font-bold text-gray-900 md:ml-0"
      >
        Storage
      </Heading>
      <div className="mx-10 h-[120px] self-stretch bg-[url(/images/img_group_1.svg)] bg-cover bg-no-repeat px-14 md:mx-0 md:h-auto md:px-5">
        <div className="mt-[62px] flex flex-col items-center">
          <Heading
            size="headingmd"
            as="h6"
            className="font-redhatdisplay text-[24px] font-bold text-blue_gray-900_01 md:text-[22px]"
          >
            2160 GB
          </Heading>
          <Text as="p" className="text-[14px] font-medium text-gray-500">
            used of 3000 GB
          </Text>
        </div>
      </div>
      {/* <Text as="p" className="text-[14px] font-normal text-blue-700 underline">
        Upgrade storage for more space
      </Text> */}
      <div className="h-px w-full self-stretch bg-gray-100" />
    </div>
  );
}
