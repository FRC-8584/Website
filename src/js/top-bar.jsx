import React from "react";

import { seasons } from "../config";
import { scrollToById } from "../utils";

import "../css/top-bar.css";

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuExpand: false,
        };

        this.switchMenu = () => {
            this.setState((state) => {
                return {
                    menuExpand: !state.menuExpand,
                };
            });
        };

        this.scrollToById = (id) => {
            this.setState({
                menuExpand: false
            });
            scrollToById(id);
        }
    }

    render() {
        let classList = [];
        if (!this.props.scrolled) {
            classList.push("transp");
        }
        const className = classList.join(" ");

        const gameSeasons = seasons.map((value, index) => {
            return (
                <div
                    key={index}
                    onClick={() => {this.scrollToById(`officers-${value}`)}}
                >
                    {`${value} 賽季`}
                </div>
            )
        })
        const latestSeason = String(parseInt(seasons[seasons.length - 1]) + 1);
        gameSeasons.push(
            <div
                key={seasons.length}
                onClick={() => {this.scrollToById(`officers-${latestSeason}`)}}
            >
                {`${latestSeason} 賽季`}
            </div>
        )
        const years = gameSeasons.length;
        const showId = this.props.showId;
        return (
            <div id="top-bar" className={className}>
                <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo" />
                <h1 className="title">FRC 8584 - Infinity Robotics</h1>
                <div id="top-bar-shadow" />
                <div id="navigate" style={{ "--year": years }} className={this.state.menuExpand ? "expand" : null}>
                    <div
                        className={`option ${showId === "front" ? "select" : ""}`}
                        onClick={() => {this.scrollToById("front")}}
                    >首頁</div>
                    <div
                        className={`option ${showId === "vision" ? "select" : ""}`}
                        onClick={() => {this.scrollToById("vision")}}
                    >願景與期望</div>
                    <div
                        className={`option ${showId === "intro" ? "select" : ""}`}
                        onClick={() => {this.scrollToById("intro")}}
                    >分工介紹</div>
                    <div className={`option ${showId.startsWith("officers-") ? "select" : ""}`}>
                        歷年幹部
                        <div className="option-list">
                            {gameSeasons}
                        </div>
                    </div>
                    <div
                        className={`option ${showId === "sponsors" ? "select" : ""}`}
                        onClick={() => {this.scrollToById("sponsors")}}
                    >贊助</div>
                    <div
                        className={`option ${showId === "contact" ? "select" : ""}`}
                        onClick={() => {this.scrollToById("contact")}}
                    >聯絡我們</div>
                </div>
                <div className="menu ms-o" onClick={this.switchMenu.bind(this)}>menu</div>
            </div>
        );
    }
}
