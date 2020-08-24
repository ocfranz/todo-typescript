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
    value?: string;
}

const TaskItemRow: FC<TaskItemRowProps> = ({
    icon,
    children,
    handleOnButtonClick,
    childrenModal,
    value,
}) => {
    return (
        <TaskItem>
            <TaskItemTag>
                {icon}
                <TaskItemName>{children}</TaskItemName>
            </TaskItemTag>
            <TaskItemAction>
                <TaskItemButton onClick={handleOnButtonClick}>
                    <span style={{ opacity: "0.5" }}>
                        {value === "" ? "Empty" : value}
                    </span>
                </TaskItemButton>
                {childrenModal}
            </TaskItemAction>
        </TaskItem>
    );
};

TaskItemRow.defaultProps = {
    value: "Empty",
};

export default TaskItemRow;
