import React, { FC, useState, useEffect, useRef } from "react";

import CircleIcon from "../../components/TodoListItem/CircleIcon";
import Editable from "../../components/Editable/Editable";
import CloseIcon from "./CloseIcon";
import { RootState } from "../../reducers";
import { useSelector, useDispatch } from "react-redux";
import CalendarIcon from "./CalendarIcon";
import ClockIcon from "./ClockIcon";
import TaskItemRow from "../../components/TaskItemRow/TaskItemRow";
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
interface ModalAddProps {
    visible: boolean;
}

const ModalAdd: FC<ModalAddProps> = ({ visible }) => {
    const [newTask, setNewTask] = useState("");
    const titleRef: any = useRef(null);
    const modalDialog: any = useRef(null);
  
    const dispatch = useDispatch();
    const visibleModal = useSelector(
        (state: RootState) => state.uiReducer.showModalAdd
    );
    useEffect(() => {
        if(visibleModal){
            document.addEventListener("click",handleClickOutside, true)
        }
    });
    const handleClickOutside = (event : any) =>{
        if(!modalDialog.current.contains(event.target)){
            handleOnClose();
        }
    }
    const handleOnClose = () => {
        document.removeEventListener("click",handleClickOutside, true)
        dispatch({ type: "SHOW_MODAL", payload: !visibleModal });
    };
    const handleOnAdd = () => {
        setNewTask("");
        titleRef.current.innerHTML = "";
        dispatch({ type: "ADD_TASK", payload: newTask });
    };

    const handleOnInput = (event: any) => {
        console.log(event.target.innerHTML);
        setNewTask(event.target.innerHTML);
    };

    const handleOnDateClick = () => {};
    return (
        <ModalWrapper visible={visible} > 
            <ModalDialog ref={modalDialog}>
                <ModalContent>
                    <ModalContainer>
                        <ModalHeader>Add new task</ModalHeader>
                        <ModalBody>
                            <TaskHeading>
                                <div style={{ width: "40px" }}>
                                    <CircleIcon />
                                </div>
                                <div
                                    style={{
                                        width: "calc(100% - 40px )",
                                        fontSize: "18px",
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
                            />
                            <TaskItemRow
                                icon={<ClockIcon size={25} />}
                                children="Estimated"
                                handleOnButtonClick={handleOnDateClick}
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
                        <ModalFooter>
                            <button onClick={handleOnClose}>close</button>
                            <button onClick={handleOnAdd}>Add</button>
                            <CloseIcon />
                        </ModalFooter>
                    </ModalContainer>
                </ModalContent>
            </ModalDialog>
        </ModalWrapper>
    );
};

export default ModalAdd;
