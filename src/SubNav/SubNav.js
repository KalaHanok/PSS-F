import "./SubNav.css";
import { NavLink } from "react-router-dom";

const SubNav = () => {
  return (
    <div className="subNav">
      <div className="subDiv">
        <NavLink className={"links subNavLinks"}>Bio Data</NavLink>
        <NavLink className={"links subNavLinks"}>Attendence</NavLink>
        <NavLink className={"links subNavLinks"}>Fee Details</NavLink>
      </div>
    </div>
  );
};

export default SubNav;
