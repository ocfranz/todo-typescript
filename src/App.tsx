import React, { useState, ChangeEvent } from "react";

import Header from "./modules/Header/Header";
import Input from "./components/Input/Input";

function App() {
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([]);
    const handleOnButtonClick = () => {
        console.log("hello from this page");
    };
    const handleTodoAddInput = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { currentTarget } = event;
    };
    return (
        <div className="App">
            <Header />
            <Input
                onChange={(event) => handleTodoAddInput(event)}
                value={todoText}
                placeholder="New Todo"
            />
        </div>
    );
}

export default App;
