import React from "react";

import OfficerBlock from "./officer-block";

import "../css/officers.css";

export default class Officers2022 extends React.Component {
    constructor(props) {
        super(props);

        this.totalOfficer = 4; // 填入幹部總數

        this.lastSwitch = 0;
        this.state = {
            showing: 0
        };

        this.next = (switchTime) => {
            this.lastSwitch = switchTime === undefined ? Date.now() : switchTime;
            this.setState((state) => {
                const value = (state.showing + 1) % this.totalOfficer;
                return {
                    showing: value
                };
            })
        }
        this.last = (switchTime) => {
            this.lastSwitch = switchTime === undefined ? Date.now() : switchTime;
            this.setState((state) => {
                const value = state.showing - 1;
                return {
                    showing: value < 0 ? this.totalOfficer - 1 : value,
                };
            })
        }
        this.autoSwitch = (autoSwitchTime) => {
            if (this.lastSwitch === autoSwitchTime || autoSwitchTime === undefined) {
                const switchTime = Date.now();
                this.next(switchTime);
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
        const isPhone = this.props.isPhone;
        const posTuple = this.props.pos;
        const bPos = posTuple ? posTuple[1] : 0;
        
        let classList = ["content"];
        if (this.props.show) {
            classList.push("show");
        }
        const className = classList.join(" ");
        return (
            <div id="officers-2022" className={className} style={{"--top": this.props.top, "--b-pos": bPos}}>
                <div className="title">歷年幹部 - 2022</div>
                <div className="sec-title"></div>
                <div className="officers">
                    {/* 由此開始新增幹部 */}
                    <OfficerBlock></OfficerBlock>
                </div>
            </div>
        );
    }
}
