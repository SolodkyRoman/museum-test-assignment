const searchSubmitted = value => {
    return {
        type: 'SEARCH_SUBMITTED',
        payload: value
    };
};

const togglePopup = popupItemId => {
    return {
        type: 'TOGGLE_POPUP',
        payload: popupItemId
    };
};

export {
    searchSubmitted,
    togglePopup
};
