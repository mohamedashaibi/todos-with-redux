import './App.css';
import TodoList from './Components/TodoList'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from './Redux/Actions/action-types';

function App() {
  const [inputTask, setInputTask] = useState("");
  const selector = useSelector(state=>state.reducer.todos);
  const dispatcher = useDispatch();
  function handleChange(e){
    setInputTask(e.target.value)
  }
  function handleSave(){
    if(inputTask){
    dispatcher({type: ADD, payload: inputTask})
    setInputTask("")
    }else{
      alert("Please fill in the Task")
    }
  }
  return (
    <div className="App">
      <div className="input-div">
        <input placeholder="Add Task..." onChange={handleChange} value={inputTask}/>
        <button onClick={handleSave}>Save</button>
      </div>
      <TodoList/>
    </div>
  );
}

export default App;
