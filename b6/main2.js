/*
    API là Application Programming Interface, là một tập hợp các quy tắc và cơ chế mà các chương trình có thể tuân thủ để giao tiếp với nhau. API giúp các chương trình có thể giao tiếp với nhau mà không cần biết cách chương trình kia hoạt động bên trong như thế nào.
    API có thể là một tập hợp các hàm, thư viện, giao thức, cấu trúc dữ liệu, cách thức xử lý dữ liệu, cách thức truyền dữ liệu giữa các chương trình, ...

    HTTP Method là các phương thức mà HTTP hỗ trợ để giao tiếp giữa client và server. Các phương thức này bao gồm: GET, POST, PUT, DELETE (CRUD).
    -> Các phương thức này giúp client và server có thể giao tiếp với nhau một cách dễ dàng và hiệu quả.

    Api endpoint là một địa chỉ mà client có thể gửi request đến server để lấy dữ liệu hoặc thực hiện các thao tác khác. Endpoint thường được xác định bằng URL và phương thức HTTP.

    - GET: Lấy dữ liệu từ server
    /api/products: Lấy danh sách sản phẩm
    - POST: Tạo mới một dữ liệu trên server
    /api/products: Tạo mới một sản phẩm
    - PUT: Cập nhật một dữ liệu trên server
    /api/products/:id: Cập nhật một sản phẩm với id tương ứng
    - DELETE: Xóa một dữ liệu trên server
    /api/products/:id: Xóa một sản phẩm với id tương ứng

    /api/prodcuts/2/posts: Lấy danh sách posts của sản phẩm có id = 2

    HTTP Status Code là mã trạng thái HTTP mà server trả về cho client sau khi nhận và xử lý request. Mã trạng thái này giúp client biết được kết quả của request mà mình gửi đi.


 
 */


    //Sử dụng built-in fetch API để gọi API
const btnRandom = document.getElementById("btn");
const img = document.getElementById("image");

btnRandom.addEventListener("clickk",  () => {
   fetch("https://dog.ceo/api/breeds/image/random").then
   (response => response.json()).then(data => {
        console.log(data);
        img.src = data.message;
    }
    ).catch(error => console.log(error)
    );
});

    //Sử dụng async/await để gọi API

btnRandom.addEventListener("clickk", async () => {
    try {
        let res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        img.src = data.message;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
});


    //Su dụng axios để gọi API
btnRandom.addEventListener("click", () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
        console.log(response);
        img.src = response.data.message;
    })
    .catch(error => console.log(error));
});

    //Sử dụng async/await và axios để gọi API

btnRandom.addEventListener("click", async () => {
    try {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random");
        console.log(response);
        img.src = response.data.message;
    } catch (error) {
        console.log(error);
    }
}
);
