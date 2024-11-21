import Link from "next/link";
import { Img, Text, Button, Heading } from "../../components";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function LandingpageRowOne() {
  const router = useRouter();
  const [CurrentPage, setCurrentPage] = useState("SignUp");
  const [SignUpInfo, setSignUpInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [LoginInfo, setLoginInfo] = useState({

    email: '',
    password: ''
  });
  const [OTPInfo, setOTPInfo] = useState('')

  const HandleSubmit = () => {

    if (CurrentPage === "SignUp") {
      let data = JSON.stringify(SignUpInfo);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://localhost:44367/api/Users/SignUp',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setCurrentPage("Confirmation")
          alert("SignUp Successful");
        })
        .catch((error) => {
          console.log(error);
          alert("SignUp Failed");
        });
    }
    else if (CurrentPage === "Confirmation") {

      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `https://localhost:44367/api/Users/ConfirmVerificationCode?Email=${SignUpInfo.email}&VerificationCode=${OTPInfo}`,
        headers: {}
      };

      axios.request(config)
        .then((response) => {

          console.log(response, "data");
          localStorage.setItem('token', response.data.payload.token);
          localStorage.setItem('expiration', response.data.payload.expiration);
          localStorage.setItem('firstName', response.data.payload.firstName);
          localStorage.setItem('lastName', response.data.payload.lastName);
          router.push('/');
        })
        .catch((error) => {
          console.log(error);
          router.push('/');
        });

    } else if (CurrentPage === "Login") {

      let data = JSON.stringify(LoginInfo);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://localhost:44367/api/Users/Login',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {

          console.log(response, "response");
          localStorage.setItem('token', response.data.payload.token);
          localStorage.setItem('expiration', response.data.payload.expiration);
          localStorage.setItem('firstName', response.data.payload.firstName);
          localStorage.setItem('lastName', response.data.payload.lastName);
          router.push('/');
        })
        .catch((error) => {
          console.log(error);
        });

    }
  }

  return (
    <div className="self-stretch">
      <div className="flex justify-center bg-white-a700 py-14 md:py-5">
        <div className="container-xs mb-2 flex items-center justify-center md:flex-col md:px-5">
          <div className="flex w-[34%] flex-col self-end md:w-full md:self-auto">
            <Heading
              size="headinglg"
              as="h1"
              className="w-[82%] font-redhatdisplay text-[40px] font-bold leading-[56px] text-gray-900 md:w-full md:text-[38px] sm:text-[36px]"
            >
              {
                CurrentPage === "SignUp" ? "Sign Up" : CurrentPage === "Confirmation" ? "Enter OTP Code" : "Login"
              }
            </Heading>
            <Heading
              as="h2"
              className="mt-8 w-[82%] text-[16px] font-normal leading-[30px] text-blue_gray-900_01 md:w-full"
            >
              {
                CurrentPage === "SignUp" ? <>
                  <input type="text" placeholder="Enter your First Name" className="my-2" onChange={(e) => setSignUpInfo({ ...SignUpInfo, firstName: e.target.value })} value={SignUpInfo.firstName} />
                  <input type="text" placeholder="Enter your Last Name" className="my-2" onChange={(e) => setSignUpInfo({ ...SignUpInfo, lastName: e.target.value })} value={SignUpInfo.lastName} />
                  <input type="email" placeholder="Enter your email" className="my-2" onChange={(e) => setSignUpInfo({ ...SignUpInfo, email: e.target.value })} value={SignUpInfo.email} />
                  <input type="password" placeholder="Enter your Password" className="my-2" onChange={(e) => setSignUpInfo({ ...SignUpInfo, password: e.target.value })} value={SignUpInfo.password} />
                </> : CurrentPage === "Confirmation" ? <>
                  <input type="text" placeholder="Enter OTP Code" className="my-2" onChange={(e) => setOTPInfo(e.target.value)} value={OTPInfo} />
                </> : <>
                  <input type="email" placeholder="Enter your email" className="my-2" onChange={(e) => setLoginInfo({ ...LoginInfo, email: e.target.value })} value={LoginInfo.email} />
                  <input type="password" placeholder="Enter your Password" className="my-2" onChange={(e) => setLoginInfo({ ...LoginInfo, password: e.target.value })} value={LoginInfo.password} />
                </>
              }
            </Heading>

            <a href="">Already have an account? <button className="text-[#008080] font-bolder" onClick={() => setCurrentPage("Login")}> Login</button></a>
            <div className="mt-16 flex gap-[13px]">
              {/* <Button
                rightIcon={
                  <Img
                    src="img_file_download.svg"
                    width={16}
                    height={16}
                    alt="File Download"
                    className="my-0.5 h-[16px] w-[16px]"
                  />
                }
                className="flex h-[36px] min-w-[224px] flex-row items-center justify-center gap-1.5 rounded bg-gray-100_01 px-3 text-center text-[14px] text-blue-a700 shadow-xl"
              >
            Download Porta for desktop  
              </Button> */}
              <button
                // href="/Dashboard"
                className="flex h-[36px] min-w-[106px] flex-row items-center justify-center rounded bg-[#008080] px-3 text-center text-[14px] text-white-a700 shadow-xl"
                onClick={HandleSubmit}
              >
                {
                  CurrentPage === "SignUp" ? "SignUp" : CurrentPage === "Confirmation" ? "Confirm OTP" : "Login"
                }
              </button>
            </div>
          </div>
          <div className="relative h-[478px] flex-1 md:w-full md:flex-none md:self-stretch">
            <div className="absolute bottom-0 left-0 right-0 mx-10 my-auto flex flex-1 flex-col items-end md:mx-0">
              <div className="relative h-[392px] self-stretch">
                <div className="absolute bottom-0 right-[12.50px] top-0 my-auto ml-[74px] mr-3 h-max flex-1 rounded-md bg-white-a700 shadow-2xl md:mx-0">
                  <Img
                    src="home.jpg"
                    width={592}
                    height={392}
                    alt="Imagesixteen"
                    className="h-[392px] w-full rounded-md object-cover md:h-auto"
                  />
                </div>
                {/* <div className="absolute bottom-[33%] right-[0.50px] m-auto flex w-[22%] justify-center rounded-[12px] bg-gray-100_01 shadow-3xl">
                  <Text as="p" className="text-[14px] font-normal text-blue-a700">
                    Add a comment
                  </Text>
                </div> */}
                <Img
                  src="img_cursor_add_3.svg"
                  width={24}
                  height={24}
                  alt="Cursoraddthree"
                  className="absolute bottom-[37%] right-[20%] m-auto h-[24px] w-[24px]"
                />
              </div>
              {/* <Text
                as="p"
                className="text-shadow-ts relative z-[1] mr-[136px] mt-[-24px] rounded-[26px] bg-blue_gray-900_01 px-[34px] py-3.5 font-notosans text-[14px] font-normal italic text-blue_gray-100 md:mr-0 sm:px-5"
              >
               Freedom to Share, Built Securely
              </Text> */}
            </div>
            <div className="absolute left-[9%] top-0 m-auto w-[10%] rounded bg-[#008080] px-2 py-3 shadow-md">
              <Img
                src="img_collapsed_sidebar.svg"
                width={56}
                height={216}
                alt="Collapsed"
                className="h-[216px] w-full md:h-auto"
              />
              <div className="mx-1.5 mt-6 h-px w-[42px] bg-blue_gray-200 md:mx-0" />
              <Img
                src="img_close.svg"
                width={40}
                height={80}
                alt="Close"
                className="mx-1.5 mt-2 h-[80px] w-full md:mx-0 md:h-auto pr-[12px]"
              />
            </div>
            <div className="absolute right-[-0.50px] top-0 m-auto flex w-[36%] justify-center rounded bg-white-a700 p-2.5 shadow-lg">
              <div className="flex w-full flex-col items-start">
                <Text
                  as="p"
                  className="text-[14px] font-medium text-blue_gray-900_01"
                >
                  Free storage
                </Text>
                <div className="flex flex-wrap justify-between gap-5 self-stretch">
                  <Text
                    as="p"
                    className="text-[14px] font-normal text-gray-500"
                  >
                    546 GB of 1000 GB used
                  </Text>
                  <Text
                    as="p"
                    className="text-[14px] font-normal text-gray-500"
                  >
                    52%
                  </Text>
                </div>
                <Img
                  src="img_slider_1.svg"
                  width={254}
                  height={22}
                  alt="Sliderone"
                  className="h-[22px] w-full md:h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
