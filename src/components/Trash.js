import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Trash({ index, newTabTasks, setTabTasks }) {
  return (
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
  );
}
