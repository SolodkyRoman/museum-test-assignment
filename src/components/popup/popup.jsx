import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { togglePopup } from '../../actions';
import './popup.css';

class Popup extends Component {

    render() {
        const { showPopup, togglePopup } = this.props;
        if (!showPopup) return null;

        return (
            <div className="popup">
                <div className="popup__container">
                    <div className="popup__info">
                        <div className="popup__picture">
                            <img
                                src="https://i.ytimg.com/vi/eLLZd7fW244/maxresdefault.jpg"
                                alt=""
                                className="popup__image"
                            />
                        </div>
                        <p className="popup__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vel ad voluptatum suscipit voluptatem ex labore excepturi laborum veritatis accusamus ullam vero, doloremque quaerat quam delectus provident dicta eligendi nisi. Sint cumque omnis deserunt ratione perferendis cupiditate tempore accusamus dolorum facilis nisi! Optio, temporibus magnam sint alias maiores fugiat aperiam est quisquam possimus voluptates aut facilis et illo sit accusantium culpa explicabo? Officia eaque veritatis modi sunt mollitia magni iste repellat vero odio voluptatum velit et perspiciatis qui quasi nisi voluptates accusantium cumque eos, cupiditate facere? Expedita, praesentium accusantium dignissimos minima neque molestias autem facere rem facilis quaerat recusandae optio.
                        </p>
                    </div>
                    <div className="popup__actions">
                        <Link to={`/detailed`} className="btn btn-info btn-lg">View more details</Link>
                        <button className="btn btn-danger btn-lg" onClick={togglePopup}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const { showPopup, popupId } = state;
    return {
        showPopup,
        popupId
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            togglePopup
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
