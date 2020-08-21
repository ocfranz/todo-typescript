import React, { FC } from "react";
import { IconButtonStyled } from "./styles";

interface IconButtonProps {
    children: any;
    handleOnClick: () => void;
}

const IconButton: FC<IconButtonProps> = ({ children, handleOnClick }) => {
    return (
        <IconButtonStyled onClick={handleOnClick}>{children}</IconButtonStyled>
    );
};

export default IconButton;
