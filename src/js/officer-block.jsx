import React from "react";

import "../css/officer-block.css";

export default class OfficerBlock extends React.Component {
    render() {
        const img = this.props.img;
        const name = this.props.name;
        const position = this.props.position;
        const show = this.props.show;

        return (
            <div className={`officer-block${show ? " display" : ""}`}>
                <div className="img-block">
                    <img src={img} alt={`${position} ${name}`} />
                </div>
                <div className="position-block">
                    <div>{position}</div>
                </div>
                <div className="name-block">
                    <div>{name}</div>
                </div>
                <div className="text-block">
                    <div>{this.props.children}</div>
                </div>
            </div>
        )
    }
}
