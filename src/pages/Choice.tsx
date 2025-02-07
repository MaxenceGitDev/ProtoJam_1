import { Link, useParams } from "react-router-dom";
import "../styles/Choice.css";

export default function Choice() {
	const { city } = useParams();
	return (
		<>
			<div className="city">
				<h2>Make your choice</h2>
			</div>
			<section className="main-section">
				<section className="tea-section">
					<Link to={`/teatime/${city}`} className="selection">
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
