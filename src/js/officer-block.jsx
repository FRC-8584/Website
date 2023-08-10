import React from "react";

export default class OfficerBlock extends React.Component {
    render() {
        const img = this.props.img;
        const name = this.props.name;
        const position = this.props.position;
        const show = this.props.show;

        return (
            <div className={`officer-block${show ? " show" : ""}`}>
                <div className="img-block">
                    <img src={img} alt={`${position} ${name}`} />
                </div>
                <div className="position-block">
                    <div className="position">{position}</div>
                </div>
                <div className="name-block">
                    <div className="name">{name}</div>
                </div>
                <div className="text-block">
                    <div className="text">{this.props.children}</div>
                </div>
            </div>
        )
    }
}
