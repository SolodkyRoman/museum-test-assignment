import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MuseumService from '../../services/museum-service';
import { 
    detailsRequested,
    detailsLoaded,
    detailsErrored,
    tagSelected
} from '../../actions';
import Spinner from '../../components/spinner';
import './detailed.css';
import { bindActionCreators } from 'redux';

const DetailedContent = ({ details, searchByTag }) => (
    <>
        <div className="detailed__main">
            <div className="column">
                <h1 className="h1">{details.title}</h1>
                <p>
                    <b>Category:</b> <button className="btn btn-sm btn-link">Sculpture</button>
                </p>
                <p>
                    <button 
                        onClick={() => searchByTag('tag 1')}
                        className="btn btn-sm btn-info detailed__tag">tag 1</button>
                    <button 
                        onClick={() => searchByTag('tag 2')}
                        className="btn btn-sm btn-info detailed__tag">tag 2</button>
                    <button 
                        onClick={() => searchByTag('tag 3')}
                        className="btn btn-sm btn-info detailed__tag">tag 3</button>
                </p>
            </div>
            <div className="column">
                <img 
                    src={details.imageUrl}
                    alt={details.title}
                    className="detailed__image" />
            </div>
        </div>
        <div className="detailed__description">
            <p>{details.description}</p>
        </div>
    </>
);

class Detailed extends Component {
    componentDidMount() {
        const { details } = this.props;
        const id = this.props.match.params.id;
        if (!details || details.id !== id) {
            this.loadDetails(id);
        }
    }

    loadDetails = async id => {
        const { 
            detailsRequested,
            detailsLoaded,
            detailsErrored
        } = this.props;
        const museumService = new MuseumService();
        detailsRequested();
        try {
            const data = await museumService.getDetails(id)    
            detailsLoaded(data);
        } catch {
            detailsErrored();
        }
    };

    searchByTag = tag => {
        this.props.tagSelected(tag);
        this.props.history.push('/');
    }

    render() {
        const { 
            details,
            detailsError
        } = this.props;

        let content = (
                    <DetailedContent 
                        details={details} 
                        searchByTag={this.searchByTag} 
                    />
        );

        if (!details) {
            content = (
                <div className="detailed__loading">
                    <Spinner />
                </div>
            );
        }

        if (detailsError) {
            content = (
                <div className="detailed__loading">
                    <h1>Something went wrong :( </h1>
                </div>
            );
        }

        return (
            <div className="container detailed">
                <Link to="/">Go to the main page</Link>
                {content}
            </div>
        );
    };
}

const mapStateToProps = state => {
    const { 
        details,
        detailsError
    } = state;
    return { 
        details,
        detailsError
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            detailsRequested,
            detailsLoaded,
            detailsErrored,
            tagSelected
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Detailed);
