import Image from "next/image";
import {
  FaBell,
  FaDiscord,
  FaFacebook,
  FaFonticonsFi,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
  FaShoppingCart,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../../../assets/Logo.png";
import { NavLinks } from "../../particles/NavLinks";
import { List } from "../../atoms/List";
import { Text } from "../../atoms/Text";
import { FaMessage, FaPhone, FaX } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { GiMailbox } from "react-icons/gi";
import { GoMail } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
const NavBar = () => {
  return (
    <header className="w-full bg-[#F5F5F5] overflow-hidden fixed  top-0 left-0  shadow-md">
      <nav
        className={`px-8 xl:px-0 max-w-6xl mx-auto flex justify-between items-center `}>
        <Image
          className="w-[100px] h-[100px] py-2 cursor-pointer"
          src={Logo}
          alt="Logo"
        />
        <div>
          <div className=" w-[50%] flex text-white h-7 bg-[#0073E6]  mr-0 mb-2   space-x-8 rounded-bl p-2  mt-0  justify-between items-center absolute top-0 right-0">
            <div className="flex flex-row  justify-between ">
              <a className="mr-2 cursor-pointer">
                <FaFacebook size={20} />
              </a>
              <a className="mr-2 cursor-pointer ">
                <FaLinkedin size={20} />
              </a>
              <a className="mr-2 cursor-pointer">
                <FaGithub size={20} />
              </a>
              <a className="mr-2 cursor-pointer">
                <FaDiscord size={20} />
              </a>
              <a className="mr-2 cursor-pointer">
                <FaYoutube size={20} />
              </a>
            </div>
            <div className="flex flex-row items-center  font-medium ">
              <GoMail size={20} />
              <Text className="m-2 cursor-pointer">biny452@gmail.com</Text>
            </div>
            <div className="flex flex-row items-center font-medium ">
              <BiPhoneCall size={20} />
              <Text className="m-2 cursor-pointer">+251916156921</Text>
            </div>
          </div>
          <div className="lg:flex hidden items-center lg:flex-row lg:gap-2 mt-6 ">
            <ul className={`flex items-center justify-center gap-4 xl:gap-6`}>
              {NavLinks.map((navlink, index) => {
                return (
                  <List className="text-lg mt-2" key={index}>
                    <a
                      href={`#${navlink.name}`}
                      className="text-[#1C274C] hover:bg-[#1C274C] hover:text-[#e2e8f0] transition duration-1000 bg-[#e2e8f0]
                  rounded-lg
                 px-5 py-1.5 font-semibold">
                      {navlink.name}
                    </a>
                  </List>
                );
              })}
            </ul>
            <input
              type="text"
              name="Search_Courses"
              placeholder="Search Courses"
              className="p-1 w-48 mt-2 text-[#1C274C] ml-8 border rounded-lg text-base outline-none bg-[#e2e8f0] placholder-white font-semibold "
            />
            <div className="flex flex-row gap-2 items-center cursor-pointer mt-2 ">
              <FaShoppingCart color="#1C274C" size={22} />
              {/* <FaBell color="#1C274C" size={22} /> */}
              <FaUser color="#1C274C" size={22} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
