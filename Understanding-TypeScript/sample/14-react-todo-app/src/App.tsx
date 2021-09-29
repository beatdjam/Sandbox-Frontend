import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {TodoModel} from "./components/todo.model";

const App: React.FC = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);
    const todoAddHandler = (text: string) => {
        setTodos(prev => [...prev, {id: Math.random().toString(), text: text}]);
    };

    const todoDeleteHandler = (todoId: string) => {
        setTodos(prevTodos => prevTodos.filter(it => it.id !== todoId));
    }

    return <div className="App">
        <NewTodo handler={todoAddHandler}/>
        <TodoList items={todos} handler={todoDeleteHandler}/>
    </div>;
}

export default App;