import React from "react";
import { TimePickerStyled } from "./styles";
const RangeTimePicker = ({}) => {
    const drawHours = () => {
        let temp = [];
        for (let i = 1; i <= 24; i++) {
            temp.push(<option key={i}>{i}</option>);
        }
        return temp;
    };

    return (
        <TimePickerStyled>
            
        </TimePickerStyled>
    );
};

export default RangeTimePicker;
