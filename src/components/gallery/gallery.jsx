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
        imageUrl: null,
      });
    };

    img.src = this.props.imageUrl;
  }

  render() {
    const { imageUrl, imageLoaded } = this.state;
    const { id, title, togglePopup } = this.props;
    return (
      <li className="gallery__item" onClick={() => togglePopup(id)}>
        {
          imageLoaded && imageUrl ? 
            <img
              src={imageUrl}
              alt={title}
              className="gallery__image"
            /> : 
            <div className="gallery__image-placeholder" />
        }
        {
          title ?
            <div className="gallery__description">
                <p className="gallery__text">
                  {title}
                </p>
            </div> : null
        }
      </li>
    )
  }

}

class Gallery extends Component {
  componentDidMount() {
    const { 
      perPage,
      activePage,
      orderBy
    } = this.props;
    this.loadCollection(perPage, activePage, orderBy);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.perPage !== this.props.perPage ||
      nextProps.activePage !== this.props.activePage) {
        this.loadCollection(nextProps.perPage, nextProps.activePage);
    }
    if (nextProps.orderBy !== this.props.orderBy) {
      this.loadCollection(nextProps.perPage, nextProps.activePage, nextProps.orderBy);
    }
    return true;
  }

  loadCollection = (perPage, activePage, orderBy) => {
    const { collectionRequested, collectionLoaded } = this.props;
    const museumService = new MuseumService();
    collectionRequested();
    museumService.getCollection(perPage, activePage, orderBy)
      .then(data => collectionLoaded(data));
  }

  render() {
    const { 
      museumsCollection, 
      togglePopup, 
      galleryIsLoading
    } = this.props;
    
    if (galleryIsLoading) {
      return ( 
        <div className="spinner gallery">
          <Spinner />
        </div>
      );
    }

    return (
      <ul className="gallery">
        {
          museumsCollection.map((el) => (
            <GalleryItem 
              key={el.id}
              togglePopup={togglePopup}
              imageUrl={el.imageUrl}
              title={el.title}
            />
          ))
        }
      </ul>
      );
  }
};

const mapStateToProps = (state) => {
  const { 
    museumsCollection,
    galleryIsLoading,
    searchValue,
    activePage,
    perPage,
    orderBy
  } = state;
  return {
    museumsCollection,
    galleryIsLoading,
    searchValue,
    activePage,
    perPage,
    orderBy
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      togglePopup,
      collectionRequested,
      collectionLoaded
    }, dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
