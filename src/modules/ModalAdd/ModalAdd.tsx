import React, { FC } from "react";
import styled from "styled-components";
import CircleIcon from "../../components/TodoListItem/CircleIcon";
interface ModalAddProps {
    visible: boolean;
}

const ModalBody = styled.div`
    width: 50%;
`;
const ModalTitleStyles = styled.div`
    padding: 10px 10px;
    font-size: 18px;
    opacity: 0.7;
    text-align: center;
`;
const ModalAdd: FC<ModalAddProps> = ({ visible }) => {
    return (
        <div>
            <ModalTitleStyles>Add new task</ModalTitleStyles>
            <div>
                <CircleIcon />
                <div contentEditable={true} placeholder="Task title"></div>
            </div>
        </div>
    );
};

export default ModalAdd;
