import React, { FC, InputHTMLAttributes } from "react";
import { InputStyled, InputWrapper } from "./styles";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input: FC<InputProps> = ({ onChange, value, placeholder, name }) => {
    return (
        <InputWrapper>
            <label htmlFor={name}></label>
            <InputStyled
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                id={name}
            />
        </InputWrapper>
    );
};

Input.defaultProps = {
    placeholder: "Default input",
};
export default Input;
