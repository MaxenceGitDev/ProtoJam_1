import Modal from "react-modal";
import "../styles/CardModal.css";

Modal.setAppElement("#root");

interface EventInfo {
	id: number;
	name: string;
	location: string;
	dateTime: string;
	image: string;
	description: string;
}

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	cardInfo: EventInfo;
}

const CardModal = ({ isOpen, onClose, cardInfo }: ModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel="Event Information"
			className="ReactModal__Content" // Classe pour le contenu de la modale
			overlayClassName="ReactModal__Overlay" // Classe pour l'overlay
		>
			<div className="modal-content">
				<h2>{cardInfo.name}</h2>
				<img src={cardInfo.image} alt={cardInfo.name} />
				<p>
					Great castle of :{cardInfo.location}
					<br />
					Save the Date: {cardInfo.dateTime}
				</p>
				<p>{cardInfo.description}</p>
				<button onClick={onClose} className="modal-close-button" type="button">
					Close
				</button>
			</div>
		</Modal>
	);
};

export default CardModal;
