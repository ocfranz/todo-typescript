import React from "react";

interface TodoListItemProps {
    status: boolean;
    text: string;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ text, status }) => {
    return <div>{text}</div>;
};

export default TodoListItem;
