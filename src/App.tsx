import React, { useState, ChangeEvent, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";

import Header from "./modules/Header/Header";
import Input from "./components/Input/Input";
import TodoListItem from "./components/TodoListItem/TodoListItem";

const AppWrapper = styled.div`
    margin: 0px 320px;
`;

function App() {
    const date = new Date();
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log(moment().format("dddd"));
    }, []);

    const handleOnButtonClick = () => {
        console.log("hello from this page");
    };
    const handleTodoAddInput = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { currentTarget } = event;
    };
    return (
        <div className="App">
            <AppWrapper>
                <Header />
                <Input
                    onChange={(event) => handleTodoAddInput(event)}
                    value={todoText}
                    placeholder="New Todo"
                />
                <TodoListItem
                    text="Make coffe"
                    estimated={30}
                    date={`${date.getDate()}/${
                        date.getMonth() + 1
                    }/${date.getFullYear()}`}
                    completed={true}
                />
                <TodoListItem
                    text="Walk dog around the park"
                    estimated={30}
                    date={`${date.getDate()}/${
                        date.getMonth() + 1
                    }/${date.getFullYear()}`}
                    completed={true}
                />
                <TodoListItem
                    text="Walk dog around the park"
                    estimated={90}
                    date={`${date.getDate()}/${
                        date.getMonth() + 1
                    }/${date.getFullYear()}`}
                    completed={true}
                />
            </AppWrapper>
        </div>
    );
}

export default App;
