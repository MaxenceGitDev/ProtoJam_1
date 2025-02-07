import { useEffect, useState } from "react";
import CardModal from "../components/CardModal";
import "../styles/Bals.css";

export default function Bals() {
  const EventsData = [
    {
      id: 1,
      name: "Queen's Night",
      location: "Londres",
      dateTime: "31 december 2025",
      image: "/images/bal_reine.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatum hic est exercitationem, rerum pariatur aliquam minus voluptate temporibus repudiandae harum saepe qui, dolore culpa accusantium minima impedit. Iure, mollitia!",
    },
    {
      id: 2,
      name: "Beginners Party",
      location: "Brighton",
      dateTime: "16 april 2025",
      image: "/images/bal_debutantes.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatum hic est exercitationem, rerum pariatur aliquam minus voluptate temporibus repudiandae harum saepe qui, dolore culpa accusantium minima impedit. Iure, mollitia!",
    },
    {
      id: 3,
      name: "Night of stars",
      location: "Liverpool",
      dateTime: "14 may 2025",
      image: "/images/bal_etoiles.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatum hic est exercitationem, rerum pariatur aliquam minus voluptate temporibus repudiandae harum saepe qui, dolore culpa accusantium minima impedit. Iure, mollitia!",
    },
    {
      id: 4,
      name: "Royal Dandy's",
      location: "Manchester",
      dateTime: "12 june 2025",
      image: "/images/bal_duc.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatum hic est exercitationem, rerum pariatur aliquam minus voluptate temporibus repudiandae harum saepe qui, dolore culpa accusantium minima impedit. Iure, mollitia!",
    },
    {
      id: 5,
      name: "The masked dance night",
      location: "Londres",
      dateTime: "7 february 2025",
      image: "/images/bal_masque.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatum hic est exercitationem, rerum pariatur aliquam minus voluptate temporibus repudiandae harum saepe qui, dolore culpa accusantium minima impedit. Iure, mollitia!",
    },
  ];

  const scrollSpeed = 1; // 👈 Ajuste la vitesse du scroll

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll");
    let scrollAmount = 0;
    let direction = 1;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed * direction;
        scrollContainer.scrollLeft = scrollAmount;

        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          direction = -1; // Inverse pour partir à gauche
        } else if (scrollContainer.scrollLeft <= 0) {
          direction = 1; // Inverse pour repartir à droite
        }
      }
    };

    const interval = setInterval(autoScroll, 30);

    return () => clearInterval(interval);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventInfo | null>(null);

  interface EventInfo {
    id: number;
    name: string;
    location: string;
    dateTime: string;
    image: string;
    description: string;
  }

  const openModal = (event: EventInfo) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <div className="events-container">
        <h1>Coming events</h1>
        <div className="scroll">
          <ul className="event-list">
            {EventsData.map((event) => (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <li
                key={event.id}
                className="event-card"
                onClick={() => openModal(event)}
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="event-image"
                />
                <h2 className="event-name">{event.name}</h2>
                <p className="event-infos">{event.location}</p>
                <p className="event-infos">{event.dateTime}</p>
              </li>
            ))}
          </ul>
        </div>
        {selectedEvent && (
          <CardModal
            isOpen={isModalOpen}
            onClose={closeModal}
            cardInfo={selectedEvent}
          />
        )}
      </div>
    </>
  );
}
