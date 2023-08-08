import React from "react";

import { seasons } from "../config";

import "../css/top-bar.css";

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transparent: true,
        }
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
            let transp = window.scrollY == 0;
            if (transp != this.state.transparent) {
                this.setState({
                    transparent: transp
                });
            }
        })
    }

    render() {
        let classList = [];
        if (this.state.transparent) {
            classList.push("transp");
        }
        const className = classList.join(" ");

        const gameSeasons = seasons.map((value, index) => {
            return (
                <div
                    key={index}
                    // onClick={}
                >
                    {`${value} 賽季`}
                </div>
            )
        })
        const years = seasons.length;

        return (
            <div id="top-bar" className={className}>
                <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo" />
                <div className="title">FRC 8584 - Infinity Robotics</div>
                <div id="top-bar-shadow" />
                <div id="navigate">
                    <div className="option">首頁</div>
                    <div className="option">願景與期望</div>
                    <div className="option">分工介紹</div>
                    <div className="option">贊助</div>
                    <div className="option">
                        歷年幹部
                        <div className="option-list" style={{ "--year": years }}>
                            {gameSeasons}
                        </div>
                    </div>
                    <div className="option">聯絡我們</div>
                </div>
            </div>
        );
    }
}
