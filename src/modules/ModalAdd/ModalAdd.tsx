import React, { FC, useEffect, useRef } from "react";

import CircleIcon from "../../components/TodoListItem/CircleIcon";
import Editable from "../../components/Editable/Editable";
import CloseIcon from "./CloseIcon";
import { RootState } from "../../reducers";
import { useSelector, useDispatch } from "react-redux";
import CalendarIcon from "./CalendarIcon";
import ClockIcon from "./ClockIcon";
import {
    ModalWrapper,
    ModalDialog,
    ModalContent,
    ModalBody,
    ModalFooter,
    ModalHeader,
    TaskDetails,
    ModalContainer,
} from "./styles";
interface ModalAddProps {
    visible: boolean;
}

const ModalAdd: FC<ModalAddProps> = ({ visible }) => {
    const titleRef: any = useRef(null);
    const dispatch = useDispatch();
    const visibleModal = useSelector(
        (state: RootState) => state.uiReducer.showModalAdd
    );
    const handleOnClose = () => {
        dispatch({ type: "SHOW_MODAL", payload: !visibleModal });
    };
    useEffect(() => {
        titleRef.current.focus();
    }, []);
    return (
        <ModalWrapper visible={visible}>
            <ModalDialog>
                <ModalContent>
                    <ModalContainer>
                        <ModalHeader>Add new task</ModalHeader>
                        <ModalBody>
                            <TaskDetails>
                                <div style={{ width: "40px" }}>
                                    <CircleIcon />
                                </div>
                                <div
                                    style={{
                                        width: "calc(100% - 40px )",
                                        fontSize: "18px",
                                        position: "relative"
                                    }}
                                >
                                    <Editable
                                        ref={titleRef}
                                        placeholder="Task title"
                                    />
                                </div>
                            </TaskDetails>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px 0px",
                                }}
                            >
                                <div
                                    style={{
                                        alignItems: "center",
                                        display: "flex",
                                        width: "20%",
                                    }}
                                >
                                    <CalendarIcon size={25}></CalendarIcon>
                                    <span>Date</span>
                                </div>
                                <div
                                    style={{ width: "80%", textAlign: "left" }}
                                >
                                    <span>Time</span>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px 0px",
                                }}
                            >
                                <div
                                    style={{
                                        alignItems: "center",
                                        display: "flex",
                                        width: "20%",
                                    }}
                                >
                                    <CalendarIcon size={25}></CalendarIcon>
                                    <span>Estimated</span>
                                </div>
                                <div
                                    style={{ width: "80%", textAlign: "left" }}
                                >
                                    <span>Time</span>
                                </div>
                            </div>
                            <hr></hr>
                            <div
                                style={{
                                    textAlign: "left",
                                    position : "relative"
                                }}
                            >
                                <Editable placeholder="Add description" />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={handleOnClose}>close</button>
                            <CloseIcon />
                        </ModalFooter>
                    </ModalContainer>
                </ModalContent>
            </ModalDialog>
        </ModalWrapper>
    );
};

export default ModalAdd;
