let title = document.getElementsByClassName("title");
for (let text of title){
    console.log(text.innerText);
}
var elements = document.getElementsByClassName("inbag");
var myFuction = function (){
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".title");
    alert(attribute[0].innerText);

};
for (var i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", myFuction, false);
};





var elements = document.getElementsByClassName("scale");
var myFuction = function (){
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".price");
    alert(attribute[0].innerText);

};

for (var i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", myFuction, false);
};





var elements = document.getElementsByClassName("heart");
var myFuction = function (){
    var attribute = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll("img");
    alert(attribute[0]);

};
for (var i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", myFuction, false);
};

const textElement = document.querySelectorAll(".title")[1];
const textElementC = textElement.innerHTML;
textElement.innerHTML = `amazon`;