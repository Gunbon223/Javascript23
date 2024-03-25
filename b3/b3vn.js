//1

const p = document.createElement('p');
p.id = 'text';
p.style.color = '#777';
p.style.fontSize = '2rem';
p.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.';
document.body.appendChild(p);

//2

// const li = document.getElementsByTagName('li');
// Array.from(li).map((li) => {
//     li.style.color = 'blue';
// });

//3
const li2 = document.getElementsByClassName('li-2');
    const ul = document.getElementById('list');
    const ulLength = ul.children.length;

     for (let i = ulLength + 1; i < ulLength + 4; i++) {
        const li = document.createElement('li');
        li.innerText = `Item ${i}`;
         ul.appendChild(li);
 }
    
ul.children[0].style.color = 'red';
ul.children[2].style.backgroundColor = 'green';
ul.children[3].remove();
const liNew = document.createElement('li');
liNew.innerText = 'Item New';
ul.appendChild(liNew);
ul.insertBefore(liNew, ul.children[3]);


