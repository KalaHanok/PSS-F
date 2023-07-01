import "./SubNav.css";
import { NavLink, Outlet } from "react-router-dom";

const SubNav = () => {
  return (
    <div className="subNav">
      <div className="subDiv">
        <NavLink className={"links subNavLinks"} to="dashboard">
          Bio Data
        </NavLink>
        <NavLink className={"links subNavLinks"} to={"attendance"}>
          Attendence
        </NavLink>
        <NavLink className={"links subNavLinks"} to={"fee-details"}>
          Fee Details
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default SubNav;
