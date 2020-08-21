import React, { useState, useEffect } from "react";
import moment from "moment";
import './CustomeCalendar.css';
import CalendarLibrary from "react-calendar";
import { CalendarWrapper } from "./styles";

const Calendar = ({}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleCalendarChange = (date: any) => {
        console.log(date);
    };

    return (
        <CalendarWrapper>
            <CalendarLibrary
                value={selectedDate}
                onChange={handleCalendarChange}
                className="calendar"
            />
        </CalendarWrapper>
    );
};

export default Calendar;
