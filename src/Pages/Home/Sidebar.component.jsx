import jira2Logo from "/jira2.svg";
import kanbanBoard from "/kanban-board.svg";
import settings from "/settings.svg";
import backlog from "/backlog.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="w-64 h-full pt-11 shadow-inner px-3 border-r-2 bg-gray-50">
        <div className="flex items-center px-3 mb-8">
          <img src={jira2Logo} className="h-7 mr-2" />
          <div>
            <h2 className="-mb-[0.5px] text-sm font-semibold text-gray-600">Jira</h2>
            <p className="text-xs text-gray-500">Software Project</p>
          </div>
        </div>
        <ul className="flex flex-col gap-4">
          <li>
            <Link to={"/task"} className="flex items-center px-3 py-1 rounded-lg hover:bg-blue-100">
              <img src={backlog} className="h-7 mr-2" />
              <span>Backlog</span>
            </Link>
          </li>

          <li>
            <Link to={"/"} className="flex items-center px-3 py-1 rounded-lg hover:bg-blue-100">
              <img src={kanbanBoard} className="h-7 mr-2" />
              <span>Kanban Board</span>
            </Link>
          </li>
          <li>
            <Link to={"/project"} className="flex items-center px-3 py-1 rounded-lg hover:bg-blue-100">
              <img src={settings} className="h-7 mr-2" />
              <span>Project Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
