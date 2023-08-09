import React from "react";

import { seasons } from "../config";
import { scrollToById } from "../utils";

import "../css/top-bar.css";

export default class TopBar extends React.Component {
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
                    onClick={() => {scrollToById(`officer-${value}`)}}
                >
                    {`${value} 賽季`}
                </div>
            )
        })
        const years = seasons.length;

        return (
            <div id="top-bar" className={className}>
                <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo" />
                <h1 className="title">FRC 8584 - Infinity Robotics</h1>
                <div id="top-bar-shadow" />
                <div id="navigate">
                    <div className="option" onClick={() => {scrollToById("front")}}>首頁</div>
                    <div className="option" onClick={() => {scrollToById("vision")}}>願景與期望</div>
                    <div className="option" onClick={() => {scrollToById("intro")}}>分工介紹</div>
                    <div className="option">
                        歷年幹部
                        <div className="option-list" style={{ "--year": years }}>
                            {gameSeasons}
                        </div>
                    </div>
                    <div className="option" onClick={() => {scrollToById("sponsor")}}>贊助</div>
                    <div className="option" onClick={() => {scrollToById("contact")}}>聯絡我們</div>
                </div>
            </div>
        );
    }
}
