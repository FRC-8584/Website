import React from "react";

import OfficerBlock from "./officer-block";

import "../css/officers.css";

export default class Officers2023 extends React.Component {
    constructor(props) {
        super(props);

        this.totalOfficer = 3; // 填入幹部總數
        this.dir = `${process.env.PUBLIC_URL}/officers_2023` // 資料夾位置

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
            <div id="officers-2023" className={className} style={{"--top": this.props.top, "--b-pos": bPos}}>
                <div className="title">歷年幹部 - 2023</div>
                <div className="sec-title">第二屆</div>
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
                        img={`${this.dir}/captain.jpg`}
                        name="陳柏余"
                        position="隊長/結構組長"
                        sign="2023/08/14"
                    >
                        <div>活網id：fishhh</div>
                        <div>平常在實驗室裡負責管東管西。各種領域都略懂一些，但沒有閱讀能力去讀任何document。可以去我的 <a href="https://fishhh0710.github.io/" target="_blank" rel="noreferrer">blog</a> 參觀一下。</div>
                    </OfficerBlock>
                    <OfficerBlock
                        show={this.state.showing === 1}
                        img={`${this.dir}/vice.jpg`}
                        name="魏嘉緯"
                        position="副隊長/文書組長"
                        sign="2023/08/14"
                    >17歲，是文書組長。每日上網時數超過30小時!!人體很神奇的吧。有事可以找2023⚡神隊長。</OfficerBlock>
                    <OfficerBlock
                        show={this.state.showing === 2}
                        img={`${this.dir}/programing.jpg`}
                        name="李承翰"
                        position="程式組長"
                        sign="2023/08/14"
                    >超會寫程式，還是個駭客，曾經駭入嘉華的各種設備。</OfficerBlock>
                </div>
            </div>
        );
    }
}
