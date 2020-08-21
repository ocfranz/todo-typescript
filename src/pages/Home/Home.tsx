import React, { useState, ChangeEvent, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import { media } from "../../styles/Breakpoints";
import { RootState } from "../../reducers";
import Header from "../../modules/Header/Header";
import Heading from "../../components/Heading/Heading";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
import ModalAdd from "../../modules/ModalAdd/ModalAdd";
import { useSelector, useDispatch } from "react-redux";

const AppWrapper = styled.div`
    padding: 0px 20px;
    @media ${media.md} {
        margin: 0px 320px;
    }
`;

function App() {
    const date = new Date();
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
            <AppWrapper>
                <Header addTask={addTask} />
                <Heading type="h2" children="Today"></Heading>
                {tasks.map((task, index) => {
                    return (
                        <TodoListItem
                            key={index}
                            text={task}
                            estimated={30}
                            date={`${date.getDate()}/${
                                date.getMonth() + 1
                            }/${date.getFullYear()}`}
                            completed={true}
                        />
                    );
                })}

                <Heading type="h2" children="Tomorrow"></Heading>
                <ModalAdd visible={visibleModal} />
            </AppWrapper>
        </div>
    );
}

export default App;
