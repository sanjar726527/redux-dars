import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { useSelector } from "react-redux";
import { addNewTask } from "../../redux/actions/todo";
import ListGroupItem from "../../components";
import { ListGroup } from "react-bootstrap";

export const TodoApp = () => {
  const [value, setValue] = useState("");

  const tasks = useSelector((state) => state.todo.tasks);
  const darkMode = useSelector((state) => state.layout.darkMode);

  console.log(tasks);
  console.log(darkMode);

  const handleAddNewTask = () => {
    if (value.trim() === "") return;
    addNewTask(value);
    setValue("");
  };

  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center shadow p-3 py-5 rounded mx-auto w-75">
        <h1 className="text-center">TodoApp</h1>
        <div className="rows d-flex align-items-center flex-1 p-0">
          <input
            className="form-control me-2"
            placeholder="wite new task"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="btn btn-primary" onClick={handleAddNewTask}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <ListGroup className="p-0 mt-3">
          {tasks.map((item, index) => (
            <ListGroupItem key={index} item={item} index={index} />
          ))}
        </ListGroup>
      </div>
    </div>
  );
};
