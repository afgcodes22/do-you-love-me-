const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too, mahal! Kulay rosas ang bukas mo sa akin hehe";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2R3cWR6YTVub2t1OGdmMzZ3MXJ2Zzc4c3BxMDRoZ3U5dWhwcjR4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r1mECgWUvlrP47EIVS/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});