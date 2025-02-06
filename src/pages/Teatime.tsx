import "../styles/Teatime.css";
import { Link } from "react-router-dom";

export default function Teatime() {
	const TeaData = [
		{
			id: 1,
			name: "The Kensington Manor",
			location: "London",
			dateTime: "Every Saturday & Sunday at 3:00 PM",
			image: "/images/kensington_manor.jpg",
			description:
				"Enjoy an exquisite afternoon tea experience at The Kensington Manor, a historic Georgian estate in the heart of London. Indulge in freshly baked scones, delicate pastries, and a fine selection of teas in an elegant drawing-room with a view of the lush gardens.",
		},
		{
			id: 2,
			name: "Royal Pavilion",
			location: "Brighton",
			dateTime: "Daily from 2:00 PM to 5:00 PM",
			image: "/images/brighton_pavilion.jpg",
			description:
				"Step into a world of regal charm at the Brighton Royal Pavilion, where you can sip on aromatic teas beneath intricate chandeliers. The venue’s unique Indo-Saracenic architecture provides a breathtaking setting for an unforgettable tea time experience.",
		},
		{
			id: 3,
			name: "The Earl’s Manor House",
			location: "Liverpool",
			dateTime: "Fridays & Sundays at 4:00 PM",
			image: "/images/earls_manor.jpg",
			description:
				"Nestled in the countryside, The Earl’s Manor House offers a traditional afternoon tea served in a grand Victorian lounge. Enjoy an assortment of fine teas, finger sandwiches, and rich clotted cream in a setting filled with antique furniture and roaring fireplaces.",
		},
		{
			id: 4,
			name: "Duchess House",
			location: "Manchester",
			dateTime: "Every weekend from 2:30 PM to 5:30 PM",
			image: "/images/duchess_house.jpg",
			description:
				"Experience the sophistication of the 18th century at Duchess House, a beautifully restored bourgeois home where afternoon tea is served with vintage porcelain and live classical music. A perfect spot for a refined tea gathering with an aristocratic touch.",
		},
		{
			id: 5,
			name: "Chatsworth Castle Tea",
			location: "London",
			dateTime: "Wednesdays to Sundays at 3:30 PM",
			image: "/images/chatsworth_castle.jpg",
			description:
				"Located in the famous Chatsworth Castle, this tea room offers a majestic tea experience with a selection of rare blends and homemade delicacies. Sip your tea in a grand hall adorned with tapestries and chandeliers, surrounded by centuries of history.",
		},
	];

	return (
		<>
			<div className="tea-time-container">
				<h1>Our Tea time places</h1>
				<div className="scroll">
					<ul className="tea-list">
						{TeaData.map((place) => (
							<li key={place.id} className="tea-card">
								<img src={place.image} alt={place.name} className="tea-image" />
								<h2 className="tea-name">{place.name}</h2>
								<p className="tea-info">{place.dateTime}</p>
							</li>
						))}
					</ul>
				</div>
				<Link to="/reservation">
					<button type="button" className="book-button">
						Book now
					</button>
				</Link>
			</div>
		</>
	);
}
