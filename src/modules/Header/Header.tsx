import React from "react";
import { HeaderWrapper, IconWrapper } from "./styles";
import PlusIcon from "./PlusIcon.js";
const Header = () => {
    const handleOnClick = () => {
        console.log("ss");
    };
    return (
        <HeaderWrapper>
            <span>Simple Todo</span>
            <PlusIcon handleOnClick={handleOnClick} />
        </HeaderWrapper>
    );
};

export default Header;
