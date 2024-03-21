import jiraLogo from "/jira.svg";
import profilePic from "/person1.jpg";

const Navbar = () => {
  return (
    <div className="z-50 w-full bg-white border-b">
      <div className="py-2 px-3">
        <div className="flex items-center justify-between">
          <div className="flex px-3">
            <img src={jiraLogo} className="h-7 me-3" />
            <span className="text-xl font-bold">Jira</span>
          </div>
          <div>
            <img className="w-8 h-8 rounded-full" src={profilePic} alt="Rounded avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
