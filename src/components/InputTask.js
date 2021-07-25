import React from "react";

export default function InputTask({
  newTask,
  tabTasks,
  setNewTask,
  setTabTasks,
}) {
  // input value updated
  const handleTextInput = (e) => {
    setNewTask(e.target.value);
  };

  return (
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
  );
}
