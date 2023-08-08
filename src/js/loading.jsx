import React from "react";

import "../css/loading.css"

export default class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            connectDot: 0
        }

        this.addDot = () => {
            this.setState((state) => {
                return {
                    connectDot: (state.connectDot + 1) % 3
                };
            })
            if (!this.props.finished) {
                setTimeout(this.addDot.bind(this), 1000);
            }
        };
    }

    componentDidMount() {
        setTimeout(this.addDot.bind(this), 1000);
    }

    render() {
        const value = this.props.value;
        const finished = this.props.finished;
        const displayText = finished ? "Loading Complete!" : `Connecting${" .".repeat(this.state.connectDot + 1)}`

        return (
            <div id="loading" className={finished ? "finished" : ""}>
                <div className="progress" style={{"--value": value}}>
                    <div className="value">{`${(100 * value).toFixed(2)}%`}</div>
                    <div className="bar">{displayText}</div>
                </div>
            </div>
        )
    }
}
