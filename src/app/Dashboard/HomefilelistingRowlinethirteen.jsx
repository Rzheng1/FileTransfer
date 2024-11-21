import { Img } from "../../components";
import React from "react";

export default function HomefilelistingRowlinethirteen() {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="mx-6 flex justify-center md:mx-0">
          <div className="flex flex-1">
            <Img
              src="img_refresh.svg"
              width={36}
              height={36}
              alt="Refresh"
              className="h-[36px] w-[36px] rounded"
            />
            <Img
              src="img_icon_button_10.svg"
              width={36}
              height={36}
              alt="Iconbuttonten"
              className="h-[36px] w-[36px] rounded"
            />
          </div>
          <Img
            src="img_icon_button_11.svg"
            width={36}
            height={36}
            alt="Iconbuttoneleve"
            className="h-[36px] w-[36px] rounded"
          />
        </div>
        <div className="h-px bg-gray-300" />
      </div>
    </div>
  );
}
