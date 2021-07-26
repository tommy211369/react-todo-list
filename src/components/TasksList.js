import React from "react";
import Task from "./Task";

export default function TasksList({ tabTasks, setTabTasks }) {
  return (
    <ul>
      {tabTasks.map((task, index) => {
        const newTabTasks = [...tabTasks]; // copie of tabTasks (array)
        const newObjTask = { ...task }; // copie of task (object)

        return (
          <Task
            index={index}
            task={task}
            setTabTasks={setTabTasks}
            newTabTasks={newTabTasks}
            newObjTask={newObjTask}
          />
        );
      })}
    </ul>
  );
}
