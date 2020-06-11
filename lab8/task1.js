let imgs = document.getElementsByClassName('img');
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("mouseover", over);
    imgs[i].addEventListener("mouseout", clear);
}

function over(e) {
    let name = e.target.dataset.type;
    let price = e.target.dataset.price;

    info.value = `${name} ${price}`;
}

function clear() {
    info.value = ``;
}