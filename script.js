function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const scrollDistance = carousel.scrollWidth / 3; // Adjust the scroll distance

  if (direction === 'prev') {
    carousel.scrollBy({
      left: -scrollDistance,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    carousel.scrollBy({
      left: scrollDistance,
      behavior: 'smooth'
    });
  }
}

