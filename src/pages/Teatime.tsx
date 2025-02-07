import { useParams } from "react-router-dom";
import "../styles/Teatime.css";
import { Link } from "react-router-dom";

export default function Teatime() {
	const { city } = useParams();
	const TeaData = [
		{
			id: 1,
			name: "The Kensington Manor",
			location: "London",
			dateTime: "Sundays at 3:00 PM",
			image: "/images/kensington_manor.jpg",
			description:
				"Enjoy an exquisite afternoon tea experience at The Kensington Manor, a historic Georgian estate in the heart of London. Indulge in freshly baked scones, delicate pastries, and a fine selection of teas in an elegant drawing-room with a view of the lush gardens.",
		},
		{
			id: 2,
			name: "Chatsworth Castle Tea",
			location: "London",
			dateTime: "Sundays at 3:30 PM",
			image: "/images/chatsworth_castle.jpg",
			description:
				"Located in the famous Chatsworth Castle, this tea room offers a majestic tea experience with a selection of rare blends and homemade delicacies. Sip your tea in a grand hall adorned with tapestries and chandeliers, surrounded by centuries of history.",
		},
		{
			id: 3,
			name: "The Palace Tea House",
			location: "London",
			dateTime: "Daily at 2:00 PM",
			image: "/images/buckingham_palace.jpg",
			description:
				"Step into luxury at the Buckingham Palace Tea Room, where you can experience royal tea service. Enjoy an elegant selection of teas, sandwiches, and scones with jam and cream, all while overlooking the palace gardens.",
		},
		{
			id: 4,
			name: "The Tower Manor Tea",
			location: "London",
			dateTime: "Friday from 3:00 PM to 6:00 PM",
			image: "/images/tower_bridge.jpg",
			description:
				"Experience the grandeur of London from the Tower Bridge Tea Lounge. Here, you can savor traditional afternoon tea with spectacular views of the Thames River and the city skyline, blending history with culinary delight.",
		},
		{
			id: 5,
			name: "Royal Pavilion",
			location: "Brighton",
			dateTime: "Daily from 2:00 PM to 5:00 PM",
			image: "/images/brighton_pavilion.jpg",
			description:
				"Step into a world of regal charm at the Brighton Royal Pavilion, where you can sip on aromatic teas beneath intricate chandeliers. The venue's unique Indo-Saracenic architecture provides a breathtaking setting for an unforgettable tea time experience.",
		},
		{
			id: 6,
			name: "Brighton Beach House",
			location: "Brighton",
			dateTime: "Weekends at 1:00 PM",
			image: "/images/brighton_beach.jpg",
			description:
				"Enjoy your tea with the soothing sound of waves at the Brighton Beach Tea House. This charming spot offers a relaxed atmosphere where you can enjoy a variety of teas and light bites with an ocean view.",
		},
		{
			id: 7,
			name: "The Lanes Tea Room",
			location: "Brighton",
			dateTime: "Every day 10:00 AM to 4:00 PM",
			image: "/images/the_lanes.jpg",
			description:
				"Nestled in the historic Lanes of Brighton, this tea room offers a cozy, intimate setting. Perfect for enjoying a traditional English tea with friends, surrounded by quaint shops and cobblestone streets.",
		},
		{
			id: 8,
			name: "Brighton Pier Experience",
			location: "Brighton",
			dateTime: "Saturdays at 3:30 PM",
			image: "/images/brighton_pier.jpg",
			description:
				"Experience tea with a twist at the Brighton Pier. This unique venue offers tea service with live music and panoramic sea views, making your tea time an event to remember.",
		},
		{
			id: 9,
			name: "The Earl's Manor",
			location: "Liverpool",
			dateTime: "Fridays & Sundays at 4:00 PM",
			image: "/images/earls_manor.jpg",
			description:
				"Nestled in the countryside, The Earl’s Manor House offers a traditional afternoon tea served in a grand Victorian lounge. Enjoy an assortment of fine teas, finger sandwiches, and rich clotted cream in a setting filled with antique furniture and roaring fireplaces.",
		},
		{
			id: 10,
			name: "Albert Dock Garden",
			location: "Liverpool",
			dateTime: "Daily 11:00 AM to 6:00 PM",
			image: "/images/albert_dock.jpg",
			description:
				"Savor your tea at the scenic Albert Dock, where history meets modernity. This tea garden provides an eclectic mix of teas and treats, with views of the waterfront and Liverpool's bustling maritime heritage.",
		},
		{
			id: 11,
			name: "The Cavern Club Lounge",
			location: "Liverpool",
			dateTime: "Weekends at 2:00 PM",
			image: "/images/cavern_club.jpg",
			description:
				"Experience Liverpool's musical history with a twist of tea culture at The Cavern Club Tea Lounge. Here, you can enjoy a variety of teas and live music, reflecting the city's vibrant cultural scene.",
		},
		{
			id: 12,
			name: "Mersey View House",
			location: "Liverpool",
			dateTime: "Every day at 3:00 PM",
			image: "/images/mersey_view.jpg",
			description:
				"Overlooking the River Mersey, this tea house offers a serene setting to enjoy your tea. With its wide selection of teas and homemade pastries, it's the perfect spot for a relaxing afternoon.",
		},
		{
			id: 13,
			name: "Duchess House",
			location: "Manchester",
			dateTime: "Every day from 2:30 PM to 5:30 PM",
			image: "/images/duchess_house.jpg",
			description:
				"Experience the sophistication of the 18th century at Duchess House, a beautifully restored bourgeois home where afternoon tea is served with vintage porcelain and live classical music. A perfect spot for a refined tea gathering with an aristocratic touch.",
		},
		{
			id: 14,
			name: "The Cotton Castle",
			location: "Manchester",
			dateTime: "Monday to Saturday at 4:00 PM",
			image: "/images/cotton_exchange.jpg",
			description:
				"Step back in time at The Cotton Exchange, where you can enjoy tea amidst historic surroundings. This venue combines Manchester's industrial past with a modern tea service, offering a unique afternoon experience.",
		},
		{
			id: 15,
			name: "Castlefield Tea Gardens",
			location: "Manchester",
			dateTime: "Daily from 12:00 PM to 5:00 PM",
			image: "/images/castlefield.jpg",
			description:
				"Located in the historic Castlefield area, these tea gardens offer a tranquil escape in the heart of the city. Enjoy a selection of teas and light refreshments while taking in the scenic views of the canal.",
		},
		{
			id: 16,
			name: "Northern Quarter House",
			location: "Manchester",
			dateTime: "Every day from 11:00 AM to 7:00 PM",
			image: "/images/northern_quarter.jpg",
			description:
				"Immerse yourself in Manchester's creative vibe at the Northern Quarter Tea House. This trendy spot features a modern twist on traditional tea service, with a menu that celebrates local flavors and arts.",
		},
	];

	const filteredData = TeaData.filter(
		(place) => place.location.toLowerCase() === city?.toLowerCase(),
	);

	return (
		<>
			<div className="tea-time-container">
				<h1>Our Tea time places in {city}</h1>
				<div className="scroll">
					<ul className="tea-list">
						{filteredData.map((place) => (
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
