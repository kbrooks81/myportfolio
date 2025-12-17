  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  document.querySelectorAll(".lightbox-trigger").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("is-active");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  // Close on click outside image
  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("is-active");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
  });

  // Close on ESC
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      lightbox.classList.remove("is-active");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImg.src = "";
    }
  });