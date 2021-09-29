import React, {useRef} from "react";
import './NewTodo.css'

type AddHandler = {
    handler: (text: string) => void;
}

const NewTodo: React.FC<AddHandler> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.handler(enteredText);
    };
    return <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text">Todo</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">Todo追加</button>
    </form>
};
export default NewTodo;