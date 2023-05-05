const imagens = [...document.querySelector(".imgs-container").children];
const circles = [...document.querySelector(".circle-container").children];

function moveCarousel () {
    for (i in imagens) {
        imagens[queuePst].classList = "current";
        imagens[queuePst].style.display = "block";
        circles[queuePst].classList.toggle("active");
        if (imagens[i] != imagens[queuePst]) {
            imagens[i].className= "";
            imagens[i].style.display = "none"
            circles[i].classList.remove("active");
        };
    };
};

let queuePst = 0;
let rigthBtn = document.querySelector("#right-button");
let leftBtn = document.querySelector("#left-button");

rigthBtn.addEventListener("click",  () => {
    if (queuePst == imagens.length -1){
        queuePst = 0;
    }  else {
        queuePst++
    }
    moveCarousel();
});

leftBtn.addEventListener("click", () => {
    if (queuePst <= 0) {
        queuePst = imagens.length -1;
    } else {
        queuePst--
    }
    moveCarousel();
});

moveCarousel();