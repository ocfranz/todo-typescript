import React, { FC } from "react";

import { TaskItem, TaskItemTag, TaskItemButton, TaskItemName } from "./styles";

interface TaskItemRowProps {
    icon: any;
    children: string;
    handleOnButtonClick: () => void;
}

const TaskItemRow: FC<TaskItemRowProps> = ({
    icon,
    children,
    handleOnButtonClick,
}) => {
    return (
        <TaskItem>
            <TaskItemTag>
                {icon}
                <TaskItemName>{children}</TaskItemName>
            </TaskItemTag>
            <TaskItemButton onClick={handleOnButtonClick}>
                <span style={{opacity :"0.5"}}>Empty</span>
            </TaskItemButton>
        </TaskItem>
    );
};

export default TaskItemRow;
