import React from "react";

import "../css/intro.css";

export default class Intro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showEnd: false,
            touchBlock: -1,
        };
        this.lastShow = 0;

        this.touchBlock = (id) => {
            if (!this.props.isPhone) {
                return;
            }
            this.setState((state) => {
                return {
                    touchBlock: id === state.touchBlock ? -1 : id,
                };
            });
        };
    }

    componentDidUpdate(props) {
        if (!props.show && this.props.show) {
            const showTime = Date.now();
            this.lastShow = showTime;

            setTimeout(() => {
                if (showTime === this.lastShow) {
                    this.setState({
                        showEnd: true
                    })
                }
            }, 2250)
        }
        if (this.state.showEnd && !this.props.show) {
            this.setState({
                showEnd: false
            })
        }
    }
    
    render() {
        const isPhone = this.props.isPhone;
        const posTuple = this.props.pos;
        const bPos = posTuple ? posTuple[1] : 0;
        
        let classList = ["content"];
        if (this.props.show) {
            classList.push("show");
        }
        if (this.state.showEnd) {
            classList.push("show-end");
        }
        if (isPhone) {
            classList.push("phone");
        }
        const className = classList.join(" ");
        return (
            <div id="intro" className={className} style={{"--top": this.props.top, "--b-pos": bPos}}>
                <div className="title">團隊分工</div>
                <div className="sec-title">合理的分工能夠增加效率</div>
                <div className="content-block">
                    <div
                        className={`block${this.state.touchBlock === 0 ? " expand" : ""}`}
                        onClick={this.touchBlock.bind(this, 0)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/intro/structure.jpg`} alt="structure"></img>
                        <div className="name">結構組</div>
                        <div className="text">透過組員們的討論與想像，將機台的雛形粗略地描繪於紙上，經過實際測量與計算後再使用SolidWorks進行詳細的建模與模擬，接著再將壓克力及木板透過雷射切割機製作模型，進行各種的測試去尋找並改善可能發生的錯誤，最終再透過工具或是委託工廠以其他更堅固的材質製作出成品。</div>
                    </div>
                    <div
                        className={`block${this.state.touchBlock === 1 ? " expand" : ""}`}
                        onClick={this.touchBlock.bind(this, 1)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/intro/programming.jpg`} alt="programming"></img>
                        <div className="name">程式組</div>
                        <div className="text">分析題目與場地，並規劃最佳的策略，配合結構組的想法進行調整，透過程式取代結構中複雜的部件，還有透過影像辨識等技術製作自動化的移動與射球等動作，提升精準度並輔助駕駛的操作。除了撰寫機器人的程式外，在比賽時也需要上場操作機器人，同時記錄下問題及各類數據，在下一次比賽前能更好的去調整機器人的狀態。</div>
                    </div>
                    <div
                        className={`block${this.state.touchBlock === 2 ? " expand" : ""}`}
                        onClick={this.touchBlock.bind(this, 2)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/intro/paperwork.jpg`} alt="paperwork"></img>
                        <div className="name">文書組</div>
                        <div className="text">負責處理隊上各種大大小小的文件，對內包含了工程筆記的撰寫與翻譯、每次開會的會議紀錄、教學文章與簡報的製作，確保沒有參與到的隊員也可以快速的了解狀況；對外則包含了宣傳文章的撰寫等。</div>
                    </div>
                    <div
                        className={`block${this.state.touchBlock === 3 ? " expand" : ""}`}
                        onClick={this.touchBlock.bind(this, 3)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/intro/art.jpg`} alt="art"></img>
                        <div className="name">美宣組</div>
                        <div className="text">專門設計與製作各種公關品，例如胸章、吊飾等，同時我們的隊服、外套及旗幟等也都是由美宣組所設計的，最重要的團隊Logo也是由美宣組所設計。</div>
                    </div>
                </div>
                <div className="click-back" onClick={this.touchBlock.bind(this, this.state.touchBlock)} />
            </div>
        );
    }
}