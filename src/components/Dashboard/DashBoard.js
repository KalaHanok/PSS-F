import { useEffect, useState } from "react";
import "./DashBoard.css";
import axios from "axios";

const DashBoard = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/profileinfo/", {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwMzYyOTY0LCJpYXQiOjE2OTAzNTkzNjQsImp0aSI6ImU0N2QxMjNhODJlZDQyMWU5ZWJiZmM5N2QwYjdlZDVlIiwidXNlcl9pZCI6Mn0.BSQ5XG93ChReQnrLMq5KbciPloeEdpRF5ClG8cxM2T8`,
          },
        });
        console.log(res.data);
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="part1">
          <img src={user.profile_pic} alt="pp" />
          <div className="name">
            <p>{`${user.first_name} ${user.last_name}`}</p>
            <small>class</small>
          </div>
        </div>

        <div className="part2">
          <div className="subpart1">
            <h1 style={{ borderBottom: "3px solid  white" }}>
              Personal Information
            </h1>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                className="input"
                readOnly
                value={user.phone_num}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="input"
                readOnly
                value={user.address}
              />
            </div>
            <div className="form-group">
              <label>Father Name</label>
              <input type="text" className="input" readOnly value={""} />
            </div>
            <div className="form-group">
              <label>Mother Name</label>
              <input type="text" className="input" readOnly value={""} />
            </div>
          </div>

          <div className="subpart2">
            <h1 style={{ borderBottom: "3px solid white" }}>
              Education Info:{" "}
            </h1>
            <div className="form-group">
              <label>School Name</label>
              <input type="text" className="input" readOnly value={""} />
            </div>

            <div className="form-group">
              <label>Intermediate College Name</label>
              <input type="text" className="input" readOnly value={""} />
            </div>

            <div className="form-group">
              <label>Diploma College Name</label>
              <input type="text" className="input" readOnly value={""} />
            </div>

            <div className="form-group">
              <label>BTech College Name</label>
              <input type="text" className="input" readOnly value={""} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
