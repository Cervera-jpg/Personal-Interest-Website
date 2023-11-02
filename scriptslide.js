/*Clear Button*/
const clearInput = () => {
  const input = document.getElementsByTagName("input")[0];
  input.value = "";
};

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);

/*slides*/
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var main = document.getElementById("main");
var thumbnail = document.getElementsByClassName("thumbnail");

var bgimg = new Array(
  "Assets/slide 1.png",
  "Assets/slide 2.png",
  "Assets/slide 3.png",
  "Assets/slide 4.png",
  "Assets/slide 5.png",
  "Assets/slide 6.png",
  "Assets/slide 7.png",
  "Assets/slide 8.png"
);

let i = 0;

next.onclick = () => {
  if (i < 7) {
    main.style.backgroundImage = 'url("' + bgimg[i + 1] + '")';
    thumbnail[i + 1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i++;
  }
};

prev.onclick = () => {
  if (i > 0) {
    main.style.backgroundImage = 'url("' + bgimg[i - 1] + '")';
    thumbnail[i - 1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i--;
  }
};

var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// popular slider

var swiper = new Swiper(".anime-slider", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// popular slider

var swiper = new Swiper(".anime-slider", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// var swiper = new Swiper(".action-slider", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 3500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop: true,
// });
