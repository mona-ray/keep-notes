import React from 'react';
import ReactPaginate from 'react-paginate';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Pagination = ({ pageCount, onPageChange }) => (
  <ReactPaginate
    previousLabel={<GrFormPrevious />}
    nextLabel={<GrFormNext />}
    breakLabel={'...'}
    breakClassName={'break-me'}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={onPageChange}
    containerClassName={'pagination'}
    subContainerClassName={'pages pagination'}
    activeClassName={'active'}
  />
);

export default Pagination;
