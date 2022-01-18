/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cardNum = getRandomIntInclusive(2, 10);
  let randomSuit = getRandomIntInclusive(1, 4);
  let cardElement = document.querySelector(".card");
  let suitIcons = document.querySelectorAll(".suit-icon");
  let cardNumElement = document.querySelector(".card-num");

  cardNumElement.innerHTML = cardNum;

  if (randomSuit == 1) {
    randomSuit = "hearts";
    suitIcons.forEach(element => {
      element.innerHTML = "♥";
      element.style.color = "red";
    });
  }
  if (randomSuit == 2) {
    randomSuit = "diamonds";
    suitIcons.forEach(element => (element.innerHTML = "♦"));
  }
  if (randomSuit == 3) {
    randomSuit = "spade";
    suitIcons.forEach(element => (element.innerHTML = "♠"));
  }
  if (randomSuit == 4) {
    randomSuit = "clubs";
    suitIcons.forEach(element => (element.innerHTML = "♣"));
  }
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
