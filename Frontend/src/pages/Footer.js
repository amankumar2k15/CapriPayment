import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const footerAbout = [
        { text: "Home", to: "/" },
        { text: "Contact", to: "/contact" },
    ]
    const footerOffer = [
        { text: "Blog", to: "/blog" },
        { text: "Services", to: "/services" },
    ]

    return (
        <div className="footer-2 bg-[#1f1e1e] pt-6 md:pt-12">
            <div className="container px-4 mx-auto">
                <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-14">
                    <div className="footer-info lg:w-1/3 md:px-4">
                        <h4 className="text-white text-2xl mb-4">
                            Experience hassle-free credit card processing with Capri Payments.
                        </h4>
                        <p className="text-gray-400">
                            Capri Payments ensures secure, swift, and simplified credit card solutions.
                        </p>
                    </div>
                    <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
                        <div className="sm:flex">
                            <div className="sm:flex-1">
                                <h6 className="text-base font-medium text-white uppercase mb-2">
                                    Links
                                </h6>
                                {footerAbout.map((item, index) => {
                                    return (
                                        <Link to={item.to} key={index} className="text-gray-400 py-1 block hover:underline">
                                            {item.text}
                                        </Link>
                                    )
                                })}
                            </div>
                            <div className="sm:flex-1 mt-4 sm:mt-0">
                                <h6 className="text-base font-medium text-white uppercase mb-2">
                                    What we offer
                                </h6>

                                {footerOffer.map((item, index) => (
                                    <Link to={item.to} key={index} className='text-gray-400 py-1 block hover:underline'>
                                        {item.text}
                                    </Link>
                                ))}

                            </div>
                        </div>
                    </div>


                    <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
                        <h5 className="text-lg text-white font-medium mb-4">Explore our site</h5>
                        <Link to="/blog" className="bg-yellow-600 hover:bg-yellow-500 rounded py-2 px-6 md:px-12 transition-colors duration-300">
                            Explore
                        </Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-solid border-white mt-4">
                <div className="container px-4 mx-auto">
                    <div className="md:flex md:-mx-4 md:items-center ">
                        <div className="md:flex-1 md:px-4 text-center md:text-left">
                            <p className="text-white">© <strong>CAPRI PAYMENTS</strong> </p>
                        </div>

                        <div className="md:flex-1 md:px-4 text-center md:text-right">
                            <p className="py-2 px-4 text-white inline-block"> Terms of Service </p>
                            <p className="py-2 px-4 text-white inline-block"> Privacy Policy </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer