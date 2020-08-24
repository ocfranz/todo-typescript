import React from "react";
import { Helmet } from "react-helmet";
import { RootState } from "../../reducers";
import Header from "../../modules/Header/Header";
import Heading from "../../components/Heading/Heading";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
import ModalAdd from "../../modules/ModalAdd/ModalAdd";
import { useSelector, useDispatch } from "react-redux";
import { AppWrapper } from "./styles";

const App = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasksReducer.tasks);
    const visibleModal = useSelector(
        (state: RootState) => state.uiReducer.showModalAdd
    );
    const addTask = (task: string) => {
        dispatch({ type: "ADD_TASK", payload: task });
    };
    return (
        <div className="App">
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
                />
            </Helmet>
            <AppWrapper>
                <Header addTask={addTask} />
                <Heading type="h2" children="Today"></Heading>
                {tasks.map((task, index) => {
                    return (
                        <TodoListItem
                            id={task.id}
                            text={task.text}
                            completed={task.isCompleted}
                            date={task.date}
                            estimated={task.estimated}
                        />
                    );
                })}

                <Heading type="h2" children="Tomorrow"></Heading>
                <ModalAdd visible={visibleModal} />
            </AppWrapper>
        </div>
    );
};

export default App;
