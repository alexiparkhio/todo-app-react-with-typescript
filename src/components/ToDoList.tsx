import React from 'react';
import './ToDoList.css'

interface ToDoListProps {
    items: { id: string, text: string }[];
    onDeleteToDo: (id: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = props => {
    return (
        <ul>
            {props.items.map(item => (
                <li key={item.id}>
                    <span>{item.text}</span>
                    <button onClick={props.onDeleteToDo.bind(null, item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ToDoList;