import { Img } from "../../../components";
import React from "react";

export default function DownloadContainer() {
  return (
    <div className="mx-auto mb-[172px] flex-1">
      <Img
        src="img_container_1.png"
        width={1438}
        height={308}
        alt="Containerone"
        className="h-[308px] w-full object-cover md:h-auto"
      />
    </div>
  );
}
