"use strict";
let num = prompt("Enter your name here ");
let abc = document.createElement('p');
abc.innerHTML = `${num}`;
document.body.appendChild(abc);
