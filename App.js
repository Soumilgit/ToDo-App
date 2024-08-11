import React, { useState } from 'react';
import './App.css'; 
function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = { id: Date.now(), text: inputValue, isCompleted: false };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const toggleVisibility = () => {
    setTasks(tasks.filter(task => !task.isCompleted));
  };

  const resetTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          className="input-field"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTask} className="button">Add Task</button>
        <button onClick={toggleVisibility} className="toggle-visibility-button">Toggle Visibility</button>
        <button onClick={resetTasks} className="reset-tasks-button">Reset Tasks</button>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="task-item">
              {task.isCompleted ? <s className="completed-text">{task.text}</s> : task.text}
              <button onClick={() => toggleCompletion(task.id)} className="mark-complete-button">Mark Complete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

