import React from "react";

import "../css/sponsors.css";

export default class Sponsors extends React.Component {
    render() {
        const posTuple = this.props.pos;
        const bPos = posTuple ? posTuple[1] : 0;
        
        let classList = ["content"];
        if (this.props.show) {
            classList.push("show");
        }
        const className = classList.join(" ");
        return (
            <div id="sponsors" className={className} style={{"--top": this.props.top, "--b-pos": bPos}}>
                <div className="title">贊助商們</div>
                <div className="sec-title">感謝以下贊助商們的支援</div>
                <hr />
                <div className="sponsors-content">
                    <div>鎮城車體廠</div>
                </div>
            </div>
        );
    }
}
