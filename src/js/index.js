/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let newMessage = [];

  pronoun.forEach(element1 => {
    adj.forEach(element2 => {
      noun.forEach(element3 => {
        newMessage.push(` ${element1}${element2}${element3}.com`);
      });
    });
  });

  this.console.log(newMessage);
  document.getElementById("domains").innerHTML = newMessage;
};
