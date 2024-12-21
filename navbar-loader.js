document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Define toggleMenu function globally
      window.toggleMenu = function () {
        const menu = document.querySelector(".navbar-links");
        menu.classList.toggle("show");
      };

      // Attach event listeners for menu toggle button
      const menuToggle = document.querySelector(".menu-toggle");
      if (menuToggle) {
        menuToggle.addEventListener("click", window.toggleMenu);
      }

      // Close menu when a link is clicked
      const navbarLinks = document.querySelectorAll(".navbar-links a");
      if (navbarLinks.length > 0) {
        navbarLinks.forEach(link => {
          link.addEventListener("click", () => {
            const menu = document.querySelector(".navbar-links");
            menu.classList.remove("show");
          });
        });
      }

      // Fix for Buy button navigation
      const buyButton = document.getElementById("scroll-to-buy");
      if (buyButton) {
        buyButton.addEventListener("click", function (event) {
          event.preventDefault();
          window.location.href = "index.html#buy-bleu";
        });
      }
    })
    .catch(error => console.error("Error loading navbar:", error));
});
