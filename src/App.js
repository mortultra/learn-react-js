import './App.css';
import ToDoItem from './components/ToDoItem';
import toDoData from './toDoData';
import { useState } from 'react'

function App() {

  const [ toDos, setToDos ] = useState(toDoData);

  const toDoList = toDos.map(item => {
    return <ToDoItem key={item.id} text={item.text} completed={item.completed} /> 
  })

  return (
    <div className="App">
      {toDoList}
    </div>
  );
}

export default App;
