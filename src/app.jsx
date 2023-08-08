import React from "react";

import Loading from "./js/loading";
import TopBar from "./js/top-bar";
import ImgBlock from "./js/img-block";
import Front from "./js/front";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.imgList = [];
        this.totalImg = 0;
        this.state = {
            imageLoaded: false,
            imageProgress: 0,
            remove: false,
        };

        this.checkImg = () => {
            const originImg = this.imgList.length;
            const uncompleteImgList = this.imgList.filter((element) => {
                return !element.complete;
            })
            const completeImg = originImg - uncompleteImgList.length + this.state.imageProgress;
            this.imgList = uncompleteImgList;

            const finished = completeImg === this.totalImg;
            this.setState({
                imageLoaded: finished,
                imageProgress: completeImg,
            });

            if (!finished) {
                setTimeout(this.checkImg.bind(this), 100)
            }
            else {
                setTimeout(() => {
                    this.setState({
                        remove: true
                    });
                }, 5000)
            }
        }
    }

    componentDidMount() {
        this.imgList = Array.from(document.querySelectorAll("img"));
        this.totalImg = this.imgList.length;
        this.checkImg();
    }

    render() {
        const loadingValue = this.state.imageProgress / this.totalImg;
        return (
            <div id="app">
                {
                    this.state.remove ? null :
                    <Loading value={loadingValue} finished={this.state.imageLoaded} />
                }
                <TopBar />
                <ImgBlock />
                <Front />
            </div>
        )
    }
}
