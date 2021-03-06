import styled from "styled-components";
import { media } from "../../styles/Breakpoints";

const ModalWrapper = styled.div<{ visible: boolean }>`
    display: ${(props) => (props.visible ? "flex" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    height: 100%;
    align-items: center;
    z-index: 99;
`;
const ModalDialog = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    @media ${media.md} {
        max-width: 900px;
        max-height: 400px;
        margin: auto auto;
        height: calc(100% - 144px);
    }
`;
const ModalContent = styled.div`
    overflow-y: auto;
    height: 100%;
    width: 100%;
`;

const ModalContainer = styled.div``;

const ModalHeader = styled.div`
    padding: 10px 20px;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ModalFooter = styled.div`
    text-align: center;
`;
const ModalBody = styled.div`
    text-align: center;
    padding: 20px 20px;
    @media ${media.md} {
        padding: 20px 100px;
    }
`;

const TaskHeading = styled.div`
    display: flex;
    text-align: left;
    flex-wrap: nowrap;
    align-items: center;
`;

export {
    ModalWrapper,
    ModalDialog,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalContainer,
    TaskHeading,
};
