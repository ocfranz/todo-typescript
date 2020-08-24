import React, { FC, useState } from "react";

import {
    TaskItem,
    TaskItemTag,
    TaskItemButton,
    TaskItemName,
    TaskItemAction,
    TimeInput,
} from "./styles";

interface TaskItemRowProps {
    icon: any;
    children: string;
    handleOnButtonClick: () => void;
    childrenModal?: React.Component | any;
    value?: string;
    type?: string;
    handleOnContentChange: (time: number) => void;
}

const TaskItemRow: FC<TaskItemRowProps> = ({
    icon,
    children,
    handleOnButtonClick,
    childrenModal,
    value,
    type,
    handleOnContentChange,
}) => {
    const [taskEstimated, setTaskEstimated] = useState(0);
    const handleOnChange = (event: any) => {
        setTaskEstimated(event.target.value)
        const estimatedTime = parseInt(event.target.value);
        if (!isNaN(estimatedTime)) {
            handleOnContentChange(estimatedTime);
        }
      
    };
    return (
        <TaskItem>
            <TaskItemTag>
                {icon}
                <TaskItemName>{children}</TaskItemName>
            </TaskItemTag>
            <TaskItemAction>
                <TaskItemButton onClick={handleOnButtonClick}>
                    {type === "date" && (
                        <span style={{ opacity: "0.5" }}>
                            {value === "" ? "Empty" : value}
                        </span>
                    )}
                    {type === "time" && (
                        <TimeInput
                            placeholder="Empty"
                            onChange={handleOnChange}
                            value={taskEstimated === 0 ? "" : taskEstimated}
                        />
                    )}
                </TaskItemButton>
                {childrenModal}
            </TaskItemAction>
        </TaskItem>
    );
};

TaskItemRow.defaultProps = {
    value: "Empty",
    type: "date",
};

export default TaskItemRow;
