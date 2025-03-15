const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-links');

const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener("click", (e) => {

    navMenu.classList.toggle("active");

    const isActive = navMenu.classList.contains("active");

    menuBtnIcon.setAttribute("class", isActive ? "fa-solid fa-xmark" : "fa-solid fa-bars");

})

navMenu.addEventListener("click", (e) => {
    menuBtnIcon.classList.remove("active");
    menuBtnIcon.setAttribute("class", "fa-solid fa-xmark");
})