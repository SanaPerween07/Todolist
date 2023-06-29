import React, { useState } from 'react';
import './App.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrash } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    setTodoList([...todoList, newTask]);
    setNewTask("");// Clear the input field after adding a task
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const deleteTask = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  const deleteIconStyle = {
    width: '24px', // Adjust the width to the desired size
    height: '24px',
    cursor: 'pointer',
    marginLeft: '10x',
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '400px',
    padding: '10px',
    borderRadius: '15px',
    marginBottom: '10px',
    
  };

  
  return (
    <div className="App">

      

      <div className="add-task">
      
        <input className="input" value={newTask} onChange={handleChange} />
        
        <button className="addtaskbtn" onClick={addTask} >ADD TASK</button>
      </div>

      <div className="list">
        
        {todoList.map((task, index) => (
          <div key={index} style={listItemStyle}>
            <span style={{ marginRight: '200px' ,fontSize: '26px', textAlign: 'center', flex: 1 , fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>{task}</span>
            <img src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/56-512.png" alt="x" style={deleteIconStyle} onClick={()=>deleteTask(index)}/>
          </div> 
          ))}
      </div>
      

    </div>
  );
}

export default App;