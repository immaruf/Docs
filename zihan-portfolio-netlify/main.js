//JS
const bodyElement = document.querySelector("body");
const menuToggle = document.querySelector(".hamburger-menu");
const heroElement = document.querySelector(".hero");
const navList = document.querySelector(".nav-list");


menuToggle.addEventListener('click', function() {
    bodyElement.classList.toggle("is-open");
    heroElement.classList.add("is-open");

});

navList.addEventListener('click', function(e) {
    let clickElement = e.target;

    if (clickElement.classList[0] === "nav-link") {
        bodyElement.classList.remove("is-open");
    }
});

//add event listenner to the window object to cclose nav when we click outside
window.addEventListener('click', function(e) {
    let clickElement = e.target;
    if (clickElement.matches(".is-open")) {
        bodyElement.classList.remove("is-open");
        heroElement.classList.remove("is-open");

    }
});