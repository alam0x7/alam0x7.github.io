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

const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  const speed = 200; // makin kecil = makin cepat

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});
