import { KUTYALISTA } from "./adat.js";
import { divKeszit, tablaKeszit } from "./adatkezeles.js";
import { rendez} from "./rendezesSzures.js";

window.addEventListener("load", init);

let ARTICLE;
let kartyak;
let tablazat;

function init() {
  ARTICLE = document.querySelector("article");
  kartyak = document.querySelector("section.kartyak");
  tablazat = document.querySelector("section.tablazat");
  const SUBMIT = document.querySelector("#rogzites");

  kartyak.innerHTML += divKeszit(KUTYALISTA);
  tablazat.innerHTML += tablaKeszit(KUTYALISTA);
  torlesGomb();
  SUBMIT.addEventListener("click", ujKutya);
}

function torlesGomb() {
  const TR = document.querySelectorAll("tr");

  for (let index = 1; index < KUTYALISTA.length+1; index++) {
    const TD = document.createElement("td");
    const TORLES = document.createElement("button");
    TORLES.innerText = "Törlés";
    TR[index].appendChild(TD);
    TD.appendChild(TORLES);
    TORLES.addEventListener("click", function () {
      torlesFunkcio(index);
    });
  }
}

function torlesFunkcio(index) {
  KUTYALISTA.splice(index, 1);
  kartyak.innerHTML += divKeszit(KUTYALISTA);
  tablazat.innerHTML += tablaKeszit(KUTYALISTA);
  torlesGomb();
}

function ujKutya() {
  let szuka = document.querySelector("#szuka");
  let kan = document.querySelector("#kan");
  const ADAT = document.querySelectorAll("input");

  let ujKutya = {
    nev: document.querySelector("#kneve").value,
    kor: document.querySelector("#kkor").value,
    fajta: document.querySelector("#kfajta").value,
    lab: document.querySelector("#klaba").value,
    nem: "",
    marmagasság: document.querySelector("#mmag").value,
  };

  if (document.querySelector("#szuka").checked) {
    ujKutya.nem = "szuka";
  } else{
    ujKutya.nem = "kan";
  }

  console.log(ujKutya)
  KUTYALISTA.push(ujKutya);

  kartyak.innerHTML = divKeszit(KUTYALISTA);
  tablazat.innerHTML = tablaKeszit(KUTYALISTA);
  torlesGomb();
}


function rendezes(){}