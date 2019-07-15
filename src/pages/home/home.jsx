import React from 'react';
import SearchForm from '../../components/search-form';
import Gallery from '../../components/gallery';
import Pagination from '../../components/pagination';
import Popup from '../../components/popup';

const Home = () => {
    return (
        <div>
            <SearchForm />
            <Gallery />
            <Pagination />
            <Popup />
        </div>
    )
};

export default Home;
