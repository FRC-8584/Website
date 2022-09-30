function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function onload() {
    return;
}

function scroll_change() {
    if (window.scrollY < document.querySelector("body > img").height + 64) {
        document.querySelector("#top-bar").style.setProperty("--trans", 1);
    }
    else {
        document.querySelector("#top-bar").style.setProperty("--trans", 0);
    }
}
