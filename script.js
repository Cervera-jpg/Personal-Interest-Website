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
  "Assets/slide 2.jpg",
  "Assets/slide 3.png",
  "Assets/slide 4.png",
  "Assets/slide 5.png",
  "Assets/slide 6.jpeg",
  "Assets/slide 7.png",
  "Assets/slide 8.jpg"
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
