import React from 'react'
import { TbScissors } from "react-icons/tb"
import { RxPerson } from "react-icons/rx"
import { BsFillLightningChargeFill } from "react-icons/bs"


const SmallBlog = () => {
    const blogItem = [
        { icons: () => <BsFillLightningChargeFill size={60} className='animate-pulse' />, reverse: true, heading: "Shooting Stars", para: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine." },
        { icons: () => <TbScissors size={60} className='animate-bounce' />, reverse: false, heading: "The Catalyzer", para: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine." },
        { icons: () => <RxPerson size={60} className='animate-spin' />, reverse: true, heading: "The Catalyzer", para: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine." },
    ]

    return (
        <section className="text-gray-700 body-font">
            <div className=" py-24 mx-auto container ">
                <h2 className="text-[23px] w-full text-center mb-6 py-10 sm:text-4xl md:text-3xl lg:text-[41px] font-semibold  bg-gradient-to-l from-yellow-800 to-yellow-400 bg-clip-text text-transparent">
                    Capri's Spotlight
                </h2>

                {blogItem.map((item, index) => {
                    return (
                        <div key={index} className={`flex items-center lg:w-4/5 mx-auto sm:px-10 pb-10 mb-10 ${item.reverse ? "sm:flex-row" : "sm:flex-row-reverse"}  flex-col`}>
                            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-[#171716] text-yellow-400 flex-shrink-0">
                                {item.icons()}
                            </div>
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{item.heading}</h2>
                                <p className="leading-relaxed text-base">{item.para}</p>
                                <a className="mt-3 text-yellow-400   inline-flex items-center">Read More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 animate-ping  ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )
                })}


            </div>
        </section>
    )
}

export default SmallBlog