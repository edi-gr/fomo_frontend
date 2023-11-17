"use client";

import Image from "next/image";
import background from "../public/assets/background.png";
import underline from "../public/assets/underline.png";
import logo1 from "../public/assets/logo1.png";
import logo2 from "../public/assets/logo2.png";
import logo3 from "../public/assets/logo3.png";
import icon1 from "../public/assets/icon1.png";
import icon2 from "../public/assets/icon2.png";
import icon3 from "../public/assets/icon3.png";
import hamburger from "../public/assets/hamburger.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [isGlassEffect, setIsGlassEffect] = useState(false);
  const [isClaimBoxVisible, setIsClaimBoxVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(true);

  const toggleGlassEffect = () => {
    setIsGlassEffect(!isGlassEffect);
    if (!isGlassEffect) {
      document.body.classList.add("glass");
    } else {
      document.body.classList.remove("glass");
    }
  };
  return (
    <div className="mx-auto overflow-hidden flex flex-col flex-0  ">
      <div
        style={{
          backgroundImage: "url('/assets/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        {isClaimBoxVisible && (
          <>
            setIsHamburgerVisible(false);
            <div className="overlay"></div>
            <div className="claim-box">
              <h1 className="changa text-[#F3F3F3] font-bold text-xl">
                You can claim only once!
              </h1>
              <label className="text-white changa mt-2 mb-4">
                <input
                  type="checkbox"
                  className="mr-1.5"
                  style={{ transform: "scale(1.5)" }}
                />
                I have read and understand that I can only claim one time and
                will lose all unclaimed $fomo after I claim{" "}
              </label>
              <button className="claim-button w-full">Claim 50 $FOMO</button>
            </div>
          </>
        )}
        <div className="flex flex-row justify-end space-x-3 mt-3 mr-3">
          <button className="hidden md:inline-block hover:brightness-200 hover:bg-white rounded-md hover:bg-opacity-20">
            <Image src={icon1} alt="FOMO" width={50} height={8} />
          </button>
          <button className="hidden md:inline-block hover:brightness-200 hover:bg-white rounded-md hover:bg-opacity-20">
            <Image src={icon2} alt="FOMO" width={50} height={8} />
          </button>
          <button className="hidden md:inline-block hover:brightness-200 hover:bg-white rounded-md hover:bg-opacity-20">
            <Image src={icon3} alt="FOMO" width={50} height={8} />
          </button>
          <button
            type="button"
            className="hidden md:inline-block focus:outline-none text-white bg-[#8A078A] hover:bg-[#F200F2] focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 mb-2 mt-1"
          >
            Connect Wallet
          </button>
        </div>

        {isHamburgerVisible && (
          <button
            className="md:hidden"
            style={{ position: "relative", zIndex: 1 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Image
              src={hamburger}
              alt="FOMO"
              width={42}
              height={5}
              className="hamburger-icon"
            />
          </button>
        )}

        {isSidebarOpen && (
          <div
            style={{ position: "fixed", top: 0, bottom: 0, width: "50%" }}
            className="sidebar overflow-y-auto text-center bg-gray-900 md:hidden "
          >
            <div className="inter">
              <div className="p-2.5 mt-1 flex flex-start flex-col space-y-5 mt-10">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-[#8A078A] hover:bg-[#F200F2] focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 mb-0.25 mt-4"
                >
                  Connect Wallet
                </button>

                <button
                  type="button"
                  className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center mt- dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 space-x-2 w-[100%]"
                >
                  <Image src={logo1} alt="FOMO" width={15} height={5} />
                  <h1 className="inter">Coinmarketcap</h1>
                </button>
                <button
                  type="button"
                  className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 space-x-2 w-[100%]"
                >
                  <Image src={logo2} alt="FOMO" width={15} height={5} />
                  <h1 className="inter">Jupiter</h1>
                </button>
                <button
                  type="button"
                  className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 space-x-2 w-[100%]"
                >
                  <Image src={logo3} alt="FOMO" width={15} height={5} />
                  <h1 className="inter">Birdeye</h1>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col flex-1">
          <h1
            className="koulen flex text-8xl  justify-center mt-15  text-[#E9E9E9]"
            style={{ textShadow: "2px 2px 2px #F200F3" }}
          >
            $FOMO
          </h1>
        </div>
        <div className="flex justify-center -mt-1 -mr-22">
          <Image src={underline} alt="FOMO" width={130} height={20} />
        </div>
        <div className="changa flex text-lg justify-center mt-18 text-[#E9E9E9]">
          <h1>Time until you can claim in full</h1>
        </div>
        <div className="flex justify-center">
          <h1
            className="bungee text-4xl text-[#E9E9E9]"
            style={{ textShadow: "2px 2px 2px #F200F3" }}
          >
            00d 00h 00m 00s
          </h1>
        </div>
        <div className="flex justify-center mt-15">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-[#F200F2] via-purple-600 to-[#F200F2] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[50%]"
            onClick={() => {
              toggleGlassEffect();
              setIsClaimBoxVisible(true);
              setIsSidebarOpen(false);
              setIsHamburgerVisible(false);
            }}
          >
            <h1 className="inter font-[500]">Claim 50 $FOMO</h1>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {/* The big box */}
          <div className="text-white bg-[#353A40] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#353A40]  w-[50%]">
            {/* the first box */}
            <div className="text-white bg-[#2E3339] hover:bg-gray-800 font-medium border-black rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#2E3339]  dark:hover:bg-gray-800 dark:border-black flex justify-between overflow-hidden">
              <h1
                className="text-[#F0F0F0] changa"
                style={{ marginTop: "0.3em" }}
              >
                My total allocation
              </h1>
              <h1
                className="text-[#F0F0F0] text-lg changa"
                style={{ textShadow: "2px 2px 2px #F200F2" }}
              >
                00 $fomo
              </h1>
            </div>
            {/* Below is the 2nd black box with the progress bar */}
            <div className="text-white bg-[#2E3339] hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#2E3339] dark:hover:bg-gray-800 dark:border-black overflow-hidden">
              <div className="flex justify-between">
                <h1
                  className="text-[#F0F0F0] changa"
                  style={{ marginTop: "0.3em" }}
                >
                  Claimable now**
                </h1>

                <h1 className="text-[#F0F0F0] text-lg changa">00 $fomo</h1>
              </div>
              {/* <div >
                <hr className="w-[80%] mx-auto bg-[#25282D] border-0 rounded" />
              </div> */}
              <div className="w-full bg-[#25282D] rounded-full h-2.5">
                <div
                  className="bg-[#F200F2] h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
