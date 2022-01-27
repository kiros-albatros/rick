import "./Card.scss";
const Card = ({ name, status, species, gender, image }) => {
	return (
		<div className="card">
			<img className="card__image" src={image} alt="" />
			<p className="card__row">{name}</p>
			<p className="card__row">{status}</p>
			<p className="card__row">{species}</p>
			<p className="card__row">{gender}</p>
		</div>
	);
};

export default Card;
