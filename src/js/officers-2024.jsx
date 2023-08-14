import React from "react";

import OfficerBlock from "./officer-block";

import "../css/officers.css";

export default class Officers2024 extends React.Component {
    constructor(props) {
        super(props);

        this.totalOfficer = 6; // 填入幹部總數
        this.dir = `${process.env.PUBLIC_URL}/officers_2024` // 資料夾位置

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
            <div id="officers-2024" className={className} style={{"--top": this.props.top, "--b-pos": bPos}}>
                <div className="title">歷年幹部 - 2024</div>
                <div className="sec-title">第三屆</div>
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
                        name="薛年成"
                        position="隊長"
                        sign="2023/08/14"
                    >
                        <div>在FRC_8584第二屆賽季末時加入團隊，個性上屬於外向慵懶系，平時不會輕易動怒除非多次踩到了他的底線。興趣方面喜歡在閒瑕時放鬆閱讀打打Game，但長期處在高分貝環境導致有時有點重聽?</div>
                    </OfficerBlock>
                    <OfficerBlock
                        show={this.state.showing === 1}
                        img={`${this.dir}/programing.jpg`}
                        name="葉富祥"
                        position="程式組長"
                        sign="2023/08/14"
                    >
                        <div>最廢的組長，平常不易怒，稍微害羞（單獨時），社團內喜歡逗趣，主攬機台程式，愛玩遊戲、聽音樂，追看國外廢片、迷因。隨叫隨到，遇程式問題可詢問我，我或能提供協助，不妨先詢問。</div>
                    </OfficerBlock>
                    <OfficerBlock
                        show={this.state.showing === 2}
                        img={`${this.dir}/structure.jpg`}
                        name="辜硯楷"
                        position="結構組長"
                        sign="2023/08/14"
                    >
                        <div>外表看似兇神惡煞 & 某部動畫電影的角色，但事實上個性溫和友善，是團隊的結構技術擔當，常會用大膽創新的想法與純熟的技術實作機臺，具有眾多口頭禪！</div>
                    </OfficerBlock>
                    <OfficerBlock
                        show={this.state.showing === 3}
                        img={`${this.dir}/vice-structure.jpg`}
                        name="王庠富"
                        position="結構組副組長"
                        sign="2023/08/14"
                        indent={false}
                    >
                        <div>大家好</div>
                        <div>我是結構組副組長 王庠ㄒㄧㄤˊ富</div>
                        <div>生日5/12 金牛座</div>
                        <br />
                        <div>歡迎各位加入我們，如果有不會或不清楚的事都可以問我。</div>
                        <div>希望之後能看到各位在社團中的活躍身影，一起為FRC8584努力💪</div>
                    </OfficerBlock>
                    <OfficerBlock
                        show={this.state.showing === 4}
                        img={`${this.dir}/pr.jpg`}
                        name="簡靖昀"
                        position="公關文書組長"
                        sign="2023/08/14"
                        indent={false}
                    >
                        <div>哈囉～</div>
                        <div>我是這次FRC8584的公關文書組長</div>
                        <div>我叫簡靖昀</div>
                        <div>我是11/28生日 射手座</div>
                        <div>-</div>
                        <div>大家剛認識我都會說我很兇</div>
                        <div>但其實我很奈斯啦</div>
                        <div>我只是沒事就不想講話</div>
                        <div>-</div>
                        <div>我超級喜歡聽音樂</div>
                        <div>如果有喜歡的音樂</div>
                        <div>可以跟我講哦</div>
                    </OfficerBlock>
                    <OfficerBlock
                        show={this.state.showing === 5}
                        img={`${this.dir}/vice-pr.jpg`}
                        name="林羽珍"
                        position="公關文書組副組長"
                        sign="2023/08/14"
                        indent={false}
                    >
                        <div>哈囉～我是今年加入隊伍的林羽珍</div>
                        <div>目前擔任公關組的副組長</div>
                        <div>生日3/18，是人格INFJ的雙魚~</div>
                        <div>平常喜歡看電影、聽音樂</div>
                        <div>特別喜歡巧克力！！</div>
                        <div>歡迎有興趣的人加入我們FRC8584🥳</div>
                        <div>一起在夢想的路上努力～</div>
                    </OfficerBlock>
                </div>
            </div>
        );
    }
}
