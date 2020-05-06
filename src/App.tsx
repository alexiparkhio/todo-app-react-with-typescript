import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { ToDo } from './todo.model'
// import { Route } from 'react-router-dom'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([])

  const toDoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: `${Math.random()}`, text }]);
  }

  const deleteHandler = (toDoId: string) => {
    setTodos(prevToDos => {
      return prevToDos.filter(item => item.id !== toDoId)
    })
  }

  return (
    <div className="App">
      <NewToDo onAddToDo={toDoAddHandler} />
      <ToDoList items={todos} onDeleteToDo={deleteHandler} />
    </div>
  );
}

export default App;
