// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

// Clearr Form Before Undo
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("Form")) {
        form.reset();
    }
};