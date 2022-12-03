import { GrPrevious, GrNext } from "react-icons/gr";

import "./pagination.scss";

interface PaginationProps {
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  onNext: () => void;
  onPageChange: (pageNumber: number) => void;
  onPrevious: () => void;
  totalPages: number;
}

export const Pagination = ({
  currentPage,
  hasNext,
  hasPrevious,
  onNext,
  onPageChange,
  onPrevious,
  totalPages,
}: PaginationProps) => {
  const pages = [...Array(totalPages).keys()].map((pageNumber, index) => (
    <li
      key={index}
      className={`pagination__item pagination__item--number ${
        currentPage === pageNumber + 1 ? "pagination__item--selected" : ""
      }`}
      onClick={() => onPageChange(pageNumber + 1)}
    >
      <button>{pageNumber + 1}</button>
    </li>
  ));

  return (
    <nav aria-label="pagination navigation" className="pagination">
      <ul className="pagination__list">
        {hasPrevious && (
          <li className="pagination__item" onClick={onPrevious}>
            <button>
              <GrPrevious />
            </button>
          </li>
        )}

        {pages}

        {hasNext && (
          <li className="pagination__item" onClick={onNext}>
            <button>
              <GrNext />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
