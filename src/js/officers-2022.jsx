import React from "react";

import OfficerBlock from "./officer-block";

import "../css/officers.css";

export default class Officers2022 extends React.Component {
    constructor(props) {
        super(props);

        this.totalOfficer = 4; // 填入幹部總數

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
            }, 490);
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
        const posTuple = this.props.pos;
        const bPos = posTuple ? posTuple[1] : 0;
        const dotList = Array.from(Array(this.totalOfficer).keys()).map((index) => {
            return (
                <div key={index} className={`dot${this.state.showing === index ? " show" : ""}`} />
            )
        })
        
        let classList = ["content", "officers"];
        if (this.props.show) {
            classList.push("show");
        }
        const className = classList.join(" ");
        return (
            <div id="officers-2022" className={className} style={{"--top": this.props.top, "--b-pos": bPos}}>
                <div className="title">歷年幹部 - 2022</div>
                <div className="sec-title">第一屆</div>
                <div className="officers-content">
                    <div class="button-block">
                        <div className="ms-o" onClick={this.last.bind(this)}>chevron_left</div>
                        <div className="ms-o" onClick={this.next.bind(this)}>chevron_right</div>
                    </div>
                    <div className="dot-list">
                        {dotList}
                    </div>
                    {/* 由此開始新增幹部 */}
                    <OfficerBlock
                        show={this.state.showing === 0}
                        img={`${process.env.PUBLIC_URL}/officers_2022/captain.jpg`}
                        name="莊智皓"
                        position="隊長/程式組長"
                        sign="2023/08/11"
                    >
                        <div>團隊<del>名義上</del>的領導者，主要負責撰寫機器人的程式，並於比賽中擔任操控手。雖然是程式組長，但其實專長是寫網站，對於操控機器人及其算法沒有很熟，算是勉強堪用而已。</div>
                    </OfficerBlock>
                    <OfficerBlock
                        show={this.state.showing === 1}
                        img={`${process.env.PUBLIC_URL}/officers_2022/vice.jpg`}
                        name="王嘉成"
                        position="副隊長/文書美宣"
                        sign="2023/08/11"
                    >團隊的運作核心，負責處理團隊內各種大大小小的文書工作以及雜事，並分派任務至各個小組。</OfficerBlock>
                    <OfficerBlock
                        show={this.state.showing === 2}
                        img={`${process.env.PUBLIC_URL}/officers_2022/structure.jpg`}
                        name="高偉賓"
                        position="結構組長"
                        sign="2022/10/03"
                    >哈哈我是2022賽季的結構組長啦哈哈。有事都可以來找我喔!</OfficerBlock>
                    <OfficerBlock
                        show={this.state.showing === 3}
                        img={`${process.env.PUBLIC_URL}/officers_2022/pr.jpg`}
                        name="陳柏余"
                        position="公關組長"
                        sign="2023/08/11"
                    >公關組長，認識很多大佬，曾引發公關危機。</OfficerBlock>
                </div>
            </div>
        );
    }
}
