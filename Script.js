// Select elements
const navlinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Open Menu
menuOpenButton.addEventListener("click", () => {
  document.body.classList.add("show-mobile-menu");
});

// Close Menu
menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

// Close menu when a nav link is clicked
navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
});

// Initialize Swiper
const swiper = new Swiper(".slider-container", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Correct spelling here
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// for about test styling
function typeWriterLoop(text, elementId, speed, delay = 1500) {
  let i = 0;
  let forward = true; // typing forward or deleting
  const element = document.getElementById(elementId);

  element.textContent = "";
  element.classList.add("typing"); // show cursor

  function typing() {
    if (forward) {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      } else {
        forward = false;
        setTimeout(typing, delay); // wait before deleting
      }
    } else {
      if (i > 0) {
        element.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(typing, speed / 2); // delete faster
      } else {
        forward = true;
        setTimeout(typing, delay); // wait before typing again
      }
    }
  }

  typing();
}
typeWriterLoop(
  "Make your day great with our special Coffee, and Odisha's finest authentic flavors!",
  "text",
  70, // typing speed
  1500 // pause before delete/restart
);
