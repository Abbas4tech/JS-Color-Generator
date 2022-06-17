const body = document.getElementById("root");
const displayText = document.getElementById("color-text");
const pallete = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];
const colorGenerator = (arr, mode = 6) => {
  const color = arr
    .map((e) => ({ e, sortkey: Math.random() }))
    .sort((a, b) => a.sortkey - b.sortkey)
    .map(({ e }) => e)
    .splice(0, mode)
    .join("");

  body.style.backgroundColor = `#${color}`;
  displayText.innerHTML = `#${color}`;
};
document
  .getElementById("genBtn")
  .addEventListener("click", () => colorGenerator(pallete));
