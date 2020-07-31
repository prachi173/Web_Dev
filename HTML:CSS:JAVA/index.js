var pics = [

    "imgs/img_1.jpg",
    "imgs/img_2.jpg",
    "imgs/img_3.jpg"
]

//var btn = document.querySelector("button");
var img = document.querySelector(".p0");
var counter = 1;
img.addEventListener("mouseover", function() {
    if (counter === 3) {
        counter = 0;
    }
    img.src = pics[counter];
    counter = counter + 1;

});