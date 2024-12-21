document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      // Insert navbar content into the placeholder
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Attach the menu toggle functionality
      const menuToggle = document.querySelector(".menu-toggle");
      const navbarLinks = document.querySelector(".navbar-links");

      if (menuToggle && navbarLinks) {
        menuToggle.addEventListener("click", () => {
          navbarLinks.classList.toggle("show");
        });

        // Close the menu when any link is clicked
        const navbarLinksArray = document.querySelectorAll(".navbar-links a");
        navbarLinksArray.forEach(link => {
          link.addEventListener("click", () => {
            navbarLinks.classList.remove("show");
          });
        });
      } else {
        console.error("Menu toggle button or navbar links not found.");
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
