import React, { useState } from 'react';
import LogoImg from "../assets/logo.png";
import CalendarComponent from '../component/CalenderComponent/CalenderComponent';
import { BsArrowLeftCircle } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { Link } from 'react-router-dom';

const Appointments = () => {
    const [showTime, setShowTime] = useState(false)

    // =================================> To handle and show the FormatedDateTime <===================================
    const [selectedDate, setSelectedDate] = useState(null); // Assuming it's a Date object.
    const [appointmentTime, setAppointmentTime] = useState("")

    const getEndTime = (timeString) => {
        // console.log(timeString) // it is the time on which we are clicking
        const [hour, minutes, period] = timeString.split(/[:\s]/);
        let newMinutes = parseInt(minutes) + 30;
        let newHour = hour;

        if (newMinutes > 60) {         //incase if 12:45 + 30 = 12:75
            newMinutes = newMinutes % 60
            newHour = (parseInt(hour) % 12) + 1
        }

        if (newMinutes === 60) {      //incase if 12:30 + 30 = 12:60
            newMinutes = 0;
            newHour = (parseInt(hour) % 12) + 1;
        }
        return `${newHour.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')} ${period}`;
    }
    const endTime = getEndTime(appointmentTime);

    let formattedDateTime = "";
    if (selectedDate && appointmentTime) {
        const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
        const monthName = selectedDate.toLocaleDateString('en-US', { month: 'long' });
        const dayNumber = selectedDate.getDate();
        const year = selectedDate.getFullYear();

        formattedDateTime = `${appointmentTime} - ${endTime}, ${dayName}, ${monthName} ${dayNumber}, ${year}`;
    }
    // =================================> To handle and show the FormatedDateTime <===================================


    return (
        <section className="bg-gray-100 py-10">
            <div className='max-w-[70rem] mx-auto px-2 font-extralight'>
                <div className='rounded-lg bg-white shadow-lg flex flex-col lg:flex-row justify-between  '>
                    <div className=' p-8 flex flex-col justify-evenly border-r w-full border-b-2 border-gray-100 lg:border-b-0 lg:border-r-2  lg:w-5/12 '>
                        <div className=''>
                            <Link to="/">
                                <BsArrowLeftCircle size={34} className="hover:text-gray-500" />
                            </Link>
                            <div className='my-4'>
                                <img src={LogoImg} alt='Capri Logo' className="mx-auto" />
                                <h2 className='text-md text-gray-500 mt-2 text-center'>Capri Payments</h2>
                                <p className='font-semibold text-2xl text-center'>Merchant Services</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <IoIosTimer size={24} />
                                <span className='text-gray-600'>30 min</span>
                            </div>
                            {
                                showTime && (
                                    <div className='flex justify-center items-center  gap-2'>
                                        <span className='text-gray-700 font-medium text-center'>{formattedDateTime}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="text-center">
                            <p className="text-gray-600">LET'S CONNECT TO DISCUSS</p>
                            <Link className='text-gray-400 hover:underline' to="/contact">https://capri-payments.netlify.app/contact</Link>
                        </div>
                    </div>

                    <div className=' pt-10 w-full lg:w-8/12 '>
                        {showTime ? (
                            <div className='font-medium text-xl text-center lg:text-start px-6'>
                                Enter Details
                            </div>
                        ) : (

                            <div className="font-medium text-xl px-6 text-center">
                                Select a Date & Time
                            </div>
                        )}

                        <div className='pb-10 w-full '>
                            <CalendarComponent setAppointmentTime={setAppointmentTime} setSelectedDate={setSelectedDate} setShowTime={setShowTime} showTime={showTime} formattedDateTime={formattedDateTime} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Appointments;
