import styled from "styled-components";

const ModalDateStyled = styled.div<{ visible: boolean }>`
    display: ${(props) => (props.visible ? "flex" : " none")};
    position: absolute;
    width: 250px;
    height: 350px;
    top: 25%;
    z-index: 999;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 0px 10px 0.5px rgba(196, 192, 196, 1);
    -moz-box-shadow: 0px 0px 10px 0.5px rgba(196, 192, 196, 1);
    box-shadow: 0px 0px 10px 0.5px rgba(196, 192, 196, 1);
    flex-wrap: wrap;
`;
const ModalDateWrapper = styled.div`
    padding: 10px 20px;
    width: 100%;
`;

const DateInputWrapper = styled.div`
    width: 100%;
    display: flex;
`;

const DateInput = styled.input`
    width: 100%;
    padding: 2px 0px;
    font-size: 18px;
    border: 1px solid;
    background: rgba(242, 241, 238, 0.6);
    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

export { ModalDateStyled, ModalDateWrapper, DateInputWrapper, DateInput };
