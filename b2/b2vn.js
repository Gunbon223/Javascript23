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


// 4. Tìm các sản phẩm có giá > 20000000

const b4 = (products, price) => {
    let result = products.filter((product) => {
        return product.price > price;
    });
    return result;
}
console.log(b4(products, 20000000));


// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

const b5 = (products, name) => {
    let result = products.filter((product) => {
        return product.name.toLowerCase().includes(name.toLowerCase());
    });
    return result;
}
console.log(b5(products, "pro"));


// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

const addProduct = (products, product) => {
    products.push(product);
}
addProduct(products, {
    name: "Samsung Galaxy Z Fold 4",
    price: 50000000,
    brand: "Samsung",
    count: 1,
});

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

const b7 = (products, brand) => {
    let result = products.filter((product) => {
        return product.brand !== brand;
    });
    return result;
}
console.log(b7(products, "Samsung"));

// 8. Sắp xếp giỏ hàng theo price tăng dần

const b8 = (products) => {
    let result = products.sort((a, b) => {
        return a.price - b.price;
    });
    return result;
}
console.log(b8(products));

// 9. Sắp xếp giỏ hàng theo count giảm dần

const b9 = (products) => {
    let result = products.sort((a, b) => {
        return b.count - a.count;
    });
    return result;
}
console.log(b9(products));

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

const b10 = (products) => {
    let result = [];
    for (let i = 0; i < 2; i++) {
        let random = Math.floor(Math.random() * products.length);
        result.push(products[random]);
    }
    return result;
}
console.log(b10(products));