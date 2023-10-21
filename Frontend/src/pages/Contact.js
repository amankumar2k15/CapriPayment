import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"

const Contact = () => {
  const { initialData, setInitialData } = useState({
    name: "",
    email: "",
    phone: "",
    textarea: ""
  })
  

  return (
    <>
      {/* ====== Contact Section Start */}
      <section className="px-4 smd:px-0 relative z-10 overflow-hidden bg-white py-20 lg:pt-[60px] lg:pb-[80px]">
        <div className="container mx-auto md:px-10">
          <h2 className="text-[26px] w-full py-4 block text-center  mx-auto sm:text-4xl  lg:text-[41px] font-semibold mb-10 bg-gradient-to-l from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <h2 className="text-black mb-6 text-[24px] font-bold uppercase sm:text-[28px] lg:text-[32px] xl:text-[36px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-body-color mb-9 text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  adiqua minim veniam quis nostrud exercitation ullamco
                </p>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <AiOutlineHome size={30} />
                  </div>
                  <div className="w-full">
                    <h4 className="text-dark mb-1 text-xl font-bold">
                      Our Location
                    </h4>
                    <p className="text-body-color text-base">
                      E596, 4 floor, Daani plaza, Ramphal chowk, sector 7, Dwarka, New Delhi 110077
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className=" mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <BsTelephone size={30} />
                  </div>
                  <div className="w-full">
                    <h4 className="text-dark mb-1 text-xl font-bold">
                      Phone Number
                    </h4>
                    <a href='tel:+8368436501' className="text-body-color text-base hover:text-blue-800">(+91) 836-843-6501</a>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                    <AiOutlineMail size={30} />
                  </div>
                  <div className="w-full">
                    <h4 className="text-dark mb-1 text-xl font-bold">
                      Email Address
                    </h4>
                    <a href='https://bharat-escrow.netlify.app/' className="text-body-color text-base hover:text-blue-800">Info@bharatescrow.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                {/* //----------------------------Contact Form--------------------------------- */}
                <form>
                  <div className="mb-6">
                    <input placeholder="Your Name" className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      type="text" id='name' value={initialData?.name}
                    />
                  </div>
                  <div className="mb-6">
                    <input placeholder="Your Email" className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      type="email" id='email' value={initialData?.email}
                    />
                  </div>
                  <div className="mb-6">
                    <input placeholder="Your Phone" className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      type="text" id='phone' value={initialData?.phone}
                    />
                  </div>
                  <div className="mb-6">
                    <textarea rows={6} placeholder="Your Message" className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      id='textarea'
                      value={initialData?.textarea}
                    />
                  </div>
                  <div>
                    <button type="submit" className="bg-yellow-500 w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg width={100} height={100} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z" fill="#FBBF24" />
                    </svg>
                  </span>
                  <span className="absolute -bottom-10 -left-10 z-[-1] transform rotate-180">
                    <svg width={100} height={100} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z" fill="#FBBF24" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Contact Section End */}
    </>

  )
}

export default Contact