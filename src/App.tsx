import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
