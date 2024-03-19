/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "./Task.Slice";
import { Button } from "@/components/ui/button";

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
  console.log("Task compo called");
  return (
    <>
      <div className="container my-auto flex justify-center py-8 mx-auto bg-gray-50">
        <div className="w-full  bg-white rounded-lg shadow-md sm:max-w-2xl">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-medium  text-gray-600">Create Issue</h1>
            <div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">Issue Type</label>
                <select className="bg-gray-100 border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5">
                  <option>Task</option>
                  <option>Bug</option>
                  <option>Story</option>
                </select>
              </div>

              <hr />

              <div className="mt-4 mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">Short summary</label>
                <input
                  type="text"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                <p className="mt-1 text-xs text-gray-500">Concisely summarize the issue in one or two sentences.</p>
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">Description</label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:border-blue-500"
                />
                <p className="mt-1 text-xs text-gray-500">Describe the issue in as much detail as you'd like..</p>
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">Reporter</label>
                <select className="bg-gray-100 border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5">
                  <option>User1</option>
                  <option>User2</option>
                  <option>User3</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">Assignees</label>
                <select className="bg-gray-100 border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5">
                  <option>User1</option>
                  <option>User2</option>
                  <option>User3</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">Priority</label>
                <select className="bg-gray-100 border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5">
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <p className="mt-1 text-xs text-gray-500">Priority in relation to other issues.</p>
              </div>

              <div className="flex justify-end gap-3">
              <Button>Create Issue</Button>
              <Button variant="ghost" >Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      <select name="uStatus" onChange={onInputChange}>
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
