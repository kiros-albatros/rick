import { useState, useEffect } from "react";
import "./App.scss";
import Filter from "./components/Filter/Filter";
import Cards from "./components/Cards/Cards";
import logo from "./images/logo.png";

function App() {
	let [pageNumber, setpageNumber] = useState(1);
	let [apiData, setApiData] = useState([]);
	console.log(apiData);
	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
	useEffect(() => {
		(async function () {
			let data = await fetch(api).then((result) => result.json());
			setApiData(data);
		})();
	}, [api]);
	return (
		<div className="main">
			<h1 className="main__title">Rick and Morty Characters</h1>
			<div className="main__wrapper">
				<Filter />
				<Cards apiData={apiData.results} />
			</div>
		</div>
	);
}

export default App;
