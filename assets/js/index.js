// @AntimonyIQ

var MenuBtnOpen = document.getElementById("menuCloseBtn");
var MenuBtnClose = document.getElementById("menuOpenBtn");
var NemuNav = document.getElementById("header-nav-menu");

var FirstSlider = document.getElementById("slider-first");
var SecondSlider = document.getElementById("slider-second");
var ThirdSlider = document.getElementById("slider-third");


var FirstDot = document.getElementById("dot1");
var SecondDot = document.getElementById("dot2");
var ThirdDot = document.getElementById("dot3");

function OpenNav() {
    MenuBtnOpen.style.display = "none";
    MenuBtnClose.style.display = "block";
    NemuNav.style.display = "block";
}

function CloseNav() {
    MenuBtnOpen.style.display = "block";
    MenuBtnClose.style.display = "none";
    NemuNav.style.display = "none";
}

setInterval(function(){
    FirstSlider.style.opacity = 1.0;
    SecondSlider.style.opacity = 0.0;
    FirstDot.style.backgroundColor = "#EEEEEE";
    SecondDot.style.backgroundColor = "#808080";
    ThirdDot.style.backgroundColor = "#808080";

    setTimeout(function(){
        FirstSlider.style.opacity = 0.75;
    }, 200);

    setTimeout(function(){
        FirstSlider.style.opacity = 0.5;
    }, 400);

    setTimeout(function(){
        FirstSlider.style.opacity = 0.25;
    }, 600);

    setTimeout(function(){
        FirstSlider.style.opacity = 0.0;
        FirstSlider.style.display = 'none';
        SecondSlider.style.opacity = 0.0;
        SecondSlider.style.display = 'block';

        FirstDot.style.backgroundColor = "#808080";
        SecondDot.style.backgroundColor = "#EEEEEE";
        ThirdDot.style.backgroundColor = "#808080";
    }, 800);

    setTimeout(function(){
        SecondSlider.style.opacity = 0.25;
    }, 1000);

    setTimeout(function(){
        SecondSlider.style.opacity = 0.5;
    }, 1200);

    setTimeout(function(){
        SecondSlider.style.opacity = 0.75;
    }, 1400);

    setTimeout(function(){
        SecondSlider.style.opacity = 1.0;
    }, 1600);

    setTimeout(function(){
        SecondSlider.style.opacity = 0.75;
    }, 5000);

    setTimeout(function(){
        SecondSlider.style.opacity = 0.5;
    }, 5200);

    setTimeout(function(){
        SecondSlider.style.opacity = 0.25;
    }, 5400);

    setTimeout(function(){
        SecondSlider.style.opacity = 0.0;
        SecondSlider.style.display = 'none';
        ThirdSlider.style.opacity = 0.0;
        ThirdSlider.style.display = 'block';

        FirstDot.style.backgroundColor = "#808080";
        SecondDot.style.backgroundColor = "#808080";
        ThirdDot.style.backgroundColor = "#EEEEEE";
    }, 5600);

    setTimeout(function(){
        ThirdSlider.style.opacity = 0.25;
    }, 5800);

    setTimeout(function(){
        ThirdSlider.style.opacity = 0.5;
    }, 6000);

    setTimeout(function(){
        ThirdSlider.style.opacity = 0.75;
    }, 6200);

    setTimeout(function(){
        ThirdSlider.style.opacity = 1.0;
    }, 6400);

    setTimeout(function(){
        ThirdSlider.style.opacity = 0.75;
    }, 9600);

    setTimeout(function(){
        ThirdSlider.style.opacity = 0.5;
    }, 9800);

    setTimeout(function(){
        ThirdSlider.style.opacity = 0.25;
    }, 10000);

    setTimeout(function(){
        ThirdSlider.style.opacity = 0.0;
        ThirdSlider.style.display = 'none';
        FirstSlider.style.opacity = 0.0;
        FirstSlider.style.display = 'block';

        FirstDot.style.backgroundColor = "#EEEEEE";
        SecondDot.style.backgroundColor = "#808080";
        ThirdDot.style.backgroundColor = "#808080";
    }, 10200);

    setTimeout(function(){
        FirstSlider.style.opacity = 0.25;
    }, 10400);

    setTimeout(function(){
        FirstSlider.style.opacity = 0.5;
    }, 10600);

    setTimeout(function(){
        FirstSlider.style.opacity = 0.75;
    }, 10800);

    setTimeout(function(){
        FirstSlider.style.opacity = 1.0;
    }, 11000);


}, 13000);