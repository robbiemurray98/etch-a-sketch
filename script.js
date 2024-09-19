const container = document.querySelector('.container');

let userInput = +prompt('What size grid?');

let totalBoxNumber = (userInput * userInput);

for (let i = 0; i < totalBoxNumber; i ++) {
    const box = document.createElement('div');
    box.classList = 'box';
    box.style.border = '1px solid black';

    container.appendChild(box);
    
};

const boxes = document.querySelectorAll('.box');
let gridWidth = container.offsetWidth;
let gridHeight = container.offsetHeight;

boxes.forEach((box) => {
    box.style.width = 
    `${gridWidth / userInput}px`;

    box.style.height =
    `${gridHeight / userInput}px`;
});







