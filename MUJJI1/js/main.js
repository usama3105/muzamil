var details = document.getElementById("details")
var info = [{
        id: 0,
        img: "./images/product-1.jpg",
        name: "Travel Adapter",
        price: "Rs.1,599",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 1,
        img: "./images/b1.jpg",
        name: "Twelve South AirFly",
        price: "Rs.1,499",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 2,
        img: "./images/b2.jpg",
        name: "Self-Cleaning Bottle",
        price: "Rs.2,599",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 3,
        img: "./images/b3.jpg",
        name: "Alto Audio Sunglasses",
        price: "Rs.2,299",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."



    },
    {
        id: 4,
        img: "/images/product-2.jpg",
        name: " Portable UV Light ",
        price: "Rs.999",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 5,
        img: "./images/b4.jpg",
        name: "I-Type Instant Camera",
        price: "Rs.19,999",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 6,
        img: "./images/b5.jpg",
        name: "Adventure Flask Kit",
        price: "Rs.499",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 7,
        img: "./images/b6.jpg",
        name: "JBL 4 Portable Speaker",
        price: "Rs.3,999",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 8,
        img: "/images/product-3.jpg",
        name: " Omni 20+ Power Bank",
        price: "Rs.4,999",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 9,
        img: "./images/b7.jpg",
        name: " Solis Lite",
        price: "Rs.1,999",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 10,
        img: "./images/b8.jpg",
        name: " Travel Mug",
        price: "Rs.3,999",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 11,
        img: "./images/b9.jpg",
        name: " Solar GPS Watch",
        price: "Rs.8,999",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
    id: 12,
    img: "/images/product-4.jpg",
    name: " Sony WH-1000XM5",
    price: "Rs.5,999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
},
{
id: 13,
img: "./images/b10.jpg",
name: " Sony WH-1000XM5",
price: "Rs.4,999",
desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
},
{
id: 14,
img: "./images/b11.jpg",
name: " Sony WH-1000XM5",
price: "Rs.4,999",
desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
},
{
    id: 15,
    img: "/images/product-5.jpg",
    name: "Twelve South AirFly",
    price: "Rs.1,499",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
},
{
    id: 16,
    img: "./images/b12.jpg",
    name: "Self-Cleaning Bottle",
    price: "Rs.2,599",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
},
{
    id: 17,
    img: "./images/b13.jpg",
    name: "Alto Audio Sunglasses",
    price: "Rs.2,299",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing."



},
{
    id: 18,
    img: "./images/b14.jpg",
    name: " Portable UV Light ",
    price: "Rs.999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
},
{
    id: 19,
    img: "/images/product-6.jpg",
    name: "I-Type Instant Camera",
    price: "Rs.19,999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
},
{
    id: 20,
    img: "./images/b15.jpg",
    name: "Adventure Flask Kit",
    price: "Rs.499",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
},
{
    id: 21,
    img: "./images/b16.jpg",
    name: "JBL 4 Portable Speaker",
    price: "Rs.3,999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
},
{
    id: 22,
    img: "./images/b17.jpg",
    name: " Omni 20+ Power Bank",
    price: "Rs.4,999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
},
{
    id: 23,
    img: "./images/b18.jpg",
    name: " Omni 20+ Power Bank",
    price: "Rs.4,999",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
},

]

info.forEach((val) => {


details.innerHTML += `<div class="card mx-2 mt-5 product-card" style="width: 18rem;height:auto;background-color:#d3c9d9;padding: 0 0.3rem 0 0.3rem; box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
rgba(0, 0, 0, 0.22) 0px 15px 12px;"data-aos="zoom-in-up">

<img src="${val.img}" class="card-img-top mt-2 "style=" height: 350px;border-radius: 10px;" alt="...">
        <div class="card-body ">
          <h5 class="card-title title card-name ">${val.name} <br> <span class="card-price">${val.price}</span></h5>
          <p class="card-text"style="height:auto card-desc">${val.desc}<br><a href="#" class=" btn btn2 btn-primary">Buy Now</a></p>
          
        </div>
      </div>`
       
    });
    
   