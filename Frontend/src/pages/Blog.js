import React from 'react'

const Blog = () => {

    const boxContainer = [
        { src: "https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg", date: "Dec 22, 2023", heading: " Meet AutoManage, the best AI management tools", para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { src: "https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg", date: "Dec 22, 2023", heading: " Meet AutoManage, the best AI management tools", para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { src: "https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg", date: "Dec 22, 2023", heading: " Meet AutoManage, the best AI management tools", para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { src: "https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg", date: "Dec 22, 2023", heading: " Meet AutoManage, the best AI management tools", para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { src: "https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg", date: "Dec 22, 2023", heading: " Meet AutoManage, the best AI management tools", para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { src: "https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg", date: "Dec 22, 2023", heading: " Meet AutoManage, the best AI management tools", para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    ]

    return (
        <>
            {/* ====== Blog Section Start */}
            <section className="pt-20 pb-10 lg:pb-20 bg-white dark:bg-dark">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[700px] text-center lg:mb-20">
                                <h2 className="text-[26px] w-full py-4 sm:text-4xl md:text-3xl lg:text-[41px] font-semibold mb-2 bg-gradient-to-l from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                                    Our Blogs
                                </h2>
                                <p className="text-md sm:text-lg px-4 sm:px-0 md:text-xl font-medium sm:text-center  text-gray-600 leading-relaxed">
                                Unraveling the magic behind swift and secure transactions, Capri Payments redefines modern payment solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full flex-wrap gap-10 justify-center px-4 sm:px-0">
                            {boxContainer && boxContainer.map((item, index) => {
                                return (
                                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-darkblack transition-all duration-300 ease-in-out hover:scale-105 ">
                                    <div  className="w-full mb-10 ">
                                        <div className="overflow-hidden rounded ">
                                            <img
                                                src={item.src}
                                                alt={`image${index}`}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className='px-4'>
                                            <span className="inline-block mt-2  py-1 mb-5 text-xs font-semibold leading-loose text-center bg-gradient-to-r from-black to-yellow-400 bg-clip-text text-transparent rounded bg-primary">
                                                {item.date}
                                            </span>
                                            <h3 className="inline-block mb-4 text-xl font-semibold text-black hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                                                {item.heading}
                                            </h3>
                                            <p className="text-base text-body-color dark:text-dark-6">
                                                {item.para}
                                            </p>
                                            <a className="mt-3  text-yellow-400  inline-flex items-center">Read More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 animate-ping h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                    </div> 

                </div>
            </section>
            {/* ====== Blog Section End */}
        </>

    )
}

export default Blog