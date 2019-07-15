import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  togglePopup,
  collectionRequested,
  collectionLoaded
} from '../../actions';
import MuseumService from '../../services/museum-service';
import Spinner from '../spinner';
import './gallery.css';

class GalleryItem extends Component {
  state = {
    imageLoaded: false,
    imageUrl: null
  };

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.setState({
        imageUrl: img.src,
        imageLoaded: true
      });
    };

    img.onerror = () => {
      this.setState({
        imageLoaded: true,
        imageUrl: null
      });
    };

    img.src = this.props.imageUrl;
  }

  render() {
    const { imageUrl, imageLoaded } = this.state;
    const { id, title, togglePopup } = this.props;
    return (
      <div className="gallery__item" onClick={() => togglePopup(id)}>
        {imageLoaded && imageUrl ? (
          <img src={imageUrl} alt={title} className="gallery__image" />
        ) : (
          <div className="gallery__image-placeholder" />
        )}
        {title ? (
          <div className="gallery__description">
            <p className="gallery__text">{title}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

class Gallery extends Component {
  componentDidMount() {
    const {
      perPage,
      activePage,
      orderBy,
      searchValue,
      collection,
      tagSelected
    } = this.props;
    if (!collection.length || tagSelected) {
      this.loadCollection(perPage, activePage, orderBy, searchValue);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.perPage !== this.props.perPage ||
        nextProps.activePage !== this.props.activePage ||
        nextProps.orderBy !== this.props.orderBy ||
        nextProps.searchValue !== this.props.searchValue) {
      this.loadCollection(
        nextProps.perPage,
        nextProps.activePage,
        nextProps.orderBy,
        nextProps.searchValue
      );
    }
    return true;
  }

  loadCollection = (perPage, activePage, orderBy, searchValue) => {
    const { collectionLoaded } = this.props;
    const museumService = new MuseumService();
    collectionRequested();
    museumService
      .getCollection(perPage, activePage, orderBy, searchValue)
      .then(data => collectionLoaded(data));
  };

  render() {
    const {
      collection,
      togglePopup,
      galleryIsLoading,
      galleryIsUpdating
    } = this.props;

    if (galleryIsLoading) {
      return (
        <div className="spinner gallery">
          <Spinner />
        </div>
      );
    }

    if (!galleryIsLoading && !collection.length) {
      return (
        <div className="spinner gallery">
          <h2>No art object could be found by your query</h2>
        </div>
      )
    }

    return (
      <div className="gallery">
        {collection.map(el => (
          <GalleryItem
            id={el.id}
            key={el.id}
            togglePopup={togglePopup}
            imageUrl={el.imageUrl}
            title={el.title}
          />
        ))}
        {galleryIsUpdating ? <Spinner /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    collection,
    galleryIsLoading,
    searchValue,
    activePage,
    perPage,
    orderBy,
    galleryIsUpdating,
    tagSelected
  } = state;
  return {
    collection,
    galleryIsLoading,
    searchValue,
    activePage,
    perPage,
    orderBy,
    galleryIsUpdating,
    tagSelected
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      togglePopup,
      collectionRequested,
      collectionLoaded
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
