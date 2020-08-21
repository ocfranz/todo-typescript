import React, { FC, useEffect, useRef } from "react";

import { ModalDateStyled, ModalDateWrapper } from "./styles";
import Calendar from "../../components/Calendar/Calendar";
import { preventClickOutside } from "../../helpers/preventClickOutside";
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
                <div>
                    <input readOnly={true}></input>
                </div>
                <div>
                    <Calendar />
                </div>
            </ModalDateWrapper>
        </ModalDateStyled>
    );
};

export default ModalDate;
