import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/pagination.css";
import { Link, useSearchParams } from "react-router-dom";
export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  const [searchParams, setSearchParams] = useSearchParams();
  // const showPage = searchParams.get('page') === 'number'

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
                setSearchParams({page: number})
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
