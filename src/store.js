import { createStore } from 'redux';

const initialState = {
    museumsCollection: [],
    showPopup: false,
    popupItemId: null,
    galleryIsLoading: true,
    orderBy: '',
    searchValue: null,
    activePage: 1,
    perPage: 10,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_POPUP':
            return {
                ...state,
                showPopup: !state.showPopup,
                popupItemId: action.payload || state.popupItemId
            };
        case 'FETCH_COLLECTION_REQUEST':
            return {
                ...state,
                galleryIsLoading: true
            };
        case 'FETCH_COLLECTION_LOADED':
            return {
                ...state,
                museumsCollection: action.payload,
                galleryIsLoading: false
            }
        case 'SEARCH_SUBMITTED':
            return {
                ...state,
                searchValue: action.payload
            }
        case 'ACTIVE_PAGE_CHANGED':
            return {
                ...state,
                activePage: action.payload
            };
        case 'NUMBER_PERPAGE_CHANGED':
            console.log(action.payload)
            return {
                ...state,
                perPage: action.payload
            };
        case 'SORTNG_CHANGED':
            return {
                ...state,
                orderBy: action.payload
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;