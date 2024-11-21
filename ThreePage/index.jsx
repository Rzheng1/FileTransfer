"use client";
import React from 'react';
import { Text, Button, Img, Input, Heading } from '../../components';

export default function ThreePage() {
  return (
    <div className="flex w-full items-center bg-black-900 md:flex-col">
      
     <div className="flex flex-1 flex-col items-start md:self-stretch md:px-5">
        <Img
          src="login.png"
          width={766}
          height={1024}
          alt="Image Frame"
          className="rounded-br-[40px] rounded-tr-[40px] w-[92%] h-[1024px] object-contain"
        />
      </div>
      <div className="sm:gap-[35px] md:gap-[52px] gap-[70px] w-[42%] flex flex-col md:w-full md:px-5">
        <div className="gap-[17px] flex items-center">
          <Img src="img_lock.svg" width={36} height={48} alt="Lock Image" className="h-[48px]" />
          <Heading size="headingxs" as="h1" className="text-[20px] font-semibold text-white-a700">
            Logo
          </Heading>
        </div>
        <div className="gap-[50px] flex flex-col">
          <div className="flex flex-col items-start gap-4">
            <Heading
              size="headingxs"
              as="h2"
              className="sm:text-[28px] md:text-[30px] leading-[41px] text-[32px] font-semibold text-white-a700"
            >
              Welcome to ExploreMe 👋
            </Heading>
            <Text size="textxs" as="p" className="text-[16px] tracking-[0.08px] font-normal text-blue_gray-400">
              Kindly fill in your details below to create an account
            </Text>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-start gap-2">
                <Text size="texts" as="p" className="text-[16px] font-medium text-gray-500">
                  Full Name
                </Text>
                <Input
                  shape="round"
                  type="text"
                  name="Full Name Input"
                  placeholder="Enter your full name"
                  className="w-[82%] rounded-md !border px-5 font-semibold"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Text size="texts" as="p" className="text-[16px] font-medium text-gray-500">
                  Email Address*
                </Text>
                <Input
                  shape="round"
                  type="email"
                  name="Email Input"
                  placeholder="Enter your email address"
                  className="w-[82%] rounded-md !border px-5 font-semibold"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text size="texts" as="p" className="text-[16px] font-medium text-gray-500">
                  Select your skills
                </Text>
                <Input
                  shape="round"
                  type="password"
                  name="Skills Input"
                  placeholder="Search skills here..."
                  className="w-[82%] rounded-md !border px-5 font-medium"
                />
              </div>
            </div>
            {/* <CheckBox
              name="Terms Checkbox"
              label="I agree to terms & conditions"
              id="TermsCheckbox2"
              className="text-[16px] gap-3.5 font-medium text-blue_gray-100"
            /> */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-start gap-5">
                <Button shape="round" className="min-w-[504px] px-[34px] rounded-md">
                  Register Account
                </Button>
                <div className="gap-[15px] flex items-end self-stretch sm:flex-col">
                  <div className="w-[40%] mb-2 h-px bg-gray-600 sm:mb-0" />
                  <Text size="textxs" as="p" className="text-[12px] self-center font-normal text-blue_gray-100">
                    or
                  </Text>
                  <div className="w-[40%] mb-2 h-px bg-gray-600 sm:mb-0" />
                </div>
              </div>
              <Button
                color="gray_900"
                shape="round"
                leftIcon={
                  <Img
                    src="img_flatcoloriconsGoogle.svg"
                    width={24}
                    height={24}
                    alt="Flat-color-icons:google"
                    className="w-[24px] h-[24px]"
                  />
                }
                className="min-w-[504px] px-[34px] gap-[34px] rounded-md sm:px-5"
              >
                Register with Google
              </Button>
            </div>
          </div>
        </div>
        <div className="flex">
          <Text size="texts" as="p" className="text-[16px] font-normal text-gray-700 underline">
            <span className="text-gray-500">Already have an account?</span>
            <span className="text-gray-500">&nbsp;</span>
            <span className="text-white-a700">Log in</span>
          </Text>
        </div>
      </div> 
    </div>
  );
}