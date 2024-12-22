
document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;

            // Attach event listeners after navbar is loaded
            initializeMenu();
        })
        .catch(error => console.error("Error loading navbar:", error));
});

function initializeMenu() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const menuButton = document.getElementById("menu-button");

    if (menuButton && hamburgerMenu) {
        menuButton.addEventListener("click", function () {
            hamburgerMenu.classList.toggle("open");
        });
    } else {
        console.error("Menu button or Hamburger menu not found in the DOM.");
    }
}
