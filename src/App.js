import './App.css';
import ToDoItem from './components/ToDoItem';
import toDoData from './toDoData';
import { useState } from 'react';
// import Events from './PracticeComps/Events';
// import ChangingState from "./PracticeComps/ChangingState";

function App() {

  const [ toDos, setToDos ] = useState(toDoData);

  const handleCheck = (id) => {
    console.log("Checked", id);
  }

  const toDoList = toDos.map(item => {
    return <ToDoItem key={item.id} text={item.text} completed={item.completed} handleCheck={handleCheck}/> 
  })

  return (
    <div className="App">
      {toDoList}
    </div>
  );
}

export default App;
