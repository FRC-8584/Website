import React from "react";

import "../css/vision.css";

export default class Vision extends React.Component {
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
            <div id="vision" className={className} style={{"--top": this.props.top, "--b-pos": bPos}}>
                {
                    isPhone ?
                    <div className="title">To Infinity<br/>and<br/>Beyond</div>:
                    <div className="title">“To Infinity and Beyond”</div>
                }
                <div className="sec-title">飛向宇宙 浩瀚無垠</div>
                <div className="about">FRC 8584是一支由嘉華中學機電整合實驗社所組成的FRC隊伍，在我們的團隊中有著專精不同區塊的成員，透過彼此之間的思考、討論、互助、合作，最後將我們最完美的想法給創造出來。在FRC的比賽中除了能充分地展現我們在課堂內所學的知識外，還能引導我們更進一步地去瞭解並研究課外的、更深的知識，完美的展現FIRST精神：創新、團隊、合作、包容、快樂，並且不斷的吸收他人的經驗，將別人的經驗結合自己所會的能力，讓這個團隊能夠變得更強。期待未來的FRC 8584能夠如同我們的隊名一樣持續努力、持續進步，比昨天的我們還要更強，未來充滿著無限的可能!</div>
                <div className="sign">#嘉華中學 #since 2021</div>
                {/* 在此插入影片，並依序插入style */}
                <iframe style={{"--delay": 0}} src="https://www.youtube.com/embed/ZOy-7GGJqes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe style={{"--delay": 1}} src="https://www.youtube.com/embed/3_GoEUjhMos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        );
    }
}
