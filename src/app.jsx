import React from "react";

import Loading from "./js/loading";
import TopBar from "./js/top-bar";
import ImgBlock from "./js/img-block";
import Front from "./js/front";
import Vision from "./js/vision";
import Intro from "./js/intro";

import { updateTopPosition, topPositionDict, elementPositionDict, scrollToById } from "./utils";

import "./app.css"

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.imgList = [];
        this.totalImg = 0;
        this.state = {
            imageLoaded: false,
            imageProgress: 0,
            remove: false,
            scrolled: false,
            yPosition: 0,
            animateEnd: false,
            topPosition: {},
            elementPosition: {},
            showDict: {},
        };

        // 檢查圖片是否已載入完成
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

            // 未載入完成
            if (!finished) {
                setTimeout(this.checkImg.bind(this), 100)
            }
            // 載入完成
            else {
                setTimeout(() => {
                    this.setState({
                        remove: true
                    });
                }, 1750)
                setTimeout(() => {
                    this.setState({
                        animateEnd: true
                    });
                    this.updateTopPosition();
                    window.addEventListener("resize", this.updateTopPosition.bind(this));
                    setTimeout(() => {
                        scrollToById("front")
                    }, 10);
                }, 7250);
            }
        }
        
        this.updateTopPosition = () => {
            updateTopPosition();
            this.setState({
                topPosition: topPositionDict,
                elementPosition: elementPositionDict,
            });
        }
    }

    componentDidMount() {
        this.imgList = Array.from(document.querySelectorAll("img"));
        this.totalImg = this.imgList.length;
        this.checkImg();

        document.addEventListener("scroll", () => {
            let scrolled = window.scrollY !== 0;
            if (scrolled !== this.state.scrolled) {
                this.setState({
                    scrolled: scrolled,
                });
            }
            this.setState({
                yPosition: window.scrollY,
            });

            let showDict = {};
            let diff = false;
            Object.keys(elementPositionDict).forEach((key) => {
                const tPos = elementPositionDict[key][0];
                const show = tPos - window.scrollY < window.innerHeight * 0.9;

                showDict[key] = show;
                if (show !== this.state.showDict[key]) {
                    diff = true;
                }
            })
            if (diff) {
                this.setState({
                    showDict: showDict,
                }); 
            }
        })
        this.updateTopPosition();
    }

    render() {
        const isPhone = window.innerHeight / window.innerWidth > 1;
        const loadingValue = this.state.imageProgress / this.totalImg;
        
        let classList = [];
        if (this.state.remove) {
            classList.push("show");
        }
        if (this.state.animateEnd) {
            classList.push("animate-end");
        }
        const className = classList.join(" ");

        return (
            <div id="app" className={className} style={{"--y": this.state.yPosition}}>
                {
                    this.state.remove ? null :
                    <Loading value={loadingValue} finished={this.state.imageLoaded} />
                }
                <TopBar scrolled={this.state.scrolled} />
                <ImgBlock scrolled={this.state.scrolled} />
                <Front
                    isPhone={isPhone}
                    show={this.state.showDict["front"]}
                    top={this.state.topPosition["front"]}
                    pos={this.state.elementPosition["front"]}
                />
                <Vision
                    isPhone={isPhone}
                    show={this.state.showDict["vision"]}
                    top={this.state.topPosition["vision"]}
                    pos={this.state.elementPosition["vision"]}
                />
                <Intro
                    isPhone={isPhone}
                    show={this.state.showDict["intro"]}
                    top={this.state.topPosition["intro"]}
                    pos={this.state.elementPosition["intro"]}
                />
            </div>
        )
    }
}
