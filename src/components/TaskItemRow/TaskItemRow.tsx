import React, { FC } from "react";

import {
    TaskItem,
    TaskItemTag,
    TaskItemButton,
    TaskItemName,
    TaskItemAction,
} from "./styles";

interface TaskItemRowProps {
    icon: any;
    children: string;
    handleOnButtonClick: () => void;
    childrenModal?: React.Component | any;
}

const TaskItemRow: FC<TaskItemRowProps> = ({
    icon,
    children,
    handleOnButtonClick,
    childrenModal,
}) => {
    return (
        <TaskItem>
            <TaskItemTag>
                {icon}
                <TaskItemName>{children}</TaskItemName>
            </TaskItemTag>
            <TaskItemAction>
                <TaskItemButton onClick={handleOnButtonClick}>
                    <span style={{ opacity: "0.5" }}>Empty</span>
                </TaskItemButton>
                {childrenModal}
            </TaskItemAction>
        </TaskItem>
    );
};

export default TaskItemRow;
