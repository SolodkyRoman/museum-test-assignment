import React from 'react';
import { connect } from 'react-redux';
import { togglePopup } from '../../actions';
import './gallery.css';
import { bindActionCreators } from 'redux';

const Gallery = ({ museumsCollection, togglePopup }) => (
  <ul className="gallery">
    {
      museumsCollection.map((el) => (
        <li className="gallery__item" key={el.id} onClick={() => togglePopup(el.id)}>
          <img
            src={el.imageUrl}
            alt={el.title}
            className="gallery__image"
          />
          {
            el.title ?
              <div className="gallery__description">
                  <p className="gallery__text">
                    {el.title}
                  </p>
              </div> : null
          }
        </li>
      ))
    }
  </ul>
);

const mapStateToProps = (state) => {
  const { museumsCollection } = state;
  return {
    museumsCollection
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      togglePopup
    }, dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
