const leftBtn = document.getElementById('left-scroll');
const rightBtn = document.getElementById('right-scroll');
const imageBoxes = document.getElementById('scroll-boxes');

const scrollAmount = 1300; // pixels per click

leftBtn.addEventListener('click', () => {
  imageBoxes.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

rightBtn.addEventListener('click', () => {
  imageBoxes.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});
