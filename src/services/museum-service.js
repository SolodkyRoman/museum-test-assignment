const API_KEY = '';
const API_URL = '';

export default class MuseumService {
    collectionsData = [
        {   
            title: `Title`,
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
        {
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
    ];

    getMuseums = () => {
        return this.collectionsData;
    };
}
