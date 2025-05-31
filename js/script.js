// Basic placeholder for future scripts like form validation or gallery lightbox
console.log("Resort website loaded");
 anime({
    targets: '.loader-logo h2',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: 400,
    duration: 1200,
    easing: 'easeOutExpo'
  });

  // Remove preloader after page loads
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    anime({
      targets: "#preloader",
      opacity: [1, 0],
      duration: 1000,
      easing: "easeOutQuad",
      complete: () => preloader.remove()
    });
  });
  
   const scrollElements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  scrollElements.forEach(el => observer.observe(el));