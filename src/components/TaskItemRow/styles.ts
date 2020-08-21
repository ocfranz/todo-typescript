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
const TaskItemButton = styled.div`
    width: 80%;
    text-align: left;
    padding : 10px 0px;
    cursor : pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        
    }
`;

export { TaskItem, TaskItemTag, TaskItemButton, TaskItemName };
