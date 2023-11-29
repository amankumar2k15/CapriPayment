import React from 'react'
import { AiFillChrome, AiFillAlert, AiFillAlipayCircle, AiFillAliwangwang } from "react-icons/ai"

const WhyChooseus = () => {

    const menuItems = [
        { icon: () => <AiFillChrome size={60} />, heading: "Online Banking", para: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world." },
        { icon: () => <AiFillAlert size={60} />, heading: "Simple Budgeting", para: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world." },
        { icon: () => <AiFillAlipayCircle size={60} />, heading: "Fast Onboarding", para: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world." },
        { icon: () => <AiFillAliwangwang size={60} />, heading: "Open API", para: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world." }
    ]

    return (
        <div className=''>
            <div className="container mx-auto mt-5 pt-5 md:flex md:flex-wrap  md:px-0">

                <div className="sm:flex sm:items-start max-w-6xl md:mx-auto md:px-8 items-center text-center md:text-start md:items-start sm:flex-wrap">
                    <h2 className="text-[23px] w-full py-4 sm:text-4xl md:text-3xl lg:text-[41px] font-semibold mb-2 bg-gradient-to-l from-yellow-800 to-yellow-400 bg-clip-text text-transparent">
                        Why choose Capri Payments?
                    </h2>
                    <p className="text-md sm:text-lg  text-justify md:text-xl font-medium sm:text-center md:text-start text-gray-600 leading-relaxed">
                        For business transactions online, you need a payment processing solution that can simplify the online transaction process. It is a very simple and fast process and you need not have to undergo a number of procedures in order to complete a transaction. To make your business platform fully functional, the internet has various payment gateways so that you can do business in a fast and efficient mode. The banking partner can use your funds to pay for transactions or get paid your customers if any refund received. You will be receiving funds according to the payout schedule.
                    </p>


                    <div className='flex flex-row gap-4 w-full flex-wrap justify-evenly mt-10 cursor-default '>
                        {menuItems && menuItems.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className='bg-gradient-to-r from-black hover:bg-black transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 shadow-lg  rounded-lg text-white mt-5 w-[250px] flex flex-col items-center p-6 space-y-4'
                                >
                                    <div className="mb-4">
                                        {item.icon()}
                                    </div>
                                    <h4 className='text-2xl font-semibold '>{item.heading}</h4>
                                    <p className="text-center text-gray-300">{item.para}</p>
                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>

        </div>
    )
}

export default WhyChooseus

