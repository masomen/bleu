document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      // Inject the navbar into the placeholder
      const navbarPlaceholder = document.getElementById("navbar-placeholder");
      navbarPlaceholder.innerHTML = data;

      // Attach event listeners for menu toggle
      const menuToggle = navbarPlaceholder.querySelector(".menu-toggle");
      const navbarLinks = navbarPlaceholder.querySelector(".navbar-links");

      if (menuToggle && navbarLinks) {
        menuToggle.addEventListener("click", function () {
          navbarLinks.classList.toggle("show");
        });

        // Attach event listeners to close the menu when a link is clicked
        const navbarLinksArray = navbarPlaceholder.querySelectorAll(".navbar-links a");
        navbarLinksArray.forEach(link => {
          link.addEventListener("click", function () {
            navbarLinks.classList.remove("show");
          });
        });
      } else {
        console.error("Menu toggle button or navbar links not found.");
      }

      // Handle the Buy button separately
      const buyButton = navbarPlaceholder.querySelector("#scroll-to-buy");
      if (buyButton) {
        buyButton.addEventListener("click", function (event) {
          event.preventDefault();
          window.location.href = "index.html#buy-bleu";
        });
      }
    })
    .catch(error => console.error("Error loading navbar:", error));
});
