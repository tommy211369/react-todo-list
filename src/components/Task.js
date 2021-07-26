import React from "react";
import Trash from "./Trash";

export default function Task({
  index,
  task,
  setTabTasks,
  newTabTasks,
  newObjTask,
}) {
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

      <Trash
        index={index}
        newTabTasks={newTabTasks}
        setTabTasks={setTabTasks}
      />
    </li>
  );
}
