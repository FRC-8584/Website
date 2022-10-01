function scroll_to(id) {
    if (id == "title") {
        scroll(0, 0);
    }
    let position = document.querySelector("body > img").getBoundingClientRect().height - 64;
    let page_list = document.querySelectorAll(".content");
    for (let i = 0; i < page_list.length; i++) {
        if (page_list[i].id == id) {
            scroll(0, position);
            return
        }
        position += page_list[i].getBoundingClientRect().height;
    }
}