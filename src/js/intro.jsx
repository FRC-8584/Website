import React from "react";

import "../css/intro.css";

export default class Intro extends React.Component {
    render() {
        const isPhone = this.props.isPhone;
        const posTuple = this.props.pos;
        const bPos = posTuple ? posTuple[1] : 0;
        
        let classList = ["content"];
        if (this.props.show) {
            classList.push("show");
        }
        const className = classList.join(" ");
        return (
            <div id="intro" className={className} style={{"--top": this.props.top, "--b-pos": bPos}}>
                <div className="title">團隊分工</div>
                <div className="sec-title">合理的分工能夠增加效率</div>
            </div>
        );
    }
}