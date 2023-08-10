import React from "react";

import { seasons, gamePhotos } from "../config";

import "../css/img-block.css";

export default class ImgBlock extends React.Component {
    constructor(props) {
        super(props);

        this.imgList = seasons.map((value, index) => {
            return (
                <img
                    key={index}
                    src={`${process.env.PUBLIC_URL}/game_photos/${gamePhotos[value]}`}
                    alt={`${value} game`}
                />
            )
        })
        this.lastSwitch = 0;
        this.state = {
            nowImage: this.imgList.length - 1,
        };

        this.nextImage = (switchTime) => {
            this.lastSwitch = switchTime === undefined ? Date.now() : switchTime;
            this.setState((state) => {
                const value = (state.nowImage + 1) % this.imgList.length;
                return {
                    nowImage: value
                };
            })
        }
        this.lastImage = (switchTime) => {
            this.lastSwitch = switchTime === undefined ? Date.now() : switchTime;
            this.setState((state) => {
                const value = state.nowImage - 1;
                return {
                    nowImage: value < 0 ? this.imgList.length - 1 : value,
                };
            })
        }
        this.autoSwitch = (autoSwitchTime) => {
            if (this.lastSwitch === autoSwitchTime || autoSwitchTime === undefined) {
                const switchTime = Date.now();
                this.nextImage(switchTime);
                setTimeout(this.autoSwitch.bind(this, switchTime), 8000)
            }
            else {
                setTimeout(this.autoSwitch.bind(this, this.lastSwitch), 8000)
            }
        }
    }

    componentDidMount() {
        this.autoSwitch();
    }

    render() {
        return (
            <div id="img-block">
                <div id="logo-block">
                    <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo" />
                    <div className="text">
                        <div>FRC 8584</div>
                        <div>Infinity Robotics</div>
                    </div>
                </div>
                <div id="img-list" style={{"--now-image": this.state.nowImage}}>
                    {this.imgList}
                </div>
                <div id="img-button">
                    <div className="ms-o" onClick={this.lastImage.bind(this)}>chevron_left</div>
                    <div className="ms-o" onClick={this.nextImage.bind(this)}>chevron_right</div>
                </div>
                <div id="scrolldown" className={this.props.scrolled ? "scrolled" : ""}>
                    <div className="ms-o">keyboard_double_arrow_down</div>
                </div>
            </div>
        );
    }
}
