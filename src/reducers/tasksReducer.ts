export interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
    date: string;
    estimated: number;
}

export interface TasksState {
    tasks: Array<Task>;
}
const initialState = {
    tasks: [],
};

type Action = {
    type: "ADD_TASK" | "UPDATE_TASK";
    payload: Task;
};
export const tasksReducer = (
    state: TasksState = initialState,
    action: Action
) => {
    switch (action.type) {
        case "ADD_TASK":
            return { ...state, tasks: [...state.tasks, action.payload] };
        case "UPDATE_TASK":
            const tasks: Array<Task> = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    const updatedTask: Task = Object.assign(
                        {},
                        task,
                        action.payload
                    );
                    return updatedTask;
                }
                return task;
            });

            return { ...state, tasks: tasks };
        default:
            return state;
    }
};
