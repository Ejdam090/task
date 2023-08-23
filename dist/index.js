document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.getElementById("hamburgerButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("searchInput");
  const ofertaLink = document.querySelector(
    '#mobileMenu .mobileMenu-link a[aria-haspopup="true"]'
  );
  const ofertaSubmenu = document.querySelector(".oferta-submenu");

  searchButton.addEventListener("click", () => {
    searchInput.classList.toggle("active");
    if (searchInput.classList.contains("active")) {
      searchInput.querySelector("input").focus();
    }
  });

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("visible");
  });

  ofertaLink.addEventListener("click", function (event) {
    event.preventDefault();
    ofertaSubmenu.classList.toggle("hidden");
    const currentScale = window.getComputedStyle(ofertaSubmenu).transform;
    if (currentScale.includes("0")) {
      ofertaSubmenu.style.transform = "scaleY(1)";
      this.setAttribute("aria-expanded", "true");
    } else {
      ofertaSubmenu.style.transform = "scaleY(0)";
      this.setAttribute("aria-expanded", "false");
      setTimeout(function () {
        ofertaSubmenu.classList.add("hidden");
      }, 300);
    }
  });

  const modal = document.getElementById("myModal");

  // Get the image inside the modal and its caption
  const modalImg = document.getElementById("img01");

  openModal = (imgSrc) => {
    modal.style.display = "flex";
    modalImg.src = imgSrc;
  };

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // Close modal actions
  span.onclick = () => {
    modal.style.display = "none";
  };
  modal.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  const swiper = new Swiper(".swiper-container", {
    // Swiper parameters
    observer: true,
    observeParents: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  window.addEventListener("resize", function () {
    swiper.update();
  });
});
function showFullGallery() {
  document.getElementById("gradientOverlay").style.display = "none";
  document.getElementById("showMoreBtn").style.display = "none";
  // If you also want to expand or change the layout, add those styles here.
}
