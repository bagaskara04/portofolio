// Animasi muncul saat di-scroll (scroll reveal sederhana)
document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll(".fade-section, .project");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;
    fadeSections.forEach(sec => {
      const sectionTop = sec.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) sec.classList.add("fade-in");
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});


