const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('breed-list');
const list = document.getElementById('sub-breed-list');
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
    for (let index = 0; index < breedList.length; index++) {
        let option = document.createElement('option');
        option.text = breedList[index];
        select.appendChild(option);
    }
}
getBreedList()


// btn.addEventListener('click' , async () => {
//   try {
//       const selectedIndex = select.selectedIndex;
//       const selectedValue = select.options[selectedIndex].value;
//       console.log(selectedValue);

//       const response = await axios.get(`https://dog.ceo/api/breed/${selectedValue}/images/random`);
//       image.src = response.data.message;
//   } catch (error) {
//       console.log(error);
//   }
// });

btn.addEventListener('click' , async () => {
    try {
      const selectedIndex = select.selectedIndex;
      const selectedValue = select.options[selectedIndex].value;
      console.log(selectedValue);
        let selectedBreed = select.value;
        renderSubBreedList(selectedBreed);
    } catch (error) {
        console.log(error);
    }
});

async function getSubBreedList(breed) {
  let res = await axios.get(`https://dog.ceo/api/breed/${breed}/list`)
  console.log(res.data.message);
  return res.data.message;
}

async function renderSubBreedList(breed) {
  let sub_breedsList = await getSubBreedList(breed);
  if (sub_breedsList.length > 0) {
    list.innerHTML = '';
    for (let index = 0; index < sub_breedsList.length; index++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = '#';
        a.innerHTML = sub_breedsList[index];
        a.addEventListener('click', async (event) => {
            try {
                const response = await axios.get(`https://dog.ceo/api/breed/${breed}/${sub_breedsList[index]}/images/random`);
                image.src = response.data.message;
            } catch (error) {
                console.log(error);
            }
        });
        li.appendChild(a);
        list.appendChild(li);
    }
}
  else {
    list.innerHTML = '';
    let li = document.createElement('li');
    li.innerHTML = "Không có sub breed";
    list.appendChild(li);
  }
}
