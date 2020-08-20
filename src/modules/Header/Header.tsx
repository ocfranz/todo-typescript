import React, { FC } from "react";
import { HeaderWrapper, IconWrapper } from "./styles";
import { RootState } from "../../reducers";
import { useSelector, useDispatch } from "react-redux";

import PlusIcon from "./PlusIcon.js";
interface HeaderProps {
    addTask(task: string): void;
}
const Header: FC<HeaderProps> = ({ addTask }) => {
    const dispatch = useDispatch();
    const visibleModal = useSelector(
        (state: RootState) => state.uiReducer.showModalAdd
    );
    const handleOnClick = () => {
        dispatch({ type: "SHOW_MODAL", payload: !visibleModal });
    };
    return (
        <HeaderWrapper>
            <span>Simple Todo</span>
            <PlusIcon handleOnClick={handleOnClick} />
        </HeaderWrapper>
    );
};

export default Header;
