import React, { FC } from "react";
import "./CustomeCalendar.css";
import CalendarLibrary from "react-calendar";
import { CalendarWrapper } from "./styles";

interface CalendarProps {
    handleOnChange: (date: any) => void;
}

const Calendar: FC<CalendarProps> = ({ handleOnChange }) => {
    const handleCalendarChange = (date: any) => {
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
