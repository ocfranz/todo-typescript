import React, { FC, useEffect, useRef } from "react";
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
    onClickOutside: () => void;
}

const ModalDate: FC<ModalDate> = ({ visible, onClickOutside }) => {
    const modalDate = useRef(null);

    useEffect(() => {
        if (visible) {
            document.addEventListener("click", handleClickOutside, true);
        }
    });

    const handleClickOutside = (event: any) => {
        if (preventClickOutside(modalDate, event)) {
            document.removeEventListener("click", handleClickOutside, true);
            onClickOutside();
        }
    };

    return (
        <ModalDateStyled visible={visible} ref={modalDate}>
            <ModalDateWrapper>
                <DateInputWrapper>
                    <DateInput readOnly={true} />
                </DateInputWrapper>
                <div>
                    <Calendar />
                </div>
            </ModalDateWrapper>
        </ModalDateStyled>
    );
};

export default ModalDate;
