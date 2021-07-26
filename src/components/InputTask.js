import React from "react";

export default function InputTask({
  newTask,
  tabTasks,
  setNewTask,
  setTabTasks,
  axios,
}) {
  // input value updated
  const handleTextInput = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask) {
      const newTabTasks = [...tabTasks];
      const data = {
        titleTask: newTask,
        checked: false,
        created: Date.now(),
      };
      newTabTasks.push(data);
      setTabTasks(newTabTasks);
      setNewTask("");

      // try {
      //   const response = await axios.post("http://localhost:4000/tasks", data);
      //   console.log(response);
      // } catch (error) {
      //   alert(`${error} \nServeur en test`);
      // }
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
