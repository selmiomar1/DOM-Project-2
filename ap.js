document.addEventListener("DOMContentLoaded", function() {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  changeColorBtn.addEventListener("click", function() {
    colorBox.style.backgroundColor = getRandomColor();
  });
});