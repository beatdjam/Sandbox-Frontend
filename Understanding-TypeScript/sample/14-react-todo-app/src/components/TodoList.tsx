import React from "react";
import {TodoModel} from "./todo.model";
import './TodoList.css'

interface TodoListProps {
    items: TodoModel[];
    handler: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
    return <ul>
        {props.items.map(todo =>
            <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={props.handler.bind(null, todo.id)}>削除</button>
            </li>
        )}
    </ul>
};
export default TodoList;