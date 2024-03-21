
let name = "Hoàng";
let age = "21";
let isMale = true;


let message = `Tôi là ${name} , năm nay tôi ${age} tuổi, tôi là ${isMale ? "nam" : "nữ"}`;
console.log(message);

//function 
function sum(a,b) {
    return a-b;
}

//day la 1 bien co gia tri la ham vo danh
let sum2 = function(a, b) {
    return a+b;
}

//Arrow function (ES6) || lambda expression / Java 
let sum3 = (a,b) => {
    return a *b;
}

console.log(sum(5,6));
console.log(sum2(typeof 5,"5"));
console.log(sum3("3",2));

for (let index = 0; index < 10; index++) {
console.log(index);    
}

let i=0;
while(i<10){
    console.log(i);
    i++;
}

let j =1;
do {
    console.log(j);
    j+=2;
} while(j<20);

