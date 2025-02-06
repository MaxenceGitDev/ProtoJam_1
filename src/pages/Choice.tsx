import { Link } from "react-router-dom";
import "../styles/Choice.css";

export default function Choice() {
	return (
		<>
			<h1>Composant navbar</h1>
			<div className="city">
				<h2>Nom de ville "dynamique"</h2>
			</div>
			<section className="main-section">
				<section className="tea-section">
					<Link to="/teatime" className="selection">
						<h2>Tea time</h2>
					</Link>
				</section>
				<section className="bals-section">
					<Link to="/bals" className="selection">
						<h2>Events</h2>
					</Link>
				</section>
			</section>
		</>
	);
}
