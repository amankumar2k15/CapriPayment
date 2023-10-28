import React, { useState } from 'react';
import logoImg from "../assets/logo.png"
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"

const Navbar = () => {
    const [hide, setHide] = useState(true)
    const menuItems = [
        { to: "/", text: "Home" },
        { to: "/blog", text: "Blog" },
        { to: "/services", text: "Merchant Services " },
        { to: "/appointments", text: "Appointments " },
    ]

    return (
        <section className='w-full border-gray-100 border-b-2 '>
            <nav className='h-20 px-4 lg:px-32 mx-auto flex flex-row justify-between items-center'>
                <div className='w-20'>
                    <Link to="/">
                        <img src={logoImg} className='cursor-pointer' alt='logoImg' />
                    </Link>
                </div>
                <div className={`absolute top-20 ${hide ? "-left-[64rem] " : "left-0"} z-50 cursor-pointer transition-all duration-1000 w-full ease-in-out  bg-[#f5f5f7] text-[#1f1e1e] lg:text-[#1f1e1e] lg:bg-white flex gap-5 lg:gap-8 p-0 lg:relative shadow-bottom lg:shadow-white  lg:top-0 lg:left-0 lg:w-[500px] lg:p-4 flex-col items-center lg:flex-row`}>
                    {menuItems && menuItems.map((items, index) => {
                        return (
                            <ul key={index} className='py-2 px-2 w-full hover:bg-black whitespace-nowrap hover:text-white lg:hover:bg-white lg:hover:text-[#1f1e1e] text-center'>
                                <Link className='  lg:hover:text-yellow-400 text-md cursor-pointer block w-full border-[#1f1e1e] font-medium shadow-none lg:hover:shadow-bottom transition-all duration-200 ease-in-out'
                                    onClick={() => setHide(!hide)}
                                    to={items.to}
                                >
                                    {items.text}
                                </Link>
                            </ul>
                        )
                    })}
                </div>

                <div className={`block lg:hidden cursor-pointer`}
                    onClick={() => setHide(!hide)}
                >
                    {hide ?
                        <GiHamburgerMenu size={20} />
                        :
                        <RxCross2 size={20} />
                    }
                </div>

                <Link to="/contact" className='bg-yellow-400 hover:bg-yellow-500 rounded-lg hidden lg:block text-black px-6 py-2'>
                    Contact Us
                </Link>
            </nav>

        </section>
    );
}

export default Navbar;
