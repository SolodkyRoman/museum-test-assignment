import React from 'react';
import './pagination.css';

const Pagination = () => {
  return (
    <nav aria-label="Page navigation" className="navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item disabled">
          <a className="page-link" href="#">
            ...
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
      <div className="pagination__number">
        <span className="pagination__number__show">Show:</span> 
        <button type="button" className="btn btn-primary">10</button>
        <button type="button" className="btn btn-link">50</button>
        <button type="button" className="btn btn-link">100</button>
      </div>
    </nav>
  );
};

export default Pagination;
