const container = document.getElementById("container");
const input = document.getElementById("inp");

const color = [
  "#03c683",
  "#3cb371",
  "#6a5acd",
  "#ee82ee",
  "#ffa500",
  "#787878",
  "#ffc647",
  "#88c683",
  "#033c83",
  "#03ff83",
  "#03ff02",
  "#ffff02",
  "#ff5418",
  "#ff2318",
];

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    console.log(e.key);
    color.push(input.value);
    console.log(color.push(input.value));
    console.log(color);
  }
});

console.log(color);
const squares = 500;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}

function setColor(square) {
  const color = getRandomColor();
  square.style.background = color;
  square.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return color[Math.floor(Math.random() * 8)];
}
