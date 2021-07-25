import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [tabTasks, setTabTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // champs input
  const handleTextInput = (e) => {
    setNewTask(e.target.value);
  };

  // check box

  return (
    <div>
      {/* liste task */}
      <ul>
        {tabTasks.map((task, index) => {
          console.log("task :", task);
          const newTabTasks = [...tabTasks]; // copie of tabTasks (array)
          const newObjTask = { ...task }; // copie of task (object)
          return (
            <li key={index}>
              <input
                value={task.checked}
                type="checkbox"
                onChange={() => {
                  if (task.checked === false) {
                    // change checked value to true in newObjTask
                    newObjTask.checked = true;
                    // remove index from newTabTasks and replace by newObjTask
                    newTabTasks.splice(index, 1, newObjTask);
                    // state update
                    setTabTasks(newTabTasks);
                  } else if (task.checked === true) {
                    newObjTask.checked = false;
                    newTabTasks.splice(index, 1, newObjTask);
                    setTabTasks(newTabTasks);
                  }
                }}
              />
              <label className={newObjTask.checked ? "task-off" : "task-on"}>
                {newObjTask.titleTask}
              </label>
            </li>
          );
        })}
      </ul>

      {/* saisie task */}
      <div>
        <input type="text" value={newTask} onChange={handleTextInput} />
        <button
          onClick={() => {
            if (newTask) {
              const newTabTasks = [...tabTasks];
              newTabTasks.push({ titleTask: newTask, checked: false });
              setTabTasks(newTabTasks);
              setNewTask("");
            }
          }}
        >
          Add Task
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
