import React, { FC } from "react";
import { HeaderWrapper, IconWrapper } from "./styles";
import PlusIcon from "./PlusIcon.js";
interface HeaderProps {
    addTask(task: string): void;
}
const Header: FC<HeaderProps> = ({addTask}) => {
    const handleOnClick = () => {
        addTask('Hello')
    };
    return (
        <HeaderWrapper>
            <span>Simple Todo</span>
            <PlusIcon handleOnClick={handleOnClick} />
        </HeaderWrapper>
    );
};

export default Header;
