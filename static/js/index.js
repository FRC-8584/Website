function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function index_onload() {
    update_sticky_top();
}

function update_sticky_top() {
    let element_list = document.querySelectorAll(".content");
    for (let i = 0; i < element_list.length; i++) {
        let element = element_list[i];
        if (element.innerHTML == "") {
            setTimeout(update_sticky_top, 200);
        }
        for (let i = 0; i < element_list.length; i++) {
            let element = element_list[i];
            let target = Math.min(64, window.innerHeight - element.getBoundingClientRect().height);
            element.style.setProperty("--sticky_top", `${target}px`);
        }
    }
    scrollTo(0, 0);
}

function scroll_change() {
    if (document.querySelectorAll(".button-div").length == 0) {
        setTimeout(scroll_change, 100);
        return;
    }

    let scroll_position = window.scrollY;
    if (scroll_position <= document.querySelector("body > img").height + 64) {
        document.querySelector("#top-bar").style.setProperty("--trans", 1);
    }
    else {
        document.querySelector("#top-bar").style.setProperty("--trans", 0);
    }
    let img_blur = 10 * window.scrollY / (document.querySelector("body > img").height + 64);
    document.querySelector("img.title-img").style.setProperty("--blur", `${img_blur}px`)

    let page_list = document.querySelectorAll(".content");
    let start_position = window.innerHeight * 0.9;
    for (let i = page_list.length - 2; i >= 0; i--) {
        let element = page_list[i];
        let element_position = element.getBoundingClientRect().top;
        if (element_position < start_position) {
            element.style.setProperty("--blur", "0px");
            let button_list = document.querySelectorAll(".button-div");
            for (let j = 0; j < button_list.length; j++) {
                if (j == i) {
                    button_list[j].classList.add("select")
                }
                else {
                    button_list[j].classList.remove("select")
                }
            }
            if (i > 0) {
                let img_num = Math.min(12, 12 * (start_position - element_position) / start_position);
                element.previousElementSibling.style.setProperty("--blur", `${img_num}px`);
                element.nextElementSibling.style.setProperty("--blur", `0px`);
            }
            break;
        }
    }
}
