import { Route, Routes } from "react-router-dom";
// import Navigation from "./Navigation/Navigation";
import Home from "./components/Home/Home";
// import Login from "./components/Login/Login";
import About from "./components/About/About";
import Grocery from "./components/Grocery/Grocery";
import Attendance from "./components/Attendance/Attendance";
import FeeDetails from "./components/FeeDetails/FeeDetails";
import StudentDetails from "./components/StudentDetails/StudentDetails";
import DashBoard from "./components/Dashboard/DashBoard";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="std-details" element={<StudentDetails />}>
          <Route index element={<DashBoard />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="fee-details" element={<FeeDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
