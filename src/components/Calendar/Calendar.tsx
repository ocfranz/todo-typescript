import React, { useState, useEffect, FC } from "react";
import moment from "moment";
import "./CustomeCalendar.css";
import CalendarLibrary from "react-calendar";
import { CalendarWrapper } from "./styles";

interface CalendarProps {
    handleOnChange: (date : any) => void;
}

const Calendar : FC<CalendarProps> = ({ handleOnChange }) => {
    const [selectedDate, setSelectedDate] = useState();
    const handleCalendarChange = (date: any) => {
        console.log(date);
        handleOnChange(date);
    };

    return (
        <CalendarWrapper>
            <CalendarLibrary
                value={new Date()}
                onChange={handleCalendarChange}
                className="calendar"
            />
        </CalendarWrapper>
    );
};

export default Calendar;
