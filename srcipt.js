const bg = document.querySelector('.bg'); 
const loadText = document.querySelector('.loading-text');

let load = 100; 
let init = setInterval(blurring, 10)

function blurring() {
    load--;
    if(load===0) {
        clearInterval(init);
    }
    loadText.innerHTML = `${load}%`;
    bg.style.filter = `blur(${load}px)`;
}

