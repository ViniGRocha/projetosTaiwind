
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 1366}px)`;
}

setInterval(carrossel, 1800);


const texts = document.getElementById("text");
const text = document.querySelectorAll("#text span");

let idy = 0;

function carrosselText(){
    idy++;

    if(idy > text.length - 1){
        idy = 0;
    }

    texts.style.transform = `translateX(${-idy * 500}px)`;
}

setInterval(carrosselText, 1800);