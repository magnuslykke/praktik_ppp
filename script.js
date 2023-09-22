"use strict";

window.addEventListener("load", sidenLoades);

function sidenLoades() {
  console.log("tjek om lortet virker");
  displayDate();
}

function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  console.log(date);
  document.querySelector("#date").innerHTML = date[2] + " " + date[1] + " " + date[3];
}
