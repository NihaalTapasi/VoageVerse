//ScroLL
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#f8f9fa";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});
/*
    js:
    
*/