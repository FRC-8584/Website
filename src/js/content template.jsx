import React from "react";

// import "../css/template.css";

export default class Template extends React.Component {
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
                {/* 由此開始新增內容 */}
            </div>
        );
    }
}
asdsad