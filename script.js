const menu = document . querySelector(".nav-right button");
const cross = document . querySelector(".cross");
const navmob = document . querySelector(".mobile");
menu.addEventListener("click",function(){
    navmob.style.transform = "translateX(0)";
})

cross.addEventListener("click",function(){
    navmob.style.transform = "translateX(100%)";
})