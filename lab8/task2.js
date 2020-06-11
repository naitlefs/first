window.onload = () => {
    let imgs = document.getElementsByClassName('img');
    for (let i = 1; i < imgs.length; i++) {
        imgs[i].style = 'display:none';
    }
}

function next() {
    let imgs = document.getElementsByClassName('img');
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].style.display.length <= 0) {
            imgs[i].style = 'display:none';
            let nextElementPosition = i + 1 === imgs.length ? 0 : i + 1;
            imgs[nextElementPosition].style.display = '';
            break;
        }
    }
}