import { createStore } from 'redux';

const initialState = {
    collection: [],
    showPopup: false,
    popupItemId: null,
    galleryIsLoading: true,
    orderBy: '',
    searchValue: '',
    activePage: 1,
    perPage: 10,
    galleryIsUpdating: false,
    detailsLoading: false,
    details: null,
    detailsError: false,
    tagName: '',
    tagSelected: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_POPUP':
            return {
                ...state,
                showPopup: !state.showPopup,
                popupItemId: action.payload || state.popupItemId,
                detailsError: false
            };
        case 'FETCH_COLLECTION_REQUEST':
            return {
                ...state,
                galleryIsLoading: !action.payload,
            };
        case 'FETCH_COLLECTION_LOADED':
            return {
                ...state,
                collection: action.payload,
                galleryIsLoading: false,
                galleryIsUpdating: false,
                tagSelected: false
            }
        case 'SEARCH_SUBMITTED':
            return {
                ...state,
                searchValue: action.payload,
                galleryIsLoading: true
            }
        case 'ACTIVE_PAGE_CHANGED':
            return {
                ...state,
                activePage: action.payload
            };
        case 'NUMBER_PERPAGE_CHANGED':
            return {
                ...state,
                perPage: action.payload,
                galleryIsUpdating: true,
            };
        case 'SORTNG_CHANGED':
            return {
                ...state,
                orderBy: action.payload
            };
        case 'FETCH_DETAILS_REQUEST':
            return {
                ...state,
                detailsError: false,
                detailsLoading: true,
                showPopup: action.payload
            };
        case 'FETCH_DETAILS_LOADED':
            return {
                ...state,
                detailsLoading: false,
                details: action.payload
            };
        case 'FETCH_DETAILS_ERROR':
            return {
                ...state,
                detailsError: true
            };
        case 'TAG_SELECTED':
            return {
                ...state,
                searchValue: action.payload,
                tagSelected: true,
                showPopup: false,
                collection: [],
                galleryIsLoading: true,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;