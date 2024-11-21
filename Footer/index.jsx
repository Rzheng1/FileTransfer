import { Heading, Button, Img } from "./..";
import Link from "next/link";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex self-stretch justify-center items-center mt-24 py-8 sm:py-5 bg-gray-50 rounded`}
    >
      <div className="container-xs flex justify-center md:px-5">
        <div className="flex w-full flex-col gap-6">
          <div className="flex items-center justify-between gap-5">
            <Img
              src="logo1.png"
              width={240}
              height={52}
              alt="Headerlogo"
              className="h-[60px] w-[190px] object-contain"
            />

            <ul className="flex w-[20%] flex-wrap justify-between gap-5 self-end">
              <li>
                <Link href="#" className="self-end">
                  <Heading
                    as="p"
                    className="text-[16px] font-medium text-gray-700"
                  >
                    About us
                  </Heading>
                </Link>
              </li>
              <li>
                <Link href="Privacy" target="_blank" rel="noreferrer">
                  <Heading
                    as="p"
                    className="text-[16px] font-medium text-gray-700"
                  >
                    Privacy
                  </Heading>
                </Link>
              </li>
              <li>
                <Link href="Terms" target="_blank" rel="noreferrer">
                  <Heading
                    as="p"
                    className="text-[16px] font-medium text-gray-700"
                  >
                    Terms
                  </Heading>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[26px]">
            <div className="h-px bg-gray-300" />
            <div className="flex items-center justify-between gap-5 sm:flex-col">
              <div className="flex gap-3">
                <Button className="flex h-[36px] w-[36px] items-center justify-center rounded-lg border border-solid border-gray-500 px-2">
                  <Img src="img_youtube.svg" width={20} height={20} />
                </Button>
                <Button className="flex h-[36px] w-[36px] items-center justify-center rounded-lg border border-solid border-gray-500 px-2">
                  <Img src="img_facebook.svg" width={20} height={20} />
                </Button>
                <Button className="flex h-[36px] w-[36px] items-center justify-center rounded-lg border border-solid border-gray-500 px-2">
                  <Img src="img_linkedin.svg" width={20} height={20} />
                </Button>
              </div>
              <Heading
                as="p"
                className="self-end text-[16px] font-medium text-gray-700 sm:self-auto"
              >
                Developed with Love
                {/* | OpenSource */}
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
