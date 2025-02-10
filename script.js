document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded");

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    const heroButton = document.querySelector(".hero button");
    if (heroButton) {
        heroButton.addEventListener("click", () => {
            alert("Welcome to Innomatics!");
        });
    }
});
