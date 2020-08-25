import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { RootState } from "../../reducers";
import Header from "../../modules/Header/Header";
import Heading from "../../components/Heading/Heading";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
import ModalAdd from "../../modules/ModalAdd/ModalAdd";
import { useSelector, useDispatch } from "react-redux";
import GridSimple from "../../components/SimpleGrid/SimpleGrid";
import EmptyDisplay from "../../components/EmptyDisplay/EmptyDisplay";
import { Task } from "../../reducers/tasksReducer";
import { filterTasks } from "../../helpers/filterTasks";
const App = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasksReducer.tasks);
    const visibleModal = useSelector(
        (state: RootState) => state.uiReducer.showModalAdd
    );
    const addTask = (task: string) => {
        dispatch({ type: "ADD_TASK", payload: task });
    };

    const drawTodayTasks = () => {
        let temp: any[] = [];
        const todayTasks: any[] = filterTasks(tasks, "today");
        todayTasks.map((task) => {
            temp.push(
                <TodoListItem
                    id={task.id}
                    text={task.text}
                    completed={task.isCompleted}
                    date={task.date}
                    estimated={task.estimated}
                />
            );
        });
        if (temp.length === 0) return <EmptyDisplay dayName="today" />;
        return temp;
    };
    const drawTomorrowTasks = () => {
        let temp: any[] = [];
        const todayTasks: any[] = filterTasks(tasks, "tomorrow");
        todayTasks.map((task) => {
            temp.push(
                <TodoListItem
                    id={task.id}
                    text={task.text}
                    completed={task.isCompleted}
                    date={task.date}
                    estimated={task.estimated}
                />
            );
        });
        if (temp.length === 0) return <EmptyDisplay dayName="tomorrow" />;
        return temp;
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
            <GridSimple
                children={
                    <>
                        <Header addTask={addTask} />
                        <Heading type="h2" children="Today"></Heading>
                        {drawTodayTasks()}
                        <Heading type="h2" children="Tomorrow"></Heading>
                        {drawTomorrowTasks()}
                    </>
                }
            ></GridSimple>{" "}
            <ModalAdd visible={visibleModal} />
        </div>
    );
};

export default App;
