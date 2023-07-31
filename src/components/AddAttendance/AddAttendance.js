import { useState } from "react";
import Navigation from "../../Navigation/Navigation";
import "./AddAttendance.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAttendance = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted", data);
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/addattendance/",
        data
      );
      console.log(res);
      localStorage.setItem("token", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      navigate("/");
    } catch (err) {
      console.log("Error occured", err);
    }
  };

  return (
    <>
      <Navigation />
      <div className="add-att">
        <form onSubmit={handleSubmit}>
          <h1 className="add-att-head">Add Attendance</h1>
          <div className="grp">
            <label htmlFor="std-id">Student Id</label>
            <input
              name="studentid"
              onChange={handleChange}
              type="text"
              id="std-id"
            />
          </div>
          <div className="grp">
            <label htmlFor="date">Date</label>
            <input name="date" onChange={handleChange} type="date" id="date" />
          </div>
          <div className="grp">
            <label htmlFor="isPresent">Present or Absent</label>
            <div className="attendance">
              <input
                name="ispresent"
                onChange={handleChange}
                type="checkbox"
                id="present"
                value="Yes"
              />
              Yes
              <input
                name="ispresent"
                onChange={handleChange}
                type="checkbox"
                id="absent"
                value="No"
              />
              No
            </div>
          </div>
          <input
            onClick={handleSubmit}
            className="btn"
            type="button"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};

export default AddAttendance;
