// 計算頂端座標(Sticky)
export var topPositionDict = {};
export var elementPositionDict = {};
export function updateTopPosition () {
    let nowPosition = window.innerHeight;
    document.querySelectorAll(".content").forEach((element) => {
        let elementHight = element.getBoundingClientRect().height;
        topPositionDict[element.id] = window.innerHeight - elementHight;
        elementPositionDict[element.id] = [nowPosition, nowPosition + elementHight - window.innerHeight];
        nowPosition += elementHight;
    });
}

export function scrollToById (id) {
    let position = elementPositionDict[id];
    if (position) {
        window.scroll(0, position[0]);
    }
}
