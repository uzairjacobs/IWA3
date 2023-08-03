import {
  publicRole as publicRoleJohannes,
  privateFirstname as privateFirstnameJohannes,
  privateSurname as privateSurnameJohannes,
} from "./johannes.js";
const privateDisplayJohannes =
  privateFirstnameJohannes +
  " " +
  privateSurnameJohannes +
  " " +
  publicRoleJohannes;
document.querySelector("#johannes").innerText = privateDisplayJohannes;

import {
  publicRole as publicRoleAlex,
  privateFirstname as privateFirstnameAlex,
  privateSurname as privateSurnameAlex,
} from "./alex.js";
const privateDisplayAlex =
  privateFirstnameAlex + " " + privateSurnameAlex + " " + publicRoleAlex;
document.querySelector("#Alex").innerText = privateDisplayAlex;

import {
  publicRole as publicRoleNwabisa,
  privateFirstname as privateFirstnameNwabisa,
  privateSurname as privateSurnameNwabisa,
} from "./nwabisa.js";
const privateDisplayNwabisa =
  privateFirstnameNwabisa +
  " " +
  privateSurnameNwabisa +
  " " +
  publicRoleNwabisa;
document.querySelector("#nwabisa").innerText = privateDisplayNwabisa;

console.log("Roles:", publicRoleNwabisa, publicRoleJohannes, publicRoleAlex);
