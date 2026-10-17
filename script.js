"use strict";
let title = document.getElementById("cahngingText");
let words = ["Welcome", "Developer", "Creative"];
let index = 0;
setInterval(function () {
  title.classList.add("hide");
  setTimeout(function () {
    index = (index + 1) % words.length;
    title.textContent = words[index];
    title.classList.remove("hide");
    title.classList.remove("show");
    void title.offsetWidth;
    title.classList.add("show");
  }, 500);
}, 1000);
let counters = document.querySelectorAll(".counter");
let workSection = document.querySelector("#work");
let started = false;
function startCounter() {
  counters.forEach(function (counter) {
    let target = Number(counter.dataset.target);
    let duration = 2000;
    let startTime = null;
    function updateCounter(currentTime) {
      if (!startTime) {
        startTime = currentTime;
      }
      let progress = Math.min((currentTime - startTime) / duration, 1);
      let currentCount = Math.floor(progress * target);
      counter.textContent = currentCount;
      if (progress < 1) {
        setTimeout(() => {
          requestAnimationFrame(updateCounter);
        }, 10);
      } else {
        counter.textContent = target;
      }
    }
    requestAnimationFrame(updateCounter);
  });
}
let observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting && !started) {
      startCounter();
      started = true;
      observer.unobserve(workSection);
    }
  });
});
observer.observe(workSection);



