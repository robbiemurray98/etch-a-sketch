const container = document.querySelector('.container');

function RGBcolor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + R + "," + G + "," + B + ")";  
    return randomColor;
  }


  
  



for (let i = 0; i < 256; i ++) {
    const box = document.createElement('div');
    box.classList = 'box';
    box.style.border = '1px solid black';

    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = RGBcolor();
        if (!box.style.opacity) box.style.opacity = '.1';
        opacity = parseFloat(box.style.opacity);
        box.style.opacity = opacity + .1;
    });

    container.appendChild(box);
    
};

const boxes = document.querySelectorAll('.box');
let gridWidth = container.offsetWidth;
let gridHeight = container.offsetHeight;

boxes.forEach((box) => {
    box.style.width = 
    `${gridWidth / 16}px`;

    box.style.height =
    `${gridHeight / 16}px`;
});



const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    let userInput = +prompt('What size grid?');

    if (userInput > 100) {
        alert('You must enter a number under 100')
    };

    let totalBoxNumber = (userInput * userInput);

    

    container.innerHTML = '';

    for (let i = 0; i < totalBoxNumber; i ++) {
        const box = document.createElement('div');
        box.classList = 'box';
        box.style.border = '1px solid black';

        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = RGBcolor();
            if (!box.style.opacity) box.style.opacity = '.1';
            opacity = parseFloat(box.style.opacity);
            box.style.opacity = opacity + .1;
        });
    
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
});

















