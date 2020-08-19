import React, { useState, ChangeEvent, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import { media } from "../../styles/Breakpoints";

import Header from "../../modules/Header/Header";
import Heading from "../../components/Heading/Heading";
import TodoListItem from "../../components/TodoListItem/TodoListItem";
import ModalAdd from "../../modules/ModalAdd/ModalAdd";
const AppWrapper = styled.div`
    padding: 0px 20px;
    @media ${media.md} {
        margin: 0px 320px;
    }
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
                <Heading type="h2" children="Today"></Heading>

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
                <Heading type="h2" children="Tomorrow"></Heading>
                <ModalAdd visible={true} />
            </AppWrapper>
        </div>
    );
}

export default App;
