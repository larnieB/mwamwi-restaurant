// Animate hero section
gsap.to(".hero-title", { 
  duration: 1, 
  y: 0, 
  opacity: 1, 
  ease: "power3.out" 
});

gsap.to(".hero-subtitle", { 
  duration: 1, 
  delay: 0.5, 
  y: 0, 
  opacity: 1, 
  ease: "power3.out" 
});

// Animate room cards on scroll
function animateRooms() {
  const cards = document.querySelectorAll(".room-card");
  cards.forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50 && !card.classList.contains("animated")) {
      gsap.to(card, {
        duration: 0.8,
        y: 0,
        opacity: 1,
        delay: i * 0.1,
        ease: "power2.out"
      });
      card.classList.add("animated");
    }
  });
}

window.addEventListener("scroll", animateRooms);
