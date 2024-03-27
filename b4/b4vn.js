let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]


function updateBox(totalBox) {
    const score = document.querySelector('.points');
    score.innerText =  totalBox;
    }

let totalBox = 0;
function addBox() {
for(let i = 0 ; i <5; i++) {
    const box = document.createElement('div');
    totalBox++;
    updateBox(totalBox);
    box.classList.add('box')
    box.style.backgroundColor = colors[i];
    box.addEventListener('click', () => {
        box.remove();
        totalBox--;
        updateBox(totalBox);
    });
    document.body.appendChild(box);
}
}

addBox();

const btnAdd = document.getElementById('btn');
btnAdd.addEventListener('click' , () => {
    addBox();
} )

