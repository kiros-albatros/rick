import "./Card.scss";
const Card = ({ name, status, species, gender, image }) => {
	return (
		<div className="card">
			<img className="card__image" src={image} alt="" />
			<p className="card__row card__row--name">{name}</p>
			<span className={`card__row card__row--${status.toLowerCase()}`}>
				{status}
			</span>
			<br />
			<p className="card__row">{species}</p>
			<p className="card__row">{gender}</p>
		</div>
	);
};

export default Card;
