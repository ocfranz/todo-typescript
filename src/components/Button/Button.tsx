import React from "react";

interface SimpleButtonProps {
    children: Element | string;
    handleOnClick: () => void;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
    children,
    handleOnClick,
}) => {
    return <button onClick={handleOnClick}>{children}</button>;
};

export default SimpleButton;