const prev = document.querySelector('.prevBtn');
const next = document.querySelector('.nextBtn');
const counterNumber = document.getElementById('counter');
let counter = 0;
prev.addEventListener('click', () => {
    counter--;
    counterNumber.innerText = counter;
    colorCheck(counter);
}
);

next.addEventListener('click', () => {
    counter++;
    counterNumber.innerText = counter;
    colorCheck(counter);
}
);

function colorCheck(counter) {
    if(counter === 0) {
        counterNumber.style.color = '#333'
    }
    if(counter <0) {
        counterNumber.style.color = 'red'
    }
    if(counter >3) {
        counterNumber.style.color = 'green'
    }
}