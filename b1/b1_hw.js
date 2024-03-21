let giaithua = (b) => {
    res = 1;
    while (b>=1) {
        res *=b;
        b--;
    }
    return res;
}

let ans = giaithua(5)
console.log(ans);

let daongc = (str) => {
    revStr = '';
    for(let i = str.length -1 ; i >=0 ;i--) {
        revStr += str[i];
    }
    return revStr;
}
let strOrg = "hello"
let ans_b2 = daongc(strOrg);
console.log(ans_b2);

function b3(countryCode) {
    switch (countryCode) {
        case 'VN':
        console.log('Xin Chào');
        break;
        case 'EN': 
        console.log('Welcome');
        break;
        case 'JP':
        console.log('Konichiwa');
        break;
        case 'FR':
        console.log('Bonjour');
        break;
    }
}


b3("JP");


const b4 = (str) => {
    return str.length > 15 ? str.substring(0, 10) + "…" : str;
};


console.log(b4("WelcomeToTechMaster"));
