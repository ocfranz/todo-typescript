import styled from "styled-components";
import { media } from "../../styles/Breakpoints";

const TaskItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0px;
`;
const TaskItemTag = styled.div`
    align-items: center;
    display: flex;
    width: 20%;
`;
const TaskItemName = styled.span`
    font-size: 15px;
    opacity: 0.8;
    margin-left: 10px;
`;
const TaskItemAction = styled.div`
    width: 80%;
`;

const TaskItemButton = styled.div`
    text-align: left;
    padding: 10px 0px 10px 10px;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

const TimeInput = styled.input`
    font-size: 17px;
    border: none;
    outline: none;
    box-shadow: none;
    background-color: transparent;
    opacity: 0.8;
    padding: 0;
    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

export {
    TaskItem,
    TaskItemTag,
    TaskItemAction,
    TaskItemButton,
    TaskItemName,
    TimeInput,
};
