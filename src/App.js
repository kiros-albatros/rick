import { useState, useEffect } from "react";
import "./App.scss";
import Filter from "./components/Filter/Filter";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
	let [pageNumber, setPageNumber] = useState(1);
	let [status, updateStatus] = useState("");
	//console.log(status);
	let [gender, updateGender] = useState("");
	let [species, updateSpecies] = useState("");
	let [apiData, setApiData] = useState([]);
	let { info, results } = apiData;
	let [search, setSearch] = useState("");
	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&gender=${gender}&species=${species}`;
	useEffect(() => {
		(async function () {
			let data = await fetch(api).then((result) => result.json());
			setApiData(data);
		})();
	}, [api]);
	return (
		<div className="main">
			<h1 className="main__title">Rick and Morty Characters</h1>
			<Search setSearch={setSearch} setPageNumber={setPageNumber} />
			<div className="main__wrapper">
				<Filter
					updateStatus={updateStatus}
					updateGender={updateGender}
					updateSpecies={updateSpecies}
					setPageNumber={setPageNumber}
				/>
				<Cards apiData={apiData.results} />
			</div>
			<Pagination
				info={info}
				pageNumber={pageNumber}
				setPageNumber={setPageNumber}
			/>
		</div>
	);
}

export default App;
