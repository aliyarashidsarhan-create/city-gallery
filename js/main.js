let container = document.getElementById("cities");

let zoomimg = document.getElementById("zoomimg");
let bigimag = document.getElementById("bigimag");

let closeZoomBtn = document.getElementById("closeZoomBtn");
let leftArrowBtn = document.getElementById("leftArrowBtn");
let rightArrowBtn = document.getElementById("rightArrowBtn");

let currentIndex = 0;

let cities = [
  { name: "Palastin", img: "./assets/7.jpg" },
  { name: "Quds", img: "./assets/5.jpg" },
  { name: "Yafa", img: "./assets/yafa.jpg" },
  { name: "Haifa", img: "./assets/9.jpg" },
  { name: "Quds Markets", img: "./assets/Akka.jpg" },
  { name: "Akka", img: "./assets/8.jpg" }
];

// render
let cartona = "";
for (let i = 0; i < cities.length; i++) {
  cartona += `
    <div class="col-md-4">
      <div class="card">
        <img src="${cities[i].img}" class="cityImg" data-index="${i}" alt="${cities[i].name}">
        <div class="title">${cities[i].name}</div>
      </div>
    </div>
  `;
}
container.innerHTML = cartona;

function openZoom(i){
  currentIndex = i;
  bigimag.src = cities[currentIndex].img;
  zoomimg.style.display = "flex";
}

function closeZoom(){
  zoomimg.style.display = "none";
}

function showNext(){
  currentIndex++;
  if (currentIndex >= cities.length) currentIndex = 0;
  bigimag.src = cities[currentIndex].img;
}

function showPrev(){
  currentIndex--;
  if (currentIndex < 0) currentIndex = cities.length - 1;
  bigimag.src = cities[currentIndex].img;
}

// open using delegation
container.addEventListener("click", function(e){
  if (e.target.classList.contains("cityImg")) {
    openZoom(Number(e.target.dataset.index));
  }
});

// arrows + close
rightArrowBtn.addEventListener("click", function(e){
  e.stopPropagation();
  showNext();
});

leftArrowBtn.addEventListener("click", function(e){
  e.stopPropagation();
  showPrev();
});

closeZoomBtn.addEventListener("click", function(e){
  e.stopPropagation();
  closeZoom();
});

// close only on background click
zoomimg.addEventListener("click", function(e){
  if (e.target === zoomimg) closeZoom();
});