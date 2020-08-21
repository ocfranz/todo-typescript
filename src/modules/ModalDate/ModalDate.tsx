import React, { FC } from "react";
import { ModalDateStyled, ModalDateWrapper } from "./styles";
import Calendar from "../../components/Calendar/Calendar";
interface ModalDate {
    visible: boolean;
}

const ModalDate: FC<ModalDate> = ({ visible }) => {
    return (
        <ModalDateStyled visible={visible}>
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
