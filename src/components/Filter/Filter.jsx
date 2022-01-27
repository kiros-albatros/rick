import "./Filter.scss";

const Filter = () => {
	return (
		<div className="filter">
			<div className="filter__parameter">
				<h2 className="filter__parameter-name">Gender</h2>
				<ul className="filter__parameter-list">
					<li className="filter__parameter-item">
						<a className="filter__parameter-link" href="#">
							female
						</a>
					</li>
					<li className="filter__parameter-item">
						<a className="filter__parameter-link" href="#">
							male
						</a>
					</li>
					<li className="filter__parameter-item">
						<a className="filter__parameter-link" href="#">
							genderless
						</a>
					</li>
					<li className="filter__parameter-item">
						<a className="filter__parameter-link" href="#">
							unknown
						</a>
					</li>
				</ul>
			</div>

			<div className="filter__parameter">
				<h2 className="filter__parameter-name">Status</h2>
				<ul className="filter__parameter-list">
					<li className="filter__parameter-item">
						<a className="filter__parameter-link" href="#">
							dead
						</a>
					</li>
					<li className="filter__parameter-item">
						<a className="filter__parameter-link" href="#">
							alive
						</a>
					</li>
					<li className="filter__parameter-item">
						<a className="filter__parameter-link" href="#">
							unknown
						</a>
					</li>
				</ul>
			</div>

			<div className="filter__parameter">
				<h2 className="filter__parameter-name">Species</h2>
				<ul className="filter__parameter-list">
					<li className="filter__parameter-item">
						<a className="filter__parameter-link" href="#">
							Humanoid
						</a>
					</li>
					<li className="filter__parameter-item">
						<a className="filter__parameter-link" href="#">
							Animal
						</a>
					</li>
					<li className="filter__parameter-item">
						<a className="filter__parameter-link" href="#">
							Robot
						</a>
					</li>
					<li className="filter__parameter-item">
						<a className="filter__parameter-link" href="#">
							Alien
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Filter;
