import React from "react";

import "../css/img-block.css";

export default class ImgBlock extends React.Component {
    constructor(props) {
        super(props);

        this.nowImage = 0;
    }

    render() {
        return (
            <div
                id="img-block"
                style={{"--bg_url": `url(${process.env.PUBLIC_URL}/group_photos/2022-small.jpg)`}}
            >
                <img src={`${process.env.PUBLIC_URL}/group_photos/2022.jpg`} alt="2022 group photo" onLoad={(e) => {console.log(e.target.complete)}}/>
            </div>
        );
    }
}
