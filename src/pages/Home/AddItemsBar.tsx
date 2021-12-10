import React, { useState } from "react";
import { Task } from "../../models/Task";
import "./AddItemsBar.css";

export interface AddItemsBarProps {
  onAddItem: (task: Task) => void;
}

const AddItemsBar = (props: AddItemsBarProps) => {
  const [text, setText] = useState<string>("");

  const addItem = () => {
    if (text.trim().length > 0) {
      const task = new Task(false, text.trim(), new Date());
      props.onAddItem(task);
    }
  };

  return (
    <div className="content-items">
      <div className="add-item-bar">
        <input onChange={(e) => setText(e.target.value)} />
        <button type="button" onClick={addItem}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default AddItemsBar;
