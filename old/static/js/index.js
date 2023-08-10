function index_onload(s_1=true) {
    let test_list;
    let element_list = document.querySelectorAll(".content");
    if (s_1) {
        test_list = []
        element_list.forEach((x)=>{test_list.push(x.ready)});
        if (test_list.indexOf(undefined) != -1) {
            setTimeout(index_onload, 100);
            return
        }
    }
    test_list = [];
    document.querySelectorAll("img").forEach((x)=>{test_list.push(x.complete)});
    if (test_list.indexOf(false) != -1) {
        setTimeout(index_onload, 100, false);
        return
    }
    // 完成載入

    update_sticky_top();
    scroll_change();

    document.querySelectorAll(".officers-block").forEach((element)=>{
        element.addEventListener("wheel", (event)=>{
            if (element.matches(':hover')) {
                event.preventDefault();
                element.scrollLeft += event.deltaY;
            }
        })
    });
}

function update_sticky_top() {
    let element_list = document.querySelectorAll(".content");
    for (let i = 0; i < element_list.length; i++) {
        let element = element_list[i];
        let target = Math.min(64, window.innerHeight - element.getBoundingClientRect().height);
        element.style.setProperty("--sticky_top", `${target}px`);
    }
}

function scroll_change() {
    let scroll_position = window.scrollY;

    if (scroll_position <= document.querySelector("body > img").height + 64) {document.querySelector("#top-bar").style.setProperty("--trans", 1);}
    else {document.querySelector("#top-bar").style.setProperty("--trans", 0);}
    let img_blur = 10 * window.scrollY / (document.querySelector("body > img").height + 64);
    document.querySelector("img.title-img").style.setProperty("--blur", `${img_blur}px`)

    let page_list = document.querySelectorAll(".content");
    let start_position = window.innerHeight * 0.9;

    let button_update = false;
    page_list.forEach((element, index)=>{
        let element_position = element.getBoundingClientRect().top;

        if (element_position > start_position) {
            // 更新導覽列
            if (button_update == false) {
                document.querySelectorAll(".button-div").forEach((b_element, b_index)=>{
                    if (b_index == Math.max(0, index - 1)) {b_element.classList.add("select")}
                    else {b_element.classList.remove("select")}
                })
                button_update = true;
            }

            // 更新霧化
            element.style.setProperty("--blur", `0px`);
        }
        else if (index < page_list.length - 2) {
            // 更新霧化
            let element_next_position = element.nextElementSibling.getBoundingClientRect().top;
            if (element_next_position <= start_position) {
                let img_num = Math.min(12, 12 * (start_position - element_next_position) / start_position);
                element.style.setProperty("--blur", `${img_num}px`);
            }
            else {
                element.style.setProperty("--blur", `0px`);
            }
        }
    })
}
