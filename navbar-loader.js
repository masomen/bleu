document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      // Insert the navbar content into the placeholder
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Define toggleMenu function globally
      window.toggleMenu = function () {
        const menu = document.querySelector(".navbar-links");
        if (menu) {
          menu.classList.toggle("show");
        } else {
          console.error("Menu element not found.");
        }
      };

      // Attach event listener for the menu toggle button
      const menuToggle = document.querySelector(".menu-toggle");
      if (menuToggle) {
        menuToggle.addEventListener("click", window.toggleMenu);
      } else {
        console.error("Menu toggle button not found.");
      }

      // Close the menu when a link is clicked
      const navbarLinks = document.querySelectorAll(".navbar-links a");
      if (navbarLinks.length > 0) {
        navbarLinks.forEach(link => {
          link.addEventListener("click", () => {
            const menu = document.querySelector(".navbar-links");
            if (menu) {
              menu.classList.remove("show");
            } else {
              console.error("Menu element not found.");
            }
          });
        });
      } else {
        console.error("Navbar links not found.");
      }

      // Fix for Buy button navigation
      const buyButton = document.getElementById("scroll-to-buy");
      if (buyButton) {
        buyButton.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default anchor behavior
          window.location.href = "index.html#buy-bleu";
        });
      } else {
        console.warn("Buy button not found.");
      }
    })
    .catch(error => console.error("Error loading navbar:", error));
});
