(async () => {
  let DB = await (await fetch("./slides.json")).json();
  DB.forEach((element, i) => {
    createSlides(element, i);
    if (i === DB.length - 1) {
      setTimeout(
        runSlider,
        sliderList.children[0].getAttribute("data-timeOut")
      );
    }
  });
})();

const wrapper = document.querySelector(".wrapper");
const sliderList = document.querySelector(".slider");
const btn = document.querySelector(".btn");
const slides = document.querySelectorAll(".slide");
// btn.addEventListener("click", () => {
//   sliderList.appendChild(sliderList.firstElementChild);
//   sliderList.children[0].classList.remove("slide__opacity");
//   sliderList.children[0].classList.add("animate__animated", "animate__fadeIn");
//   sliderList.children[sliderList.childElementCount - 1].classList.add(
//     "animate__animated",
//     "animate__fadeOut"
//   );
//   setTimeout(() => {
//     sliderList.children[sliderList.childElementCount - 1].classList.add(
//       "slide__opacity"
//     );
//     Array.from(sliderList.children).forEach((elem) => {
//       removeAnimateClass(elem);
//     });
//   }, 1100);
// });

function removeAnimateClass(elem) {
  elem.classList.remove(
    "animate__animated",
    "animate__fadeIn",
    "animate__fadeOut"
  );
}
function createSlides(slideInfo, i) {
  const slide = document.createElement("li");
  slide.className = "slide";
  if (i) {
    slide.classList.add("slide__opacity");
  }
  slide.style.backgroundImage = "url('./assets/img/BG-11.png')";
  slide.setAttribute("data-timeOut", `${slideInfo.timeOut * 1000}`);
  sliderList.append(slide);

  const scors = document.createElement("div");
  scors.className = "scors";
  slide.append(scors);

  const teamOne = document.createElement("div");
  teamOne.className = "team team-one";
  scors.append(teamOne);

  const teamNameOne = document.createElement("div");
  teamNameOne.className = "team-name team-one-name";
  teamNameOne.innerText = `${slideInfo.team_1_name}`;
  teamOne.append(teamNameOne);

  const teamScoreOne = document.createElement("div");
  teamScoreOne.className = "team-score team-one-score";
  if (slideInfo.scoreBg === "false") {
    teamScoreOne.classList.add("team-score--nobg");
  }
  teamScoreOne.setAttribute("data-score", `${slideInfo.team_1_score}`);
  teamOne.append(teamScoreOne);

  const teamTwo = document.createElement("div");
  teamTwo.className = "team team-two";
  scors.append(teamTwo);

  const teamNameTwo = document.createElement("div");
  teamNameTwo.className = "team-name team-two-name";
  teamNameTwo.innerText = `${slideInfo.team_2_name}`;
  teamTwo.append(teamNameTwo);

  const teamScoreTwo = document.createElement("div");
  teamScoreTwo.className = "team-score team-two-score";
  if (slideInfo.scoreBg === "false") {
    teamScoreTwo.classList.add("team-score--nobg");
  }
  teamScoreTwo.setAttribute("data-score", `${slideInfo.team_2_score}`);
  teamTwo.append(teamScoreTwo);

  const broadcastPosition = document.createElement("div");
  broadcastPosition.className = "broadcats-position";
  if (slideInfo.brodcas_position) {
    broadcastPosition.classList.add(
      `broadcats-position--${slideInfo.brodcas_position}`
    );
  }
  scors.append(broadcastPosition);
}

function runSlider() {
  sliderList.appendChild(sliderList.firstElementChild);
  sliderList.children[0].classList.remove("slide__opacity");
  sliderList.children[0].classList.add("animate__animated", "animate__fadeIn");
  sliderList.children[sliderList.childElementCount - 1].classList.add(
    "animate__animated",
    "animate__fadeOut"
  );
  setTimeout(() => {
    sliderList.children[sliderList.childElementCount - 1].classList.add(
      "slide__opacity"
    );
    Array.from(sliderList.children).forEach((elem) => {
      removeAnimateClass(elem);
    });
  }, 2100);
  setTimeout(runSlider, sliderList.children[0].getAttribute("data-timeOut"));
}
