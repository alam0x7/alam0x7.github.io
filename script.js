const texts = ["Developer", "Content Writer", "Digital Marketing"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing-text span").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(() => {
      setTimeout(type, 400); // jeda sebelum mengetik kata berikutnya
    }, 1400); // jeda saat selesai satu kata
  } else {
    setTimeout(type, 100); // kecepatan mengetik per huruf
  }
}

type();

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  const speed = 150;

  counters.forEach(counter => {
    const target = +counter.dataset.target;
    const suffix = counter.dataset.suffix || "";
    let current = 0;

    const updateCount = () => {
      const increment = Math.ceil(target / speed);
      current += increment;

      if (current < target) {
        counter.innerText = current + suffix;
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target + suffix;
      }
    };

    updateCount();
  });
});
