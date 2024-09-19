const containerDiv = document.querySelector('.container');

const btn = document.querySelector('.btn');

// create a variable that holds the user input
// send that variable to a function turns the number given into a grid

// (num x num) + num + 1

// once flex items are equal to numSum, wrap to a new line

btn.addEventListener('click', () => {
    let num = Number(prompt('Please enter a number.'));
    let numSum = (num * num) + num + 1;

    for (let i = 1; i < numSum; i++) {
        const div = document.createElement('div');
        containerDiv.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'blue';
        })
    };

});




// for (let i = 1; i < 273; i++) {
//     const div = document.createElement('div');
//     containerDiv.appendChild(div);
//     div.addEventListener('mouseover', () => {
//         div.style.backgroundColor = 'blue';
//     })
// };





