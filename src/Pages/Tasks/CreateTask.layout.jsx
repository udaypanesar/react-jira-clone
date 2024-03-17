import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "./Task.Slice";

const CreateTask = () => {
  const [formData, setFormData] = useState(null);
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSaveClick = () => {
    dispatch(createTask(formData));
  };
  return (
    <>
      <h2>Create Task</h2>
      <hr />

      <label>Project name</label>
      <input type="text" name="uProject" onChange={onInputChange} />
      <br />
      {/* This will be a dropdown */}
      <label>Task Type</label>
      <select name="uType" onChange={onInputChange}>
        <option value="task">New task</option>
        <option value="bug">Bug</option>
      </select>
      <br />
      <label>Short Summary</label>
      <input type="text" name="uSummary" onChange={onInputChange} />
      <br />
      <label>Description</label>
      <input type="text" name="uDescription" onChange={onInputChange} />
      <br />
      {/* This will be a dropdown */}
      <label>Status</label>
      <select name="uStatus"  onChange={onInputChange}>
        <option value="Backlog">Backlog</option>
        <option value="Todo">To do</option>
        <option value="InProgress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <br />
      <label>Assignees</label>
      <input type="text" name="uTeamMember" onChange={onInputChange} />
      <br />
      <label>Story Points</label>
      <input type="text" name="uStoryPoint" onChange={onInputChange} />
      <br />
      {/* This will be a dropdown */}
      <label>Priority</label>
      <select name="uPriority" onChange={onInputChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <br />
      <button onClick={onSaveClick}>Save</button>
    </>
  );
};

export default CreateTask;
