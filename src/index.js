const $bar = document.querySelector(".bar");
let progress = 0;

function load() {
  setInterval(() => {
    if (progress < 100) {
      progress += 10;
    } else {
      progress = 0;
    }

    $bar.setAttribute("style", `width: ${progress}%`);
  }, 1000);
}

load();
