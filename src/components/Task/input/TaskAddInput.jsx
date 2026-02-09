import React from "react";
import "./TaskAddInput.css";
import { v4 as uuid } from "uuid";

const TaskAddInput = ({ inputText, setInputText, setTaskList, taskList }) => {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    // console.log(e);
    if (inputText === "") return;
    //カードを追加する。

    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    // console.log(inputText);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    // console.log(...taskList);
    // console.log(inputText);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
