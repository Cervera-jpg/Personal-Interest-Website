// popular slide

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

// recommended slide

var swiper = new Swiper(".recommended-slider", {
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
const clearInput = () => {
  const input = document.getElementsByTagName("input")[0];
  input.value = "";
};

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);

/*browse*/
document.addEventListener("DOMContentLoaded", function () {
  const genreSelect = document.getElementById("genre-select");
  const yearSelect = document.getElementById("year-select");
  const animeCards = document.querySelectorAll(".anime-card");

  genreSelect.addEventListener("change", filterAnime);
  yearSelect.addEventListener("change", filterAnime);

  function filterAnime() {
    const selectedGenre = genreSelect.value;
    const selectedYear = yearSelect.value;

    animeCards.forEach((card) => {
      const genre = card
        .querySelector("p:nth-of-type(1)")
        .textContent.split(": ")[1];
      const year = card
        .querySelector("p:nth-of-type(2)")
        .textContent.split(": ")[1];

      const showCard =
        (selectedGenre === "all" || genre === selectedGenre) &&
        (selectedYear === "all" || year === selectedYear);

      card.style.display = showCard ? "block" : "none";
    });
  }
});
