import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const PaginationMarkup = ({ data }) => {
  const [activePage, setActivePage] = useState(1);
  const handlePageChange = () => {
    
  }
  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={data.totalDocs}
      marginPagesDisplayed={2}
      pageRangeDisplayed={data.totalPages}
      onPageChange={() => handlePageChange()}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
  )
}
export default PaginationMarkup;