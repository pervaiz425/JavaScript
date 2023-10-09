"use strict";

//We cannot call the function here as initAll() and pass to window.onload because it is just incvoking the
//fucntion directly and not passing the function reference to window.onload. So, we need to pass the reference
window.onload = initAll;

//Strategy#01:
// function initAll() {
//     for (var i = 0; i < 24; i++) {
//         var newNum = Math.floor(Math.random() * 75) + 1;
//         document.getElementById("square" + i).innerHTML = newNum;
//     }
// }

//Strategy#02:
function initAll() {
    if (document.getElementById) {
        for (var i = 0; i < 24; i++) {
            setSquare(i);
        }
    }
    else {
        alert("Sorry, your browser doesn't support this script");
    }
}

function setSquare(thisSquare) {
    var currSquare = "square" + thisSquare;
    var newNum = Math.floor(Math.random() * 75) + 1;
    document.getElementById(currSquare).innerHTML = newNum;
}
//In JS, we can call the function before it is declared as JS engine first implement the hoisting concept
// window.onload = initAll;

