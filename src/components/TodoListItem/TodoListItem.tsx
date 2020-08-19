import React, { FC, useState } from "react";
import styled from "styled-components";
import CircleIcon from "./CircleIcon";
import CompletedIcon from "./CompletedIcon";

interface TodoListItemProps {
    completed?: boolean;
    text: string;
    date: string;
    estimated: number;
}
const TodoListItemWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #686088;
    font-weight: 500;
    font-size: 18px;
    margin: 15px 0px;
    position: relative;
    cursor: pointer;
`;
const CheckBox = styled.div`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 50%;
`;
const TodoTitleStyled = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
`;

const TodoDateStyled = styled.div`
    width: 25%;
    text-align: right;
    opacity: 0.7;
    font-size: 16px;
`;
const TodoEstimatedStyled = styled.div`
    width: 15%;
    text-align: right;
    opacity: 0.7;
    font-size: 16px;
`;

const ButtonControls = styled.div<{ visible: boolean }>`
    margin-left: 10px;
    width: 35px;
    height: 35px;
    display: ${(props) => (props.visible ? "block" : "none")};
`;

const TodoListItem: FC<TodoListItemProps> = ({
    text,
    completed,
    date,
    estimated,
}) => {
    const [exposeControls, setExposeControls] = useState(false);
    const [completeTask, setCompleteTask] = useState(completed);
    const handleOnClickCheck = () => {
        setCompleteTask(!completeTask);
    };
    const handleOnHover = (event: any) => {
      
        setExposeControls(!exposeControls);
    };
    const handleOnDoubleClick = (event : any) =>{
        console.log('ss');
    }
    return (
        <TodoListItemWrapper
            onMouseEnter={(event) => handleOnHover(event)}
            onMouseLeave={(event) => handleOnHover(event)}
            onDoubleClick={(event) => handleOnDoubleClick(event)}
           
        >
            <TodoTitleStyled>
                <CheckBox onClick={handleOnClickCheck}>
                    {completeTask ? <CompletedIcon /> : <CircleIcon />}
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
