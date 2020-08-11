const pIn = document.getElementById("modal1");
const pDe = document.getElementById("modal2");
const pAn = document.getElementById("modal3");
const pDi = document.getElementById("modal4");
const pCo = document.getElementById("modal5");
const pSu = document.getElementById("modal6");
const pDu = document.getElementById("modal7");
const pSy = document.getElementById("modal8");
const pLo = document.getElementById("modal9");
const pVe = document.getElementById("modal10");
const pLa = document.getElementById("modal11");
const close = document.getElementsByTagName("h5");

document.querySelector("body").addEventListener("click", (e) => {
  switch (e.target.id) {
    case "type1":
      pIn.classList.add("modal1");
      break;
    case "type2":
      pDe.classList.add("modal2");
      break;
    case "type3":
      pAn.classList.add("modal3");
      break;
    case "type4":
      pDi.classList.add("modal4");
      break;
    case "type5":
      pCo.classList.add("modal5");
      break;
    case "type6":
      pSu.classList.add("modal6");
      break;
    case "type7":
      pDu.classList.add("modal7");
      break;
    case "type8":
      pSy.classList.add("modal8");
      break;
    case "type9":
      pLo.classList.add("modal9");
      break;
    case "type10":
      pVe.classList.add("modal10");
      break;
    case "type11":
      pLa.classList.add("modal11");
      break;
  }
});

close[0].addEventListener("click", () => {
  pIn.classList.remove("modal1");
});
close[1].addEventListener("click", () => {
  pDe.classList.remove("modal2");
});
close[2].addEventListener("click", () => {
  pAn.classList.remove("modal3");
});
close[3].addEventListener("click", () => {
  pDi.classList.remove("modal4");
});
close[4].addEventListener("click", () => {
  pCo.classList.remove("modal5");
});
close[5].addEventListener("click", () => {
  pSu.classList.remove("modal6");
});
close[6].addEventListener("click", () => {
  pDu.classList.remove("modal7");
});
close[7].addEventListener("click", () => {
  pSy.classList.remove("modal8");
});
close[8].addEventListener("click", () => {
  pLo.classList.remove("modal9");
});
close[9].addEventListener("click", () => {
  pVe.classList.remove("modal10");
});
close[10].addEventListener("click", () => {
  pLa.classList.remove("modal11");
});

console.log(close);
