import { Route, Routes } from "react-router-dom";
// import Navigation from "./Navigation/Navigation";
import Home from "./components/Home/Home";
// import Login from "./components/Login/Login";
import About from "./components/About/About";
import Grocery from "./components/Grocery/Grocery";
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
        <Route path="/std-details" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;
