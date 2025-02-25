import { useState } from 'react';
import todologo from './assets/todo-image.png';
import './app.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    let newTask = [...tasks]; 
    delete newTask[index];    
    let updatedTask = [] 
    for (let i = 0; i<newTask.length; i++){
      if (newTask[i] !== undefined) {
        updatedTask.push(newTask[i])
      }
    }
    setTasks(updatedTask)
  };

  return (
    <div className="app-container">
      <div>
        <a href="https://ca.indeed.com/career-advice/career-development/daily-to-do-list" target="_blank">
          <img src={todologo} className="logo" alt="To-Do logo" />
        </a>
      </div>

      <h1>Make Your To-Do-List :)</h1>

      <div>
        <input
          className="input-task"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask} className="insert-btn">
          Insert
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <input type="checkbox" />
            <span>{task}</span>
            <button onClick={() => deleteTask(index)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

