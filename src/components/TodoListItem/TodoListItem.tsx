import React, { FC, useState } from "react";
import CircleIcon from "./CircleIcon";
import CompletedIcon from "./CompletedIcon";
import { useDispatch } from "react-redux";
import {
    TodoListItemWrapper,
    CheckBox,
    TodoTitleStyled,
    TodoDateStyled,
    TodoEstimatedStyled,
    ButtonControls,
} from "./styles";

interface TodoListItemProps {
    completed?: boolean;
    id?: number;
    text: string;
    date: string;
    estimated: number;
}

const TodoListItem: FC<TodoListItemProps> = ({
    id,
    text,
    completed,
    date,
    estimated,
}) => {
    const dispatch = useDispatch();

    const [exposeControls, setExposeControls] = useState(false);
    const handleOnClickCheck = () => {
        let isCompleted = !completed;
        dispatch({
            type: "UPDATE_TASK",
            payload: { id, text, isCompleted, date },
        });
    };
    const handleOnHover = (event: any) => {
        //setExposeControls(!exposeControls);
    };
    const handleOnDoubleClick = (event: any) => {};
    return (
        <TodoListItemWrapper
            key={id}
            onMouseEnter={(event) => handleOnHover(event)}
            onMouseLeave={(event) => handleOnHover(event)}
            onDoubleClick={(event) => handleOnDoubleClick(event)}
        >
            <TodoTitleStyled>
                <CheckBox onClick={handleOnClickCheck}>
                    {completed ? <CompletedIcon /> : <CircleIcon />}
                </CheckBox>
                {text}
            </TodoTitleStyled>
            <TodoDateStyled>{date}</TodoDateStyled>
            <TodoEstimatedStyled>{`${estimated} min`}</TodoEstimatedStyled>
            <ButtonControls visible={exposeControls}>...</ButtonControls>
        </TodoListItemWrapper>
    );
};

TodoListItem.defaultProps = {
    completed: false,
};

export default TodoListItem;
