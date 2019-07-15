import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPagination from 'react-js-pagination';
import {
  changedPage,
  changedPerPageNumber
} from '../../actions';
import './pagination.css';

class Pagination extends Component {
  state = {
    pageNumber: 1,
  }
  handlePageChange = (pageNumber) => {
    this.setState({pageNumber});
  }

  render() {
    const { 
      perPage, 
      activePage,
      changedPage,
      changedPerPageNumber
    } = this.props;
    
    return (
      <nav className="navigation">
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={perPage}
          totalItemsCount={10000}
          pageRangeDisplayed={5}
          onChange={changedPage}
          innerClass='pagination justify-content-center'
          itemClass='page-item'
          linkClass='page-link'
          prevPageText='<'
          nextPageText='>'
          hideDisabled={true}
        />
        <div className="pagination__number">
          <span className="pagination__number__show">Show:</span> 
          <button 
            onClick={() => changedPerPageNumber(10)}
            type="button" 
            className={`btn ${perPage === 10 ? `btn-primary` : `btn-link`}`}>
              10
          </button>
          <button 
            onClick={() => changedPerPageNumber(50)}
            type="button" 
            className={`btn ${perPage === 50 ? `btn-primary` : `btn-link`}`}>
              50
          </button>
          <button
            onClick={() => changedPerPageNumber(100)}
            type="button" 
            className={`btn ${perPage === 100 ? `btn-primary` : `btn-link`}`}>
              100
          </button>
        </div>
      </nav>
    );
  }
};

const mapStateToProps = state => {
  const { 
    perPage,
    activePage 
  } = state;
  return { 
    perPage,
    activePage 
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      changedPage,
      changedPerPageNumber
    }, dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
