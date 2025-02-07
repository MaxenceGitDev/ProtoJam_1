import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
