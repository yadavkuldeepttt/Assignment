let currentIndex = 0;

function showBox(index) {
  const boxes = document.querySelectorAll(".box");
  const dots = document.querySelectorAll(".dot");

  if (index >= 0 && index < boxes.length) {
    boxes[currentIndex].style.display = "none";

    boxes[index].style.display = "block";

    dots[currentIndex].classList.remove("active");

    dots[index].classList.add("active");

    currentIndex = index;
  }
}

// Add click event listeners to the dots
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showBox(index);
  });
});
