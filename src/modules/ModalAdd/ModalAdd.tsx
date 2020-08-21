import React, { FC, useState, useEffect, useRef } from "react";

import CircleIcon from "../../components/TodoListItem/CircleIcon";
import Editable from "../../components/Editable/Editable";
import { RootState } from "../../reducers";
import { useSelector, useDispatch } from "react-redux";
import CalendarIcon from "./CalendarIcon";
import ClockIcon from "./ClockIcon";
import CloseIcon from "./CloseIcon";
import SaveIcon from "./SaveIcon";
import TaskItemRow from "../../components/TaskItemRow/TaskItemRow";
import IconButton from "../../components/IconButton/IconButton";
import {
    ModalWrapper,
    ModalDialog,
    ModalContent,
    ModalBody,
    ModalFooter,
    ModalHeader,
    TaskHeading,
    ModalContainer,
} from "./styles";
import ModalDate from "../ModalDate/ModalDate";
import { preventClickOutside } from "../../helpers/preventClickOutside";

interface ModalAddProps {
    visible: boolean;
}

const ModalAdd: FC<ModalAddProps> = ({ visible }) => {
    const [visibleModalDate, setVisibleModalDate] = useState(false);
    const [newTask, setNewTask] = useState("");
    const titleRef: any = useRef(null);
    const modalDialog: any = useRef(null);

    const dispatch = useDispatch();
    const visibleModal = useSelector(
        (state: RootState) => state.uiReducer.showModalAdd
    );

    useEffect(() => {
        if (visibleModal) {
            document.addEventListener("click", handleClickOutside, true);
            console.log("click outise");
        }
    });
    const handleClickOutside = (event: any) => {
        if (preventClickOutside(modalDialog, event)) {
            handleOnClose();
        }
    };
    const handleOnClose = () => {
        document.removeEventListener("click", handleClickOutside, true);
        dispatch({ type: "SHOW_MODAL_ADD", payload: !visibleModal });
    };
    const handleOnAdd = () => {
        setNewTask("");
        titleRef.current.innerHTML = "";
        handleOnClose();
        setVisibleModalDate(false);
        dispatch({ type: "ADD_TASK", payload: newTask });
    };

    const handleOnInput = (event: any) => {
        setNewTask(event.target.innerHTML);
    };

    const handleOnDateClick = () => {
        setVisibleModalDate(!visibleModalDate);
    };
    const handleOnEstimatedClick = () => {};

    const handleOnClickOutsideDate = () => {
        setVisibleModalDate(!visibleModalDate);
    };
    return (
        <ModalWrapper visible={visible}>
            <ModalDialog ref={modalDialog}>
                <ModalContent>
                    <ModalContainer>
                        <ModalHeader>
                            <span style={{ opacity: "0.5" }}>Add new task</span>
                            <div>
                                <IconButton
                                    children={<SaveIcon size={25} />}
                                    handleOnClick={handleOnAdd}
                                />
                                <IconButton
                                    children={<CloseIcon size={25} />}
                                    handleOnClick={handleOnClose}
                                />
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <TaskHeading>
                                <div style={{ width: "40px" }}>
                                    <CircleIcon />
                                </div>
                                <div
                                    style={{
                                        width: "calc(100% - 40px )",
                                        fontSize: "25px",
                                        fontWeight: "bold",
                                        position: "relative",
                                    }}
                                >
                                    <Editable
                                        onInput={(event) =>
                                            handleOnInput(event)
                                        }
                                        ref={titleRef}
                                        placeholder="Task title"
                                    />
                                </div>
                            </TaskHeading>
                            <TaskItemRow
                                icon={<CalendarIcon size={25} />}
                                children="Date"
                                handleOnButtonClick={handleOnDateClick}
                                childrenModal={
                                    <ModalDate
                                        visible={visibleModalDate}
                                        onClickOutside={
                                            handleOnClickOutsideDate
                                        }
                                    />
                                }
                            />

                            <TaskItemRow
                                icon={<ClockIcon size={25} />}
                                children="Estimated"
                                handleOnButtonClick={handleOnEstimatedClick}
                            />
                            <hr></hr>
                            <div
                                style={{
                                    textAlign: "left",
                                    position: "relative",
                                }}
                            >
                                <Editable placeholder="Add description" />
                            </div>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                    </ModalContainer>
                </ModalContent>
            </ModalDialog>
        </ModalWrapper>
    );
};

export default ModalAdd;
