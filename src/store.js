import { createStore } from 'redux';

const initialState = {
    search: '',
    museumsCollection: [
        {   
            id: 'id-1',
            title: `Title 1`,
            longTitle: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
                non alias, assumenda fugit inventore cupiditate eum error distinctio
                incidunt quis iste pariatur quaerat ad aperiam, cumque est totam.
                Laboriosam cupiditate beatae debitis ipsam aliquid doloremque deleniti
                id nulla, voluptate eaque quos soluta, dolor omnis eius recusandae
                dolorem similique illo? Labore excepturi dolores, dolorum minima
                debitis suscipit non accusamus ratione odio veritatis autem in quos
                reiciendis iusto nulla quae a quaerat repudiandae nostrum quo placeat
                deserunt nihil est! Aliquam debitis voluptate, deserunt deleniti esse
                iste incidunt saepe non suscipit magni. Atque possimus qui blanditiis
                rerum obcaecati odio beatae voluptate vero quaerat!`,
            imageUrl: `http://lh6.ggpht.com/wwx2vAS9DzFmmyeZefPjMtmCNOdjD80gvkXJcylloy40SiZOhdLHVddEZLBHtymHu53TcvqJLYZfZF7M-uvoMmG_wSI=s0`
        },
        {
            id: 'id-2',
            title: `Title 2`,
            longTitle: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
                non alias, assumenda fugit inventore cupiditate eum error distinctio
                incidunt quis iste pariatur quaerat ad aperiam, cumque est totam.
                Laboriosam cupiditate beatae debitis ipsam aliquid doloremque deleniti
                id nulla, voluptate eaque quos soluta, dolor omnis eius recusandae
                dolorem similique illo? Labore excepturi dolores, dolorum minima
                debitis suscipit non accusamus ratione odio veritatis autem in quos
                reiciendis iusto nulla quae a quaerat repudiandae nostrum quo placeat
                deserunt nihil est! Aliquam debitis voluptate, deserunt deleniti esse
                iste incidunt saepe non suscipit magni. Atque possimus qui blanditiis
                rerum obcaecati odio beatae voluptate vero quaerat!`,
            imageUrl: `http://lh6.ggpht.com/wwx2vAS9DzFmmyeZefPjMtmCNOdjD80gvkXJcylloy40SiZOhdLHVddEZLBHtymHu53TcvqJLYZfZF7M-uvoMmG_wSI=s0`
        },
    ],
    showPopup: false,
    popupItemId: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_POPUP':
            return {
                ...state,
                showPopup: !state.showPopup,
                popupItemId: action.payload || state.popupItemId
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;