import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<div className="suggestion">
				<h3>Veuillez sélectionner votre ville</h3>
			</div>
			<section className="home-container">
				<Link to="/choice/London" className="link">
					London
				</Link>
				<Link to="/choice/Brighton" className="link">
					Brighton
				</Link>
				<Link to="/choice/Liverpool" className="link">
					Liverpool
				</Link>
				<Link to="/choice/Manchester" className="link">
					Manchester
				</Link>
			</section>
		</>
	);
}
