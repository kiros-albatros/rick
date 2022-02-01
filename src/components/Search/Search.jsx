import "./Search.scss";
const Search = ({ setSearch, setPageNumber }) => {
	return (
		<form className="search">
			<input
				onChange={(event) => {
					setPageNumber(1);
					setSearch(event.target.value);
				}}
				className="search__input"
				placeholder="name of character"
				type="search"
				name=""
				id=""
			/>
			<input
				onClick={(event) => event.preventDefault()}
				className="search__btn"
				type="submit"
				value="submit"
			/>
		</form>
	);
};

export default Search;
