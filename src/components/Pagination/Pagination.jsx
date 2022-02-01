import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
	let pageChange = (data) => {
		setPageNumber(data.selected + 1);
	};
	if (info) {
		return (
			<ReactPaginate
				onPageChange={pageChange}
				forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
				pageCount={info?.pages}
				nextLabel=">"
				previousLabel="<"
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
	} else {
		return "";
	}
};

export default Pagination;
