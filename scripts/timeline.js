let items = document.querySelectorAll('.trial li');

function elementInView(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top>= 0 &&
        rect.bottom <= (window.innerHeight || document.document.Element.clientHeight)
    )
}

function callBack() {
    for(let i = 0; i < items.length; i++) {
        if(elementInView(items[i])){
            items[i].classList.add("in-view")
        }
    }
}

window.onload = callBack;
window.onresize = callBack;
window.onscroll = callBack;

