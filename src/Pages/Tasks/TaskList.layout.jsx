import { useSelector } from "react-redux";

const TaskList = () => {
  const taskList = useSelector((state) => state.Task.data);
  console.log("TaskList", taskList);
  return (
    <>
      <h2>Task List</h2>
      <table style={{ border: "1px solid white" }}>
        <thead>
          <tr>
            <th>Project</th>
            <th>Task Type</th>
            <th>Summary</th>
            <th>Status</th>
            <th>Member</th>
            <th>Points</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(taskList) &&
            taskList.map((item) => {
              return (
                <tr key={item.uDescription}>
                  <td>{item.uProject}</td>
                  <td> {item.uType}</td>
                  <td>{item.uSummary}</td>
                  <td>{item.uStatus}</td>
                  <td>{item.uTeamMember}</td>
                  <td>{item.uStoryPoint}</td>
                  <td>{item.uPriority}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default TaskList;
