import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ darkMode, setDarkMode }) {
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="header">
      <div>
        <FontAwesomeIcon icon="list-alt" className="todo-icon" />
        <h1>Todo List</h1>
      </div>

      {/* darkMode button */}
      {darkMode ? (
        <button onClick={handleDarkMode}>Light Mode</button>
      ) : (
        <button onClick={handleDarkMode}>Dark Mode</button>
      )}
    </div>
  );
}
