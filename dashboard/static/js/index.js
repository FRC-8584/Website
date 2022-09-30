function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function onload() {
    return;
}

function hash_change() {
    let hash = window.location.hash;
    let content_list = document.querySelectorAll(".content");
    switch (hash) {
        case "#home":
        case "#info":
        case "#data":
            break;
        default:
            hash = "#home"
            window.location.hash = hash;
    }
    for (let i = 0; i < content_list.length; i++) {
        if (content_list[i].id == hash.slice(1)) {
            content_list[i].style.display = "";
        }
        else {
            content_list[i].style.display = "none";
        }
    }
}

function show_page(page_name) {
    let page_list = document.querySelectorAll("#info > div.page");
    for (let i = 0; i < page_list.length; i++) {
        let page = page_list[i];
        if (page.className.includes(page_name)) {
            page.style["display"] = "";
        }
        else {
            page.style["display"] = "none";
        }
    }
}
