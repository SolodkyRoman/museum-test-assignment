const togglePopup = (popupItemId = null) => {
    return {
        type: 'TOGGLE_POPUP',
        payload: popupItemId
    };
};

const collectionRequested = () => {
    return {
        type: 'FETCH_COLLECTION_REQUEST',
    };
};

const collectionLoaded = collection => {
    return {
        type: 'FETCH_COLLECTION_LOADED',
        payload: collection
    };
};

const popupRequested = () => {
    return {
        type: 'FETCH_POPUP_REQUESTED'
    };
};

const popupLoaded = details => {
    return {
        type: 'FETCH_POPUP_LOADED',
        payload: details
    };
};

const searchSubmitted = value => {
    return {
        type: 'SEARCH_SUBMITTED',
        payload: value
    };
};

const changedPage = pageNumber => {
    return {
        type: 'ACTIVE_PAGE_CHANGED',
        payload: pageNumber
    };
};

const changedPerPageNumber = perPage => {
    return {
        type: 'NUMBER_PERPAGE_CHANGED',
        payload: perPage
    };
};

const changedSorting = type => {
    return {
        type: 'SORTNG_CHANGED',
        payload: type
    };
};

const detailsRequested = (showPopup = false) => {
    return {
        type: 'FETCH_DETAILS_REQUEST',
        payload: showPopup
    };
};

const detailsLoaded = (details) => {
    return {
        type: 'FETCH_DETAILS_LOADED',
        payload: details
    };
};

const detailsErrored = () => {
    return {
        type: 'FETCH_DETAILS_ERROR',
    };
};

const tagSelected = tag => {
    return {
        type: 'TAG_SELECTED',
        payload: tag
    };
};

export {
    togglePopup,
    collectionRequested,
    collectionLoaded,
    popupRequested,
    popupLoaded,
    searchSubmitted,
    changedPage,
    changedPerPageNumber,
    changedSorting,
    detailsRequested,
    detailsLoaded,
    detailsErrored,
    tagSelected
};
