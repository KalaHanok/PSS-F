import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Grocery from "./components/Grocery/Grocery";

function App() {
  return (
    <>
      <Home />
      <Login />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/Grocery" element={<Grocery />} />
      </Routes>
    </>
  );
}

export default App;
