import React, { useState, useEffect } from "react";
import moment from "moment";

import getDaysFromfMonth from "../../helpers/getDaysFromMonth";

import {
    CalendarWrapper,
    CalendarHeader,
    CalendarDaysName,
    CalendarDate,
} from "./styles";
const Calendar = ({}) => {
    const [currentDate, setCurrenDate] = useState(new Date());

    const daysName = ["Mo", "Tu", "We", "Fr", "Sa", "Su"];

    const drawDates = () => {
        let temp = [];
        const numberOfDays = getDaysFromfMonth(currentDate.getMonth());
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        const initialDate = new Date(`${year}-${month+1}-1`);
       
        const previousMonthDays =getDaysFromfMonth(currentDate.getMonth()-1)
        const prevDays =  initialDate.getDay()-1;
        const startAt = previousMonthDays - prevDays +1;
        if(prevDays >1){
            for(let i = 0 ; i< prevDays ; i++){
                console.log(previousMonthDays -i, 'from i', i )
                temp.push(<CalendarDate opacity={true} key={i+1}>{startAt +i}</CalendarDate>);
            }
        }
        for (let i = 0; i < numberOfDays; i++) {
         
            temp.push(<CalendarDate opacity={false} key={i+1}>{i + 1}</CalendarDate>);
        }

        const endDate = new Date(`${year}-${month+1}-${numberOfDays}`);
        const nextDays = 7-endDate.getDay();
        if(nextDays>0){
            for(let i = 0; i < nextDays; i++){
                temp.push(<CalendarDate opacity={true} key={i+1}>{i + 1}</CalendarDate>);
            }
        }
        return temp;
    };

    useEffect(() => {
        console.log(getDaysFromfMonth(currentDate.getMonth()));
        console.log(currentDate.getDay())

        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        const initialDate = new Date(`${year}-${month+1}-1`);
        console.log(initialDate,'month start',initialDate.getDay())
    }, []);

    const getFirtsDayMonth = (currentDay: number, fullDays: number)=>{
      
    }
    return (
        <CalendarWrapper>
            <CalendarHeader>
                <div>{moment().format("LL")}</div>
                <div>controls</div>
            </CalendarHeader>
            <CalendarDaysName>
                {daysName.map((dayName) => {
                    return (
                        <div
                            key={dayName}
                            style={{
                                width: "calc(100% / 7)",
                                flex: "1",
                                border: "1px solid red",
                                fontSize: "14px",
                                textAlign: "center",
                                padding: "10px 0px",
                                opacity: "0.5",
                            }}
                        >
                            {dayName}
                        </div>
                    );
                })}
            </CalendarDaysName>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {drawDates()}
            </div>
        </CalendarWrapper>
    );
};

export default Calendar;
