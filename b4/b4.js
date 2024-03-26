// Su dung html attribute 
const sayHi = () => {
    alert('Hi')
}

// Su dung Dom property

let btn2 = document.getElementById('btn2');
btn2.onclick = () => {
    alert('Hi you just click btn 2')
};

// Su dung addEventListener
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    alert('Hi this is btn 3')
})
const p2 = 'random paragraph 2'
const p3 = 'random paragraph 3'
const p4 = 'random paragraph 4'

const p = document.getElementById('text');
const changeContent = () => {
    const paragraphs = [p2, p3, p4];
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    p.innerHTML = paragraphs[randomIndex];
}

//2
let btn02 = document.getElementById('btn-2');

btn02.onclick = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    p.style.color ='#'+ randomColor;
}

//3

let btn03 = document.getElementById('btn-3');

btn03.addEventListener('click',() => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    p.style.backgroundColor ='#'+ randomColor;
})
let count = 0;
document.addEventListener('ddddclick', function(event) {
    const rounds = document.querySelectorAll('.round');
    if(count >= 3 && rounds.length) {
        count = 0;
        rounds.forEach((round) => {
            round.parentNode.removeChild(round);
        });
    } else {
        const round = document.createElement('div');
        round.classList.add('round');
        round.style.position = 'absolute';
        round.style.left = event.clientX - 50 + 'px';
        round.style.top = event.clientY - 50  + 'px';

        document.body.appendChild(round);
        count++;
    }
});

let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

const input = document.querySelector('input');
const ul = document.querySelector('ul');

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        // Lấy giá trị trong ô input
        let value = input.value;
        
        // Kiểm tra xem giá trị trong ô input có tồn tại trong mảng products không
        let data = products.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));

        if(data.length === 0) {
            ul.innerHTML = `<li>Không tìm thấy sản phẩm nào</li>`;
        } else {
            ul.innerHTML = data.map(product => `<li>${product.name}</li>`).join('');
        }

        // Xóa giá trị trong ô input
        input.value = "";
    }
});