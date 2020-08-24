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
import { Task } from "../../reducers/tasksReducer";
interface ModalAddProps {
    visible: boolean;
}

const ModalAdd: FC<ModalAddProps> = ({ visible }) => {
    const [visibleModalDate, setVisibleModalDate] = useState(false);
    const [newTask, setNewTask] = useState("");
    const titleRef: any = useRef(null);
    const modalDialog: any = useRef(null);
    const [ taskDate, setTaskDate ] = useState('');
    const [ taskEstimated, setTaskEstimated ] = useState(0);

    const dispatch = useDispatch();
    const visibleModal = useSelector(
        (state: RootState) => state.uiReducer.showModalAdd
    );
    const tasks = useSelector((state: RootState) => state.tasksReducer.tasks);

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
        let payload: Task = {
            id: tasks.length + 1,
            text: newTask.replace(/&nbsp;/g, ''),
            isCompleted: false,
            date: taskDate,
            estimated : taskEstimated
        };
        setNewTask("");
        titleRef.current.innerHTML = "";
        handleOnClose();
        setVisibleModalDate(false);
        dispatch({ type: "ADD_TASK", payload });
    };

    const handleOnInput = (event: any) => {
        setNewTask(event.target.innerHTML);
    };

    const handleOnDateClick = () => {
        setVisibleModalDate(!visibleModalDate);
    };
    const handleOnEstimatedClick = (time : number) => {
        setTaskEstimated(time);
    };

    const handleOnClickOutsideDate = (date : string) => {
        setTaskDate(date);
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
                                value={taskDate}
                                handleOnButtonClick={handleOnDateClick}
                                childrenModal={
                                    <ModalDate
                                        visible={visibleModalDate}
                                        onClickOutside={
                                            (date)=>handleOnClickOutsideDate(date)
                                        }
                                    />
                                }
                                handleOnContentChange={()=>{}}
                            />

                            <TaskItemRow
                                icon={<ClockIcon size={25} />}
                                type="time"
                                children="Estimated"
                                value ={taskEstimated.toString()}
                                handleOnButtonClick={()=>{}}
                                handleOnContentChange={(time)=>handleOnEstimatedClick(time)}
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
