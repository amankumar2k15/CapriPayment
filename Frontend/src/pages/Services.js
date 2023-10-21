import React from 'react'
import { EcommerceIntegration, MobilePayment, PaymentTerminals } from "../assets/creditCard/index"
import { FaArrowDown } from "react-icons/fa"

const Services = () => {

    const serviceContainer = [
        { src: EcommerceIntegration, reversed: true, heading: "Payment Terminals", para: "Our compact and intuitive payment terminals are perfect for your retail store. Accepting credit and debit card payments becomes a breeze with these easy-to-use devices. Simply plug them in and start processing payments securely and efficiently." },
        { src: MobilePayment, reversed: false, heading: "Ecommerce Integration", para: " If you have an online store, our ecommerce integration solutions seamlessly integrate with your website, making it effortless for your customers to pay for their purchases. With secure payment gateways and simple checkout processes, you can provide a smooth online shopping experience." },
        { src: PaymentTerminals, reversed: true, heading: "Mobile Payment Solutions", para: "For businesses on the move, our mobile payment solutions are the perfect fit. Transform your smartphone or tablet into a portable point-of-sale system and accept payments wherever you go. Convenient, flexible, and secure, our mobile payment solutions make transactions a snap." },
        { src: EcommerceIntegration, reversed: false, heading: "Payment Security", para: "We prioritize the security of your customers' sensitive payment information. Our services adhere to the highest industry standards, ensuring data encryption and fraud prevention measures are in place to protect against unauthorized access." },
        { src: PaymentTerminals, reversed: true, heading: "Transparent Pricing", para: "We believe in providing transparent and affordable pricing for our credit card processing services. Say goodbye to hidden fees and confusing contracts. We offer competitive rates and straightforward pricing structures to help you manage your costs effectively." },
    ]

    const scrollDown = () => {
        window.scrollTo({
            top: 640,
            behavior: 'smooth'
        })
    }


    return (
        <section className="pt-20 pb-10 lg:pb-20 bgImg">
            <div className="container mx-auto">
                <div className="  flex flex-wrap justify-center h-[500px]">
                    <div className="w-full px-4 ">
                        <div className="max-w-5xl mx-auto mb-[60px] text-center lg:mb-20">
                            <h2 className="text-[24px] sm:text-[26px] w-full py-4 sm:text-4xl md:text-3xl lg:text-[41px] font-semibold mb-2 text-yellow-600">
                                Credit Card Processing
                            </h2>
                            <p className="text-md text-start sm:text-lg  sm:px-0 md:text-xl font-medium sm:text-center  text-gray-600 leading-relaxed">
                                Capri Payments specializes in advanced credit card processing solutions tailored for a broad spectrum of businesses. From traditional brick-and-mortar outlets to cutting-edge online platforms, from budding startups to niche market players, we deliver credit card processing strategies designed to enhance efficiency and boost your bottom line.                            </p>
                        </div>
                        <div className='flex justify-center down cursor-pointer'
                            onClick={scrollDown}
                        >
                            <FaArrowDown className='text-yellow-500' size={40} />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-row flex-wrap '>

                    {serviceContainer && serviceContainer.map((item, index) => {
                        return (
                            <div key={index} className={`${item.reversed ? " md:flex-row" : "md:flex-row-reverse"} flex-col-reverse max-w-5xl mx-auto w-full flex flex-wrap`}>
                                <div className='w-full md:w-1/2 flex items-center text-justify md:justify-center'>
                                    <img className=' md:w-[400px] block mx-auto' src={item.src} alt='img1' />
                                </div>
                                <div className='md:w-1/2  '>
                                    <div className="mx-auto py-10 px-4 flex flex-col items-center">
                                        <h2 className="text-[26px] w-full py-4 px-2 sm:px-0 sm:text-4xl md:text-3xl lg:text-[41px] font-semibold mb-2 bg-gradient-to-l from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                                            {item.heading}
                                        </h2>
                                        <p className="text-md sm:text-lg px-2 sm:px-0 md:text-xl font-medium  text-gray-600 leading-relaxed">
                                            {item.para}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services