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
    let cardArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];
    let suitArr = ["hearts", "spades", "clubs", "diamonds"];
    let randomSuit = suitArr[getRandomIntInclusive(0, suitArr.length - 1)];
    let suitIcons = document.querySelectorAll(".suit-icon");
    let cardNumElement = document.querySelector(".card-num");
    let card = getRandomIntInclusive(0, cardArr.length - 1);

    cardElement.style.maxWidth = `${width}rem`;
    cardNumElement.innerHTML = cardArr[card];

    if (randomSuit == "hearts") {
      suitIcons.forEach(element => {
        element.innerHTML = "♥";
      });
    }

    if (randomSuit == "clubs") {
      suitIcons.forEach(element => {
        element.innerHTML = "♣";
      });
    }

    if (randomSuit == "diamonds") {
      suitIcons.forEach(element => {
        element.innerHTML = "♦";
      });
    }

    if (randomSuit == "spades") {
      suitIcons.forEach(element => {
        element.innerHTML = "♠";
      });
    }

    if (randomSuit == "diamonds" || randomSuit == "hearts") {
      suitIcons.forEach(element => (element.style.color = "red"));
    } else {
      suitIcons.forEach(element => (element.style.color = "black"));
    }
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
};
