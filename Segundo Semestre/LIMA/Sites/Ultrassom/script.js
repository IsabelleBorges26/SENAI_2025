const dates = document.querySelectorAll(".cd-h-timeline__date");
const events = document.querySelectorAll(".cd-h-timeline__event");
const fillingLine = document.querySelector(".cd-h-timeline__filling-line");
const prevBtn = document.querySelector(".cd-h-timeline__navigation--prev");
const nextBtn = document.querySelector(".cd-h-timeline__navigation--next");

let current = 0;

function updateTimeline() {
  // Atualiza o marcador da linha
  const progress = (current / (dates.length - 1)) * 100;
  fillingLine.style.width = `${progress}%`;

  // Atualiza eventos e datas
  dates.forEach((date, i) => {
    date.classList.toggle("cd-h-timeline__date--selected", i === current);
    events[i].classList.toggle("cd-h-timeline__event--selected", i === current);
  });
}

// Navegação
prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (current > 0) current--;
  updateTimeline();
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (current < dates.length - 1) current++;
  updateTimeline();
});

// Clique direto nas datas
dates.forEach((date, i) => {
  date.addEventListener("click", (e) => {
    e.preventDefault();
    current = i;
    updateTimeline();
  });
});

updateTimeline();
