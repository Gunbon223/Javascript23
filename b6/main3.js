const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('breed-list');
let breeds = '';
// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
    // Gọi API để lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breeds/list/all")
    

    // Sau khi có data thì hiển thị kết quả trên giao diện
    renderBreed(res.data.message)
}

function renderBreed(breeds) {
    // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM
    let breedList = Object.keys(breeds);
    console.log(breedList.length);
    for (let index = 0; index < breedList.length; index++) {
        let option = document.createElement('option');
        option.text = breedList[index];
        select.appendChild(option);
    }
}
getBreedList()
var selectedIndex = select.selectedIndex;
var selectedValue = select.options[selectedIndex].value;
console.log(selectedValue);

btn.addEventListener('click' , async () => {
    try {
        const selectedBreed = select.value;
        const response = await axios.get(`https://dog.ceo/api/breed/${selectedBreed}/images/random`);
        console.log(response);
        image.src = response.data.message;
    } catch (error) {
        console.log(error);
    }
});