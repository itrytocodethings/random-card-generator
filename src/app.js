/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let countElement = document.querySelector(".count");
  let counterElement = document.querySelector(".counter");
  let count = 10;
  let counter = setInterval(generateCard, 10000);
  let countdown = setInterval(() => {
    count--;
    countElement.innerHTML = `${count}`;
    if (count == 0) count = 10;
  }, 1000);
  generateCard();

  let btn = document.querySelector("#genCardBtn");
  btn.addEventListener("click", e => {
    clearInterval(counter);
    clearInterval(countdown);
    counterElement.style.display = "none";
    let cardWidth = document.querySelector("#cardWidthInput").value;
    if (!cardWidth || !Number.isInteger(parseInt(cardWidth))) cardWidth = "23";
    generateCard(cardWidth);
  });

  function generateCard(width = "23") {
    let cardElement = document.querySelector(".card");
    let cardNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];
    let randomSuit = getRandomIntInclusive(1, 4);
    let suitIcons = document.querySelectorAll(".suit-icon");
    let cardNumElement = document.querySelector(".card-num");

    cardElement.style.maxWidth = `${width}rem`;
    cardNumElement.innerHTML =
      cardNum[getRandomIntInclusive(0, cardNum.length - 1)];

    if (randomSuit == 1) {
      randomSuit = "hearts";
      suitIcons.forEach(element => {
        element.innerHTML = "♥";
        element.style.color = "red";
      });
    }
    if (randomSuit == 2) {
      randomSuit = "diamonds";
      suitIcons.forEach(element => {
        element.innerHTML = "♦";
        element.style.color = "red";
      });
    }
    if (randomSuit == 3) {
      randomSuit = "spade";
      suitIcons.forEach(element => {
        element.innerHTML = "♠";
        element.style.color = "black";
      });
    }
    if (randomSuit == 4) {
      randomSuit = "clubs";
      suitIcons.forEach(element => {
        element.innerHTML = "♣";
        element.style.color = "black";
      });
    }
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
};
