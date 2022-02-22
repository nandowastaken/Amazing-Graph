const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-links");
const mainContent = document.querySelector(".main-content");

// Activates the menu through the click
hamburger.addEventListener("click", () =>  {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    mainContent.classList.toggle("active");

});


// Close the menu after clicking a link
document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    mainContent.classList.remove("active");
}));