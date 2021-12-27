   //function:add to busket//
let class_name = document.getElementsByClassName("inbag");
let myFuction = function(evt){
    evt.preventDefault();
    let title = this.parentNode.parentNode.parentNode.querySelectorAll(".title");
    let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
    let img = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img img");

    let creat_li = document.createElement("li");
    creat_li.classList.add("check-out");
   
    creat_li.innerHTML = '<div class="img-cart">\
                                    <a href="#"><img  src="'+img[0].src+'"width="85px"></a>\
                                </div>\
                                <div class="para-cart">\
                                    <p style="margin-left: -81px;">\
                                    <a href="#">'+title[0].innerText+'</a>\
                                     </p>\
                                     <div class="oru">\
                                       <span class="currency">$</span>\
                                     <span class="oprice">'+price[0].innerText+'</span>\
                                     </div>\
                                     <br>\
                                     <a class="trash" href="#"><i class="far fa-trash-alt"></i></a>\
                                      </div>';
    let block_cart = document.querySelector('.droppdown__menu ul');
    block_cart.appendChild(creat_li);
    alert("You added product in bag");
    // Delete product//
    delete_product();
    // total price in basket//
    total__price(); 
    // a function that calculates the number of items in the cart//
    count_product();
};
//--Function add product to basket--//
    for (i = 0; i < class_name.length; i++){
    class_name[i].addEventListener("click", myFuction, false);
}
//-- Delete product---//
   function delete_product(){
    let click_trash = document.querySelectorAll(".trash");

    for(var i = 0;i < click_trash.length;i++){
    click_trash[i].addEventListener("click",func_delet, false);
    }

     function func_delet(event){
     event.preventDefault();
     this.parentNode.parentNode.remove();
     total__price(); 
     count_product();
    }    
}
// total price in basket//
function total__price(){    
let count__price = document.querySelectorAll(".oru .oprice");
let total__price = 0;
for(i = 0; i < count__price.length; i++){
 total__price += (+count__price[i].textContent);
 console.log(total__price);
}
document.getElementsByClassName("total_cart")[0].innerHTML = `$ ${total__price}`;
document.querySelectorAll(".total span")[0].innerHTML = `$ ${total__price}`;
}
// a function that calculates the number of items in the cart//
function count_product(){
   let count_product = document.getElementsByClassName("check-out").length;
   document.getElementsByClassName("carrent_cart")[0].innerHTML = count_product; 
}
//Lesson 46, chages product with JS//

class cardProduct{
    constructor(tooltip,img,title,originPrice,oldPrice,innerBlock){
        this.tooltip = tooltip;
        this.img = img;
        this.title = title;
        this.originPrice = originPrice;
        this.oldPrice = oldPrice;
        this.innerBlock = document.querySelector(innerBlock);
        this.valuta = 85;
        this.originPrice = this.convertValuta(originPrice);
        this.oldPrice = this.convertValuta(oldPrice);
    }
    convertValuta(price){
      const result = price / this.valuta;
      return result.toFixed(2);
    }
    render(){
        const div = document.createElement("div");
        div.classList.add("product")
        div.innerHTML = `<div class="img">
                                <div class="tooltip">
                                    <span>${this.tooltip}</span>
                                </div>
                                <img src=${this.img} alt="sweater">
                                <div class="desc_img">
                                    <i class="fas fa-arrows-alt"></i>
                                    <span class="quick">Quick view</span>
                                </div>
                            </div>
                            <div class="body__product">
                                <p class="title">${this.title}</p>
                                    <div class="block__stars">
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <span>6 Review(s)</span>
                                    </div>
                                    <div class="price">
                                        <span class="currency">$</span>
                                        <span class="oprice">${this.originPrice}</span>
                                        <del>$ ${this.oldPrice}</del>
                                    </div>
                                <div class="btns dnone">
                                    <ul class="ul">
                                        <li class="inbag">
                                            <span class="grey_circle">
                                                <i class="fas fa-shopping-bag"></i>
                                            </span>
                                        </li>
                                        <li class="scale">
                                            <span class="grey_circle">
                                                <i class="fas fa-balance-scale"></i>
                                            </span>
                                        </l>
                                        <li class="heart">
                                            <span class="grey_circle">
                                                <i class="fas fa-heart"></i>
                                            </span>
                                        </li>   
                                    </ul>
                                </div>
                            </div>`;
        this.innerBlock.append(div);
    }
}
new cardProduct(
    'New block',
    'images/img60.jpg',
    'New title',
     1230,
     2500,
    '.list__product'
).render();
new cardProduct(
    'New block',
    'images/printsweatshirt.jpg',
    'New title1',
     1230,
     2500,
    '.list__product'
).render();
new cardProduct(
    'New block',
    'images/printsweatshirt2.jpg',
    'New title2',
     1230,
     2500,
    '.list__product'
).render();
new cardProduct(
    'New block',
    'images/img60.jpg',
    'New title3',
     1230,
     2500,
    '.list__product'
).render();
new cardProduct(
    'New block',
    'images/bag2.jpg',
    'New title4',
     1230,
     2500,
    '.list__product'
).render();

