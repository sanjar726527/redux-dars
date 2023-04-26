import React, { useState } from "react";
import { editTask, removeTask, toggleTask } from "../redux/actions/todo";
import { faEdit, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import ListGroupItemWrapper from "./ListGroupItemWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";

export default function ListGroupItem({ item, index, ...props }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(item.title);
  const handleRemoveTask = () => {
    removeTask(index);
  };
  const handleChecked = (e) => {
    toggleTask(index, e.target.checked);
  };
  const saveItem = () => {
    editTask(index, text);
    setIsEdit(false);
  };
  return (
    <ListGroupItemWrapper
      className={`${item.completed && "completed"}`}
      {...props}
    >
      <Form.Check
        type="checkbox"
        className="me-2"
        checked={item.completed}
        onChange={handleChecked}
      />
      <input
        className="form-control title me-2"
        value={text}
        readOnly={!isEdit}
        onChange={(e) => setText(e.target.value)}
      />
      {!isEdit ? (
        <button
          className="btn btn-warning me-2"
          onClick={() => setIsEdit(true)}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
      ) : (
        <button className="btn btn-success me-2" onClick={saveItem}>
          <FontAwesomeIcon icon={faPen} />
        </button>
      )}
      <button className="btn btn-danger" onClick={handleRemoveTask}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </ListGroupItemWrapper>
  );
}
