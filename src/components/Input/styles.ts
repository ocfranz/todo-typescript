import styled from "styled-components";

const InputStyled = styled.input`
    padding: 10px 20px;
    height: 30px;
    border-radius: 20px;
    width: 25%;
    text-align: center;
    &:focus{
        box-shadow: none;
        outline: none;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export { InputStyled, InputWrapper };
