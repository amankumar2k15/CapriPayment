import React from 'react'

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center px-4 items-center h-[600px] '>
            <h4 class="mb-3 text-[30px]  font-semibold leading-tight text-black">
                404 Oops! That page can’t be found
            </h4>
            <p class="mb-8 text-lg text-black">
                The page you are looking for it maybe deleted
            </p>
        </div>
    )
}

export default ErrorPage