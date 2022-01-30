import "./Filter.scss";
import { useCallback } from "react";

const Filter = ({
	updateStatus,
	updateGender,
	updateSpecies,
	setPageNumber,
}) => {
	let filterData = {
		Gender: ["female", "male", "genderless", "unknown"],
		Status: ["dead", "alive", "unknown"],
		Species: ["Humanoid", "Animal", "Robot", "Alien", "unknown"],
	};

	//const parameters = document.querySelectorAll(".filter__parameter-item");

	let filterDataKeys = Object.keys(filterData);

	function reset() {
		updateStatus("");
		updateGender("");
		updateSpecies("");
		setPageNumber(1);

		let items = document.querySelectorAll(".filter__parameter-item");
		items.forEach((element) => {
			element.classList.remove("filter__parameter-item--active");
		});
	}

	const chooseParameter = useCallback(
		(parameter, item) => (event) => {
			const listName = document.querySelector(
				"." + parameter.toLowerCase()
			);
			const parameters = listName.querySelectorAll(
				".filter__parameter-item"
			);
			parameters.forEach((element) => {
				element.classList.remove("filter__parameter-item--active");
			});
			//	event.target.style.color = "red";
			event.target.classList.add("filter__parameter-item--active");
			//	alert(item);
			if (parameter === "Gender") {
				updateGender(item);
			} else if (parameter === "Status") {
				updateStatus(item);
			} else if (parameter === "Species") {
				updateSpecies(item);
			}
			setPageNumber(1);
		},
		[]
	);

	return (
		<div className="filter">
			<h2>Filter</h2>
			<div className="filter__parameters">
				{filterDataKeys.map((parameter) => (
					<div
						key={parameter}
						className={`filter__parameter-wrapper ${parameter.toLowerCase()}`}
					>
						<h3 className="filter__paramter-name">{parameter}</h3>
						<ul className="filter__parameter-list">
							{filterData[parameter].map((item) => (
								<li
									key={item}
									className="filter__parameter-item"
									href={item.toLowerCase()}
									onClick={chooseParameter(parameter, item)}
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				))}
				<button onClick={reset} className="filter__reset">
					Reset
				</button>
			</div>
		</div>
	);
};

export default Filter;
