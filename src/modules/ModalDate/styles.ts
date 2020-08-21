import styled from "styled-components";

const ModalDateStyled = styled.div<{ visible: boolean }>`
    display: ${(props) => (props.visible ? "flex" : " none")};
    position: absolute;
    width: 250px;
    height: 450px;
    top: 25%;
    z-index: 999;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 0px 10px 0.5px rgba(196, 192, 196, 1);
    -moz-box-shadow: 0px 0px 10px 0.5px rgba(196, 192, 196, 1);
    box-shadow: 0px 0px 10px 0.5px rgba(196, 192, 196, 1);
`;
const ModalDateWrapper = styled.div`
    padding: 10px 20px;
    width: 100%;
`;

export { ModalDateStyled, ModalDateWrapper };
