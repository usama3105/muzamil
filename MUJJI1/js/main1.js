var details2 = document.getElementById("detail")
var info2 = [{
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
},]
info2.forEach((val) => {


    details2.innerHTML += `<div class="card mx-2 mt-5 product-card " style="width: 80%   ;height:auto;background-color:#d3c9d9;padding: 0 0.3rem 0 0.3rem; box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;display: flex;"data-aos="zoom-in-up">
    
    <img src="${val.img}" class="card-img mt-2 "style=" height: 200px;border-radius: 10px;" alt="...">
  
  <div class="card-body "style="float: lef;">
              <h5 class="card-title title card-name ">${val.name} <br> <span class="card-price">${val.price}</span></h5>
              <p class="card-text"style="height:auto card-desc">${val.desc}<br><a href="#" class=" btn btn2 btn-primary">Buy Now</a></p>
              
            </div>
          </div>`
           
        });