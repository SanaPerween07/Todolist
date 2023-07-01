import React, { useState } from 'react';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    setTodoList([...todoList, newTask]);
    setNewTask("");
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const deleteTask = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  const deleteIconStyle = {
    width: '24px', 
    height: '24px',
    cursor: 'pointer',
    marginLeft: '10x',
  };
  
  return (
    <div className="App">

      <div className="add-task">
        <input className="input" value={newTask} placeholder='Type here...' onChange={handleChange} />
        <button className="addtaskbtn" onClick={addTask} >ADD TASK</button>
      </div>
    
      <div className="list">
        {todoList.map((task, index) => (
          <div className="listItemStyle">
            <span key={index} style={{ marginRight: '200px' ,fontSize: '26px', textAlign: 'center', flex: 1 , fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>{task}</span>
            <img src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/56-512.png" alt="x" style={deleteIconStyle} onClick={()=>deleteTask(index)}/>
          </div> 
          ))}
      </div>
    
    </div>
  );
}

export default App;