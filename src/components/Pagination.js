import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/pagination.css";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  // eslint-disable-next-line no-unused-vars
  const [_,setSearchParams] = useSearchParams();

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="Pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
                setSearchParams({ page: number });
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
              }}
              to={number}
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
