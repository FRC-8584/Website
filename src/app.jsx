import React from "react";

import TopBar from "./js/top-bar";
import ImgBlock from "./js/img-block";
import Front from "./js/front";

export default class App extends React.Component {
    render() {
        return (
            <div id="app">
                <TopBar />
                <ImgBlock />
                <Front />
            </div>
        )
    }
}
