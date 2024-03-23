const heading = document.getElementById('h2');
console.log(heading);

const headingCss = document.querySelector('#h2');

heading.style.color = 'red';
heading.style.backgroundColor = 'white';

h2.innerText = 'Hello World';
h2.innerHtml = '<i>Hello World2</i>';

const paragraph = document.getElementsByClassName('para');



Array.from(paragraph).map((p, index) => {
    p.innerText = `Paragra ${index}`;
}
);


//tao the p co noi dung la 'para4' sau the para 
const para4 = document.createElement('p');
para4.innerText = 'para4';
console.log(para4);
document.body.appendChild(para4);

const menu = [
    {
        label: 'Facebook',
        url: 'https://facebook.com'
    },
    {
        label: 'Google',
        url: 'https://google.com'
    },
    {
        label: 'Twitter',
        url: 'https://twitter.com'
    }
];

//tao the a tuong ung voi ptu trong menu
//noi dung la label
//href la url

const ul = document.createElement('ul');
document.body.appendChild(ul);

menu.map((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = item.label;
    a
    a.href
    li.appendChild(a);

    ul.appendChild(li);
}

);

menu.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = item.label;
    a.href = item
    li.appendChild(a);

