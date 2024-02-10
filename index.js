const copoVerde = document.getElementsByClassName("verde");
const fotoPrincipal = document.querySelector(".copo_starbuks");
const circulo = document.querySelector(".circulo");
const temaStar = document.querySelector("span")
const btn = document.querySelector("button")

const mudaCopoV = () => {
  console.log("cliou");
  fotoPrincipal.src = "./Src/img/img1.png";
  circulo.style.background = "rgba(1, 113, 67,0.3)";
  temaStar.style.color = "#017143"
  temaStar.style.textShadow= "5px 3px 15px #017143"
  btn.style. backgroundColor = "#017143"
  
};

const mudaCopoA = () => {
  fotoPrincipal.src = "./Src/img/img2.png";
  circulo.style.background = "rgba(235, 116, 149,0.3)";
  temaStar.style.color ="#eb7495"
  temaStar.style.textShadow= "5px 3px 15px #eb7495"
  btn.style. backgroundColor = "#eb7495"
  
};

const mudaCopoR = () => {
  fotoPrincipal.src = "./Src/img/img3.png";
  circulo.style.background = "rgba(215, 82, 177,0.3)";
  temaStar.style.color ="#d752b1"
  temaStar.style.textShadow= "5px 3px 15px #d752b1"
  btn.style. backgroundColor = "#d752b1"
};

