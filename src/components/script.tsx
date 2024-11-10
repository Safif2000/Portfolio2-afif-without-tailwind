document.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
      navbar.classList.add("bg-black", "shadow-lg");
    } else {
      navbar.classList.remove("bg-black", "shadow-lg");
    }
  });