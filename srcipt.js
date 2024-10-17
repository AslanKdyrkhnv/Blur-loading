const bg = document.querySelector('.bg'); 
const loadText = document.querySelector('.loading-text');

let load = 0; 
let init = setInterval(blurring, 10)

function blurring() {
    load++;
    if(load>99) {
        clearInterval(init);
    }
    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 100, 0)}px)`;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}