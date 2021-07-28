var modal1 = document.querySelector(".modal1");
var trigger1 = document.querySelector(".trigger1");
var closeButton1 = document.querySelector(".close1");

function toggleModal1() {
    modal1.classList.toggle("show-modal1");
}

function windowOnClick1(event) {
    if (event.target === modal1) {
        toggleModal1();
    }
}

trigger1.addEventListener("click", toggleModal1);
closeButton1.addEventListener("click", toggleModal1);
window.addEventListener("click", windowOnClick1);



var modal2 = document.querySelector(".modal2");
var trigger2 = document.querySelector(".trigger2");
var closeButton2 = document.querySelector(".close2");

function toggleModal2() {
    modal2.classList.toggle("show-modal2");
}

function windowOnClick2(event) {
    if (event.target === modal2) {
        toggleModal2();
    }
}

trigger2.addEventListener("click", toggleModal2);
closeButton2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);




var modal3 = document.querySelector(".modal3");
var trigger3 = document.querySelector(".trigger3");
var closeButton3 = document.querySelector(".close3");

function toggleModal3() {
    modal3.classList.toggle("show-modal3");
}

function windowOnClick3(event) {
    if (event.target === modal3) {
        toggleModal3();
    }
}

trigger3.addEventListener("click", toggleModal3);
closeButton3.addEventListener("click", toggleModal3);
window.addEventListener("click", windowOnClick3);



var modal4 = document.querySelector(".modal4");
var trigger4 = document.querySelector(".trigger4");
var closeButton4 = document.querySelector(".close4");

function toggleModal4() {
    modal4.classList.toggle("show-modal4");
}

function windowOnClick4(event) {
    if (event.target === modal4) {
        toggleModal4();
    }
}

trigger4.addEventListener("click", toggleModal4);
closeButton4.addEventListener("click", toggleModal4);
window.addEventListener("click", windowOnClick4);