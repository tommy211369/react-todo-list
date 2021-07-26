import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TasksList({ tabTasks, setTabTasks }) {
  return (
    <ul>
      {tabTasks.map((task, index) => {
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
  );
}
