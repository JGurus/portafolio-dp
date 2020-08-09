const principalContainer = document.querySelector(".principal-container");
const principalPage = document.querySelector("div");
const myNameContainer = document.querySelector(".my-name-container");
const myName = document.querySelector(".my-name");
const items = document.getElementById("items");

principalContainer.addEventListener("mouseenter", () => {
  myName.style.display = "inline";
  myNameContainer.style.height = "93px";
});

principalContainer.addEventListener("click", () => {
  myNameContainer.classList.add("animate__bounceOut");
  myNameContainer.classList.add("animate__bounceOut");
  principalContainer.classList.add("animate__bounceOut");
  document.querySelector(".principal-page").classList.add("animate__bounceOut");
  items.style.display = "flex";
  items.classList.add("animate__delay-1s");
  items.classList.add("animate__bounceIn");
  document.querySelector("section").style.display = "block";
  document.querySelector("footer").style.display = "block";
  document.querySelector(".title").style.display = "block";
  document.querySelector("section").classList.add("animate__fadeIn");
  document.querySelector("footer").classList.add("animate__fadeIn");
  document.querySelector(".title").classList.add("animate__fadeIn");
  document.querySelector("section").classList.add("animate__delay-1s");
  document.querySelector("footer").classList.add("animate__delay-1s");
  document.querySelector(".title").classList.add("animate__delay-1s");
  setTimeout(() => {
    principalPage.remove();
  }, 1000);
});
