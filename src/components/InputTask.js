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

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask) {
      const newTabTasks = [...tabTasks];
      newTabTasks.push({ titleTask: newTask, checked: false });
      setTabTasks(newTabTasks);
      setNewTask("");
    }
  };

  return (
    <div className="input-text">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="new task"
          value={newTask}
          onChange={handleTextInput}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </form>
    </div>
  );
}
