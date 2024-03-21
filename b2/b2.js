//khai bao array
let arr = [];

arr[0] = 1;
arr[1] = 'Heeloss';
arr[2] = false;

console.log(arr[arr.length - 1]);

let arr2 = [1,2,3,'valid',5,6,7,'8',false,10];
console.log(arr2);

//method cuar array
//push : them phan tu cuoi mang
//pop : xoa phan tu cuoi mang
//shift : xoa phan tu dau mang
//unshift : them phan tu vao dau mang
//splice : chon ptu de xoa, them, thay the phan tu
arr2.splice(3, 1, 'new');
console.log(arr2);
//so sanh 
console.log(arr2.sort( (a, b) => a - b));

//method join va split chuyen doi chuoi thanh mang va nguoc lai
let message = 'Lisan Al Gaib';
let altMessage = message.split(' ');
console.log(message.split(' '));


console.log(altMessage.join('-'));
console.log(typeof typeof 1);
//slice : cat mang
arr2.slice(2, 5);

// map : tao mang moi tu mang cu theo dieu kien 
let arr3 = [4,10,5,22,12,5];
let arrMap = (arr3.map( (e) => e * 2));
console.log(arrMap);
//thu cong
let newNum = [];
arr3.forEach( e => {
    newNum.push(e * 2);
});
console.log(newNum);

//filter : loc mang theo dieu kien
let arrFilter = arr3.filter( e => e % 2 === 0);
console.log(arrFilter);

const findArr =[] ;
console.log(arr3.find( e => e > 5));


//object 
let obj = {
    name: "Hoang",
    age: 21,
    isMale: true,
    address: {
        city: "Hanoi",
        country: "Vietnam"
    },
    lang: ["Vietnamese", "English", "Japanese"]
};

console.log(obj);
