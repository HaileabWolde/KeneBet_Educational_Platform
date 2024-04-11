import React from "react";
import { Image } from "./components/atoms/Image";
import { Text } from "./components/atoms/Text";
function Navbar() {
  return (
    <>
      <nav className="bg-gray-100 h-30">
        <div className=" flex   text-white h-8 bg-[#0073E6]  mr-0 mb-2  space-x-8 rounded-r p-2  w-[65%]  justify-between">
          <div className="flex flex-row  items-center ">
            <div className="flex flex-row justify-between">
              <Image className="mx-4" src="" alt="Facebook" />
              <Image className="mx-4" src="" alt="GithHub" />
              <Image className="mx-4" src="" alt="X" />
              <Image className="mx-4" src="" alt="Linkedin" />
              <Image className="mx-4" src="" alt="Youtube" />
            </div>
            <Text>biny452@gmail.com</Text>
            <Text className="m-4">+251916156921</Text>
          </div>
        </div>
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className=" flex items-center justify-between h-16">
            <div className=" flex items-center">
              <div className="flex-shrink-0">
                <a href="" className="text-black">
                  <Image src="./logo.png" alt="Logo" />
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-12">
                <a
                  href=""
                  className="text-[#1C274C] hover:bg-[#1C274C] hover:text-[#e2e8f0] transition duration-1000 bg-[#e2e8f0]
                  rounded-lg
                 px-5 py-1.5 font-bold">
                  Home
                </a>
                <a
                  href=""
                  className="text-[#1C274C] hover:bg-[#1C274C] hover:text-[#e2e8f0] transition duration-1000 bg-[#e2e8f0]
                  rounded-lg
                 px-5 py-1.5 font-bold">
                  Courses
                </a>
                <a
                  href=""
                  className="text-[#1C274C] hover:bg-[#1C274C] hover:text-[#e2e8f0] transition duration-1000 bg-[#e2e8f0]
                  rounded-lg
                 px-5 py-1.5 font-bold">
                  Instructors
                </a>
                <a
                  href=""
                  className="text-[#1C274C] hover:bg-[#1C274C] hover:text-[#e2e8f0] transition duration-1000 bg-[#e2e8f0]
                  rounded-lg
                 px-5 py-1.5 font-bold">
                  About Us
                </a>
                <a
                  href=""
                  className="text-[#1C274C] hover:bg-[#1C274C] hover:text-[#e2e8f0] transition duration-1000 bg-[#e2e8f0]
                  rounded-lg
                 px-5 py-1.5 font-bold">
                  Contact
                </a>

                <input
                  type="text"
                  placeholder="Search courses"
                  className="font-semibold py-1.5 pl-2 w-26 bg-[#e2e8f0] text-[#1C274C] transition duration-1000 rounded-lg outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
