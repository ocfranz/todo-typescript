import React, { FC, useEffect, useRef, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import { preventClickOutside } from "../../helpers/preventClickOutside";
import {
    ModalDateStyled,
    ModalDateWrapper,
    DateInputWrapper,
    DateInput,
} from "./styles";

interface ModalDate {
    visible: boolean;
    onClickOutside: (date: string) => void;
}

const ModalDate: FC<ModalDate> = ({ visible, onClickOutside }) => {
    const modalDate = useRef(null);
    const [date, setDate] = useState("");
    useEffect(() => {
        if (visible) {
            document.addEventListener("click", handleClickOutside, true);
        }
    });

    const handleClickOutside = (event: any) => {
        if (preventClickOutside(modalDate, event)) {
            document.removeEventListener("click", handleClickOutside, true);
            onClickOutside(date);
        }
    };

    const handleOnCalendarChange = (date: any) => {
        setDate(
            `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        );
    };

    return (
        <ModalDateStyled visible={visible} ref={modalDate}>
            <ModalDateWrapper>
                <DateInputWrapper>
                    <DateInput readOnly={true} value={date} />
                </DateInputWrapper>
                <div>
                    <Calendar handleOnChange={handleOnCalendarChange} />
                </div>
            </ModalDateWrapper>
        </ModalDateStyled>
    );
};

export default ModalDate;
