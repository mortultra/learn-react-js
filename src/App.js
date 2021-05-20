import './App.css';
import ToDoItem from './components/ToDoItem';
import toDoData from './toDoData';

function App() {

  const toDoList = toDoData.map(item => {
    return <ToDoItem key={item.id} text={item.text} completed={item.completed} /> 
  })

  return (
    <div className="App">
      {toDoList}
    </div>
  );
}

export default App;
