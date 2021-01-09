imageArray=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var p1=Math.floor(Math.random() * 6);
var p2=Math.floor(Math.random() * 6);

document.querySelector(".img1").setAttribute("src" , imageArray[p1]);
document.querySelector(".img2").setAttribute("src" , imageArray[p2]);

var result=document.querySelector("h1");

if(p1>p2) {
    result.textContent="Player 1 win";
}
else if(p1<p2) {
    result.textContent="Player 2 win";
}
else {
    result.textContent="Draw";
}
