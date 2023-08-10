import React from "react";

import OfficerBlock from "./officer-block";

import "../css/officers.css";

export default class Officers2022 extends React.Component {
    constructor(props) {
        super(props);

        this.totalOfficer = 3; // 填入幹部總數

        this.lastSwitch = 0;
        this.state = {
            showing: 0,
            cd: false
        };

        this.next = (switchTime) => {
            if (this.state.cd) {
                return
            }
            this.lastSwitch = switchTime === undefined ? Date.now() : switchTime;
            this.setState((state) => {
                const value = (state.showing + 1) % this.totalOfficer;
                return {
                    showing: value,
                    cd: true,
                };
            })
            setTimeout(() => {
                this.setState({cd: false})
            }, 1000);
        }
        this.last = (switchTime) => {
            if (this.state.cd) {
                return
            }
            this.lastSwitch = switchTime === undefined ? Date.now() : switchTime;
            this.setState((state) => {
                const value = state.showing - 1;
                return {
                    showing: value < 0 ? this.totalOfficer - 1 : value,
                    cd: true,
                };
            })
            setTimeout(() => {
                this.setState({cd: false})
            }, 1000);
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
        
        let classList = ["content", "officers"];
        if (this.props.show) {
            classList.push("show");
        }
        const className = classList.join(" ");
        return (
            <div id="officers-2022" className={className} style={{"--top": this.props.top, "--b-pos": bPos}}>
                <div className="title">歷年幹部 - 2022</div>
                <div className="sec-title">123</div>
                <div className="officers-content">
                    <div class="button-block">
                        <div className="ms-o" onClick={this.last.bind(this)}>chevron_left</div>
                        <div className="ms-o" onClick={this.next.bind(this)}>chevron_right</div>
                    </div>
                    {/* 由此開始新增幹部 */}
                    <OfficerBlock
                        show={this.state.showing === 0}
                        img={`${process.env.PUBLIC_URL}/officers_2022/captain.jpg`}
                        name="莊智皓"
                        position="隊長/程式組長"
                    >測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試</OfficerBlock>
                    <OfficerBlock
                        show={this.state.showing === 1}
                        img={`${process.env.PUBLIC_URL}/officers_2022/vice.jpg`}
                        name="王嘉成"
                        position="副隊長/文書美宣"
                    ></OfficerBlock>
                    <OfficerBlock
                        show={this.state.showing === 2}
                        img={`${process.env.PUBLIC_URL}/officers_2022/structure.jpg`}
                        name="高偉賓"
                        position="結構組長"
                    ></OfficerBlock>
                </div>
            </div>
        );
    }
}
