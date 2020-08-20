import React, { FC, useEffect } from "react";
import styled from "styled-components";
import CircleIcon from "../../components/TodoListItem/CircleIcon";
import { media } from "../../styles/Breakpoints";
import { RootState } from "../../reducers";
import { useSelector, useDispatch } from "react-redux";
interface ModalAddProps {
    visible: boolean;
}
const ModalWrapper = styled.div<{ visible: boolean }>`
    display: ${(props) => (props.visible ? "block" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    height: 100%;
`;
const ModalDialog = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    @media ${media.md} {
        max-width: 500px;
        max-height: 600px;
        margin: 1.75rem auto;
        height: 100%;
    }
`;
const ModalContent = styled.div`
    padding: 20px 50px;
`;

const ModalHeader = styled.div`
    padding: 10px 10px;
    font-size: 20px;
    opacity: 0.7;
    text-align: center;
`;
const ModalFooter = styled.div`
    text-align: center;
`;

const ModalAdd: FC<ModalAddProps> = ({ visible }) => {
    const dispatch = useDispatch();
    const visibleModal = useSelector(
        (state: RootState) => state.uiReducer.showModalAdd
    );
    const handleOnClose = () => {
        dispatch({ type: "SHOW_MODAL", payload: !visibleModal });
    };
    return (
        <ModalWrapper visible={visible}>
            <ModalDialog>
                <ModalContent>
                    <ModalHeader>Add new task</ModalHeader>
                    <div>
                        <CircleIcon />
                        <div
                            contentEditable={true}
                            placeholder="Task title"
                        ></div>
                    </div>
                    <ModalFooter>
                        <button onClick={handleOnClose}>close</button>
                    </ModalFooter>
                </ModalContent>
            </ModalDialog>
        </ModalWrapper>
    );
};

export default ModalAdd;
