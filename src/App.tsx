import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
