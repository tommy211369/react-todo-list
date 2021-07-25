import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faListAlt } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrashAlt, faListAlt);

function App() {
  const [tabTasks, setTabTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  // input value updated
  const handleTextInput = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="content">
        {/* liste task */}
        <ul>
          {tabTasks.map((task, index) => {
            console.log("task :", task);
            const newTabTasks = [...tabTasks]; // copie of tabTasks (array)
            const newObjTask = { ...task }; // copie of task (object)

            return (
              <li key={index}>
                <div className="task">
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
                        // change checked value to false in newObjTask
                        newObjTask.checked = false;
                        // remove index from newTabTasks and replace by newObjTask
                        newTabTasks.splice(index, 1, newObjTask);
                        // state update
                        setTabTasks(newTabTasks);
                      }
                    }}
                  />
                  <p className={newObjTask.checked ? "task-off" : "task-on"}>
                    {newObjTask.titleTask}
                  </p>
                </div>

                {/* Trash button */}
                <div
                  className="trash"
                  onClick={() => {
                    // deleted task from array
                    newTabTasks.splice(index, 1);
                    // state updated
                    setTabTasks(newTabTasks);
                  }}
                >
                  <FontAwesomeIcon icon="trash-alt" />
                </div>
              </li>
            );
          })}
        </ul>

        {/* input value */}
        <div className="input-text">
          <input
            type="text"
            placeholder="new task"
            value={newTask}
            onChange={handleTextInput}
          />
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
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
