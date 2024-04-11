import Image from "next/image";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Logo from "../../../assets/Logo.png"
import {NavLinks} from "../../particles/NavLinks"
import { List } from "../../atoms/List";
const NavBar = () => {
   
    return (
        <header className="w-full bg-[#F5F5F5] overflow-hidden fixed z-50 top-0 left-0 shadow-md">
                
                    <nav className={`px-8 xl:px-0 max-w-6xl mx-auto flex justify-between items-center border border-white border-opacity-100`}>
                    <Image  
                     className="w-[100px] h-[100px] py-2" src={Logo} alt="Logo" />
                    <div className="lg:flex hidden items-center lg:flex-row lg:gap-2 ">
                        <ul className={`flex items-center justify-center gap-4 xl:gap-6`}>
                            {
                                NavLinks.map((navlink, index) => {
                                       
                                    
                                    return (
                                        <List className="text-lg" key={index}>
                                        <a href={`#${navlink.name}`}   className="text-[#1C274C] font-semibold relative inline-block  font-serif overflow-hidden  pt-2 pl-2 text-xl">{navlink.name}</a>
                                    </List>
                                    )})}
                        </ul>
                        <input
              type="text"
              name="Search_Courses"
              placeholder="Search Courses"
              className="p-1 border rounded-lg text-base outline-none bg-[#D9D9D9] placholder-white "
            />
            <div className="flex flex-row gap-2 items-center cursor-pointer">
                <FaShoppingCart color="#1C274C"  size={22}/>
                <FaUser color="#1C274C" size={22}/>
            </div>
                        
                    </div>
                    
              </nav>          
        </header >
    )
}

export default NavBar;