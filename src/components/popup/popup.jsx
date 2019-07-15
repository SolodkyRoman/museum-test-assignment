import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    togglePopup,
    detailsRequested,
    detailsLoaded,
    detailsErrored
} from '../../actions';
import MuseumService from '../../services/museum-service';
import './popup.css';

const PopupPlaceholder = ({ togglePopup }) => (
    <div className="popup">
        <div className="popup__container">
            <div className="popup__info">
                <div className="popup__picture">
                    <div className="placeholder"></div>
                </div>
                <div className="popup__text">
                    <div className="popup__placeholder__title" />
                    <div className="popup__placeholder__line" />
                    <div className="popup__placeholder__line" />
                    <div className="popup__placeholder__line" />
                    <div className="popup__placeholder__line" />
                    <div className="popup__placeholder__line" />
                </div>
            </div>
            <div className="popup__actions">
                <button className="btn btn-disabled btn-lg">View more details</button>
                <button className="btn btn-danger btn-lg" onClick={() => togglePopup(null)}>Close</button>
            </div>
        </div>
    </div>
);

class Popup extends Component {
    state = {
        id: '',
        title: '',
        description: '',
        imageUrl: '',
        loading: true,
        showPopup: false,
    };

    loadDetails = async (id) => {
        const { 
            detailsRequested,
            detailsLoaded,
            detailsErrored
        } = this.props;
        const museumService = new MuseumService();
        detailsRequested(true);
        try {
            const data = await museumService.getDetails(id);
            detailsLoaded(data);
        } catch {
            detailsErrored();
        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.popupItemId !== nextProps.popupItemId && 
            nextProps.popupItemId) {
            this.loadDetails(nextProps.popupItemId);
        }
        if (nextProps.detailsError) {
            const { togglePopup } = this.props;
            togglePopup(null);
        }
        return true;
    }

    render() {
        const { togglePopup } = this.props;
        const { 
            showPopup,
            detailsLoading,
            details
        } = this.props;

        if (!showPopup) return null;

        if (detailsLoading || !details) return <PopupPlaceholder togglePopup={togglePopup} />;

        return (
            <div className="popup">
                <div className="popup__container">
                    <div className="popup__info">
                        <div className="popup__picture">
                            <img
                                src={details.imageUrl}
                                alt={details.title}
                                className="popup__image"
                            /> 
                        </div>
                        <div className="popup__text">
                            <h3>{details.title}</h3>
                            {details.description}
                        </div>
                    </div>
                    <div className="popup__actions">
                        <Link to={`/${details.id}`} className="btn btn-info btn-lg">View more details</Link>
                        <button className="btn btn-danger btn-lg" onClick={() => togglePopup(null)}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    const { 
        showPopup, 
        popupItemId,
        detailsLoading,
        detailsError,
        details
    } = state;
    return {
        showPopup,
        popupItemId,
        detailsLoading,
        detailsError,
        details
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            togglePopup,
            detailsRequested,
            detailsLoaded,
            detailsErrored
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
