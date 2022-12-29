const container = document.getElementById("container");

const color = [
  "white",
  "gray",
  "lightblue",
  "green",
  "red",
  "pink",
  "cyan",
  "voilet",
];

const squares = 500;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  container.appendChild(square);
}
