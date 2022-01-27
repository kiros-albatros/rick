import "./Cards.scss";
import Card from "../Card/Card";

const Cards = ({ apiData }) => {
	console.log(apiData);
	if (apiData) {
		return (
			<div className="cards">
				<h2>Cards</h2>
				<div className="cards__container">
					{apiData.map((element) => (
						<Card
							key={element.id}
							name={element.name}
							status={element.status}
							species={element.species}
							gender={element.gender}
							image={element.image}
						/>
					))}
				</div>
			</div>
		);
	} else {
		return "empty";
	}
};

export default Cards;
