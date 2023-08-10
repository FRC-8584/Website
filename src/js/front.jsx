import React from "react";

import { seasons, groupPhotos } from "../config";

import "../css/front.css";

export default class Front extends React.Component {
    constructor(props) {
        super(props);

        this.imgList = seasons.map((value, index) => {
            let className = "";
            if (index === 0) {
                className = "first";
            }
            else if (index === seasons.length - 1) {
                className = "last";
            }
            return (
                <div style={{"--delay": index, "--year": value}} className={className}>
                    <img
                        key={index}
                        src={`${process.env.PUBLIC_URL}/group_photos/${groupPhotos[value]}`}
                        alt={`${value} group`}
                    />
                </div>
            )
        })
    }

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
            <div id="front" className={className} style={{"--top": this.props.top, "--b-pos": bPos}}>
                {
                    isPhone ?
                    <div className="title">FRC 8584<br/>Infinity<br/>Robotics</div>:
                    <div className="title">FRC 8584 - Infinity Robotics</div>
                }
                <div className="sec-title">來自嘉華中學的充滿著理想&抱負的國、高中生</div>
                <img src={`${process.env.PUBLIC_URL}/group_photos/0.png`} style={{"--delay": 0}} alt="team name"/>
                {this.imgList}
            </div>
        );
    }
}
