import React, { useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerStyles.css';
import ScheduleForm from '../ScheduleEventForm/ScheduleForm';
// import { da } from 'date-fns/locale';

const CalendarComponent = ({ setAppointmentTime, showTime, setShowTime, setSelectedDate, formattedDateTime }) => {
    const [startDate, setStartDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(false)
    const [selectedTimeValue, setSelectedTimeValue] = useState(null);

    // ----------------------------------For Available Times or not-----------------------------------------------
    const [availableTimes, setAvailableTimes] = useState([]);
    const allTimes = useMemo(()=>["12:00 AM", "12:15 AM", "12:30 AM", "12:45 AM", "01:00 AM", "01:15 AM", "01:30 AM", "02:45 AM", "03:00 AM", "03:15 AM", "03:30 AM", "03:45 AM", "04:00 AM", "04:15 AM", "04:30 AM", "08:00 PM", "09:00 PM", "09:15 PM", "09:30 PM", "10:00 PM", "10:15 PM", "10:30 PM", "10:45 PM", "11:00 PM", "11:15 PM", "11:30 PM"],[])
    const today = useMemo(()=>new Date(),[]);

    useEffect(() => {
        if (startDate && startDate.toDateString() === today.toDateString()) {
            const currentTimeInMinute = today.getHours() * 60 + today.getMinutes();
            const filteredTimes = allTimes.filter(time => {
                const [hour, minute, period] = time.split(/[:\s]/);
                const hourIn24Format = period === "PM" && hour !== "12" ? parseInt(hour) + 12 : parseInt(hour);
                return (hourIn24Format * 60 + parseInt(minute)) > currentTimeInMinute;
            });
            setAvailableTimes(filteredTimes);
        } else {
            setAvailableTimes(allTimes);
        }
        // eslint-disable-next-line
    }, [startDate, allTimes, today]);
    // ----------------------------------For Available Times or not-----------------------------------------------

    // A helper function that checks if the given day is Sunday or Monday
    const isWeekend = (date) => {
        const day = date.getDay();
        return day !== 0; // 0 is Sunday,
    };

    // This function will format the weekday names
    const formatDay = (name) => {
        switch (name) {
            case 'Monday': return 'Mon';
            case 'Tuesday': return 'Tue';
            case 'Wednesday': return 'Wed';
            case 'Thursday': return 'Thu';
            case 'Friday': return 'Fri';
            case 'Saturday': return 'Sat';
            case 'Sunday': return 'Sun';
            default: return name;
        }
    }

    //This funtion is used to add the NEXT button & set the time in localStorage
    const handleTime = (time) => {
        localStorage.setItem("selectedTime", time)
        setSelectedTime(true)
        setSelectedTimeValue(time)
        setAppointmentTime(time)
        setShowTime(false)
    }

    //To handle the showTime and show the form
    const handleNext = () => {
        setShowTime(true)
    }

    return (
        <div className="calendar-container mt-10 flex flex-col md:flex-row w-full px-4 bg-white ">
            {
                showTime && showTime ? (
                    <>
                        <ScheduleForm formattedDateTime={formattedDateTime} setShowTime={setShowTime} setStartDate={setStartDate} />
                    </>
                ) :
                    <>
                        <div className="calendar-container mt-10 flex justify-center custom:justify-evenly flex-col  md:flex-row items-center  w-full px-4 bg-white ">
                            <DatePicker
                                selected={startDate}
                                onChange={date => {
                                    setSelectedDate(date)
                                    setStartDate(date)
                                    setShowTime(false)
                                }}
                                dateFormat="MMMM d, yyyy"
                                inline
                                calendarStartDay={1}
                                formatWeekDay={name => formatDay(name)}
                                minDate={today}
                                filterDate={(date) => isWeekend(date)}
                            />

                            <div className='flex flex-col '>
                                {startDate && <div className='text-center'>{startDate.toDateString()}</div>}
                                {startDate && (
                                    <div className="times-container flex flex-col gap-4 px-2 max-h-[400px] py-7 overflow-y-scroll">
                                        {availableTimes.map((time, index) => {
                                            return (
                                                <div key={index} className='flex flex-row gap-1 '>

                                                    <button key={index} className={`${selectedTime && time === selectedTimeValue ? "w-1/2 bg-gray-600 cursor-default text-white border border-none" : "w-full"} border-2  whitespace-nowrap flex justify-center border-blue-300 rounded-lg hover:border-blue-600 text-blue-600 font-medium py-4 px-4`}
                                                        onClick={() => handleTime(time)}>
                                                        {time} &nbsp;
                                                    </button>


                                                    {selectedTime && time === selectedTimeValue &&
                                                        < span className={`w-full" ${selectedTime && time === selectedTimeValue ? "w-1/2 cursor-pointer bg-blue-600 text-white border border-none" : "w-full"} border-2 text-base  whitespace-nowrap flex justify-center border-blue-300 rounded-lg hover:border-blue-600 text-blue-600 font-medium py-4 px-10`}
                                                            onClick={handleNext}
                                                        >
                                                            Next
                                                        </span>
                                                    }
                                                </div>
                                            )
                                        }
                                        )}
                                    </div>
                                )}
                            </div>

                        </div>
                    </>
            }

        </div>
    );
};

export default CalendarComponent;
