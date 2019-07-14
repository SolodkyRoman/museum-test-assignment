import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './detailed.css';

class Detailed extends Component {
    render() {
        return (
            <div className="container detailed">
                <Link to="/">Return to the main page</Link>
                <div className="detailed__main">
                    <div className="column">
                        <img 
                            src="https://i.ytimg.com/vi/eLLZd7fW244/maxresdefault.jpg" 
                            alt=""
                            className="detailed__image" />
                    </div>
                    <div className="column">
                        <h1 className="h1">Heading</h1>
                        <p>
                            <b>Category:</b> <button className="btn btn-sm btn-link">Sculpture</button>
                        </p>
                        <p>
                            <button className="btn btn-sm btn-info detailed__tag">tag 1</button>
                            <button className="btn btn-sm btn-info detailed__tag">tag 2</button>
                            <button className="btn btn-sm btn-info detailed__tag">tag 3</button>
                        </p>
                    </div>
                </div>
                <div className="detailed__description">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum earum iste beatae quia deserunt quisquam quibusdam fugiat minima, architecto cupiditate aspernatur quam amet ullam repellendus optio hic eum dolores officiis asperiores minus. Rerum sapiente dolorem pariatur dignissimos cum, tenetur soluta quod, voluptatem exercitationem molestiae nobis quisquam excepturi tempora ducimus nulla libero quam eos ipsam, cumque blanditiis laudantium cupiditate impedit? Cum veritatis explicabo optio, voluptas id debitis quis iusto. Possimus autem quos, amet esse odit aliquam fugiat, cum voluptas, ullam eaque nesciunt magni! Officiis vero quaerat, ipsa harum adipisci officia maiores, explicabo iste eos tempora quo vel ipsum saepe animi vitae!</p>
                </div>
            </div>
        );
    };
}

export default Detailed;
