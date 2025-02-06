import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<header>
				<h1>Wild Castle</h1>
			</header>
			<div className="suggestion">
				<h3>Veuillez sélectionner votre ville</h3>
			</div>
			<section className="home-container">
				<Link to="/choice" className="link">
					London
				</Link>
				<Link to="/choice" className="link">
					Brighton
				</Link>
				<Link to="/choice" className="link">
					Liverpool
				</Link>
				<Link to="/choice" className="link">
					Manchester
				</Link>
			</section>
		</>
	);
}
