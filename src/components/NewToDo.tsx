import React, { useRef } from 'react';
import './NewToDo.css'

type NewToDoProps = {
    onAddToDo: (text: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = ({ onAddToDo }) => {
    const textRef = useRef<HTMLInputElement>(null);

    const toDoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = textRef.current!.value;

        onAddToDo(enteredText);
    };

    return (
        <form onSubmit={toDoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">ToDo Text</label>
                <input type="text" id="todo-text" ref={textRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    )
}

export default NewToDo;