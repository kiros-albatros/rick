import Popup from "reactjs-popup";
import "./Modal.scss";

const Modal = ({
	name,
	status,
	species,
	gender,
	image,
	location,
	episode,
	origin,
}) => {
	return (
		<Popup
			trigger={<button className="button"> Detail info </button>}
			modal
			nested
		>
			{(close) => (
				<div className="modal">
					<button className="close" onClick={close}>
						&times;
					</button>
					<div className="header">{name}</div>
					<div className="content">
						<img className="card__image" src={image} alt="" />
						<p className="card__row">status: {status}</p>
						<p className="card__row">species: {species}</p>
						<p className="card__row">gender: {gender}</p>
						<p className="card__row">location: {location}</p>
						<p className="card__row">origin: {origin}</p>
					</div>
				</div>
			)}
		</Popup>
	);
};

export default Modal;
