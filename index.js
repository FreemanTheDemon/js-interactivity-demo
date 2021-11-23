const minusBtn = document.querySelector('#minus-btn');
const resetBtn = document.getElementById('reset-btn');
const plusBtn = document.querySelector('#plus-btn');
const counterText = document.getElementById('counter');
const heading = document.getElementById('heading');
const headingInput = document.getElementById('heading-input');

let count = 0;

const increase = () => {
    count++;
    counterText.textContent = count;
}

const decrease = () => {
    count--;
    counterText.textContent = count;
}

const reset = () => {
    count = 0;
    counterText.textContent = count;
}

plusBtn.addEventListener('click', increase);
resetBtn.addEventListener('click', reset);
minusBtn.addEventListener('click', decrease);

const btns = document.querySelectorAll('.theme-buttons');

const selectTheme = (event) => {
    let theme = event.target.textContent;
    
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    body.className = theme;
    main.className = theme;
    for (let i = 0; i < btns.length; i++) {
        btns[i].className = theme;
    }
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', selectTheme);
}

headingInput.addEventListener('change', (e) => {
    heading.textContent = e.target.value;
});