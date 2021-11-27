// function rise(){
//     recive =+prompt("Enter your number..");
//     take =+prompt("Enter your rise number");
//     res = recive ** take;
//     alert(res);

// }
// rise();


// function square(){
//     r =+prompt("Enter radius...");
//     p = 3.14;
//     s = (r ** 2) * p;
//     alert(s);
// }
// square();


// function rectangle(){
//     l =+prompt("Enter radius");
//     w =+prompt("Enter width");
//     s = l * w;
//     alert(s);

// }
// rectangle();



// function round(){
//     number =+prompt("Enter number...");
//     number2 =+prompt("Enter number 2...");
//     res = number + number2;
//     alert(res.toPrecision(1));
// }
// round();

//  Практика , ч3. Используем функции Callback- функции

// let class_name = document.getElementsByClassName("inbag");
// console.log(class_name);
// let myFuction = function(){
//     let title = this.parentNode.parentNode.parentNode.querySelectorAll(".title");
//     let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price span");
//     let img = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img img");

//     let creat_li = document.createElement("li");
//     console.log();
//     console.log();
//     console.log();
   


//     creat_li.innerHTML = '<div class="img-cart">\
//                                 <a href="#"><img src="'+img[0].src+'"></a>\
//                             </div>\
//                             <div class="para-cart">\
//                                 <p style="margin-left: -35px;">\
//                                     <a href="#">'+title[0].innerText+'</a>\
//                                 </p>\
//                                 <span>'+price[0].innerText+'</span>\
//                                 <br>\
//                                 <a class="trash" href="#"><i class="far fa-trash-alt"></i></a>\
//                             </div>';
//     let block_cart = document.querySelector('.droppdown__menu .check-out');
//     block_cart.appendChild(creat_li);
//     alert("You added product in bag");
// };

// for (i = 0; i < class_name.length; i++){
//     class_name[i].addEventListener("click", myFuction, false);

// };
//Home work!

// document.getElementById("check").onclick = function(){
//     let login = document.getElementById("login").value;
//     let password = document.getElementById("password").value;
 
//     if (login == 'kyrgyzstan' && password == '3344')
//         alert("You are welcome");
//     else if(login == 'KG' && password == '44')
//         alert("You are welcome");
//     else 
//         alert("Incorrect login or password");

// };


 
// function insertNewElement(tagName) {
//     let newElement =  document.createElement(tagName.toUpperCase());
//     document.body.appendChild(newElement);
// }
// // 
// function configureNewElement(myCallback) {
//     let tagName = prompt("Type name of tag...");
//     myCallback(tagName);
// }
// // слушаем событие обновления страницы, вызываем функцию конфигурации нового элемента, передает колл-бэк функцию для добавления нового элемента в body
// window.onload = () => {
//     configureNewElement(insertNewElement);
// }


function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
  getFile(myDisplayer);
  
  