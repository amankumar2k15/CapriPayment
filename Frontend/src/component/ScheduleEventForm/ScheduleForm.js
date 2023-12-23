import React, { useState } from 'react'
import { GoogleMeet, MerchantStronghold, Skype } from "../../assets/index"
import axios from "axios";
import { toast } from 'react-toastify';
import { SERVER_URL } from '../../constants';

const ScheduleForm = ({ formattedDateTime, setShowTime, setStartDate }) => {
    const [initialData, setInitialData] = useState({
        name: "",
        email: "",
        guestEmail: "",
        location: "",
        phone: "",
        whatsYourSkype: "",
        agenda: "",
        comments: "",
        time: formattedDateTime
    })

    const fieldItems = [
        { title: "Credit Card Processing Strategy Session" },
        { title: "Just for suggestions" },
        { title: "Financial Systems Integration Workshop" },
        { title: "Payment Gateway Review & Planning Meeting" },
        { title: "Secure Payment Solutions Roundtable Discussion" },
        { title: "Merchant Services Best Practices Forum" },
        { title: "Innovations in Payment Security Workshop" },
        { title: "Financial Transaction Infrastructure Review" },
    ]

    const handleInput = (event) => {
        const { value, id, name } = event.target
        let key = id
        if (name === "platform") {
            key = "location"
        }
        if (name === "agendaForMeeting") {
            key = "agenda"
        }
        setInitialData((prevState) => ({ ...prevState, [key]: value }))
    }

    const validation = () => {
        let validateEmail = /^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,}$/
        let ValidatePhone = /^[0-9]{10,}$/

        if (!initialData.name) return { isError: false, message: "Name is missing" }
        else if (!initialData.email) return { isError: false, message: "Email is missing" }
        else if (!validateEmail.test(initialData.email)) return { isError: false, message: "Invalid Email" }
        else if (!initialData.guestEmail) return { isError: false, message: "Guest Email is missing" }
        else if (!initialData.location) return { isError: false, message: "Location is missing" }
        else if (!initialData.phone) return { isError: false, message: "Phone is missing" }
        else if (!ValidatePhone.test(initialData.phone)) return { isError: false, message: "Phone number should be alteast 10 digit" }
        else if (!initialData.whatsYourSkype) return { isError: false, message: "Skype id is missing" }
        else if (!initialData.agenda) return { isError: false, message: "Agenda for Meeting is missing" }
        else if (!initialData.comments) return { isError: false, message: "Comments is missing" }
        else if (!initialData.time) return { isError: false, message: "Time is missing" }
        else {
            return { isError: true }
        }
    }

    const handleScheduleEvent = async (e) => {
        e.preventDefault()
        if (validation().isError) {
            try {
                const res = await axios.post(`${SERVER_URL}/user/create-user`, initialData)
                toast.success(res.data.message)
                if (res) {
                    setInitialData({
                        name: "",
                        email: "",
                        guestEmail: "",
                        location: "",
                        phone: "",
                        whatsYourSkype: "",
                        agenda: "",
                        comments: "",
                        time: ""
                    })
                    setShowTime(false)
                    setStartDate(null)
                }
                localStorage.removeItem("selectedTime")

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })

            } catch (err) {
                console.log(err.response.data.message)
            }
        } else {
            toast.error(validation().message)
        }
    }



    return (
        <div className='flex item-start justify-center lg:justify-normal px-2 w-full times-container overflow-scroll h-[400px]' >
            {/* ===========================Form========================= */}
            <form className='w-full md:w-2/3'>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name:
                    </label>
                    <input className="bg-gray-50 h-12 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        type="text"
                        id="name"
                        value={initialData.name}
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email:
                    </label>
                    <input className="bg-gray-50 h-12 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        type="text"
                        id="email"
                        value={initialData.email}
                        onChange={handleInput}
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="guestEmail" className="block mb-2 text-sm font-medium text-gray-900 ">Guest Email(s):
                    </label>
                    <input className="bg-gray-50 h-20 border border-gray-500 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pt-4 px-3 pb-16"
                        type="text"
                        id="guestEmail"
                        value={initialData.guestEmail}
                        onChange={handleInput}
                    />
                    <div className='text-sm text-gray-500'>
                        Notify up to 10 additional guests of the scheduled event.
                    </div>
                </div>

                {/* ==============Fieldset============ */}
                <fieldset >
                    <legend className="text-sm font-medium text-gray-900 mb-4">Location:</legend>

                    <div className="flex items-center mb-4">
                        <input id="Merchant Stronghold" type="radio" name="platform" value="Merchant Stronghold" className="w-4 h-4 border-gray-300 "
                            onChange={handleInput}
                        />
                        <img src={MerchantStronghold} className='w-6 ml-5' alt="merchantImg" />
                        <label htmlFor="Merchant Stronghold" className="block ml-4 text-sm font-medium text-gray-700">
                            Merchant Stronghold
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="Google Meet" type="radio" name="platform" value="Google Meet" className="w-4 h-4 border-gray-300 "
                            onChange={handleInput}
                        />
                        <img src={GoogleMeet} className='w-10 ml-3' alt="GoogleMeet" />
                        <label htmlFor="Google Meet" className="block ml-2 text-sm font-medium text-gray-700">
                            Google Meet
                        </label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="Skype" type="radio" name="platform" value="Skype" className="w-4 h-4 border-gray-300 "
                            onChange={handleInput}
                        />
                        <img src={Skype} className='w-10 ml-3' alt="Skype" />
                        <label htmlFor="Skype" className="block ml-2 text-sm font-medium text-gray-700">
                            Skype
                        </label>
                    </div>

                </fieldset>
                {/* ==============Fieldset========== */}

                <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone:
                    </label>
                    <input className="bg-gray-50 h-12 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        type="tel"
                        id="phone"
                        value={initialData.phone}
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="whatsYourSkype" className="block mb-2 text-sm font-medium text-gray-900 ">What's your Skype:
                    </label>
                    <input className="bg-gray-50 h-12 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        type="text"
                        id="whatsYourSkype"
                        value={initialData.whatsYourSkype}
                        onChange={handleInput}
                    />
                </div>

                {/* ==============Fieldset============ */}
                <fieldset >
                    <legend className="text-sm font-medium text-gray-900 mb-4">Agenda for scheduling event:</legend>
                    {fieldItems.map((item, index) => {
                        return (
                            <div key={index} className="flex items-center mb-4">
                                <input id="Merchant Stronghold" type="radio" name="agendaForMeeting" value={item.title} className="w-4 h-4 border-gray-300 "
                                    onChange={handleInput}
                                />
                                <label htmlFor="Merchant Stronghold" className="block ml-2 text-sm font-medium text-gray-700">
                                    {item.title}
                                </label>
                            </div>
                        )
                    })}


                </fieldset>
                {/* ==============Fieldset========== */}


                <div className="mb-6">
                    <label htmlFor="comments" className="block mb-2 text-sm font-medium text-gray-900 ">Comments:
                    </label>
                    <input className="bg-gray-50 h-20 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pt-4 px-3 pb-16"
                        type="text"
                        id="comments"
                        value={initialData.comments}
                        onChange={handleInput}
                    />
                </div>

                <button className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    type="submit"
                    onClick={handleScheduleEvent}
                >
                    Schedule Event
                </button>
            </form>

            {/* ==========================Form====================== */}

        </div>
    )
}

export default ScheduleForm