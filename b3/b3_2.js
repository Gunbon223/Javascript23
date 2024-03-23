//Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó

const heading = document.getElementById('heading');
heading.style.color = 'red';
heading.innerText = heading.innerText.toUpperCase();

//Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”

const paragraph = document.getElementsByClassName('para');
Array.from(paragraph).map((p) => {
    p.style.color = 'blue';
    p.style.fontSize = '20px';
});


//Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”

const para3 = document.getElementsByClassName('para-3')[0];
const a = document.createElement('a');
a.innerText = 'Facebook';
a.href = 'https://facebook.com';
para3.appendChild(a);

//Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”

const title = document.getElementById('title');
title.innerText = 'Đây là thẻ tiêu đề';

//Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)

const description = document.getElementsByClassName('description')[0];
description.classList.add('text-bold');

//Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”

const para31 = document.getElementsByClassName('para-3')[0];
const button = document.createElement('button');
button.innerText = 'Click me';
para31.replaceWith(button);

//Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó

const para2 = document.getElementsByClassName('para-2')[0];
const para2Clone = para2.cloneNode(true);
para2.after(para2Clone);

