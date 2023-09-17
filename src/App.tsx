import React from 'react';
import './App.css';
import { useState } from 'react'
import { Task } from './components/Task';
import { PageTitle } from './components/PageTitle';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  return (
    <div className="App">
        <div>
          <PageTitle />
        </div>
      <div className='addTask'>
        <input />
        <button>Add Task</button>
      </div>
      <div className='list'>

      </div>
      
    </div>
  );
}

export default App;
