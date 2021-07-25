import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faListAlt } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Header from "./components/Header";
import InputTask from "./components/InputTask";
import TasksList from "./components/TasksList";
import Footer from "./components/Footer";
library.add(faTrashAlt, faListAlt);

function App() {
  const [tabTasks, setTabTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="content">
        <TasksList tabTasks={tabTasks} setTabTasks={setTabTasks} />

        <InputTask
          newTask={newTask}
          tabTasks={tabTasks}
          setNewTask={setNewTask}
          setTabTasks={setTabTasks}
        />
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
