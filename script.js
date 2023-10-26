// button

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});

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
