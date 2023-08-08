import React from "react";

import "../css/img-block.css";

export default class ImgBlock extends React.Component {
    constructor(props) {
        super(props);

        this.nowImage = 0;
    }

    render() {
        return (
            <div id="img-block">
                <img src={`${process.env.PUBLIC_URL}/group_photos/2022.jpg`} alt="2022 game" onLoad={(e) => {console.log(e.target.complete)}}/>
            </div>
        );
    }
}
