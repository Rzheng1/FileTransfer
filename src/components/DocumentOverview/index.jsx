import { Heading, Text, Img } from "./..";
import React from "react";

export default function DocumentOverview({
  documentImage = "img_container_73.svg",
  documentTitle = "Documents",
  fileCount = "223 files",
  totalFileSize = "760 GB",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center gap-3 md:px-5 flex-1`}
    >
      <Img
        src={documentImage}
        width={48}
        height={48}
        alt="Documents"
        className="h-[48px] w-[48px] rounded"
      />
      <div className="flex flex-1 items-start justify-center">
        <div className="flex flex-1 flex-col items-start gap-1 self-center">
          <Heading
            as="p"
            className="font-redhatdisplay text-[14px] font-semibold text-blue_gray-900_01"
          >
            {documentTitle}
          </Heading>
          <Text
            as="p"
            className="font-redhatdisplay text-[14px] font-normal text-gray-500"
          >
            {fileCount}
          </Text>
        </div>
        <Heading
          size="headings"
          as="h6"
          className="font-redhatdisplay text-[16px] font-semibold text-blue-700"
        >
          {totalFileSize}
        </Heading>
      </div>
    </div>
  );
}
