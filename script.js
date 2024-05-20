document.addEventListener("DOMContentLoaded", function() {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach(item => {
      item.addEventListener("click", function(event) {
          this.classList.toggle("active");

          if (event.target.classList.contains("btn")) {
              const url = event.target.getAttribute("href");
              
              window.location.href = url;
          }
      });
  });
});
