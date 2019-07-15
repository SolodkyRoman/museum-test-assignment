import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    togglePopup,
    popupRequested,
    popupLoaded
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
        const museumService = new MuseumService();
        await this.setState({ 
            loading: true,
            showPopup: true
        });
        const data = await museumService.getDetails(id);
        this.setState({
            id: data.id,
            title: data.title,
            description: data.description,
            imageUrl: data.imageUrl,
            loading: false,
        });
    };

    componentDidMount() {
        if (this.props.showPopup) {
            this.loadDetails(this.props.popupItemId);
        }
    }

    async shouldComponentUpdate(nextProps, nextState) {
        if (this.props.popupItemId !== nextProps.popupItemId) {
            this.loadDetails(nextProps.popupItemId);
        }
        if (nextProps.showPopup !== this.state.showPopup) 
            this.setState({ showPopup: nextProps.showPopup });
        return true;
    }

    render() {
        const { togglePopup } = this.props;
        const { 
            showPopup,
            loading,
            id,
            title,
            description,
            imageUrl 
        } = this.state;

        if (!showPopup) return null;

        if (loading) return <PopupPlaceholder togglePopup={togglePopup} />;

        return (
            <div className="popup">
                <div className="popup__container">
                    <div className="popup__info">
                        <div className="popup__picture">
                            <img
                                src={imageUrl}
                                alt={title}
                                className="popup__image"
                            /> 
                        </div>
                        <div className="popup__text">
                            <h3>{title}</h3>
                            {description}
                        </div>
                    </div>
                    <div className="popup__actions">
                        <Link to={`/${id}`} className="btn btn-info btn-lg">View more details</Link>
                        <button className="btn btn-danger btn-lg" onClick={() => togglePopup(null)}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const { 
        showPopup, 
        popupItemId,
        popupDetails,
        popupIsLoading
    } = state;
    return {
        showPopup,
        popupItemId,
        popupDetails,
        popupIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            togglePopup,
            popupRequested,
            popupLoaded
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
