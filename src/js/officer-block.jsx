import React from "react";

import "../css/officer-block.css";

export default class OfficerBlock extends React.Component {
    render() {
        const img = this.props.img;
        const name = this.props.name;
        const position = this.props.position;
        const show = this.props.show;
        const indent = this.props.indent === undefined ? true : this.props.indent;

        return (
            <div className={`officer-block${show ? " display" : ""}`}>
                <div className="img-block">
                    <img src={img} alt={`${position} ${name}`} />
                </div>
                <div className="data-block">
                    <div className="position-block">
                        <div>{position}</div>
                    </div>
                    <div className="name-block">
                        <div>{name}</div>
                    </div>
                    <hr />
                    <div className={`text-block${indent ? "" : " no-indent"}`}>
                        <div>
                            <div className="text">{this.props.children}</div>
                            <div className="sign">{this.props.sign}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
