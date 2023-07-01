import "./Attendance.css";
import attendance from "./attendance.png";
const Attendance = () => {
  const presentDays = 255;
  const totalDays = 280;

  return (
    <div className="attendance">
      <div className="attendance-block">
        <img src={attendance} alt="" />
        <p className="big">Attendance</p>{" "}
        <p className="small">{Math.ceil((presentDays * 100) / totalDays)}%</p>
      </div>
      <div className="attendance-block1">
        <img src={attendance} alt="" />
        <p className="big">Total Days</p> <p className="small">{totalDays}</p>
      </div>
      <div className="attendance-block2">
        <img src={attendance} alt="" />
        <p className="big">Present</p> <p className="small">{presentDays}</p>
      </div>
    </div>
  );
};

export default Attendance;
