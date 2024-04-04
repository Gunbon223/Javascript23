//b1
let array = ['aba', 'aa', 'ad', 'c', 'vcd'];
function getStringHasMaxLength(array) {
    let maxLength = 0;
    let result = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
            result = array[i];
        }
    }
    return result;
}

let result = getStringHasMaxLength(array);
console.log(result);

//b2
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

function filterUser(users) {
    let result = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].isStatus && users[i].age > 25) {
            result.push(users[i]);
        }
    }
    return result;
}

let result2 = filterUser(users);
console.log(result2);

//b3
let array3 = ["one", "two", "three", "one", "one", "three"];

function getCountElement(array) {
    let result = {};
    for (let i = 0; i < array.length; i++) {
        if (result[array[i]]) {
            result[array[i]]++;
        } else {
            result[array[i]] = 1;
        }
    }
    return result;
}

let result3 = getCountElement(array3);
console.log(result3);

