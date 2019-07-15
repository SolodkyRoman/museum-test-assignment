import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
    searchSubmitted,
    changedSorting
} from '../../actions';
import './search-form.css';

class SearchForm extends Component {
    state = {
        value: this.props.searchValue || '',
    };

    handleChange = ({ target }) => {
        this.setState({ value: target.value });
    }

    handleSubmit = (e) => {
        const { searchSubmitted } = this.props;
        const { value } = this.state;
        e.preventDefault();
        searchSubmitted(value);
    }

    render() {
        const { value } = this.state;
        const { changedSorting, orderBy } = this.props;

        return (
            <form 
                onSubmit={this.handleSubmit}
                className="search">
                <select
                    onChange={(e) => changedSorting(e.target.value)} 
                    className="search__order custom-select"
                    value={orderBy}
                    >
                    Order by: Type
                    <option value="relevance">Sort by relevance</option>
                    <option value="objecttype">Sort by type</option>
                    <option value="chronologic">Show Oldest first</option>
                    <option value="achronologic">Show Newest first</option>
                    <option value="artist">Sort by artist (a-z)</option>
                    <option value="artistdesc">Sort by artist (z-a)</option>
                </select>
                <div className="search__form-group">
                    <input 
                        value={value}
                        onChange={this.handleChange}
                        type="text" 
                        placeholder="Search keyword..." 
                        className="search__field form-control" />
                    <button className="search__submit btn btn-primary">
                        Search
                    </button> 
                </div>
            </form>
        );
    }
};

const mapStateToProps = (state) => {
    const { 
        searchValue,
        orderBy 
    } = state;
    return {
        searchValue,
        orderBy
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        searchSubmitted,
        changedSorting
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
