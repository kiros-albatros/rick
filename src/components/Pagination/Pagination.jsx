import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
	let pageChange = (data) => {
		setPageNumber(data.selected + 1);
	};

	return (
		<ReactPaginate
			onPageChange={pageChange}
			pageCount={info?.pages}
			nextLabel="next >"
			previousLabel="< previous"
			pageClassName="page-item"
			pageLinkClassName="page-link"
			previousClassName="page-item"
			previousLinkClassName="page-link"
			nextClassName="page-item"
			nextLinkClassName="page-link"
			containerClassName="pagination"
			activeClassName="active"
		/>
	);
};

export default Pagination;
