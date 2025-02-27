import { useState, useEffect } from 'react';
import todologo from './assets/todo-image.png';
import './app.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {

        const response = await fetch("https://jsonplaceholder.typicode.com/todos?");
        const data = await response.json();
        setTasks(data);
      } 
      
      catch (err) {
        console.error("getting error while fetching", err);
      }
    };
    
    fetchTasks();
  }, []);

  return (
    <div className="app-container">
      <div>
        <a
          href="https://ca.indeed.com/career-advice/career-development/daily-to-do-list"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={todologo} className="logo" alt="To-Do logo" />
        </a>
      </div>

      <h1>Make Your To-Do List :)</h1>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
