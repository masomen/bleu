document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      function toggleMenu() {
        const menu = document.querySelector(".navbar-links");
        menu.classList.toggle("show");
      }

      const menuToggle = document.querySelector(".menu-toggle");
      if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
      }

      document.querySelectorAll(".navbar-links a").forEach(link => {
        link.addEventListener("click", () => {
          const menu = document.querySelector(".navbar-links");
          menu.classList.remove("show");
        });
      });

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