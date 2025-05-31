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
  anime({
      targets: '#hero h1, #hero p, #hero .btn',
      opacity: [0, 1],
      translateY: [40, 0],
      delay: anime.stagger(200),
      duration: 1000,
      easing: 'easeOutQuad'
    });
anime({
      targets: '#imageGrid .bg-img',
      opacity: [0, 1],
      scale: [0.8, 1],
      delay: anime.stagger(150, { start: 500 }),
      duration: 800,
      easing: 'easeOutExpo'
    });
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
 anime({
      targets: '.card',
      translateY: [100, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      duration: 1000,
      easing: 'easeOutExpo'
    });
